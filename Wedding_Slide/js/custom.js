$(document).ready(function(){$("#form").validate({debug:false,rules:{name:"required",phone:"digits",message:"required",email:{required:true,email:true}},messages:{name:"Please let us know who you are.",email:"A valid email will help us get in touch with you."},submitHandler:function(form){$.post('email_process.html',$("#form").serialize(),function(data){$('#post_message').html(data)})}});$('.twitter').livetweet({'username':'jQuery','limit':1,'html_before':'<ul>','html_tweets':'<li>{text}<br>{date}</li><br />','html_after':'</ul>'});if(jQuery.hasOwnProperty("prettyPhoto")){$(".lightbox").prettyPhoto({animation_speed:'normal',theme:'pp_default',social_tools:''})}});jQuery(document).ready(function(){var $container=$('#portfolio-list');var $filter=$('#portfolio-filter');$container.isotope({filter:'*',layoutMode:'masonry',animationOptions:{duration:750,easing:'linear'}});$filter.find('a').click(function(){var selector=$(this).attr('data-filter');$container.isotope({filter:selector,animationOptions:{duration:750,easing:'linear',queue:false,}});return false});$filter.find('a').click(function(){var currentOption=$(this).attr('data-filter');$filter.find('a').removeClass('current');$(this).addClass('current')});var $container=$('#portfolio-list');$container.find('img').adipoli({'hoverEffect':'boxRainGrowReverse','startEffect':'transparent','animSpeed':200,});var $container3=$('#service-box');$container3.find('img').adipoli({'hoverEffect':'boxRainGrowReverse','startEffect':'transparent','animSpeed':200,})});$(function(){$('ul.arrowunderline li,.menu > .item > .item_content >h2,.logo').hover().click(function(){var $this=$(this);var name=this.className;$('#wrapper').animate({marginTop:-900},500,function(){var $this=$(this);switch(name){case'home':$('#home').show();$('#gift,#wedding,#portfolio,#contact').hide();break;case'logo':$('#home').show();$('#gift,#wedding,#portfolio,#contact').hide();break;case'wedding':$('#wedding').show();$('#home,#gift,#portfolio,#contact').hide();break;case'portfolio':$('#portfolio').show();$('#home,#wedding,#gift,#contact').hide();break;case'gift':$('#gift').show();$('#home,#wedding,#portfolio,#contact').hide();break;case'contact':$('#contact').show();$('#home,#wedding,#gift,#portfolio').hide();break}$this.animate({marginTop:50},500);$this.animate({marginTop:28},500);$this.animate({marginTop:50},500)})})});jQuery(document).ready(function(){$("ul.arrowunderline li").click(function(){$('ul.arrowunderline  li').removeAttr('id');$(this).attr('id','selected')})});jQuery(document).ready(function($){$('#nav-wrap').prepend('<div id="menu-icon">Menu</div>');$("#menu-icon").on("click",function(){$("#nav").slideToggle();$(this).toggleClass("active")})});$(window).load(function(){$('#preloader').fadeOut(300,function(){$('body').css('overflow','visible');$(this).remove()})});