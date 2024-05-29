'use strict';

var hasCounted = false;

var options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.'
};
var projects = new CountUp("statsProjects", 0, 20, 0, 1.5, options);
var tea = new CountUp("statsTea", 0, 578, 0, 2, options);
var train = new CountUp("statsTrain", 0, 575, 0, 1.5, options);

var landingBgY = 0;
var landingBgOpacity = 0;
var logoY = 0;
var logoOpacity = 0;
var bottomOpacity = 0;
var scrollBackgroundBot = 0;
var scrollBackgroundTitleOpen = 0;
var scrollContactTitleOpen = 0;

$(window).on('scroll', function () {
    if ($(document).scrollTop() < $(window).height()) {

        // Shift background image
        landingBgY = $(document).scrollTop() * 0.5;
        landingBgOpacity = 1 - $(document).scrollTop() * 0.001;
        $('#landingBg').css({
            'transform': 'translate3d(0px, ' + landingBgY + 'px, 0px)',
            'opacity': landingBgOpacity
        });

        bottomOpacity = $(document).scrollTop() * 0.001;

        $('.bottom-text-gradient').css({
            'opacity': bottomOpacity
        });
    }

    if ($(window).width() > 768) {
        // Update menu item select states
        if ($(document).scrollTop() >= $('#contact').offset().top) {
            $('#headerAbout').removeClass('selected');
            $('#headerBackground').removeClass('selected');
            $('#headerProjects').removeClass('selected');
            $('#headerContact').addClass('selected');
        } else if ($(document).scrollTop() >= $('#projects').offset().top) {
            $('#headerAbout').removeClass('selected');
            $('#headerBackground').removeClass('selected');
            $('#headerProjects').addClass('selected');
            $('#headerContact').removeClass('selected');
        } else if ($(document).scrollTop() >= $('#background').offset().top) {
            $('#headerAbout').removeClass('selected');
            $('#headerBackground').addClass('selected');
            $('#headerProjects').removeClass('selected');
            $('#headerContact').removeClass('selected');
        } else if ($(document).scrollTop() >= $('#about').offset().top) {
            $('#headerAbout').addClass('selected');
            $('#headerBackground').removeClass('selected');
            $('#headerProjects').removeClass('selected');
            $('#headerContact').removeClass('selected');
        } else {
            $('#headerAbout').removeClass('selected');
            $('#headerBackground').removeClass('selected');
            $('#headerProjects').removeClass('selected');
            $('#headerContact').removeClass('selected');
        }
    }

    if ($(window).width() > 992) {
        // Shift Logo
        if ($(document).scrollTop() < $(window).height()) {
            logoY = $(document).scrollTop() * 0.75;
            logoOpacity = 1 - $(document).scrollTop() * 0.0005;
            $('#landingContainer').css({
                'transform': 'translate3d(0px, ' + logoY + 'px, 0px)',
                'opacity': logoOpacity
            });
        }

        scrollBackgroundBot = $(window).scrollTop() <= $('#background').offset().top + $('#background').outerHeight() - window.innerHeight;

        // Lock the title to the screen if we have hit the background section
        if ($(document).scrollTop() > $('#background').offset().top && scrollBackgroundBot) {
            $('#backgroundTitle').addClass('fixed');
        } else {
            $('#backgroundTitle').removeClass('fixed');
        }

        scrollBackgroundTitleOpen = $(window).scrollTop() - 400 <= $('#background').offset().top + $('#background').outerHeight() - window.innerHeight;
        if ($(document).scrollTop() + 200 > $('#background').offset().top && scrollBackgroundTitleOpen) {
            // Fancy opening animation if we made it to the background section
            $('#backgroundTitle').removeClass('fill-width');
        } else {
            $('#backgroundTitle').addClass('fill-width');
        }

        // Lock the title to the section if we passed the bottom of the Background section
        if (scrollBackgroundBot) {
            $('#backgroundTitle').css({
                'top': 0,
                'bottom': 'inherit'
            });
        } else {
            $('#backgroundTitle').css({
                'top': 'inherit',
                'bottom': 0
            });
        }

        // Slide out title for contact
        scrollContactTitleOpen = $(window).scrollTop() - 600 <= $('#contact').offset().top + $('#contact').outerHeight() - window.innerHeight;
        if ($(document).scrollTop() + 200 > $('#contact').offset().top && scrollContactTitleOpen) {
            // Fancy opening animation if we made it to the background section
            $('#contactTitle').removeClass('fill-width');
        } else {
            $('#contactTitle').addClass('fill-width');
        }
    }

    // Animate stats
    if ($(document).scrollTop() + $(window).height() * 0.75 > $('#stats').offset().top) {

        // Start counting 1 by 1
        if (!hasCounted) {
            setTimeout(function () {
                tea.start();

                //Update cup count
                setInterval(function () {
                    $('#statsTea').text(parseInt($('#statsTea').text()) + 1);
                }, 30000); // Not sure if anyone will wait around to see it update
            }, 500);

            setTimeout(function () {
                train.start();
            }, 1000);

            projects.start();

            hasCounted = true;
        }
    }
});

