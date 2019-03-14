/* candela */
/* site dev by lukas eigler-harding */

var Site = {};

Site.targetPage = "";
Site.targetSlide = "";
Site.loaded = false;
Site.slideTransition = false;
Site.activeSlideIndex = 0;
Site.activeSlideCount = 0;
Site.mobileScrollPosition = 0;

Site.weather = function(){
	$.ajax({
	  url: "https://api.openweathermap.org/data/2.5/weather?lat=20.21&lon=-87.49&appid=2ef957d7223cdcc456536d6972b9f272",
	  dataType: "json"
	}).done(function(results) {

	  var kelvin = results.main.temp,
	  		celsius = Math.round(kelvin - 273.15),
	  		fahrenheit = Math.round((celsius * (9/5)) + 32), 
	  		weathericonId = results.weather[0].icon,
	  		idOptions = ["01d", "01n", "02d", "02n", "800"];

	  var $mobileweather = $("#mobile_weather"),
	  		templink = $mobileweather.attr("data-link");

	  if(idOptions.includes(weathericonId)){ // append sun icon
	  	$("#temp").find("h3").removeClass("cloudy")
	  	$mobileweather.addClass("sunny")
	  }

	  //mobile
		$mobileweather.html("<a href='" + templink + "' target='_blank'>Current Temperature in Tulum: " + fahrenheit + "ºF | " + celsius + "ºC</a>");
	  // desktop
	  TweenMax.to($(".current_temp"), 0.2, {opacity: 1})
	  $("#fahrenheit").html(fahrenheit + "º ").addClass("active")
	  $(".current_temp").on('click', function(){
	  	$(".temperature_display").toggleClass("active")
  		if($("#celsius").hasClass("active")){
  			$("#celsius").html(" " + celsius + "º ")
  			$("#fahrenheit").html("")
  		}else if($("#fahrenheit").hasClass("active")){
  			$("#fahrenheit").html(fahrenheit + "º ")
  			$("#celsius").html("")
  		}
	  })

	});
}

Site.bottomPosition = function(footer){
	if($(window).outerWidth() < 768){
		// mobile screen
		var innerHeight = $(window).innerHeight()
		footer.css({ "top" : innerHeight - footer.outerHeight() + "px", "bottom" : "auto"})
	}else{
		return
	}
}

Site.footer = function(){
	// contact
	$("#contact_tab").on('click', function(){
		$(this).toggleClass("active")
		$("footer").toggleClass("active")
		$("#contact_section").toggleClass('active')
		$("#trailer_tab").removeClass("active")
		$("#vimeo_video").removeClass("show")
		$("main").removeClass("video")
	})

	// trailer on load
	if($("#vimeo_video").hasClass("show") && !Site.loaded){
		$("#trailer_tab").addClass("active")
		setTimeout(function(){
			$("main").addClass("video")	
		}, 1000)
		TweenMax.to($("#vimeo_video"), 0.4, {opacity: 1, delay: 1, onComplete: function(){
				$("#vimeo_video").addClass("revealed")
			}
		})
	}

	// trailer
	var closeTrailer = function(){
		$("#contact_tab, #contact_section").removeClass('active')
		$("#trailer_tab").toggleClass("active")
		$("main").toggleClass("video")

		setTimeout(function(){
			$("#vimeo_video").toggleClass("show")
			$("#vimeo_video").toggleClass("revealed")
		}, 420)
	}

	$("#trailer_tab, #exit_video, .mobile_trailer").on('click', function(){
		closeTrailer();
	})

	document.addEventListener('keydown', function(e){
		if(e.key == "Escape" || e.key == "escape" || e.key == "ESCAPE"){
			if($("#trailer_tab").hasClass("active")){
				closeTrailer();
			}
		}
	})

	$(".logo_up").on('click', function(){
		$("main").animate({ scrollTop: 0 }, 1000);
	})
}

Site.lotsOfImagesWrapper = function($this){
	var totalLength = 0;
	$this.children(".image_wrapper").each(function(){
		var imageWrapper = $(this);
		totalLength += imageWrapper.outerWidth(true);
	})
	$this.css({"width" : totalLength + "px"});

	if(totalLength < $(window).innerWidth()*0.82){
		$this.css({"left" : "18vw"});		
	}else{
		$this.css({"left" : "auto", "right" : "0"});		
	}

}

