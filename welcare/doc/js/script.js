// JavaScript Document

$(document).ready(function(){
	$('ul.home_side li:odd').css('margin-right', 0);

	$('.input_field').each(function(){
	 
		this.value = $(this).attr('title');
		$(this).addClass('text-label');
	 
		$(this).focus(function(){
			if(this.value == $(this).attr('title')) {
				this.value = '';
				$(this).removeClass('text-label');
			}
		});
	 
		$(this).blur(function(){
			if(this.value == '') {
				this.value = $(this).attr('title');
				$(this).addClass('text-label');
			}
		});
	});

	/* header search bar */
	$('.search input[type="submit"]').click( function(){
		$('.search input[type="text"]').animate({width: '130px', 'padding':'0 5px'});
	}); 
    $(document).mouseup(function(e) {
        if($(e.target).parent(".search").length==0) {
            $('.search input[type="text"]').animate({width: '2px', 'padding':'0 0px'});
        }
    });
	
	

	
	
	<!--accordion code -->
	/* Listing Page Script */
	$('.expand').click(function(){
		var parent = $(this).parents('.content_container');
		$('.more-data', parent).slideToggle('slow');
		return false;
	}); // Expand Function for More Details on Listing Page ends
})