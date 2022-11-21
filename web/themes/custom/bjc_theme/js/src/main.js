jQuery(document).ready(function($) {

    // Scroll to behavior for links that include and ID 
    if (window.location.hash) {
         var hash = window.location.hash;
         $('html, body').animate({
             scrollTop :  $(hash).offset().top
         }, 500);
     };

    $('.program-slider_slide_wrap').slick({
        speed: 300,
        slidesToShow: 1,
        centermode: true,
        infinite: true,
        draggable: true,
        cssEase: 'linear',
        variableWidth: true,
        adaptiveHeight: true,
        touchThreshold: 100,
        //centerMode: true,
        focusOnSelect: true,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow'),
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                //slidesToScroll: 3,
                //infinite: true,
                //dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                //slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                //slidesToScroll: 1
            }
        }
      ]
    });

    //video slider
    $('.media-gallery').slick({
        speed: 300,
        slidesToShow: 1,
        centermode: true,
        infinite: true,
        draggable: true,
        cssEase: 'linear',
        variableWidth: true,
        adaptiveHeight: true,
        touchThreshold: 100,
        //centerMode: true,
        focusOnSelect: false,
        prevArrow: $('.prev-arrow-video'),
        nextArrow: $('.next-arrow-video'),
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                //slidesToScroll: 3,
                //infinite: true,
                //dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                //slidesToScroll: 2
                //variableWidth: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                //variableWidth: false,
                //slidesToScroll: 1
            }
        }
      ]
    });

    $('.tab-content-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        adaptiveHeight: true,
        asNavFor: '.tab'
    });
    //var tabCount = $(".tab p").length - .1;
    $('.tab').slick({
        slidesToScroll: 1,
        slidesToShow: 12,
        asNavFor: '.tab-content-wrap',
        focusOnSelect: true,
        infinite: true,
        cssEase: 'linear',
        variableWidth: true,
        prevArrow: $('.prev-arrow-timeline'),
        nextArrow: $('.next-arrow-timeline'),
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
                //slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                variableWidth: false,
                //slidesToScroll: 1
            }
        },

        ]
    });

    $('.stats').slick({
        speed: 300,
        slidesToShow: 1,
        centermode: true,
        infinite: true,
        draggable: true,
        cssEase: 'linear',
        variableWidth: true,
        adaptiveHeight: true,
        touchThreshold: 100,
        focusOnSelect: false,
        arrows: false,
        mobileFirst: true,
        responsive: [{
          breakpoint: 768,
          settings: 'unslick'
        }]
    });

    // Making sure the slider fires on when the window resizes
        $(window).on('resize', function(){
          $('.stats').slick('resize');
        });


    //Modal pop_up
    if(window.location.href.indexOf('#video-popup') != -1) {
        $('.video-popup').css('visibility', 'visible');
        $('.video-popup').css('opacity', '1');
        $('.video-popup').css('visibility', 'visible');
   }

   //contact modal
    $(document).on('click', '.close-popup', function(){
        $('.video-popup').css('visibility', 'hidden');
        $('.video-popup').css('opacity', '0');
        $('.popup-overlay').css('visibility', 'hidden');
    });

    //Video
    $(document).on('click', '.video-button', function(){
        $('.video-popup').css('visibility', 'visible');
        $('.video-popup').css('opacity', '1');
        $('.popup-overlay').css('visibility', 'visible');
    });

    //media lightbox (video)
    $(document).on('click', '.image-overlay', function(){
        $('.iframe').toggleClass('open');
    });
    $(document).on('click', '.close-popup', function(){
        $('.iframe').removeClass('open');
    });

    $(document).on('click', '.popup-overlay', function(){
        $('.video-popup').css('visibility', 'hidden');
        $('.video-popup').css('opacity', '0');
        $('.popup-overlay').css('visibility', 'hidden');
    });
    //Add to hover
    $('.add-to-cal').hover(function () {
        $('.add-to-links').stop().slideToggle('slow');
	});

    // Academic Filter
    const currentYear = (new Date).getFullYear();
    if (!getUrlParameter('_sfm_academic_term') && !getUrlParameter('_sfm_academic_year')) {
        console.log('not filtered', currentYear);
        $('.academic-calendar_filter form > ul li:first-child ul li:nth-child(2)').addClass('sf-option-active');
        $('.academic-calendar_filter form > ul li:first-child ul li:nth-child(2) input').attr('checked', 'checked');
        $('.academic-calendar_filter form > ul li:last-child select option:contains("' + currentYear + '")').addClass('sf-option-active');
        $('.academic-calendar_filter form > ul li:last-child select option:contains("' + currentYear + '")').attr('selected', 'selected');
    } else {
        console.log('filtered');
    }


    //Make cards cooler in general
    var $sameHeightHeader = $('.content-cards_item .main-text');
    var $lastDiv = $('.content-cards_item:nth-child(odd):last-child .main-text');
    var maxHeight = 0;
    $sameHeightHeader.each(function() {
        maxHeight = Math.max(maxHeight, $(this).outerHeight());
    });
    $sameHeightHeader.css({ height: maxHeight + 'px' });
    $lastDiv.css({height:'auto'});

    $(window).resize(function() {
        var $sameHeightHeader2 = $('.content-cards_item .main-text');
        var $lastDiv2 = $('.content-cards_item:nth-child(odd):last-child .main-text');
        var maxHeight2 = 0;
        $sameHeightHeader2.each(function() {
            maxHeight2 = Math.max(maxHeight2, $(this).outerHeight());
        });
        $sameHeightHeader2.css({ height: maxHeight2 + 'px' });
        $lastDiv2.css({height:'auto'});
    });

});

/**
 * Get search param from url
 * @param {String} name
 */
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
    var results = regex.exec(location.search)
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
