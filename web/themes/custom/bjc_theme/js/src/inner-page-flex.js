// jQuery(document).ready(function($) {
//     /**
//      * Left Sidebar Mobile dropdown
//      */
//     function toggleMenu() {
//         console.log('click');
//         $(this).toggleClass('active');
//         $(".main-content-wrapper_sidebar .sidebar-menu").slideToggle();
//         if ($(this).hasClass('active')) {
//             $('.main-content-wrapper_sidebar .sidebar-menu').attr('aria-hidden', false);
//         } else {
//             $('.main-content-wrapper_sidebar').attr('aria-hidden', true);
//         }
//         return false;
//     }

//     // $(window).resize(function() {
//     //     if ($(this).width() >= 1024) {
//     //         $('.main-content-wrapper_sidebar .sidebar-menu').css('display', 'block');
//     //     }
//     // });

//     $('.inner-page .mobile-menu-toggle').on('mousedown touchstart', toggleMenu);

//     /**
//      * Right Sidebar Anchor Links
//      */

//     // Add right sidebar
//     function addToSidebar() {
//         const hash = $(location).attr('hash').replace("#", "");
//         const classID = $(this).attr('id');
//         if (hash === classID) {
//             $('.right-sidebar').append('<a class="scroll-link" href="#' + classID + '">' + $(this).html() + '</a>');
//         } else {
//             $('.right-sidebar').append('<a href="#' + classID + '" class="scroll-link">' + $(this).html() + '</a>');
//         }
//     }

//     // Right sidebar Smooth scrolling
//     function scrollSmooth(event) {

//         // Smooth Scrolling for right sidebar anchors
//         // Reference: https://css-tricks.com/snippets/jquery/smooth-scrolling/
//         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//             // Figure out element to scroll to
//             let target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             // Does a scroll target exist?
//             if (target.length) {
//                 // Only prevent default if animation is actually gonna happen
//                 event.preventDefault();
//                 $('html, body').animate({
//                     scrollTop: target.offset().top - 150
//                 }, 1000, function() {
//                     // Callback after animation
//                     // Must change focus!
//                     var $target = $(target);
//                     $target.focus();
//                     if ($target.is(":focus")) { // Checking if the target was focused
//                         return false;
//                     } else {
//                         $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//                         $target.focus(); // Set focus again
//                     };
//                 });
//             }
//         }

//     }
//     $('.page-template-page-inner-page .flex').each(function() {
//         var str = $(this).find('h2').text();
//         str = str.replace(/\s+/g, '-').toLowerCase();
//         $(this).find('h2').attr('id', str);
//     });

//     $('.page-template-page-full-width .full-width-content').each(function() {
//         var str = $(this).find('h2').text();
//         str = str.replace(/\s+/g, '-').toLowerCase();
//         $(this).attr('id', str);
//     });


//     $('.flex h2').each(addToSidebar);

//     $('.right-sidebar a:first-child').addClass('active');
//     $('.right-sidebar a').on('click', scrollSmooth);



//     // Right sidebar stick position
//     const headerHeight = $('.site-header').outerHeight(true);
//     const sidebarHeight = $('.right-sidebar').outerHeight(true);
//     $('.right-sidebar').css('top', headerHeight);
//     $('.right-sidebar').css('--offset', headerHeight);
//     //$('.right-sidebar').css('max-height', sidebarHeight + 100);

//     $(window).resize(function() {
//         const headerHeight2 = $('.site-header').outerHeight(true);
//         const sidebarHeight2 = $('.right-sidebar').outerHeight(true);
//         $('.right-sidebar').css('top', headerHeight2);
//         $('.right-sidebar').css('--offset', headerHeight2);
//         //$('.right-sidebar').css('max-height', sidebarHeight2 + 100);

//     });


//     // Right Sidebar Highlighting
//     // $sections includes all of the container divs that relate to menu items.
//     var $sections = $('.center-content .flex');


//     if ( $( 'body' ).first().hasClass( 'page-template-page-inner-page' ) ) {

//       // The user scrolls
//       $(window).scroll(function(){

//         // currentScroll is the number of pixels the window has been scrolled
//         var currentScroll = $(this).scrollTop();

//         // $currentSection is somewhere to place the section we must be looking at
//         var $currentSection = '';

