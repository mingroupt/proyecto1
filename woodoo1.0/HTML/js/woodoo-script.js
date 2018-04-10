
$(document).ready(function($) {
	
	/* defines the Focus/Active state of the search field */
	$('#search input').bind('focus', function(){
    $(this).animate({'width':'150px', 'background-position':'150px'}, 70 );
	});
	
	/* defines the  Blur/Unactive state of the search field */
    $('#search input').bind('blur', function(){
    $(this).animate({'width':'110px', 'background-position':'110px'}, 70 );
	});
	
	/* Fades in all the content inside the wrapper when the document is loaded */
	$('#pageWrapper').fadeIn(2500);
	
	/* Adds a nice animation to the navigation elements */
	$(".navigation li a").hover(
	  function () {
		$(this).animate({'text-indent': '10px'}, 250);
	  }, 
	  function () {
		$(this).animate({'text-indent': '0'}, 250);
	  }
	);
	
	/* Defines Scrolling */
	/* Scrolling without effect */
	$(".scrollDefault").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});
	/* Scrolling with effect */
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000, 'easeInOutBack');
	});
	
	/* This function is triggering the skill bars animation */
	$(".triggeranimation").click(function() {
		
		/* Sets the width of the bar to 0%. When complete re-sets the width to some desired percentage and animates it slowly */
		/* html5 */
		$('.html5').animate({'width':'0%'}, 100, function() {
			$('.html5').animate({'width': '70%'}, 2500);
		  });
		  
		/* css3 */
		$('.css3').animate({'width':'0%'}, 100, function() {
			$('.css3').animate({'width': '60%'}, 2500);
		  });
		  
		/* jquery */
		$('.jquery').animate({'width':'0%'}, 100, function() {
			$('.jquery').animate({'width': '50%'}, 2500);
		  });
		  
		/* photoshop */
		$('.photoshop').animate({'width':'0%'}, 100, function() {
			$('.photoshop').animate({'width': '90%'}, 2500);
		  });	  
		
	});
	
	
	/* Assings preloader to portfolio and blog images */
	$(function(){
		$("#portfolioItemsList, #blogContentSection").preloader();	
	});
	
	/* Rollover effect on portfolio and blog images */	
	$('.round, .blogImgRC').hover(function(){
		$(this).children('.rollover, .blogImageRollover').stop().fadeTo(500, 0.8);
		},function(){
		  $(this).children('.rollover, .blogImageRollover').stop().fadeTo(500, 0);
		});
	
});

/* Checks if the browser supports placeholders, if it doesn't 
it creates them from the original placeholder values */

$(document).ready(function() {
	if(!Modernizr.input.placeholder){
		$("input").each(function(){
				if($(this).val()=="" && $(this).attr("placeholder")!=""){
					$(this).val($(this).attr("placeholder"));
					$(this).focus(function(){
						if($(this).val()==$(this).attr("placeholder")) $(this).val("");
					});
					$(this).blur(function(){
						if($(this).val()=="") $(this).val($(this).attr("placeholder"));
					});
				}
		});
	}
});
					
// jQuery Quicksand project categories filtering (Portfolio Filtering)
// Thanks to Sacha Greif - http://www.sachagreif.com/

jQuery(document).ready(function($){
 	// Clone applications to get a second collection
	var $data = $(".portfolioSortableContentWrapper").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.filter li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all-projects') {
			var $filteredData = $data.find('.project');
		} else {
			var $filteredData = $data.find('.project[data-type=' + filterClass + ']');
		}
		$(".portfolioSortableContentWrapper").quicksand($filteredData, {
			duration: 800,
			easing: 'easeInOutQuad'
	
		},	function(){
				//callback function to re-apply hover effects on cloned elements
				$(document).ready(function(){
				
				/* prettyPhoto re-initialize */
				$("a[rel^='prettyPhoto']").prettyPhoto({
					animationSpeed: 'normal', /* fast/slow/normal */
					opacity: 0.80, /* Value between 0 and 1 */
					showTitle: true /* true/false */
							});
				});
				
				// jQuery Rollover effect
				$('.round').hover(function(){
				$(this).children('.rollover').stop().fadeTo(500, 0.8);
			},function(){
				$(this).children('.rollover').stop().fadeTo(500, 0);
			});
		});		
		$(this).addClass("active"); 			
		return false;
	});
});

/* prettyPhoto Initialize */
$(document).ready(function(){
			$("a[rel^='prettyPhoto']").prettyPhoto({
				animationSpeed: 'normal', /* fast/slow/normal */
				opacity: 0.80, /* Value between 0 and 1 */
				showTitle: true /* true/false */
			});
});

/* jQuery Display Tweets Initialize */ 
	jQuery(function($){
        $(".tweet").tweet({
          avatar_size: 32,
          count: 3,
          username: "envato",
          template: "{text} » {retweet_action}"
        });
      }).bind("loaded", function(){
        $(this).find("a.tweet_action").click(function(ev) { window.open(this.href, "Retweet",'menubar=0,resizable=0,width=550,height=420,top=200,left=400');
        ev.preventDefault(); 
        });
      });

/* Un-comment this if you want thumbnails
jQuery(function($){
        $(".tweet").tweet({
          avatar_size: 32,
          count: 3,
          username: "envatowebdesign",
          favorites: true,
          loading_text: "loading list..."
        }).bind("loaded",function(){$(this).find("a").attr("target","_blank");});
      });
*/      

/* Checks if the browser supports text-shadow, if it doesn't 
it creates them */
$(document).ready(function() {
if (!Modernizr.textshadow) {
	  //$('.headerLogo').textshadow({useStyle: false});
	  // multiple shadows
	  //$('.headerLogo').textshadow('0 1px 0 #ffffff, 0 -1px 0 #4e2306');
	  $('.headerSubtitle').textshadow();
	  //$('.navLogo').textshadow();
	  //$('.navigation li a').textshadow();
	  //$('.circleDiv h1').textshadow();
	  //$('.homeContentSection p').textshadow();
	  //$('.footerContentSection h1').textshadow();
	  $('.footerContentSection p').textshadow();
	  $('.footerContentSection a').textshadow();
	  $('.copyright p').textshadow();
	  $('.tweet, .query').textshadow();
	  }
});	
      
/* jQuery Flickr Feed Setup 
   *Note that the photos are grouped into PrettyPhoto gallery2*
*/
$(document).ready(function(){

	$('#flickrgallerycontent').jflickrfeed({
		limit: 8,
		qstrings: {
			id: '52617155@N08'
		},
		itemTemplate: 
		'<div class="frame1 flickrimage first">' +
			'<div class="round2">'	+
				'<a href="{{image_b}}" rel="prettyPhoto[gallery2]" title="{{title}}" ><img width="53" height="43" src="{{image_s}}" alt="{{title}}" /></a>' +
			'</div>' +								
		'</div>'
		
	}, function(data) {
	$('#flickrgallerycontent a').prettyPhoto();
});
});


/* jQuery UI Initialize */
$(function() {
			$( "#accordion" ).accordion();
			$( "#tabs" ).tabs();
});


/* When everything is loaded, animate the topbar */
$(window).load(function() { $(function() { $("#topbar").animate({ marginTop: "0px"}, 500 );}); }); 
