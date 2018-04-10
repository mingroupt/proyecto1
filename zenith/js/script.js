// Navigational Menu ddsmoothmenu
ddsmoothmenu.init({
	mainmenuid: "menu", //menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'main-menu', //class added to menu's outer DIV
	//customtheme: ["#1c5a80", "#18374a"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})

jQuery(document).ready(function($){
			//if (Modernizr.mq("screen and (max-width:480px)")) {
		    /*
			* Flexslider
			*/
			try{
				  jQuery('.jcarousel-container').flexslider({
				    animation: "slide",
				    easing: 'easeOutBounce',
				    animationLoop: true,
				    itemWidth: 220,
				    itemMargin: 20,
				    minItems: 1,
				    maxItems: 16,
				    useCSS: true,
				    touch: true,
				    controlNav: false
				  });
				
			}catch(e){

			}
			/*
			*	Loop, Single post Flex slider
			*
			*/

			try{
				jQuery('.featured-gallery, .sl-gallery').flexslider({
												animation : 'slide',
												controlNav : false,
												directionNav : true,
												animationLoop : true,
												slideshow : false,
												useCSS : false
				});
			}catch(e){

			}
			/*
			*	Portfolio item
			*/
			try{
				jQuery('.portfolio-gallery-item').flexslider({
												animation : 'slide',
												controlNav : false,
												directionNav : true,
												animationLoop : true,
												slideshow : false,
												useCSS : false
				});
			}catch(e){

			}

			/*
			*	Responsive Navigation
			*/

			selectnav('responsive-nav', {
			  label: '- Navigation Menu - ',
			  nested: true,
			  indent: '-'
			});
			
			/*
			* Testimonials
			*/
			try{
				jQuery('.testimonials').cycle({
					fx: 'slideY',
					slideResize: 0,
					timeout: 4000		
				});
			}catch(e){

			}
			/*
			* Accordion
			*/
			try{
			jQuery('.accordion-list li a').live('click',function(e){
				e.preventDefault();
				var $this   = jQuery(this);
				var div     = $this.parent().find('div');
				var allDivs = jQuery('.accordion-list li div');
				var speedSlide = 1000;

				if(div.is(':hidden')){
					allDivs.slideUp('fast');
					allDivs.parent().removeClass('active');

					div.slideDown(speedSlide);
					div.parent().addClass('active');
				}else{
					div.slideUp(speedSlide);
				}

			});
		    }catch(e){

		    }

		    /*
			* Scrolle to top
			*/
			try{
				jQuery('.topnav a').click(function(){
					jQuery('body,html').animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			}catch(e){

			}
			/*
			* Pretty Photo
			*/
			try{
				jQuery("a[rel^='prettyPhoto']").prettyPhoto();
			}catch(e){

			}

			/*
			*	Lazy Load Images
			*/
			try{
				jQuery("img.lazy").lazyload();
			}catch(e){
				
			}

			/*
			*	Contact Form
			* #contact
			*/

			try{
				jQuery('#contact').validate({
					submitHandler: function(form) {
						jQuery('#contact .message').hide();
						var ajaxurl = 'contact.php';
						var data = {
							action: 'contact_us',
							datas: jQuery(form).serialize()
						};

						jQuery.ajax({
							type: 'POST',
							url: ajaxurl,
							data: data,
							success: function(response){
								jQuery('#contact .message').text(response.error).css({'display' : 'inline-block'});	
							},
							dataType: 'json'
						});
						return false;
 					},
 					rules: {
 						c_name: {
 							 required: true,
      						 minlength: 3
 						},
 						c_mail: {
 							required: true,
 							email: true
 						},
 						c_message:{
 							required: true,
 							minlength: 20
 						}
 					}
				});			
			}catch(e){

			}

			/*
			*	Faqs
			*/
			try{
				jQuery('.faq-container').live('click', function(e){
					var $this = jQuery(this);
					if($this.find('.answer').is(':hidden')){
						$this.find('.answer').slideDown('slow');
					}else{
						$this.find('.answer').slideUp('slow');					
					}
				});
		    }catch(e){
		    	
		    }
		    /*
		    *	Tabs
		    */
		    try{
				jQuery('.tabs_container .tabs').tabs('.tabs_container .tab_content', {
										initialIndex : 0,
										effect: 'slide'
				});
			}catch(e){
			}

			/*
			*	Twitter Feed
			*/
			try{
				var tweetU = 'envatowebdesign', 
					tweetC = 2;

				//Reset Tweet container
				jQuery('.latest-tweets ul').html('');

				//http://twitter.com/jolamar/status/267799371557511168
				jQuery.ajax({
						  url: 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name='+tweetU+'&count='+tweetC+'&callback=?',
						  dataType: 'json',
						  success: function(data){
						    jQuery.each(data, function(i,item){
						      ct = item.text;
						      // include time tweeted - thanks to will
						      mytime = item.created_at;
						      var strtime = mytime.replace(/(\+\S+) (.*)/, '$2 $1')
						      var mydate = new Date(Date.parse(strtime)).toLocaleDateString();
						      var mytime = new Date(Date.parse(strtime)).toLocaleTimeString();
						      ct = ct.replace(/http:\/\/\S+/g,  '<a href="$&" target="_blank">$&</a>');
						      twitterURL = "http://twitter.com/";
						      ct = ct.replace(/\s(@)(\w+)/g,    ' @<a href="'+twitterURL+'$2">$2</a>');
						      ct = ct.replace(/\s(#)(\w+)/g,    ' #<a href="'+twitterURL+'search?q=%23$2" target="_blank">$2</a>');

						      var html  = '<li><h3><a href="http://twitter.com/'+tweetU+'/status/'+item.id_str+'">';
						          html += item.user.name + ' - ' + relTime(item.created_at);
						          html += '</a></h3>';
						          html += '<p>'+ct+'</p></li>';
						          jQuery('.latest-tweets ul').append(html);    
						    });
						  }
						});
			}catch(e){
			}

			/*
			*	Flickr Feed
			*   you can get id from this page - http://idgettr.com/
			*/

			try{

				var flickrId 	= '44802888@N04',
					flircrCount = 9;

				jQuery('.latest-flicker ul').html('');
				jQuery('.latest-flicker ul').jflickrfeed({
					limit: flircrCount,
					qstrings: {
						id: flickrId
					},
					itemTemplate: 
					'<li>' +
						'<a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a>' +
					'</li>'
				});
			}catch(e){

			}


});
/*
*	Jquery GMAP3
*/
jQuery(function(){
	try{
        jQuery('.map #contactmap').gmap3({
          map:{
            options:{
              center:[36.999726,35.321573],
              zoom: 14,
                     mapTypeId: google.maps.MapTypeId.MAP,
                     /*mapTypeId: google.maps.MapTypeId.TERRAIN,*/
				     mapTypeControl: false,
				     mapTypeControlOptions: {
				       style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
				     },
				     navigationControl: true,
				     scrollwheel: false,
				     streetViewControl: false
            }
          },
          marker:{
            values:[
              {
              	latLng:[36.999726,35.321573]
              },
            ]
          }
        });
    }catch(e){

    }
});

jQuery(window).load(function(){
	//Isotope
	try{
		init_filter();
	}catch(e){

	}
});
function init_filter() {
	var $container = $('#filter-container');
	
	$container.isotope();
	
	$('#filter a').live('click', function(e) {
		var selector = $(this).attr('href');
		if(selector == 'all') selector = '*'
		else selector = '.' + selector;
		
		$container.isotope({
			filter : selector
		});
		
		$('#filter li').removeClass('active');
		$(this).parent().addClass('active');
		
		e.preventDefault();
	});
	
	$(window).resize(function() {
		$container.isotope('reLayout');
	});
}

 /*
 *  Tweet time
 */
 function relTime(time_value) {
         time_value = time_value.replace(/(\+[0-9]{4}\s)/ig,"");
         var parsed_date = Date.parse(time_value);
         var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
         var timeago = parseInt((relative_to.getTime() - parsed_date) / 1000);
         if (timeago < 60) return 'less than a minute ago';
         else if(timeago < 120) return 'about a minute ago';
         else if(timeago < (45*60)) return (parseInt(timeago / 60)).toString() + ' minutes ago';
         else if(timeago < (90*60)) return 'about an hour ago';
         else if(timeago < (24*60*60)) return 'about ' + (parseInt(timeago / 3600)).toString() + ' hours ago';
         else if(timeago < (48*60*60)) return '1 day ago';
         else return (parseInt(timeago / 86400)).toString() + ' days ago';

         return time_value;
}