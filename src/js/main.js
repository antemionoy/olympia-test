//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js


"use strict";


function menu() {
    $(".hamburger").on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass("is-active");
        $(this).siblings('nav').toggleClass('show-menu');

    });
}

function formShow() {
    $('.header__search').on('click', function(e) {
        e.preventDefault();

        $(this).siblings().find('.header__form').toggleClass('show');
        $(this).parents().find('.header__search, .header__search-icon').toggleClass('active');

    });
}

function tabs(clickNavItem, parentBox, tabItem) {
    $(clickNavItem).on('click', function(e) {
        e.preventDefault();

        $(this)
            .addClass('tabs__link--selected').siblings().removeClass('tabs__link--selected')
            .closest(parentBox).find(tabItem).removeClass('active')
            .eq($(this).index()).addClass('active');
    });
}

$(function() {

    menu();
    formShow();
    tabs('.tabs__link', '.tabs__box', '.tabs__item');

    $(window).click(function(e) {
        var div = $('.hamburger, .header__menu');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.hamburger').removeClass('is-active');
            div.removeClass('show-menu');
        }
    });

    $('.main-slider').owlCarousel({
        nav: true,
        margin: 0,
        items: 1,
        dots: true,
        navText: [' <svg>\
                        <use xlink:href="#left-icon"  />\
                    </svg>',
            '<svg>\
                        <use xlink:href="#right-icon"  />\
                    </svg>'
        ]
    });



    $('.info-slider').owlCarousel({
        nav: true,
        margin: 45,
        items: 1,
        dots: false,
        navText: [' <svg>\
                        <use xlink:href="#left-icon"  />\
                    </svg>',
            '<svg>\
                        <use xlink:href="#right-icon"  />\
                    </svg>'
        ],
        responsive: {
            320: {
                items: 1
            },

            500: {
                items: 1
            },

            1023: {
                items: 1
            },
            1200: {
                items: 1
            },

            1420: {
                items: 1
            }
        }
    });


    $('.tabs-slider').owlCarousel({
        nav: true,
        margin: 55,
        items: 1,
        dots: false,
        navText: [' <svg>\
                        <use xlink:href="#left-icon"  />\
                    </svg>',
            '<svg>\
                        <use xlink:href="#right-icon"  />\
                    </svg>'
        ],
        responsive: {
            320: {
                items: 1
            },

            992: {
                items: 1
            },

            1023: {
                items: 2
            },
            1200: {
                items: 2
            },

            1420: {
                items: 3
            }
        }
    });
});
