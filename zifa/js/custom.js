
/* ISOTOPE PORTFOLIO */

$(document).ready(function() {
// cache container
var $container = $('#portfolio_container');
// initialize isotope
$container.isotope({
itemSelector : '.pfolio_item',
});
// filter items when filter link is clicked
$('#filters a').click(function(){
var selector = $(this).attr('data-filter');
$container.isotope({ filter: selector });
return false;
});        
});

$(window).resize(function(){
var $filters = $("#filters")
$filters.find('li a.selected').trigger('click');
});

$(document).ready(function() {
$('#filters li a').click(function() {
$('#filters li a').removeClass('selected');
$(this).addClass('selected');
});
});

/* PORTFOLIO HOVER IMAGES */

$(document).ready(function () {
$('.picture a').hover(function () {
$(this).find('.image-overlay-zoom, .image-overlay-link').stop().fadeTo('fast', 1);
},function () {
$(this).find('.image-overlay-zoom, .image-overlay-link').stop().fadeTo('fast', 0);
});
});
	
$(window).load(function() {
  var $filters = $("#filters")
$filters.find('li a.selected').trigger('click');

});

$(document).ready(function(){
    $("a[class^='prettyPhoto']").prettyPhoto();
  });

