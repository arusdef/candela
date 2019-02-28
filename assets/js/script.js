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

  },
  onLeave: function(){

  }
});


window.onload = function(){

	console.log("\nSite by Íñigo Lopez and Lukas Eilger-Harding\n")
	// barba
	Homepage.init();
	Section.init();
	Barba.Pjax.start();
	Site.loaded = true; //update site session status

	Barba.Pjax.getTransition = function() {
		var currentPage = $(".barba-container").attr("id");
		if(currentPage != "home_page"){
			
		}else{
			
		}
	}
}