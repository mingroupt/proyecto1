// JavaScript Document


$(document).ready(function(){
//  Settings Panel 
	$('.open-buttton').click(function(){
	
		if($('.open-buttton').hasClass('closed')){
			$(this).parent('.settings-panel').stop().animate({left:225},400);
			$(this).removeClass('closed').addClass('opened');
		} else {
			$(this).parent('.settings-panel').stop().animate({left:0},400);
			$(this).removeClass('opened').addClass('closed');
		}
	});

	
// Bacground Patterns and Background Colour 
	
$('.settings-panel .bg_patterns ul li').click(function(){
		var thisBGcol = $(this).css('background-color');
		var thisBGimg = $(this).css('background-image');
		$('body').css('background-image', thisBGimg);
		$('body').css('background-color', thisBGcol);
	});
	
	// Card Pattern changes  Patterns and Background Colour 
	
	$('.settings-panel .card_patterns ul li').click(function(){
		var thisBGcol = $(this).css('background-color');
		var thisBGimg = $(this).css('background-image');
		$('.card-pattern').css('background-image', thisBGimg);
		$('.card-pattern').css('background-color', thisBGcol);
	});
	
		 $("ul.c_patterns li").click(function () {
			 var myClass = $(this).attr("class");
			if(myClass == 'default'){
			$('#color').attr('href','css/style.css');
		}else if(myClass == 'c1'){
		$('#color').attr('href','css/style1.css');
			} else if(myClass == 'c2'){
		$('#color').attr('href','css/style2.css');
			} else if(myClass == 'c3'){
		$('#color').attr('href','css/style3.css');
			} else if(myClass == 'c4'){
		$('#color').attr('href','css/style4.css');
			} else if(myClass == 'c5'){
		$('#color').attr('href','css/style5.css');
			} else if(myClass == 'c6'){
		$('#color').attr('href','css/style6.css');
			} else if(myClass == 'c7'){
		$('#color').attr('href','css/style7.css');
			} else if(myClass == 'c8'){
		$('#color').attr('href','css/style8.css');
			} else if(myClass == 'c9'){
		$('#color').attr('href','css/style9.css');
			} else if(myClass == 'c10'){
		$('#color').attr('href','css/style10.css');
			} else if(myClass == 'c11'){
		$('#color').attr('href','css/style11.css');
			} 
			else if(myClass == 'c12'){
		$('#color').attr('href','css/style12.css');
			} 
			else if(myClass == 'c13'){
		$('#color').attr('href','css/style13.css');
			} 
			else if(myClass == 'c14'){
		$('#color').attr('href','css/style14.css');
			} 
			else if(myClass == 'c15'){
		$('#color').attr('href','css/style15.css');
			} 
			else if(myClass == 'c16'){
		$('#color').attr('href','css/style16.css');
			} 
			else if(myClass == 'c17'){
		$('#color').attr('href','css/style17.css');
			} 
			else if(myClass == 'c18'){
		$('#color').attr('href','css/style18.css');
			} 
			else if(myClass == 'c19'){
		$('#color').attr('href','css/style19.css');
			} 
			else if(myClass == 'c20'){
		$('#color').attr('href','css/style20.css');
			} 
		
	});
	
	// Heading  Font and CSS Changes 
	
	$('#cfont').change(function(){
		var fontName = $('#cfont').val();
		if(fontName == 'default'){
			$('#customFont').attr('href','css/typography.css');
		}else if(fontName == 'cardo'){
			$('#customFont').attr('href','css/cardo.html');
			} else if(fontName == 'IMFell'){
			$('#customFont').attr('href','css/IMFell.html');
		} else if(fontName == 'Josefin'){
			$('#customFont').attr('href','css/Josefin.html');
		}  else if(fontName == 'OpenSansCondensed'){
			$('#customFont').attr('href','css/OpenSansCondensed.html');
		}   else if(fontName == 'OpenSans'){
			$('#customFont').attr('href','css/OpenSans.html');
		} else if(fontName == 'Vollkorn'){
			$('#customFont').attr('href','css/Vollkorn.html');
		} else if(fontName == 'DroidSans'){
			$('#customFont').attr('href','css/DroidSans.html');
		}
		else if(fontName == 'cabin'){
			$('#customFont').attr('href','css/cabin.html');
		}else {
			$('#customFont').attr('href','css/typography.css');
		}
	});
	
	
// Content Font and CSS Changes 
	
	$('#confont').change(function(){
		var fontName = $('#confont').val();
		if(fontName == 'default'){
			$('#contentfont').attr('href','css/arial_content.html');
		}else if(fontName == 'Arial'){
			$('#contentfont').attr('href','css/arial_content.html');
		} else if(fontName == 'Tahoma'){
			$('#contentfont').attr('href','css/tahoma_content.html');
		} else if(fontName == 'Verdana'){
			$('#contentfont').attr('href','css/verdana_content.html');
		}    else if(fontName == 'OpenSans'){
			$('#contentfont').attr('href','css/opensans_content.html');
		} 
	});
	
	});
