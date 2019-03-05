/* candela */
/* site by lukas eigler-harding */

var Site = {};

Site.targetPage = "";
Site.loaded = false;

Site.weather = function(){
	$.ajax({
	  url: "http://api.openweathermap.org/data/2.5/weather?lat=20.21&lon=-87.49&appid=2ef957d7223cdcc456536d6972b9f272",
	  dataType: "json"
	}).done(function(results) {

	  var kelvin = results.main.temp,
	  		celsius = Math.round(kelvin - 273.15),
	  		fahrenheit = Math.round((celsius * (9/5)) + 32), 
	  		weathericonId = results.weather[0].icon,
	  		idOptions = ["01d", "01n", "02d", "02n", "800"];

	  if(idOptions.includes(weathericonId)){ // append sun icon
	  	$("#temp").find("h3").removeClass("cloudy")
	  }
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

Site.footer = function(){
	// contact
	$("#contact_tab").on('click', function(){
		$(this).toggleClass("active")
		$("#contact_section").toggleClass('active')
		$("#trailer_tab").removeClass("active")
		$("#vimeo_video").removeClass("show")
		$("main").removeClass("video")
	})

	// trailer on load
	if($("#vimeo_video").hasClass("show")){
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
	$("#trailer_tab, #exit_video").on('click', function(){
		$("#contact_tab, #contact_section").removeClass('active')
		$("#trailer_tab").toggleClass("active")
		$("#vimeo_video").toggleClass("show")
		$("#vimeo_video").toggleClass("revealed")
		$("main").toggleClass("video")

	})
}

// basic barba:
Site.homepage = Barba.BaseView.extend({
  namespace: 'home_page',
  onEnter: function() {
  	Site.targetPage = ""; // reset target link from homepage
  },
  onEnterCompleted: function() {
    if(!Site.loaded){ // if first session load
    	var delay = 0;
    	$(".fader").each(function(){
    		TweenMax.to($(this), 0.3, {delay: delay, opacity: 0, ease: Power4.easeIn})
    		delay += 0.2;
    	})
    }else{ // if visiting the homepage through another page of the site	
    	TweenMax.to($(".fader"), 0.3, {opacity: 0, ease: Power4.easeIn})
    }

    $("a").on('click', function(){
			Site.targetPage = (($(this).attr("id") != null || $(this).attr("id") != undefined)? $(this).attr("id") : "");
		})

  }
});

Site.section = Barba.BaseView.extend({
  namespace: 'section_page',
  onEnter: function() {
		Site.targetPage = ""; // reset target link from homepage
  },
  onEnterCompleted: function(){

		$("a").on('click', function(){
			Site.targetPage = (($(this).attr("id") != null || $(this).attr("id") != undefined)? $(this).attr("id") : "");
			
		})

  	// run slideshow if not mobile
  	TweenMax.to($(".sub_fader"), 0.4, {opacity: 0, ease: Power4.easeIn})
  	
  	var $carousel = $('.section_carousel');

  	if(window.innerWidth > 768){
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

  		$(".next").on('click', function(){
  			$carousel.flickity('next', true)
  		})

  		$(".previous").on('click', function(){
  			$carousel.flickity('previous', true)
  		})
  	}
  },
  onLeave: function(){

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
					targetSectionHeight = ($(window).outerHeight()*0.7) - distributedFooterHeight,
					smallSectionHeight = ((($(window).outerHeight()*0.3) - $("header").outerHeight())/(count - 1)) - distributedFooterHeight;
			// fade out title and content
			TweenMax.to($(".fader"), 0.4, {opacity: 1, ease: Power3.easeIn})
			TweenMax.to($("h1"), 0.4, {opacity: 0, ease: Power3.easeIn})
			// resize containers
			$oldContainer.find(".section_link").each(function(){
				if($(this).attr('id') == targetSection){
					TweenMax.to($(this), 0.6, {height: targetSectionHeight, ease: Power3.easeIn})
				}else{
					TweenMax.to($(this), 0.6, {height: smallSectionHeight, ease: Power3.easeIn})
				}
			})

			setTimeout(function(){
				_this.done();
			}, 640)

			setTimeout(function(){
				TweenMax.set($(".fader"), {clearProps: "all"})
				TweenMax.set($("h1"), {clearProps: "all"})
			}, 700)

		})
	}
})

// from subpage to subpage
var interSubpageTransition = Barba.BaseTransition.extend({
	start: function(){
		var _this = this;
		var targetId = "#" + Site.targetPage;
		_this.newContainerLoading
		.then(function(){
			var $oldContainer = $("#" + _this.oldContainer.id);
			var count = (($("main").hasClass("seven")) ? 7 : 8),
					distributedFooterHeight = $("footer").outerHeight()/count,
					targetSectionHeight = ($(window).outerHeight()*0.7) - distributedFooterHeight,
					smallSectionHeight = ((($(window).outerHeight()*0.3) - $("header").outerHeight())/(count - 1)) - distributedFooterHeight;

			TweenMax.to($(".sub_fader"), 0.4, {opacity: 1, ease: Power3.easeIn})
			TweenMax.to($(".button"), 0.4, {opacity: 0, ease: Power3.easeIn})

			TweenMax.to($oldContainer.find(".current_section"), 0.6, {delay: 0.3, height: smallSectionHeight})
			TweenMax.to($oldContainer.find(targetId), 0.6, {delay: 0.3, height: targetSectionHeight})

			setTimeout(function(){
				_this.done(); // transition complete
			}, 920)

			setTimeout(function(){
				TweenMax.set($(".sub_fader"), {clearProps: "all"})
				TweenMax.set($(".button"), {clearProps: "all"})
			}, 1000)
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
			TweenMax.to($($oldContainer).find(".button"), 0.4, {opacity: 0, ease: Power3.easeIn})


			TweenMax.to($($oldContainer).find(".candela_section"), 0.6, {delay: 0.3, height: targetHeight})

			setTimeout(function(){
				_this.done(); // transition complete
			}, 920)

			setTimeout(function(){
				TweenMax.set($(".sub_fader"), {clearProps: "all"})
				TweenMax.set($(".button"), {clearProps: "all"})
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
	Site.loaded = true; //update site session status

	// Site.weather();
	Site.footer();


	Barba.Pjax.getTransition = function() {
		var currentPage = $(".barba-container").attr("id");

		if(currentPage != "home_page"){
			if(Site.targetPage == "wordmark" || Site.targetPage == "logomark"){
				return homepageTransition; // to homepage
			}else{
				return interSubpageTransition; // subpage to subpage
			}
		}else{ // if from homepage
			return subpageTransition;
		}
	}
}