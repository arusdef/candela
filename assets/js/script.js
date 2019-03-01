/* candela */
/* site by lukas eigler-harding */

var Site = {};

Site.homepage = function(){	}

// basic barba:
var Homepage = Barba.BaseView.extend({
  namespace: 'home_page',
  onEnter: function() {
		    
  },
  onEnterCompleted: function() {
    if(!Site.loaded){ // if first session load
	    
    }else{ // if visiting the homepage through another page of the site
    	
    }
    Site.homepage()
  }
});

var Section = Barba.BaseView.extend({
  namespace: 'section_page',
  onEnter: function() {
		
  },
  onEnterCompleted: function(){

  	// run slideshow if mobile

  	var $carousel = $('.section_carousel');

  	if(window.outerWidth > 768){
  		console.log("testing!")
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

var subpageTransition = Barba.BaseTransition.extend({
	start: function(){
		var _this = this;

		// _this.oldContainer

		_this.newContainerLoading
		.then(function(){

			// _this.newContainer

			// once container has loaded
			console.log("container done loading!")

			_this.done(); // transition complete

		})


	}
})



window.onload = function(){

	console.log("\nSite by Íñigo Lopez and Lukas Eilger-Harding\n")
	// barba
	Homepage.init();
	Section.init();
	Barba.Pjax.start();
	Site.loaded = true; //update site session status

	Barba.Pjax.getTransition = function() {
		var currentPage = $(".barba-container").attr("id");

		return subpageTransition;

		if(currentPage != "home_page"){
			
		}else{
			
		}
	}
}