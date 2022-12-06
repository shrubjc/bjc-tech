// jQuery(document).ready(function($) {

//     //Greensock Config
//     gsap.config({
//       nullTargetWarn: false,
//     });
//     //Gradient Animations
//     $('.inner-hero.background-royal-blue, .single-blog_hero, .blog-list_hero').each(function(){
//         const b1 = "linear-gradient(266.5deg, #70AFD7 -38.35%, #00529B 56.17%, #00315D 134.62%)";
//         const b2 = "linear-gradient(17deg, #70AFD7 -38.35%, #00529B 56.17%, #00315D 134.62%)";
//         gsap.fromTo(".background-royal-blue, .single-blog_hero, .blog-list_hero", {background: b1}, {ease: "none", duration: 10, background: b2, repeat: -1, yoyo: true});
//     });
//     $('.inner-hero.background-teal').each(function(){
//         const b1 = "linear-gradient(266.5deg, #28BAD9 -13.11%, #119FBD 50.09%, #008CAA 102.55%)";
//         const b2 = "linear-gradient(17deg, #28BAD9 -13.11%, #119FBD 50.09%, #008CAA 102.55%)";
//         gsap.fromTo(".background-teal", {background: b1}, {ease: "none", duration: 10, background: b2, repeat: -1, yoyo: true});
//     });
//     $('.inner-hero.background-orange').each(function(){
//         const b1 = "linear-gradient(266.5deg, #D56F1B -13.11%, #941B00 102.55%)";
//         const b2 = "linear-gradient(17deg, #D56F1B -13.11%, #941B00 102.55%)";
//         gsap.fromTo(".background-orange", {background: b1}, {ease: "none", duration: 8, background: b2, repeat: -1, yoyo: true});
//     });
//     $('.inner-hero.background-purple').each(function(){
//         const b1 = "linear-gradient(266.5deg,  #7A2588 -13.11%, #4D0658 102.55%)";
//         const b2 = "linear-gradient(17deg,  #7A2588 -13.11%, #4D0658 102.55%)";
//         gsap.fromTo(".background-purple", {background: b1}, {ease: "none", duration: 8, background: b2, repeat: -1, yoyo: true});
//     });
//     $('.inner-hero.background-green').each(function(){
//         const b1 = "linear-gradient(266.54deg, #818939 -13.11%, #33531A 102.55%)";
//         const b2 = "linear-gradient(17deg,  #818939 -13.11%, #33531A 102.55%)";
//         gsap.fromTo(".background-green", {background: b1}, {ease: "none", duration: 8, background: b2, repeat: -1, yoyo: true});
//     });

//     //Heros
//     let parallax = gsap.timeline()
//         .to('.inner-hero .container, .single-blog_hero .container, .blog-list_hero .container', {
//             y:-100,
//             scrollTrigger:{
//             trigger:'.inner-hero, .hero-area',
//             start:'-100',
//             end:'bottom',
//             scrub:'0.3',
//         }
//     })



//     //resources quick link cards
//     $('.content-cards, .address-card, .academic-calendar-cards .card-item').each(function(){
//         const b1 = "linear-gradient(250.03deg,  #D56F1B 100%, #FFC50A 100%)";
//         const b2 = "linear-gradient(250.03deg, #FFC50A 11.82%, #D56F1B 145.89%)";
//         $(document).on('mouseenter mouseleave touchend', '.content-cards_item, .address-card, .academic-calendar-cards .card-item', function (ev) {
//             var el = jQuery(this).find('i');
//             if(ev.type === 'mouseenter') {
//                 TweenMax.staggerTo(el, 0.8, {'background-image': b1, ease:Power4.easeOut},0.07);
//             } else {
//                 TweenMax.staggerTo(el, 0.8, {'background-image': b2, ease:Power4.easeOut},0.07);
//             }
//         });
//     });
//     // Home Hero
//     let heroContent = document.querySelectorAll(".homepage-hero_content")

//     heroContent.forEach( (element) => {

//         let headings = element.querySelectorAll("h1")
//         let copy = element.querySelector("p")
//         let links = element.querySelector(".homepage-hero_buttons")
//         gsap.set([headings, copy, links],
//         {opacity: 0, scale: 1, transformOrigin: '50% 50%'})
//         gsap.set(headings, {scale: 0.9})
//         gsap.set(copy, {y: 50})
//         gsap.set(links, {y: 50})