Site.lotsOfImages = function(){
	$(".lots_of_images").each(function(index){
		var $this = $(this);
		Site.lotsOfImagesWrapper($this);

    $(window).on('resize', function(){
			Site.lotsOfImagesWrapper($this);
    })

		$this.parent().on('mouseover', function(e){

			if(window.innerWidth < 768){
	    	return	
	    }

			var windowWidth = $(window).innerWidth(),
					totalImageWidth = $this.outerWidth(),
					leftdistance = (windowWidth*0.18)/windowWidth,
					overflowAmount = (totalImageWidth > windowWidth) ? Math.abs((windowWidth - totalImageWidth)/windowWidth) : -1*leftdistance;
			
			if(e.pageX <= windowWidth/2){
				$this.css({"transform" : "translate(" + ((leftdistance + overflowAmount)*100) + "vw, 0)"})

			}else if(e.pageX > windowWidth/2){
				$this.css({"transform" : "translate(0)"})
			}
		})

		$this.on('mouseout', function(e){
			if(window.innerWidth < 768){
	    	return	
	    }
			
			$this.css({"transform" : "translate(0)"})
		})
	})
}

Site.nextPage = function(){
	if(!Site.slideTransition){
		var newTarget = $(".current_section").next(".small_section"),
				newUrl = newTarget.attr("href");
		Site.targetPage = newTarget.attr("id");
		Site.activeSlideIndex = 0;
		Site.activeSlideCount = 0;
		if(newUrl != undefined){ Barba.Pjax.goTo(newUrl)}	
	}
}

Site.previousPage = function(){
	if(!Site.slideTransition){
		var newTarget = $(".current_section").prev(".small_section"),
				newUrl = newTarget.attr("href");
		Site.targetPage = newTarget.attr("id");
		Site.activeSlideIndex = 0;
		Site.activeSlideCount = 0;
		if(newUrl != undefined){ Barba.Pjax.goTo(newUrl)}
	}
}

Site.arrowNav = function(){
	document.addEventListener('keydown', function(e){
		if($(".barba-container").attr("id") != "section_page"){ return }
		if(e.key == "ArrowUp" || e.key == "arrowup" || e.key == "ARROWUP" || (e.key == "ArrowLeft" && Site.activeSlideIndex == 0)){
			Site.previousPage()
		}else if(e.key == "ArrowDown" || e.key == "arrowdown" || e.key == "ARROWDOWN" || (e.key == "ArrowRight" && Site.activeSlideIndex == Site.activeSlideCount - 1)){
			Site.nextPage()
		}
	})
}

// basic barba:
Site.homepage = Barba.BaseView.extend({
  namespace: 'home_page',
  onEnter: function() {
  	Site.targetPage = ""; // reset target link from homepage
  	Site.activeSlideIndex = 0;
		Site.activeSlideCount = 0; // reset slideshow indeces
  	$("#logomark").removeClass("open")
  },
  onEnterCompleted: function() {
    if(!Site.loaded){ // if first session load
    	var delay = 0;
    	$(".fader").each(function(){
    		TweenMax.to($(this), 0.3, {delay: delay, opacity: 0, ease: Power4.easeIn})
    		delay += 0.2;
    	})
    }else{ // if visiting the homepage through another page of the site	
    	if(window.innerWidth < 768){
	    	$("main").scrollTop(Site.mobileScrollPosition)
	    	Site.mobileScrollPosition = 0; //reset
	    }
    	TweenMax.to($(".fader"), 0.3, {opacity: 0, ease: Power4.easeIn})
    }

    TweenMax.to($(".mobile_footer"), 0.3, {opacity: 1, ease: Power4.easeIn})

    Site.lotsOfImages()

    // determine target slide
    $(".image_wrapper").on('click', function(){
			Site.targetSlide = ($(this).attr("data-target-slide").length > 0 ? $(this).attr("data-target-slide") : "");
		})

    // determine animation focus element
    $("a").on('click', function(){
			Site.targetPage = (($(this).attr("id") != null || $(this).attr("id") != undefined)? $(this).attr("id") : "");
		})

		$(".section_link").on('click', function(){
			$(this).addClass("opening")
		})		

  }
});

