"use strict";jQuery(document).ready(function($){$(window).load(function(){});$('.navbar-collapse').find('a[href*=#]:not([href=#])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:(target.offset().top-40)},1000);if($('.navbar-toggle').css('display')!='none'){$(this).parents('.container').find(".navbar-toggle").trigger("click")}
return!1}}});$.localScroll();var wow=new WOW({mobile:!1});wow.init();$('.main_home_slider').owlCarousel({responsiveClass:!0,autoplay:!1,items:1,loop:!0,dots:!0,nav:!1,navText:["<i class='lnr lnr-chevron-left'></i>","<i class='lnr lnr-chevron-right'></i>"],autoplayHoverPause:!0});$('.portfolio-img').magnificPopup({type:'image',gallery:{enabled:!0},});jQuery(window).scroll(function(){var top=jQuery(document).scrollTop();var height=300;if(top>height){jQuery('.navbar-fixed-top').addClass('menu-scroll')}else{jQuery('.navbar-fixed-top').removeClass('menu-scroll')}});$(window).scroll(function(){if($(this).scrollTop()>600){$('.scrollup').fadeIn('slow')}else{$('.scrollup').fadeOut('slow')}});$('.scrollup').click(function(){$("html, body").animate({scrollTop:0},1000);return!1});$('#mixcontent').mixItUp({animation:{animateResizeContainer:!1,effects:'fade rotateX(-45deg) translateY(-10%)'}});$('.grid').masonry({itemSelector:'.grid-item',})});$(document).on("scroll",function(){if($(document).scrollTop()>120){$("nav").addClass("small")}else{$("nav").removeClass("small")}})