// jQuery(document).ready(function($) {
//     /**
//      * Left Sidebar Mobile dropdown
//      */
//     function toggleFilters() {
//         if ($(this).width() <= 1024) {
//             //console.log('click');
//             $(this).toggleClass('active');
//             $(".filter-container").slideToggle();
//             if ($(this).hasClass('active')) {
//                 $('.filter-container').attr('aria-hidden', false);
//             } else {
//                 $('.filter-container').attr('aria-hidden', true);
//             }
//             return false;
//         }
//     }

//     // $(window).resize(function() {
//     //     if ($(this).width() >= 1024) {
//     //         $('.filter-container').css('display', 'block');
//     //         $('.filter-container').attr('aria-hidden', false);
//     //     } else {
//     //         $('.filter-container').css('display', 'none');
//     //         $('.filter-container').attr('aria-hidden', true);
//     //
//     //     }
//     // });


//     $('.filter-title').on('mousedown touchstart', toggleFilters);
//     // 
//     // $(document).on("sf:ajaxfinish", ".searchandfilter", function(){
//     //      if ($(this).width() <= 1024) {
//     //         $('.filter-container').css('display', 'none');
//     //         $('.filter-container').attr('aria-hidden', true);
//     //     }
//     //
//     // });

//     var quicklinks = $('.event-sidebar__quicklinks');
//     if ($(this).width() <= 1024) {
//         $('.event-list').append(quicklinks);
//     } else {
//         $('.event-sidebar').append(quicklinks);
//     }

//     $(window).resize(function() {
//         if ($(this).width() <= 1024) {
//             $('.event-list').append(quicklinks);
//         } else {
//             $('.event-sidebar').append(quicklinks);
//         }
//     });

//     // Textbook Mobile Links Dropdowon

//     $(".mobile-actions > .icon-wrap").on("mousedown touchstart", function(e) {
//         e.preventDefault();
//         $(this).toggleClass('active');
//         $(this).next('.mobile-action-dropdown').toggleClass('open');
//         return false;
//     });

// });
