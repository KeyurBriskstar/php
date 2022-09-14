$(window)
        .scroll(function () {
            var scrollDistance = $(window).scrollTop() + 2;
            $(".page-section").each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $(".navigation a.active").removeClass("active");
                    $(".navigation a").eq(i).addClass("active");
                }
            });
            var scrollDistance = $(window).scrollTop() + 75;
            $(".verticle-slider").each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $(".jumpmenu-sidebar").eq(i).addClass("active");
                } else {
                    $(".jumpmenu-sidebar.active").removeClass("active");
                }
            });
        })
        .scroll();