Site.section = Barba.BaseView.extend({
  namespace: 'section_page',
  onEnter: function() {
		Site.targetPage = ""; // reset target link from homepage
		$("#logomark").addClass("open")
  },
  onEnterCompleted: function(){
		$("a").on('click', function(){
			Site.targetPage = (($(this).attr("id") != null || $(this).attr("id") != undefined)? $(this).attr("id") : "");
		})
  	
  	TweenMax.to($(".sub_fader"), 0.2, {opacity: 0, ease: Power4.easeIn})
  	TweenMax.to($(".mobile_footer"), 0.4, {opacity: 1, ease: Power4.easeIn})
  	
  	var $carousel = $('.section_carousel');
  	if(window.innerWidth > 768){
  		Site.carousel = true;
  		$carousel.flickity({
			  // options
			  cellAlign: 'center',
			  contain: true,
			  wrapAround: false,
			  cellSelector: '.section_carousel_cell',
			  prevNextButtons: false
			})

			$carousel.focus();
  		$carousel.on( 'change.flickity', function( event, index ) {
  			$(".slide_counter_current_slide").html(index+1)
			})

			if(Site.targetSlide != ""){
				var targetSlide = ".target_slide-" + Site.targetSlide;
				$carousel.flickity( 'selectCell', targetSlide, true, true );
				Site.targetSlide = "";
			}

			var flkty = $carousel.data('flickity');
			Site.activeSlideCount = flkty.slides.length;

			$carousel.on( 'change.flickity', function( event, index ) {
				Site.slideTransition = true; //safety mechanism for catch
			})

			$carousel.on( 'settle.flickity', function(event, index){
					Site.activeSlideIndex = index;
					Site.slideTransition = false;
			});
  	}else{
			// scroll to on mobile
			$("main").scrollTop($("main").scrollTop() + $(".candela_section.current_section").position().top)
  		
  		$(".small_section").on('click', function(){
  			$(this).addClass("opening")
  		})

  	}

  	// always initialized for window resize accounting
  	$(".next").on('click', function(){
			$carousel.flickity('next', false)
			if(Site.activeSlideIndex == Site.activeSlideCount - 1){
				Site.nextPage()
			}
		})

		$(".previous").on('click', function(){
			$carousel.flickity('previous', false)
			if(Site.activeSlideIndex == 0){
				Site.previousPage()
			}
		})

  	$(window).resize(function(){
  		
  		if(window.innerWidth > 768 && !Site.carousel){
  			Site.carousel = true;
  			$carousel = $('.section_carousel');
  			$carousel.flickity({
				  // options
				  cellAlign: 'center',
				  contain: true,
				  wrapAround: true,
				  cellSelector: '.section_carousel_cell',
				  prevNextButtons: false
				})
	  		
	  		$carousel.on( 'change.flickity', function( event, index ) {
	  			$(".slide_counter_current_slide").html(index+1)
				})

  		}else if(window.innerWidth < 768){
  			if(Site.carousel){
  				$carousel.flickity('destroy')
  			}
  			Site.carousel = false;
  		}
  	})
  },
  onLeave: function() {
   
  	$(".current_section").addClass("closing")

  }
});

