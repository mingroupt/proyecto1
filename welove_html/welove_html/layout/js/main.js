/* browser selection */
var ie8 = (jQuery.browser.msie && jQuery.browser.version == '8.0') ? true : false;

/* mobile */
var isMobile = false;
function isMobile_f() {
    var array_mobileIds = new Array('iphone', 'android', 'ipad', 'ipod');
    var uAgent = navigator.userAgent.toLowerCase();
	
    for (var i=0; i<array_mobileIds.length; i++) {
		if(uAgent.search(array_mobileIds[i]) > -1) {
			isMobile = true;
		}
    }
}
isMobile_f();

function init_menu() {
	$('nav.top_menu a').click(function(e) {
		if(isMobile) {
			var parent = $(this).parent();
			if(((!parent.hasClass('expanded')) || $(this).attr('href') == '#') && (parent.find('ul').length > 0)) {
				$(this).parent().toggleClass('expanded');
				e.preventDefault();
			}
		}
	});
	
	build_responsive_menu();
}

function build_responsive_menu() {
	$('header nav.top_menu').append('<select />');
	$('header nav.top_menu select').append('<option value="" selected="selected">Navigation</option>');
	
	$('nav.top_menu li').each(function() {
		var child = $(this);
		
		var lnk = child.find('> a').clone();
		lnk.find('span').remove();
		
		var level = child.parents('ul').length - 1;
		var dash = '';
		for(i = 0; i < level; i++) {
			dash += '-';
		}
		
		var path = lnk.attr('href');
		var text = ' ' + dash +  ' ' + lnk.text();
		var opt = '<option value="' + path + '">' + text + '</option>';
		$('header nav.top_menu select').append(opt);
	});
	
	
	$('header nav.top_menu select').change(function() {
		window.location = $(this).find('option:selected').val();
	});
}

function init_sticky_footer() {
	if(jQuery('.wrapper').hasClass('sticky_footer')) jQuery('#content').css('padding-bottom', jQuery('footer').outerHeight() + 'px');
}

function init_iframe_size() {
	var max_width = false;
	if(jQuery('body').outerWidth() >= 940) {
		var max_width = 540;
	}
	if(jQuery('body').outerWidth() < 940 && jQuery('body').outerWidth() >= 768) {
		var max_width = 680;
	}
	if(jQuery('body').outerWidth() < 768 && jQuery('body').outerWidth() >= 480) {
		var max_width = 400;
	}
	if(jQuery('body').outerWidth() < 480) {
		var max_width = 300;
	}
	
	jQuery('iframe').each(function() {
		if(max_width) {
			var iframe_width = jQuery(this).attr('width');
			var iframe_height = jQuery(this).attr('height');
			
			iframe_height = parseInt((max_width * iframe_height) / iframe_width);
			
			jQuery(this).attr('width', max_width);
			jQuery(this).attr('height', iframe_height);
		}
	});
}

function init_fields() {
	jQuery('.w_def_text').each(function() {
		var text = jQuery(this).attr('title');
		
		if(jQuery(this).val() == '') {
			jQuery(this).val(text);
		}
	});
	
	jQuery('.w_def_text').live('click', function() {
		var text = jQuery(this).attr('title');
		
		if(jQuery(this).val() == text) {
			jQuery(this).val('');
		}
		
		$(this).focus();
	});
	
	jQuery('.w_def_text').live('blur', function() {
		var text = jQuery(this).attr('title');
		
		if(jQuery(this).val() == '') {
			jQuery(this).val(text);
		}
	});
}

function init_pretty_photo() {
	if(!isMobile) {
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
			deeplinking : false,
			keyboard_shortcuts : false
		});
	}
}

function init_sorting() {
	var album = jQuery('.block_portfolio .portfolio_items').clone();
	
	jQuery('.block_filter a').click(function(e) {
		jQuery('.block_filter a').removeClass('active');
		jQuery(this).addClass('active');
		
		var filter_val = jQuery(this).attr('data-value');
		var filtered_data = '';
		
		if(filter_val == 'all') {
			filtered_data = album.find('.portfolio_item');
		}
		else {
			filtered_data = album.find('.portfolio_item[data-type*=' + filter_val + ']');
		}
		
		jQuery('.block_portfolio .portfolio_items').quicksand(filtered_data, function() {
			init_pretty_photo();
		});
		
		e.preventDefault();
	});
}
function init_choose_portfolio_type() {
	jQuery('#choose_type a').live('click', function(e) {
		var type = jQuery(this).attr('data-type');
		var old_type = jQuery('#choose_type a.current').attr('data-type');
		
		jQuery('.portfolio_item .image img').addClass('pic_masked').attr('data-mask', 'layout/images/mask_' + type + '.jpg');
		init_masked_pics();
			
		jQuery('.portfolio_item svg defs image').attr('xlink:href', 'layout/images/mask_' + type + '.jpg');
		
		jQuery('#choose_type a').removeClass('current');
		jQuery(this).addClass('current');
		
		e.preventDefault();
	});
}

//Audio player setup
AudioPlayer.setup('layout/plugins/audioplayer/player.swf', {
	width : '100%',
	transparentpagebg : 'yes',
	animation : 'no',
	
	bg : '303030',
	leftbg : 'cccccc',
	lefticon : '333333',
	voltrack : 'f2f2f2',
	volslider : '666666',
	rightbg : 'b4b4b4',
	rightbghover : '999999',
	righticon : '333333',
	righticonhover : 'ffffff',
	loader : 'f2533d',
	track : '303030',
	tracker : '303030',
	border : '999999',
	skip : '666666',
	text : 'ffffff'
});

function init_masked_pics() {
	jQuery('.pic_masked').svg();
}



jQuery(document).ready(function() {
	init_sticky_footer();
	init_iframe_size();
	init_fields();
	init_choose_portfolio_type();
});

jQuery(window).resize(function() {
	init_sticky_footer();
	init_iframe_size();
	init_fields();
});

jQuery(window).load(function() {
	init_sticky_footer();
});

jQuery(function() {
	init_menu();
	init_pretty_photo();
	init_masked_pics();
	
	$('.block_single_post .section_back a').click(function(e) {
		$.scrollTo(0, 500);
		
		e.preventDefault();
	});	
});