//         let tl = gsap.timeline()

//         .to(headings, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.5")
//         .to(copy, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.7")
//         .to(links,{opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.9")

//         ScrollTrigger.create({
//             trigger:element,
//             start:"top 90%",
//             toggleActions:"play none none none",
//             animation:tl
//         })

//     })



//     // //Full Width/inner flex Animations
//     //
//     // //50/50
//     let contentImage = document.querySelectorAll(".full-width-content.content-image .content-image_content")

//     contentImage.forEach( (element) => {

//         let subHead = element.querySelector("span")
//         let headings = element.querySelectorAll("h2")
//         let copy = element.querySelector(".copy")
//         gsap.set([headings, subHead, copy],
//         {opacity: 0, scale: 1, transformOrigin: '50% 50%'})
//         gsap.set(headings, {scale: 0.9})
//         gsap.set(copy, {y: 50})

//         let tl = gsap.timeline()

//         .to(subHead, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'})
//         .to(headings, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.1")
//         .to(copy, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.3")

//         ScrollTrigger.create({
//             trigger:element,
//             start:"top 90%",
//             toggleActions:"play none none none",
//             animation:tl
//         })

//     })
//     //50/50 Links repeater
//     $('.full-width-content.content-image .content-image_content').each(function(){

//         gsap.utils.toArray('.content-image_content').forEach((sec, i) => {
//           gsap.set('.content-image_content a', {opacity: 0, y: 50, scale: .9}),

//           ScrollTrigger.batch(".content-image_content a", {
//             onEnter: batch => gsap.to(batch, {opacity: 1, scale: 1, y: 0, stagger: {each: 0.15, grid: [1, 1]}, overwrite: true})
//           });
//         });
//     });

//     //Featured Image content
//     let featuredImage = document.querySelectorAll(".full-width-content.featured-image-block .container")

//     featuredImage.forEach( (element) => {

//         let headings = element.querySelectorAll("h2")
//         let copy = element.querySelector(".copy")
//         let image = element.querySelector(".image-wrap")
//         gsap.set([headings, copy, image],
//         {opacity: 0, scale: 1, transformOrigin: '50% 50%'})
//         gsap.set(headings, {scale: 0.9})
//         gsap.set(copy, {y: 50})
//         gsap.set(image, {y: 50})

//         let tl = gsap.timeline()

//         .to(headings, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.1")
//         .to(copy, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.3")
//         .to(image,{opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.5")

//         ScrollTrigger.create({
//             trigger:element,
//             start:"top 90%",
//             toggleActions:"play none none none",
//             animation:tl
//         })

//     })

//     //stats
//     const items = document.querySelectorAll(".stat .number");
//     let tl = gsap.timeline()

//     .from(items, {textContent: 0, duration: 3, ease: "power1.in", snap: { textContent: 1 }, stagger: { each: 0.2,
//         onUpdate: function() {
//           this.targets()[0].innerHTML = (Math.ceil(this.targets()[0].textContent));
//         },
//       }
//     });
//     ScrollTrigger.create({
//         trigger:'.stat-grid',
//         start:"top 90%",
//         toggleActions:"play none none none",
//         animation:tl
//     })

//     //Program slider
//     let programSlider = document.querySelectorAll(".full-width-content.program-slider .program-slider_content")

//     programSlider.forEach( (element) => {

//         let subHead = element.querySelector("span")
//         let headings = element.querySelectorAll("h2")
//         let copy = element.querySelector(".copy")
//         let link = element.querySelector(".link-arrow")
//         gsap.set([headings, subHead, copy, link],
//         {opacity: 0, scale: 1, transformOrigin: '50% 50%'})
//         gsap.set(headings, {scale: 0.9})
//         gsap.set(copy, {y: 50})
//         gsap.set(link, {y: 50})

//         let tl = gsap.timeline()

//         .to(subHead, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'})
//         .to(headings, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.1")
//         .to(copy, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.3")
//         .to(link,{opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.5")

//         ScrollTrigger.create({
//             trigger:element,
//             start:"top 90%",
//             toggleActions:"play none none none",
//             animation:tl
//         })

//     })

//     //News
//     //Featured
//     let recentNews = document.querySelectorAll(".full-width-content.recent-news .container")

//     recentNews.forEach( (element) => {

