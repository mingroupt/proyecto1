jQuery.supportSvg = function()
{
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
};

jQuery.fn.svg = function()
{
	if(jQuery.supportSvg()) {
		this.filter(':not(.mask_initialized)').each(function(i) {
			var image = jQuery(this).attr('src');
			var mask = jQuery(this).attr('data-mask');
			var width = jQuery(this).attr('width');
			var height = jQuery(this).attr('height');
			
			var svgContent = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + width + ' ' + height + '" width="' + width + '" height="' + height + '" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><mask id="mask_' + i + '"><image xlink:href="' + mask + '" x="0" y="0" width="' + width + '" height="' + height + '" /></mask></defs><image xlink:href="' + image + '" mask="url(#mask_' + i + ')" x="0" y="0" width="' + width + '" height="' + height + '" /></svg>';
			
			jQuery(this).parent().append(svgContent);
			jQuery(this).addClass('mask_initialized');
		});
		
		return
	}
};