jQuery(document).ready(function() { 
	jQuery('.gallery-right').click(function() {
		jQuery('.gallery').scrollTo('+=100', 600);
	});
	jQuery('.gallery-left').click(function() {
		jQuery('.gallery').scrollTo('-=100', 600);
	});
	jQuery('.blog-right').click(function() {
		jQuery('.blog').scrollTo('+=382', 600);
	});
	jQuery('.blog-left').click(function() {
		jQuery('.blog').scrollTo('-=382', 600);
	});
	jQuery('.portfolio-right').click(function() {
		jQuery('.portfolio').scrollTo('+=380', 600);
	});
	jQuery('.portfolio-left').click(function() {
		jQuery('.portfolio').scrollTo('-=380', 600);
	});
	jQuery('#nav a').bind('click', function(e) {
		e.preventDefault();
		var href = jQuery(this).attr('href');
		jQuery('html, body').scrollTo(jQuery(href), 600);
	});
	jQuery('.section').waypoint({
		offset: '20%',
		handler: function(direction) {
					if(direction == 'down') {
						jQuery('#nav li').removeClass('active');
						jQuery('#nav a[href="#' + jQuery(this).attr('id') + '"]').parent().addClass('active');
					}
				}
	});
	jQuery('.section').waypoint({
		offset: -10,
		handler: function(direction) {
					if(direction == 'up') {
						jQuery('#nav li').removeClass('active');
						jQuery('#nav a[href="#' + jQuery(this).attr('id') + '"]').parent().addClass('active');
					}
				}
	});
	var width = 1140;
	jQuery(window).resize(function() {
		width = jQuery(window).width();
		if(width > 811)
			jQuery('#nav').show();
	});
	jQuery('#nav-toggle').click(function() {
		jQuery('#nav').slideToggle(400);
	});
	jQuery('#hide-contact-form').click(function() {
		jQuery('#contact-form-container').hide();
		jQuery('#show-contact-form').show();
		return false;
	});
	jQuery('#show-contact-form').click(function() {
		jQuery('#contact-form-container').show();
		jQuery('#show-contact-form').hide();
	});
	jQuery('.read-more').click(function() {
		jQuery(this).parent('article').parent('div').hide();
		var id = jQuery(this).parent('article').attr('id').replace("blog-excerpt-", "");
		jQuery('#blog-post-' + id).show('slow');
		jQuery('#blog-section .arrow-area').hide('slow');
		jQuery('.blog-go-back').show('slow');
		return false;
	});
	jQuery('.blog-go-back').click(function() {
		jQuery('.blog div').show('slow');
		jQuery('#blog-section .arrow-area').show('slow');
		jQuery('.full-blog-post').hide('slow');
		jQuery('.blog-go-back').hide('slow');
		return false;
	});
});