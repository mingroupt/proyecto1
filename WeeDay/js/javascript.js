$(window).load(function() {
	 
	 
	// Opera has some troubles supporting this hr so we will disable it
	"use strict"; 
	if (window.opera) {
		$('hr').css('display', 'none');
	}
	
	//
	// Smooth scrolling effect
	//
	$('nav a').click(function(){
		$('html, body').animate({scrollTop: $(this.hash).position().top + "px"}, 600);
		return false;
	});
	
	//
	// prettyPhoto settings
	//
	$("a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'fast', /* fast/slow/normal */
		slideshow: 5000, /* false OR interval time in ms */
		autoplay_slideshow: false, /* true/false */
		opacity: 0.80, /* Value between 0 and 1 */
		show_title: true, /* true/false */
		allow_resize: true, /* Resize the photos bigger than viewport. true/false */
		default_width: 500,
		default_height: 344,
		counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
		theme: 'light_square', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		horizontal_padding: 20, /* The padding on each side of the picture */
		hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
		wmode: 'opaque', /* Set the flash wmode attribute */
		autoplay: true, /* Automatically start videos: True/False */
		modal: false, /* If set to true, only the close button will close the window */
		deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
		overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
		keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
		changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
		callback: function(){}, /* Called when prettyPhoto is closed */
		ie6_fallback: true,
		social_tools: false /* html or false to disable */
	});
	
	
	//
	// Timeline column managment
	// 
	
	// Used to determine where to add the element
	var leftH = 0, rightH = 0;
	
	$("#timeline article").each(function() {
		
		// Height of current post. By default it's in left column
		var htemp = $(this).outerHeight() + parseInt($(this).css("margin-bottom"), 10);
		
		// If the element is a not or big post the rules are different
		if ($(this).hasClass("timeline-note") || $(this).hasClass("timeline-big")) {
			if(leftH >= rightH) {
				// Just add an empty invisible div to fill the column so they would at the same height
				$('<div>').appendTo('#timeline .column.right').height(htemp + leftH - rightH);
				
				// Calculate where to put the note
				if($(this).hasClass("timeline-note")) {
					$(this).css({"position": "relative", "left": (450 - $(this).outerWidth() / 2) + "px"});
				}
			}
			else {
				// Adding an empty div to the right side and swapping with the note
				var $divToPlace = $('<div>').height(htemp + rightH - leftH);
				$(this).after($divToPlace);
				$(this).appendTo("#timeline .column.right");
				
				// Calculate where to put the note
				if($(this).hasClass("timeline-note")) {
					$(this).css({"position": "relative", "right": (30 + $(this).outerWidth() / 2) + "px"});
				}
			}
			leftH = rightH = 0;
		}
		else if (leftH <= rightH) {
			leftH += htemp;
		}
		else {
			rightH += htemp;
			$(this).appendTo("#timeline .column.right");
		}
	});
	
	
	//
	// Gallery code
	//
	$(".gallery ul").each(function() {
		$(this).width($(this).find("li").length * 160);
	});
	$(".icon:not(.unable)").live('click', function() {
		var toAdd;
		if($(this).hasClass("icon-left-open-big")) {
			toAdd = 160;
		}
		else if($(this).hasClass("icon-right-open-big")) {
			toAdd = -160;
		}
		
		if(parseInt($(this).parent().find(".gallery-images ul").css("left"), 10) + toAdd >= 0) {
			$(this).parent().find(".icon-left-open-big").addClass("unable");
		}
		else {
			$(this).parent().find(".icon-left-open-big").removeClass("unable");
		}
		
		if(parseInt($(this).parent().find(".gallery-images ul").css("left"), 10) + toAdd <= -$(this).parent().find(".gallery-images ul").width() + 640) {
			$(this).parent().find(".icon-right-open-big").addClass("unable");
		}
		else {
			$(this).parent().find(".icon-right-open-big").removeClass("unable");
		}
		
		$(this).parent().find(".gallery-images ul").animate({"left": (parseInt($(this).parent().find(".gallery-images ul").css("left"), 10) + toAdd) + "px"}, 200);
	});
	
	
	
	//
	// Contact form
	//
	
	// Custom radio button
	$('.radio-button').live('click', function() {
		if($(this).hasClass('true')) {
			$(this).removeClass('true');
			$(this).addClass('false');
			
			$('form input[name="attending"]').val('no');
		}
		else {
			$(this).removeClass('false');
			$(this).addClass('true');
			
			$('form input[name="attending"]').val('yes');
		}
	});
	
	// Checking the form data and sending via ajax call
	$('form input[type="submit"]').on('click', function() {
		
		var fname = $('form input[name="fname"]').val();
		var lname = $('form input[name="lname"]').val();
		var email = $('form input[name="email"]').val();
		var phone = $('form input[name="phone"]').val();
		var atten = $('form input[name="attending"]').val();
		var guest = $('form input[name="guests"]').val();
		var messg = $('form textarea').val();
		
		var hasError = false;
		var errorMsg = "";
		
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
		if(
			fname === null || fname === "" ||
			lname === null || lname === "" ||
			email === null || email === "" ||
			phone === null || phone === "" ||
			(atten === "yes" && (guest === "" || guest === null))) {
			hasError = true;
			errorMsg = "Please fill all fields. ";
		}
		
		if(!emailReg.test(email) || email === null || email === "") {
			hasError = true;
			errorMsg += "Please enter valid e-mail.";
		}
		
		var dataString = 'fname='+ fname +
		'&lname=' + lname +
		'&email=' + email +
		'&phone=' + phone +
		'&attending=' + atten +
		'&guests=' + guest +
		'&message=' + messg;
		
		if(!hasError) {
			$.ajax({
				type: "POST",
				url: "email.php",
				data: dataString, 
				success: function(){  
					$('#form-message').html('Form successfully submitted.');
				}   
			});
		}
		else {
			$('#form-message').html(errorMsg);
		}
		return false; 
	});
	
	
});