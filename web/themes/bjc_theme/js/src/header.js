jQuery(document).ready(function($) {

    // init controller
    var position = $(window).scrollTop();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll > position && scroll < 100) {
          $('.site-header').addClass('on-scroll-down');
          $('.site-header').removeClass('on-scroll-up');
      } else {
          $('.site-header').removeClass('on-scroll-down');
          $('.site-header').addClass('on-scroll-up');
          $('.site-header').removeClass('on-pin');
        }

        if(scroll < 100) {
          $('.site-header').removeClass('on-scroll-down');
          $('.site-header').removeClass('on-scroll-up');
        }

        if(scroll > position && scroll > 600) {
          $('.site-header').addClass('on-pin');
        }

        position = scroll;

    });

    // Add class to submenu to help with column wrapping
    $("ul#primary-menu > li.menu-item-has-children .mega-menu > ul.sub-menu > li.menu-item-has-children").parent().addClass('flex-layout');


    // Expandable Search Functionality

    // Search Toggle
    $('.searchform .search-field').attr('placeholder', 'Search by keyword...');
    $('.searchform .search-submit').val('');

    $(".search_icon").click(function() {
       $(this).next(".searchform").animate({'width': 'toggle'});
       $(this).toggleClass('open');

       if ( $(this).hasClass( "open" ) ) {
         $(this).find('i').attr('class','fal fa-times');
         $(this).next('.searchform .search-submit').show();
       } else {
        $(this).find('i').attr('class','fal fa-search');
          $(this).next('.searchform .search-submit').hide();
          $(this).next('.searchform .search-field').val('');
       }
    });

      //Search JS
      $(document).keydown(function(e) {
        if (e.keyCode == 27) {
          $(".searchform").hide();
          $('.search_icon').removeClass('open');
          $('.search_icon i').attr('class','fal fa-search');
          $('.searchform .search-field').val('');
        }
      });


      /*******************************************
      * Mobile Menu Stuff *
      * We are using sidr to handle our menu JS *
      * https://www.berriart.com/sidr/ *
      *******************************************/

      var sidrName = "sidr-main";

      $(".mobile-navigation").sidr({
         name: sidrName,
         side: "right",
         source: ".search.mobile, .main-navigation, .menu-mobile-buttons-container, .menu-user-roles-menu-container, .menu-utility-menu-container",
         renaming: false,
         onOpen: function() {
             $(window).on("click.sidr", function(e) {
                 $.sidr("close", sidrName);
             });

             $("#mobile-menu-toggle").addClass("menu-open");
             $('body').append('<div class="mobile-menu-overlay"></div>');
             $('body').addClass('lock-scroll');
             $('.sidr').prepend('<button class="close mobile menu" aria-label="Close mobile menu"><i class="fal fa-times"></i></button>');
             $('.sidr .close').click(function() {
                 $.sidr("close", sidrName);
             })
         },
         onClose: function() {
             $(window).off("click.sidr");
             $("#mobile-menu-toggle").removeClass("menu-open");
             $('.mobile-menu-overlay').remove();
             $('body').removeClass('lock-scroll');
             $('.sidr .close').remove();
         }
     });

     // Don't you dare close me out!
     $("#" + sidrName).on("click.sidr", function(e) {
         e.stopPropagation();
     });

     $(".sidr #primary-menu >.menu-item-has-children").append('<i class="fas fa-caret-down"></i>');


     $(".sidr #primary-menu > li.menu-item-has-children > a").on("click", function(e) {
         e.preventDefault();
         $(this).parent().toggleClass('open');

         var parent = $(this).parent();
         if (parent.children(".mega-menu").length > 0) {
             parent.children(".mega-menu").slideToggle();
         }
         return false;
     });



     //Alert and pop up Stuff
    var adminHeight = $('#wpadminbar').outerHeight();
    var headerHeight = $('.site-header').outerHeight();

    $('.site-header').css('top', adminHeight);
    $('#primary').css('margin-top',headerHeight);



    $( window ).resize(function() {
      var adminHeight2 = $('#wpadminbar').outerHeight();
      var headerHeight2 = $('.site-header').outerHeight();
      $('.site-header').css('top', adminHeight2);
      $('#primary').css('margin-top',headerHeight2);
    });


    $('.close-alert').click(function(){ // Class for the close button
       $('.alert-bar').hide();
       $('.alert-bar').css('opacity', '0');
       $('.alert-bar').css('height', '0');
       $('.site-header').removeClass('has-alert');
       var headerHeight3 = $('.site-header').outerHeight();
       $('#primary').css('margin-top',headerHeight3);

       $.cookie('alert-box', 'closed', { expires: 1, path: '/' });
    });


    if( $.cookie('alert-box') === 'closed' ){
      $('.alert-bar').hide();
      $('.alert-bar').css('opacity', '0');
      $('.alert-bar').css('height', '0');
      $('.site-header').removeClass('has-alert');
      var headerHeight4 = $('.site-header').outerHeight();
      $('#primary').css('margin-top',headerHeight4);

    } else {
      $('.alert-bar').show();
      $('.alert-bar').css('display', 'flex');
      $('.alert-bar').css('opacity', '1');
      $('.alert-bar').css('height', 'auto');
      var headerHeight5 = $('.site-header').outerHeight();
      $('#primary').css('margin-top',headerHeight5);
    }
});
