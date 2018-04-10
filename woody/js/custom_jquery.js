$(function () {
    "use strict";

    // body animate scrolling
    $('a[href*=#]').click(function() {
        if ($(window).width()<= 750) {
            $('.header .nav').hide(200);
            $('.mobile-menu-button-container').removeClass('hover');
        }
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html, body').animate({scrollTop: targetOffset-70}, 700);
                return false;
            }
        }
    });

    // menu dropdown actions
    $('.sub-menu').prepend('<span></span>');
    $('.nav > li').hover(function () {
        if ( $(window).width() >= 750 ) {
            $(this).addClass('hover').children('.sub-menu').show(0).children('ul').slideDown(200);
        }
    }, function () {
        if ( $(window).width() >= 750 ) {
            $('.sub-menu ul').slideUp(100);
            $(this).removeClass('hover').children('.sub-menu').fadeOut(100);
        }
    });
    
    $('.mobile-menu-button-container').click(function () {
        $(this).toggleClass('hover');
        $('.header .nav').toggle(200);
    });
    
    $(window).resize(function () {
        $('[data-spy="scroll"]').each(function () {
          $(this).scrollspy('refresh');
        });
        if ( $(window).width() >= 750 ) {
            $('.header .nav').show(0);
        } else {
            $('.header .nav').hide(0);
            $('.mobile-menu-button-container').removeClass('hover');
        }
    });
    
    // devices slider actions
    $('.devices-tab').eq(0).addClass('selected');  
    $('.devices-tab.selected .bg').css({'left':'20px'}); // first tab no slide when page opened
    $('.devices-tab.selected .fg').css({'left':'-=450px'}); // first tab no slide when page opened
    
    var sliderSecond = 7000; // slider waiting second. you can set this second whatever you want
    function slide() {
        $('.devices-tab.selected .bg')
        .animate({'left':'90px'},200)
        .animate({'left':'-500px'},200);
        $('.devices-tab.selected .fg')
        .delay(400)
        .animate({'left':'220px'},200)
        .animate({'left': '-=720px'},200, function () {
            if ( $('.devices-tab.selected').index() >= $('.devices-tab').size()-1 ) {
                $(this)
                .parent()
                .removeClass('selected');
                $('.devices-tab').eq(0)
                .addClass('selected');
            } else {
                $(this)
                .parent()
                .removeClass('selected')
                .next()
                .addClass('selected');
            }
            $('.devices-tab.selected .bg')
            .animate({'left':'-50px'},200)
            .animate({'left':'20px'},200);
            $('.devices-tab.selected .fg')
            .delay(400)
            .animate({'left':'-=520px'},200)
            .animate({'left':'+=70px'},200);
            $('.devices-tab .bg, .devices-tab .fg').css('left', '');
        });
    }
    
    var sliderInterval = setInterval( function () { slide(); }, sliderSecond);
        
    $('.slider-container').hover(function () {
        clearInterval(sliderInterval);
    }, function () {
        sliderInterval = setInterval( function () { slide(); }, sliderSecond);
    });
    
    
    /* tab menu actions */
    $('.tab-menu-content-container .tab-menu-content:nth-child(1)').show(0);
    $('.tab-menu li:nth-child(1)').addClass('selected');
    $('.tab-menu-container .tab-menu li').on('click', function () {
        $(this).parent().children('li').removeClass('selected');
        $(this).parents('.tab-menu-container').children('.tab-menu-content-container').children('.tab-menu-content').fadeOut(0);
        $(this)
        .addClass('selected')
        .parents('.tab-menu-container')
        .children('.tab-menu-content-container')
        .children('.tab-menu-content')
        .eq($(this).index())
        .fadeIn(0);
    });
    
    
    // gallery slider actions
    $('.gallery-slider').append('<div class="ver-line"></div>');
    
        // right button actions
    $('.gallery-slider .arrows .right').on('click', function () {
        var a = $(this).parent().parent().children('.gallery-slider-container');
        if ( a.position().left <= -(a.children('.gallery-item').size()-2)*(182) ) {
            a.stop(true, true).animate({'left':'0'},200);
        } else {
            a.stop(true, true).animate({'left':'-=182px'},200);
        }
    });
        // left button actions
    $('.gallery-slider .arrows .left').on('click', function () {
        var a = $(this).parent().parent().children('.gallery-slider-container');
        if ( a.position().left >= 0 ) {
            a.stop(true, true).animate({'left':-(a.children('.gallery-item').size()-2)*(182)},200);
        } else {
            a.stop(true, true).animate({'left':'+=182px'},200);
        }
    });
    
    
    // lightbox image actions
    $('.lightbox-img').click(function () {
        $('.modal-box')
        .fadeIn(200)
        .children('.center')
        .text('');
        $(this).children('span').clone().appendTo('.modal-box .center');
        $(this).children('img').clone().appendTo('.modal-box .center');
        $('.modal-box .center span').width($(this).children('img').width());
    });
    $('.modal-box-close').on('click', function () {
        $('.modal-box').fadeOut(200);
    });   
    
    // tooltips
    $('abbr.tooltip').hover(function () {
        $(this).prepend('<span>' + $(this).attr('title') + '<u></u></span>').children('span').css('margin-left', '-' + ($(this).children().outerWidth()/2) + 'px');
    }, function () {
        $(this).children('span').remove();
    });
    
    // css helpers
    $('.three-one:nth-child(3n+1), .two-one:nth-child(2n+1), .gallery-noslider .gallery-item:nth-child(2n+1), .relative .team-single:nth-child(2n+1)').css('margin-left', '0');
    $('.testimonial:last-child, blockquote:last-child, .gallery-noslider .gallery-item:nth-last-child(1), .gallery-noslider .gallery-item:nth-last-child(2), .section .gallery-slider:last-child, .section .gallery-noslider:last-child, .relative .team-single:nth-last-child(1) , .relative .team-single:nth-last-child(2)').css('margin-bottom', '0');
    $('.update:first-child').css('margin-top', '0');
    
    // border-radius for IE
    $('.red-dotb').corner('36px');
    $('.team-single .image').corner('70px');    
    
});