// from homepage to a subpage 
var subpageTransition = Barba.BaseTransition.extend({
	start: function(){
		var _this = this;

		var targetSection = Site.targetPage;

		_this.newContainerLoading
		.then(function(){
			var $oldContainer = $("#" + _this.oldContainer.id)
			
			// get count
			var count = (($("main").hasClass("seven")) ? 7 : 8),
					distributedFooterHeight = $("footer").outerHeight()/count,
					targetSectionHeight = (( $(window).innerWidth() > 768 ) ? ($(window).outerHeight()*0.7) - distributedFooterHeight : $(window).outerHeight()),
					smallSectionHeight = (( $(window).innerWidth() > 768 ) ? ((($(window).outerHeight()*0.3) - $("header").outerHeight())/(count - 1)) - distributedFooterHeight : $(".section_link").first().outerHeight());

			// fade out title and content if desktop
			if($(window).innerWidth() > 768){
				TweenMax.to($(".fader"), 0.4, {opacity: 1, ease: Power3.easeIn})
				TweenMax.to($("h1"), 0.4, {opacity: 0, ease: Power3.easeIn})			
				// resize containers
				$oldContainer.find(".section_link").each(function(){
					if($(this).attr('id') == targetSection){
						TweenMax.to($(this), 0.6, {height: targetSectionHeight, ease: Power3.easeIn})
						TweenMax.to($(this).find(".mobile_preview"), 0.3, {opacity: 0, ease: Power3.easeIn})
					}else{
						TweenMax.to($(this), 0.6, {height: smallSectionHeight, ease: Power3.easeIn})
					}
				})
			}else{
				// mobile transition
				$("main").animate({
					scrollTop:  $("main").scrollTop() + $("#" + targetSection).position().top
				}, 500, function(){
					TweenMax.to($("#" + targetSection), 0.6, {height: targetSectionHeight, ease: Power3.easeIn})
					TweenMax.to($("#" + targetSection).find(".mobile_preview"), 0.3, {opacity: 0, ease: Power3.easeIn})
				})
			}
			

			setTimeout(function(){
				_this.done();
			}, 640)

			setTimeout(function(){
				TweenMax.set($(".fader"), {clearProps: "all"})
				TweenMax.set($("h1"), {clearProps: "all"})
				TweenMax.set($(".mobile_preview"), {clearProps: "all"})
			}, 700)

		})
	}
})

// from subpage to subpage
var interSubpageTransition = Barba.BaseTransition.extend({
	start: function(){
		var _this = this;
		var targetId = "#" + Site.targetPage;
		// console.log(Site.targetPage);
		
		_this.newContainerLoading
		.then(function(){
			var $oldContainer = $("#" + _this.oldContainer.id);
			var count = (($("main").hasClass("seven")) ? 7 : 8),
					distributedFooterHeight = $("footer").outerHeight()/count,
					targetSectionHeight = (($(window).innerWidth() > 768 ) ? ($(window).outerHeight()*0.7) - distributedFooterHeight : $(window).outerHeight()),
					smallSectionHeight =  (($(window).innerWidth() > 768 ) ? ((($(window).outerHeight()*0.3) - $("header").outerHeight())/(count - 1)) - distributedFooterHeight : $(".small_section").first().outerHeight());

			if(window.innerWidth < 768){ 
				$("h3").each(function(){
					if("#" + $(this).parent().attr("id") != targetId){
						TweenMax.to($(this), 0.4, {opacity: 0, ease: Power3.easeIn}) 
					}
				})
			}

			if(window.innerWidth > 768){
				if($(".current_size_half").length > 1){
					TweenMax.set($(".width_half"), {borderLeft: "none", borderRight: "none", borderTop: "none", borderBottom: "none"})
					if($oldContainer.find(".width_half").next().hasClass("current_size_half")){
						TweenMax.to($(".width_half"), 0.6, {delay: 0.4, marginLeft: 0, height: 0, marginBottom: -25})	
					}else{
						TweenMax.to($(".width_half"), 0.6, {delay: 0.4, marginLeft: 0, height: 0})
					}
					
				}else if($(".current_size_half").length == 1){
					TweenMax.set($(".width_half"), {borderLeft: "none", borderRight: "none"})
					TweenMax.to($(".width_half"), 0.6, {delay: 0.4, marginLeft: 0, height: 0})
				}
				TweenMax.set($(".current_size_half"), {borderLeft: "none", borderRight: "none", borderTop: "none", borderBottom: "none"})
			}

			TweenMax.to($(targetId).find(".sub_fader"), 0.4, {opacity: 1, ease: Power3.easeIn})
			TweenMax.to($(".current_section").find(".sub_fader"), 0.4, {opacity: 1, ease: Power3.easeIn})
			TweenMax.to($(".section_carousel"), 0.4, {opacity: 0, ease: Power3.easeIn})
			TweenMax.to($(".mobile_footer"), 0.4, {opacity: 0, ease: Power3.easeIn})
			TweenMax.to($(".slide_button"), 0.4, {opacity: 0, ease: Power3.easeIn})
			TweenMax.to($oldContainer.find(".mobile_preview"), 0.3, {opacity: 0, ease: Power3.easeIn})
			TweenMax.to($oldContainer.find(".current_section"), 0.6, {delay: 0.4, height: smallSectionHeight})
			TweenMax.to($oldContainer.find(targetId), 0.6, {delay: 0.4, height: targetSectionHeight})

			setTimeout(function(){
				_this.done(); // transition complete
			}, 1040)

			setTimeout(function(){
				TweenMax.set($(".width_half"), {clearProps: "all"})
				TweenMax.set($(".current_size_half"), {clearProps: "all"})
				TweenMax.set($("h3"), {clearProps: "all"})
				TweenMax.set($(".sub_fader"), {clearProps: "all"})
				TweenMax.set($(".slide_button"), {clearProps: "all"})
				TweenMax.set($(".mobile_preview"), {clearProps: "all"})
				TweenMax.set($(".section_carousel"), {clearProps: "all"})
				// TweenMax.set($(".mobile_footer"), {clearProps: "all"})
			}, 1100)
		})
	}
})

