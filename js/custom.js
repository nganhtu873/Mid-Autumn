jQuery.noConflict();
jQuery(document).ready(function($){	
	
	"use strict";
	  
	var currentWidth = window.innerWidth || document.documentElement.clientWidth;
	
	if(currentWidth < 767) {
		$('#pagepiling-js').remove();
		$('#customscroll-js').remove();
		$('#customscroll-css').remove();
		$('#pagepiling-css').remove();
		if($().onePageNav) {
			$('#main-menu').onePageNav({
				currentClass : 'current-menu-item',
				filter		 : ':not(.external)',
				scrollSpeed  : 750,
				scrollOffset : -1,
			});
		}
	}
	
	Pace.on("done", function(){
		$("#loader-wrapper").fadeOut(500);
		$(".pace").remove();
	});
	
	/*To Top*/
  	$().UItoTop({ easingType: 'easeOutQuart' });
	
	$('.caption .dt-sc-button').click(function(){ 
		$.scrollTo('#page2', 1000);
	});
	
	//Mobile Menu
	$("#dt-menu-toggle").click(function( event ){
		event.preventDefault();
		var $menu;
		$menu = $("nav#main-menu").find("ul#menu:first");
		$menu.slideToggle(function(){
			$menu.css('overflow' , 'visible');
			$menu.toggleClass('menu-toggle-open');
		});
	});
	
	// Menu Type 3
	$('.open-menu.type3').click(function() {
		if( $('#header.type3').hasClass('menu-close')){
			$('#header.type3').animate({top: -70},function(){
				$('#header.type3').removeClass('menu-close');
			});
		} else{
			$('#header.type3').animate({top: 0},function(){
				$('#header.type3').addClass('menu-close');
			});
		}
		return false;
	});
	
	// Menu Type 4
	$('.open-menu.type4').click(function() {
		if( $('#header.type4').hasClass('menu-close')){
			$('#header.type4').animate({bottom: -70},function(){
				$('#header.type4').removeClass('menu-close');
			});
		} else{
			$('#header.type4').animate({bottom: 0},function(){
				$('#header.type4').addClass('menu-close');
			});
		}
		return false;
	});
		
	//Tabs...	
	if(jQuery('ul.dt-sc-tabs-frame').length > 0) {
		jQuery('ul.dt-sc-tabs-frame').tabs('> .dt-sc-tabs-frame-content', {
	      effect: 'fade'
      });
	}

	if(jQuery('ul.dt-sc-tabs-vertical-frame').length > 0) {
		jQuery('ul.dt-sc-tabs-vertical-frame').tabs('> .dt-sc-tabs-vertical-frame-content', {
	      effect: 'fade'
      });
	}
	
	//Toggles...	
	$('.dt-sc-toggle').toggle(function(){ $(this).addClass('active'); },function(){ $(this).removeClass('active'); });
	$('.dt-sc-toggle').click(function(){ $(this).next('.dt-sc-toggle-content').slideToggle(); });
	$('.dt-sc-toggle-frame-set').each(function(){
	  var $this = $(this),
		  $toggle = $this.find('.dt-sc-toggle-accordion');
	  
	  $toggle.click(function(){
		if( jQuery(this).next().is(':hidden') ) {
		  $this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
		  $(this).toggleClass('active').next().slideDown();
		}
		return false;
	  });
	  
	  $this.find('.dt-sc-toggle-accordion:first').addClass("active");
	  $this.find('.dt-sc-toggle-accordion:first').next().slideDown();
	});

	//Framed Toggles...	
	jQuery('.dt-sc-toggle').toggle(function(){ jQuery(this).addClass('active'); },function(){ jQuery(this).removeClass('active'); });
	jQuery('.dt-sc-toggle').click(function(){ jQuery(this).next('.dt-sc-toggle-content').slideToggle(); });
	jQuery('.dt-sc-toggle-frame-set').each(function(){
		var $this = jQuery(this),
		$toggle = $this.find('.dt-sc-toggle-accordion');
		$toggle.click(function(){
			if( jQuery(this).next().is(':hidden') ) {
				$this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
				jQuery(this).toggleClass('active').next().slideDown();
			}
		return false;
	});
	
	//Activate First Item always
	$this.find('.dt-sc-toggle-accordion:first').addClass("active");
	$this.find('.dt-sc-toggle-accordion:first').next().slideDown();
	});
	
	//Standard Toggles...	
	jQuery('.dt-sc-toggle').toggle(function(){ jQuery(this).addClass('active'); },function(){ jQuery(this).removeClass('active'); });
	jQuery('.dt-sc-toggle').click(function(){ jQuery(this).next('.dt-sc-toggle-content').slideToggle(); });
	jQuery('.dt-sc-toggle-set').each(function(){
		var $this = jQuery(this),
		$toggle = $this.find('.dt-sc-toggle-accordion');
		$toggle.click(function(){
			if( jQuery(this).next().is(':hidden') ) {
				$this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
				jQuery(this).toggleClass('active').next().slideDown();
			}
		return false;
	});
	
	//Activate First Item always
	$this.find('.dt-sc-toggle-accordion:first').addClass("active");
	$this.find('.dt-sc-toggle-accordion:first').next().slideDown();
	});
	
	//Progress Bars...
	(function($){
		$('.dt-custom-progress').click(function(){		
			$(".dt-sc-progress").each(function(){
				var $this = $(this),
				pvalue = $this.find('.dt-sc-bar').attr('data-value');
				
				if (!$this.hasClass('animated')) {
					$this.addClass('animated');
					$this.find('.dt-sc-bar').animate({width: pvalue + "%"},600,function(){ $this.find('.dt-sc-bar-text').fadeIn(400); });
				}
			});
		});
	})(jQuery);
	
	//Progress Bars...
	(function($){
		$(".dt-sc-progress").one('inview', function (event, visible) {
			var $this = $(this),
			pvalue = $this.find('.dt-sc-bar').attr('data-value');
			
			if (visible == true) {
				$this.find('.dt-sc-bar').animate({width: pvalue + "%"},600,function(){ $this.find('.dt-sc-bar-text').fadeIn(400); });
			}
		});
	})(jQuery);
	
	//Donut Charts...
	$(".donutchart").each(function(){
		$(this).one('inview', function (event, visible) {
			if(visible === true) {
			   var $this = $(this);
			   var $bgColor =  ( $this.data("bgcolor") !== undefined ) ? $this.data("bgcolor") : "#5D18D6";
			   var $fgColor =  ( $this.data("fgcolor") !== undefined ) ? $this.data("fgcolor") : "#000000";
			   var $size = ( $this.data("size") !== undefined ) ? $this.data("size") : "200";
			   
			   $this.donutchart({'size': $size, 'fgColor': $fgColor, 'donutwidth': 6, 'bgColor': $bgColor });
			   $this.donutchart('animate');
			}
		});   
   });
   
   //PRETTYPHOTO...
	var $pphoto = $('a[data-gal^="prettyPhoto[gallery]"]');
	if($pphoto.length){
		$("a[data-gal^='prettyPhoto[gallery]']").prettyPhoto({ 
			overlay_gallery: false, 
			social_tools: false,
			deeplinking: false
		});
	}
	
	//Google Map...
	var $map = $('#dt-sc-popup-map');
	$map.gMap({
		markers: [{ 
				  address : 'No: 58 A, East Madison St, Baltimore, MD, USA',
				  html: 'No: 58 A, East Madison St, Baltimore, MD, USA'
				}],
		zoom: 16,
		scrollwheel: false,
		controls: false
	});
   
   //Recent gallery slider...
	if( $(".recent-gallery").find("li").length > 1 ) {
		$(".recent-gallery").bxSlider({ auto:false, useCSS:false, pagerCustom: '#bx-pager', autoHover:true, adaptiveHeight:true });
	} 
   	
	$(window).load(function(){
		//Blog Carousel...
		if($(".dt-sc-blog-carousel").length) {
			$('.dt-sc-blog-carousel').carouFredSel({
			  responsive: true,
			  auto: false,
			  width: '100%',
			  height: 'variable',
			  prev: '.testimonial-prev',
			  next: '.testimonial-next',
			  pagination: '.blog-pagination',
			  scroll: {
					fx: "cover-fade",
					duration: 500,
					pauseOnHover: true
				},				
			  items: {
				width: 500,
				height: 'variable',
				visible: {
				  min: 1,
				  max: 2
				}
			  }				
			});			
		} 
		
		//Portfolio Carousel...
		if( jQuery('.dt-sc-portfolio-container').length) {
			jQuery('.dt-sc-portfolio-container').each(function(){
				  var pagger = jQuery(this).parents(".dt-sc-portfolio-carousel-wrapper").find("div.carousel-arrows"),
					  next = pagger.find("a.carousel-next"),
					  prev = pagger.find("a.carousel-prev");
	
				jQuery(this).carouFredSel({
					  responsive:true,
					  auto:false,
					  width:'100%',
					  height: 'variable',
					  scroll:1,
					  items:{
						height: 'variable',
						visible: {min: 1,max: 3} 
					  },
					  prev:prev,
					  next:next
				});
	
			});
		}
	});

});