//         let postsHeading = element.querySelector("h2")
//         let featuredImg = element.querySelector(".featured-posts .post-image")
//         let featuredHeadings = element.querySelectorAll(".featured-posts h4")
//         let featuredCopy = element.querySelector(".featured-posts .copy")

//         gsap.set([postsHeading, featuredImg, featuredHeadings, featuredCopy],
//         {opacity: 0, scale: 1, transformOrigin: '50% 50%'})
//         gsap.set(postsHeading, {scale: 0.9})
//         gsap.set(featuredImg, {y: 50})
//         gsap.set(featuredHeadings, {y: 50})
//         gsap.set(featuredCopy, {y: 50})

//         let tl = gsap.timeline()

//         .to(postsHeading,{opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, 0)
//         .to(featuredImg,{opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.3")
//         .to(featuredHeadings, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.5")
//         .to(featuredCopy, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.7")

//         ScrollTrigger.create({
//             trigger:element,
//             start:"top 90%",
//             toggleActions:"play none none none",
//             animation:tl
//         })

//     })
//     //regular posts
//     let recentPost = document.querySelectorAll(".full-width-content.recent-news ")

//     recentPost.forEach( (element) => {

//         let post = element.querySelector(".posts .post")
//         let link = element.querySelectorAll(".posts a")

//         gsap.set([post, link],
//         {opacity: 0, scale: 1, transformOrigin: '50% 50%'})
//         gsap.set(post, {y: 50})
//         gsap.set(link, {scale: 0.9})

//         let tl = gsap.timeline()

//         .to(post,{opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, 0)
//         .to(link, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.3")

//         ScrollTrigger.create({
//             trigger:element,
//             start:"top 90%",
//             toggleActions:"play none none none",
//             animation:tl
//         })

//     })

//     //Upcoming events
//     let acaCalendar = document.querySelectorAll(".upcoming-events .upcoming-events_aca_card")

//     acaCalendar.forEach( (element) => {

//         let icon = element.querySelector("i")
//         let heading = element.querySelectorAll("h2")
//         let copy = element.querySelector("p")
//         let link = element.querySelector("a")
//         gsap.set([icon, heading, copy, link],
//         {opacity: 0, scale: 1, transformOrigin: '50% 50%'})
//         gsap.set(heading, {scale: 0.9})
//         gsap.set(icon, {scale: 0.9})
//         gsap.set(copy, {y: 50})
//         gsap.set(link, {y: 50})

//         let tl = gsap.timeline()

//         .to(heading, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.1")
//         .to(icon, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, 0)
//         .to(copy, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.3")
//         .to(link, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.5")

//         ScrollTrigger.create({
//             trigger:element,
//             start:"top 90%",
//             toggleActions:"play none none none",
//             animation:tl
//         })

//     })
//     //event image
//     let eventLink = document.querySelectorAll(".upcoming-events .upcoming-events_event")

//     eventLink.forEach( (element) => {

//         let heading = element.querySelectorAll("h2")
//         let link = element.querySelector("a")
//         gsap.set([heading, link],
//         {opacity: 0, scale: 1, transformOrigin: '50% 50%'})
//         gsap.set(heading, {scale: 0.9})
//         gsap.set(link, {y: 50})

//         let tl = gsap.timeline()

//         .to(heading, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.7")
//         .to(link, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.9")

//         ScrollTrigger.create({
//             trigger:element,
//             start:"top 90%",
//             toggleActions:"play none none none",
//             animation:tl
//         })

//     })

//     // Video Gallery
//     let quote = document.querySelectorAll(".full-width-content.featured-video-gallery .main-content")

//     quote.forEach( (element) => {

//         let headings = element.querySelectorAll("h2")
//         let copy = element.querySelector("p")
//         let video = element.querySelector(".video")
//         gsap.set([headings, copy, video],
//         {opacity: 0, scale: 1, transformOrigin: '50% 50%'})
//         gsap.set(headings, {scale: 0.9})
//         gsap.set(copy, {y: 50})
//         gsap.set(video, {y: 50})

//         let tl = gsap.timeline()

//         .to(headings, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.1")
//         .to(copy, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.3")
//         .to(video,{opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.5")

//         ScrollTrigger.create({
//             trigger:element,
//             start:"top 90%",
//             toggleActions:"play none none none",
//             animation:tl
//         })

//     })
//     // //Flex Table
//     let table = document.querySelectorAll(".flex_table")

//     table.forEach( (element) => {