// from subpage to homepage
var homepageTransition = Barba.BaseTransition.extend({
	start: function(){
		var _this = this;

		// _this.oldContainer

		_this.newContainerLoading
		.then(function(){
			var $oldContainer = $("#" + _this.oldContainer.id);
			var count = (($("main").hasClass("seven")) ? 7 : 8),
					distributedFooterHeight = $("footer").outerHeight()/count,
					targetHeight = ($(window).outerHeight()/count) - distributedFooterHeight;

			TweenMax.to($($oldContainer).find(".sub_fader"), 0.4, {opacity: 1, ease: Power3.easeIn})
			TweenMax.to($(".section_carousel"), 0.4, {opacity: 0, ease: Power3.easeIn})
			TweenMax.to($(".mobile_footer"), 0.4, {opacity: 0, ease: Power3.easeIn})
			TweenMax.to($($oldContainer).find(".slide_button"), 0.4, {opacity: 0, ease: Power3.easeIn})

			if(window.innerWidth > 768){
				TweenMax.to($($oldContainer).find(".candela_section"), 0.6, {delay: 0.4, height: targetHeight})
			}else{
				// mobile transition
				var currentTarget = $(($oldContainer).find(".candela_section.current_section"));
				targetHeight = $(".small_section").first().innerHeight();

				// scroll to top of this section
				$("main").animate({
					scrollTop:  $("main").scrollTop() + currentTarget.position().top
				}, 200)

				TweenMax.to(currentTarget, 0.6, {delay: 0.4, height: targetHeight})

				var currentIndex = $(".candela_section.current_section").index(),
				height = 0;
				$(".candela_section").each(function(){
					if($(this).index() < currentIndex){
						height += $(this).innerHeight();
					}
				})
				Site.mobileScrollPosition = height + 3;
			}


			setTimeout(function(){
				_this.done(); // transition complete
			}, 1040)

			setTimeout(function(){
				TweenMax.set($(".sub_fader"), {clearProps: "all"})
				TweenMax.set($(".slide_button"), {clearProps: "all"})
				TweenMax.set($(".section_carousel"), {clearProps: "all"})
			}, 1000)
		
		})
	}
})

window.onload = function(){
	console.log("\nSite by Íñigo Lopez and Lukas Eigler-Harding\n")
	// barba
	Site.homepage.init();
	Site.section.init();
	Barba.Pjax.start();
	
	Site.weather();
	Site.footer();
	Site.arrowNav();
	Site.loaded = true; //update site session status

	Barba.Pjax.getTransition = function() {
		var currentPage = $(".barba-container").attr("id");

		if(currentPage != "home_page"){
			if(Site.targetPage == "wordmark" || Site.targetPage == "logomark" || Site.targetPage == "close_section"){
				return homepageTransition; // to homepage
			}else{
				return interSubpageTransition; // subpage to subpage
			}
		}else{ // if from homepage
			return subpageTransition;
		}
	}
}