//         // We check the position of each of the divs compared to the windows scroll positon
//         $sections.each(function(){
//           // divPosition is the position down the page in px of the current section we are testing
//           var divPosition = $(this).offset().top;

//           // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
//           // the -1 is so that it includes the div 1px before the div leave the top of the window.
//           if( divPosition - 200 < currentScroll ){
//             // We have either read the section or are currently reading the section so we'll call it our current section
//             $currentSection = $(this);

//             // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
//           }
//             if ( $currentSection != ''){

//               // This is the bit of code that uses the currentSection as its source of ID
//                 var id = $currentSection.find('h2').attr('id');
//                 $('a.scroll-link').removeClass('active');
//                 $('a.scroll-link[href="#'+id+'"]').addClass('active');
//             }


//         });

//       });
//     }

//     /**
//      * Expand/Collapse Repeater
//      */
//     function toggleAttr() {
//         if ($('.collapse-toggle').hasClass('active')) {
//             $('.collapse-content').attr('aria-hidden', false);
//         } else {
//             $('.collapse-content').attr('aria-hidden', true);
//         }
//     }

//     function toggleExpandCollapse() {
//         $(this).toggleClass('active');
//         $('.active').not(this).next(".collapse-content").slideToggle();
//         $('.active').not(this).removeClass('active');
//         $(this).next(".collapse-content").slideToggle();
//         toggleAttr();
//         return false;
//     }
//     $('.collapse-content').hide();
//     $('.collapse-toggle').on('click', toggleExpandCollapse);


//     //Add a table row style
//     $('.table-header').parent('.column-1').addClass('header-row');


//     // //Image Cards
//     if($(window).width() >= 1024){
//         $('.image-cards_item').each(function() {
//             var cardHeight = $(this).find('.card-slide').outerHeight(true);
//             var cardHeightTotal = cardHeight + 30;
//             console.log(cardHeightTotal);
//             $(this).css('height', cardHeightTotal + 'px');
//          });
//         var $sameHeightHeader = $('.image-cards_item');
//         var maxHeight = 0;
//         $sameHeightHeader.each(function() {
//             maxHeight = Math.max(maxHeight, $(this).outerHeight());
//         });
//         $sameHeightHeader.css({ height: maxHeight + 'px' });

//         $('.image-cards_item').each(function() {
//             var cardContent = $(this).find('.card-slide .card-content').outerHeight(true);
//             var cardContentTotal = cardContent + 30;
//             $(this).find('.card-slide').css('bottom','-' + cardContentTotal + 'px');
//             $(this).hover(function(){
//               $(this).find('.card-slide').css('bottom',0);
//               }, function(){
//               $(this).find('.card-slide').css('bottom','-' + cardContentTotal + 'px');
//             });
//          });
//     } else {
//         $('.image-cards_item').each(function() {
//             $(this).css('height', 'auto');
//         });
//     }

//     $(window).resize(function() {
//         if($(window).width() >= 1024){
//             $('.image-cards_item').each(function() {
//                 var cardHeight2 = $(this).find('.card-slide').outerHeight(true);
//                 var cardHeightTotal2 = cardHeight2 + 30;
//                 console.log(cardHeightTotal2);
//                 $(this).css('height', cardHeightTotal2 + 'px');
//              });
//             var $sameHeightHeader2 = $('.image-cards_item');
//             var maxHeight2 = 0;
//             $sameHeightHeader2.each(function() {
//                 maxHeight2 = Math.max(maxHeight2, $(this).outerHeight());
//             });
//             $sameHeightHeader2.css({ height: maxHeight2 + 'px' });

//             $('.image-cards_item').each(function() {
//                 var cardContent2 = $(this).find('.card-slide .card-content').outerHeight(true);
//                 var cardContentTotal2 = cardContent2 + 30;
//                 $(this).find('.card-slide').css('bottom','-' + cardContentTotal2 + 'px');
//                 $(this).hover(function(){
//                   $(this).find('.card-slide').css('bottom',0);
//                   }, function(){
//                   $(this).find('.card-slide').css('bottom','-' + cardContentTotal2 + 'px');
//                 });
//              });
//         } else {
//             $('.image-cards_item').each(function() {
//                 $(this).css('height', 'auto');
//             });
//         }
//     });


// });
