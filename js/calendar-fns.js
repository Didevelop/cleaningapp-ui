$(function() {
    function t() {
        $month.html(cal.getMonthName()), $year.html(cal.getYear())
    }

    function n(t, n) {
        e();
        var c = $('<div id="custom-content-reveal" class="custom-content-reveal animated fadeInUp"><h4>Reserva para el ' + n.day + " " + n.monthname + ", " + n.year + "</h4></div>"),
            o = $('<span class="custom-content-close glyphicon glyphicon-remove"></span>').on("click", e);
        c.append(t.html(), o).insertAfter($wrapper), setTimeout(function() {
            c.css("top", "0%")
        }, 25)
    }

    function e() {
        var t = $("#custom-content-reveal");
        t.length > 0 && (t.removeClass('fadeInUp'),t.addClass('fadeOutDown'),t.css('top','100%'),setTimeout(function() {t.remove()}, 1000))
    }
    $wrapper = $("#custom-inner"), $calendar = $("#calendar"), cal = $calendar.calendario({
    	weeks : [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ],
		weekabbrs : [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],
		months : [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
		monthabbrs : [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
        onDayClick: function(t, e, c) {
            e.length > 0 && n(e, c)
        },
        caldata: dataEvents,
        displayWeekAbbr: !0
    }), $month = $("#custom-month").html(cal.getMonthName()), $year = $("#custom-year").html(cal.getYear()), $("#custom-next").on("click", function() {
        cal.gotoNextMonth(t)
    }), $("#custom-prev").on("click", function() {
        cal.gotoPreviousMonth(t)
    })
});
