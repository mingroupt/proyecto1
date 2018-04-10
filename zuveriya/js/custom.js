//INITIALIZES PORTFOLIO ZOOM
$(document).ready(function () {
    $(".zoom img").css("opacity", "1");
    $(".zoom img").hover(function () {
        $(this).stop().animate({
            opacity: .5
        }, "slow");
    },

    function () {
        $(this).stop().animate({
            opacity: 1
        }, "slow");
    });
});

//INITIALIZES NAVIGATION SELECT LINKS
$(document).ready(function () {
    $('ul.navigation li').localScroll();

    $('ul.navigation li a').click(function () {
        $('ul.navigation li').removeClass('current');
        $(this).parent().addClass('current');
    });

    $('ul.navigation').mobileMenu({
        defaultText: 'Navigation',
        className: 'select-menu',
        subMenuDash: '&ndash;'
    });
});


//INITIALIZES LIGHTBOX PLUGIN
$(document).ready(function () {
    $("a[rel^='prettyPhoto']").prettyPhoto({
        opacity: 0.80,
        default_width: 500,
        default_height: 344,
        theme: 'dark_rounded',
        hideflash: false,
        modal: false,
        showTitle: false,
    });
});
//TOGGLE PANELS
$(document).ready(function(){
	$('.toggle-content').hide();  //hides the toggled content, if the javascript is disabled the content is visible

	$('.toggle-link').click(function () {
		if ($(this).is('.toggle-close')) {
			$(this).removeClass('toggle-close').addClass('toggle-open').parent().next('.toggle-content').slideToggle(300);
			return false;
		} 
		
		else {
			$(this).removeClass('toggle-open').addClass('toggle-close').parent().next('.toggle-content').slideToggle(300);
			return false;
		}
	});
});
//INITIALIZES CONTACT FORM
$(document).ready(function(){
	$("#contact_form").validate({
		meta: "validate",
		submitHandler: function (form) {
			
			var s_name=$("#name").val();
			var s_lastname=$("#lastname").val();
			var s_email=$("#email").val();
			var s_phone=$("#phone").val();
			var s_comment=$("#comment").val();
			$.post("contact.php",{name:s_name,lastname:s_lastname,email:s_email,phone:s_phone,comment:s_comment},
			function(result){
			  $('#sucessmessage').append(result);
			});
			$('#contact_form').hide();
			return false;
		},
		/* */
		rules: {
			name: "required",
			
			lastname: "required",
			// simple rule, converted to {required:true}
			email: { // compound rule
				required: true,
				email: true
			},
			phone: {
				required: true,
			},
			comment: {
				required: true
			}
		},
		messages: {
			name: "Please enter your name.",
			lastname: "Please enter your last name.",
			email: {
				required: "Please enter email.",
				email: "Please enter valid email"
			},
			phone: "Please enter a phone.",
			comment: "Please enter a comment."
		},
	}); /*========================================*/
});