//         let headings = element.querySelectorAll("h2")
//         let copy = element.querySelector(".table-content")
//         gsap.set([headings, copy],
//         {opacity: 0, scale: 1, transformOrigin: '50% 50%'})
//         gsap.set(headings, {scale: 0.9})
//         gsap.set(copy, {y: 50})

//         let tl = gsap.timeline()

//         .to(headings, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.1")
//         .to(copy, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.3")

//         ScrollTrigger.create({
//             trigger:element,
//             start:"top 90%",
//             toggleActions:"play none none none",
//             animation:tl
//         })

//     })


//     //wysiwyg
//     let wysiwyg = document.querySelectorAll(".flex_basic-wysiwyg")

//     wysiwyg.forEach( (element) => {

//     	let headings = element.querySelectorAll("h2")
//         let copy = element.querySelector(".copy")

//     	let tl = gsap.timeline()

//     	 .from(headings, {y:100, opacity:0}, 0)
//          .from(copy, {y:100, opacity:0, stagger:0.15}, "-=0.1")

//     	ScrollTrigger.create({
//     		trigger:element,
//     		start:"top 90%",
//     		toggleActions:"play none none reverse",
//     		animation:tl
//     	})

//     })
//     let wysiwygColumns = document.querySelectorAll(".flex_basic-wysiwyg .column-content")

//     wysiwygColumns.forEach( (element) => {

//     	let contentLeft = element.querySelectorAll(".copy-left")
//         let contentRight = element.querySelector(".copy-right")

//     	let tl = gsap.timeline()

//     	 .from(contentLeft, {y:100, opacity:0}, 0)
//          .from(contentRight, {y:100, opacity:0, stagger:0.15}, "-=0.1")

//     	ScrollTrigger.create({
//     		trigger:element,
//     		start:"top 90%",
//     		toggleActions:"play none none none",
//     		animation:tl
//     	})

//     })


//     // //Accordions
//     // //accordion titles
//     //card Sections
//     let expandCollapse = document.querySelectorAll(".flex_expand-collapse")
//         expandCollapse.forEach( (element) => {

//             let headings = element.querySelectorAll("h2")
//             let copy = element.querySelector(".copy")


//         gsap.set([headings, copy],{opacity: 0, scale: 1, y:50, transformOrigin: '50% 50%'})

//         let tl = gsap.timeline()

//         .to(headings, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, 0)
//         .to(copy, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.1")

//         ScrollTrigger.create({
//            trigger:element,
//            start:"top 90%",
//            toggleActions:"play none none none",
//            animation:tl
//         })

//     })




//     // //Form Block
//     let formBlock = document.querySelectorAll(".form-content")

//     formBlock.forEach( (element) => {

//         let header = element.querySelector("h2")
//         let copy = element.querySelector("p")
//         let form = element.querySelector('form');

//         gsap.set([header, copy, form],
//         {opacity: 0, scale: 1, transformOrigin: '50% 50%'})
//         gsap.set(header, {y:100, scale: 0.9})
//         gsap.set(copy, {y: 50})

//         let tl = gsap.timeline()

//         .to(header, {opacity: 1, scale: 1, y: 0, stagger:0.15, transformOrigin: '50% 50%'}, 0)
//         .to(copy, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.3")
//         .to(form, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.5")

//         ScrollTrigger.create({
//             trigger:element,
//             start:"top 90%",
//             toggleActions:"play none none none",
//             animation:tl
//     	})
//     })

//     // //Contact Stuff
//     // //Phone titles
//     let contactPhoneHeaders = document.querySelectorAll(".contact-us .phone-details")
//     contactPhoneHeaders.forEach( (element) => {

//        let headings = element.querySelectorAll("h3")
//         let copy = element.querySelector(".copy")

//        let tl = gsap.timeline()

//         .from(headings, {y:100, opacity:0}, 0)
//          .from(copy, {y:100, opacity:0, stagger:0.15}, "-=0.1")

//        ScrollTrigger.create({
//            trigger:element,
//            start:"top 90%",
//            toggleActions:"play none none none",
//            animation:tl
//        })

//     })
//     //phone items
//     let phoneItems = document.querySelectorAll(".contact-us .phone-details .phone-row")

//     phoneItems.forEach( (element) => {

//         let phoneLabel = element.querySelector(".label")
//         let phoneNumber = element.querySelector(".phone-numbers")