$(document).ready(function () {
    if ($(document).scrollTop() < $(window).height()) {

        // Shift background image
        landingBgY = $(document).scrollTop() * 0.5;
        landingBgOpacity = 1 - $(document).scrollTop() * 0.001;
        $('#landingBg').css({
            'transform': 'translate3d(0px, ' + landingBgY + 'px, 0px)',
            'opacity': landingBgOpacity
        });

        bottomOpacity = $(document).scrollTop() * 0.001;

        $('.bottom-text-gradient').css({
            'opacity': bottomOpacity
        });
    }

    if ($(window).width() > 992) {
        // Shift Logo
        if ($(document).scrollTop() < $(window).height()) {
            logoY = $(document).scrollTop() * 0.75;
            logoOpacity = 1 - $(document).scrollTop() * 0.0005;
            $('#landingContainer').css({
                'transform': 'translate3d(0px, ' + logoY + 'px, 0px)',
                'opacity': logoOpacity
            });
        }

        // Update menu item select states
        if ($(document).scrollTop() > $('#contact').offset().top) {
            $('#headerAbout').removeClass('selected');
            $('#headerBackground').removeClass('selected');
            $('#headerProjects').removeClass('selected');
            $('#headerContact').addClass('selected');
        } else if ($(document).scrollTop() > $('#projects').offset().top) {
            $('#headerAbout').removeClass('selected');
            $('#headerBackground').removeClass('selected');
            $('#headerProjects').addClass('selected');
            $('#headerContact').removeClass('selected');
        } else if ($(document).scrollTop() > $('#background').offset().top) {
            $('#headerAbout').removeClass('selected');
            $('#headerBackground').addClass('selected');
            $('#headerProjects').removeClass('selected');
            $('#headerContact').removeClass('selected');
        } else if ($(document).scrollTop() > $('#about').offset().top) {
            $('#headerAbout').addClass('selected');
            $('#headerBackground').removeClass('selected');
            $('#headerProjects').removeClass('selected');
            $('#headerContact').removeClass('selected');
        } else {
            $('#headerAbout').removeClass('selected');
            $('#headerBackground').removeClass('selected');
            $('#headerProjects').removeClass('selected');
            $('#headerContact').removeClass('selected');
        }

        scrollBackgroundBot = $(window).scrollTop() <= $('#background').offset().top + $('#background').outerHeight() - window.innerHeight;

        // Lock the title to the screen if we have hit the background section
        if ($(document).scrollTop() > $('#background').offset().top && scrollBackgroundBot) {
            $('#backgroundTitle').addClass('fixed');
        } else {
            $('#backgroundTitle').removeClass('fixed');
        }

        scrollBackgroundTitleOpen = $(window).scrollTop() - 400 <= $('#background').offset().top + $('#background').outerHeight() - window.innerHeight;
        if ($(document).scrollTop() + 200 > $('#background').offset().top && scrollBackgroundTitleOpen) {
            // Fancy opening animation if we made it to the background section
            $('#backgroundTitle').removeClass('fill-width');
        } else {
            $('#backgroundTitle').addClass('fill-width');
        }

        // Lock the title to the section if we passed the bottom of the Background section
        if (scrollBackgroundBot) {
            $('#backgroundTitle').css({
                'top': 0,
                'bottom': 'inherit'
            });
        } else {
            $('#backgroundTitle').css({
                'top': 'inherit',
                'bottom': 0
            });
        }

        // Slide out title for contact
        scrollContactTitleOpen = $(window).scrollTop() - 600 <= $('#contact').offset().top + $('#contact').outerHeight() - window.innerHeight;
        if ($(document).scrollTop() + 200 > $('#contact').offset().top && scrollContactTitleOpen) {
            // Fancy opening animation if we made it to the background section
            $('#contactTitle').removeClass('fill-width');
        } else {
            $('#contactTitle').addClass('fill-width');
        }

        // Animate stats
        if ($(document).scrollTop() + $(window).height() * 0.75 > $('#stats').offset().top) {

            // Start counting 1 by 1
            if (!this.hasCounted) {
                var _options = {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.'
                };
                var _projects = new CountUp("statsProjects", 0, 25, 0, 1.5, _options);
                var _tea = new CountUp("statsTea", 0, 578, 0, 2, _options);
                var _train = new CountUp("statsTrain", 0, 575, 0, 1.5, _options);

                setTimeout(function () {
                    _tea.start();

                    // Update cup count
                    // setInterval(() => {
                    //     $('#statsTea').text(parseInt($('#statsTea').text()) + 1);
                    // }, 30000); // Not sure if anyone will wait around to see it update
                }, 500);

                setTimeout(function () {
                    _train.start();
                }, 1000);

                _projects.start();

                this.hasCounted = true;
            }
        }
    }
});