//         gsap.set([phoneLabel, phoneNumber],{opacity: 0, scale: 1, y:50, transformOrigin: '50% 50%'})

//         let tl = gsap.timeline()

//         .to(phoneLabel, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.3")
//         .to(phoneNumber, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.3")

//         ScrollTrigger.create({
//             trigger:element,
//             start:"top 90%",
//             toggleActions:"play none none none",
//             animation:tl

//        })

//     })
//     // //Contact Form
//     let contactForm = document.querySelectorAll(".contact-us .contact-us-form")
//         contactForm.forEach( (element) => {

//         let headings = element.querySelectorAll("h1, h2, h3, h4, h5, h6")
//         let copy = element.querySelector("p")
//         let form = element.querySelector('form');

//         gsap.set([headings, copy, form],{opacity: 0, scale: 1, y:50, transformOrigin: '50% 50%'})

//         let tl = gsap.timeline()

//         .to(headings, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, 0)
//         .to(copy, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.1")
//         .to(form, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.3")

//         ScrollTrigger.create({
//            trigger:element,
//            start:"top 90%",
//            toggleActions:"play none none none",
//            animation:tl
//         })

//     })

//     //ALL ROLL OUT ANIMATIONS
//     //This means that it is revealed as you scroll through the area vs as you hit a trigger
//     //It has EVENTS, RESOURCES, BLOGS, SIDEBAR ITEMS, DIRECTORY, SEARCH RESULTS, and TABLEPRESS TABLES
//     $('.event-list, .resource-list_table, .blog-list_main, .left-sidebar-menu .child-menu, .flex_table, .employee-list .container, .search-results .results').each(function(){

//         gsap.utils.toArray('.event-list, .resource-list_table, .blog-list_main, .child-menu, .tablepress, .employee-list .container, .search-results .results').forEach((sec, i) => {
//           gsap.set('.event-list__event, .resource-list_item, .blog-item, .child-menu .page_item, tr, .employee-item, article', {opacity: 0, y: -100,}),

//           ScrollTrigger.batch(".event-list__event, .resource-list_item, .blog-item, .child-menu .page_item, tr, .employee-item, article", {
//             onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 2]}, overwrite: true})
//           });
//         });
//     });
//     //Accordion
//     $('.flex_expand-collapse').each(function(){

//         gsap.utils.toArray('.flex_expand-collapse').forEach((sec, i) => {
//           gsap.set('.collapse-toggle', {opacity: 0, y: -100,}),

//           ScrollTrigger.batch(".collapse-toggle", {
//             onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 1]}, overwrite: true})
//           });
//         });
//     });

//     //card Sections
//     let flexCards = document.querySelectorAll(".flex_image-cards, .flex_content-cards, .error404, flex_program-cards")
//         flexCards.forEach( (element) => {

//         let header = element.querySelectorAll("h2")
//         let content = element.querySelectorAll('p, .copy .page-info')
//         let cards = element.querySelectorAll('.image-cards .image-cards_item, .content-cards .content-cards_item, .program-cards_wrap .program')


//         gsap.set([header, content, cards],{opacity: 0, scale: 1, y:50, transformOrigin: '50% 50%'})

//         let tl = gsap.timeline()

//         .to(header, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, 0)
//         .to(content, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.1")
//         .to(cards, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%', stagger:0.2}, "-=0.3")

//         ScrollTrigger.create({
//            trigger:element,
//            start:"top 90%",
//            toggleActions:"play none none none",
//            animation:tl
//         })

//     })

//     //Blog Single related
//     let blogRelated = document.querySelectorAll(".single-blog")
//         blogRelated.forEach( (element) => {

//         let header = element.querySelectorAll(".single-blog_related-blogs h2")
//         let button = element.querySelectorAll('.single-blog_related-blogs .button')
//         let cards = element.querySelectorAll('.single-blog_related-blogs .card')


//         gsap.set([header, button, cards],{opacity: 0, scale: 1, y:50, transformOrigin: '50% 50%'})

//         let tl = gsap.timeline()

//         .to(header, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, 0)
//         .to(button, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%'}, "-=0.1")
//         .to(cards, {opacity: 1, scale: 1, y: 0, transformOrigin: '50% 50%', stagger:0.15}, "-=0.3")

//         ScrollTrigger.create({
//            trigger:element,
//            start:"top 90%",
//            toggleActions:"play none none none",
//            animation:tl
//         })

//     })


// });
