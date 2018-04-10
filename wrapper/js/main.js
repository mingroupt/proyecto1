jQuery(document).ready(function() {
	
/*-----------------------------------------------------------------------------------*/
/*	Countdown
/*-----------------------------------------------------------------------------------*/ 

	launchTime = new Date(); // Set launch: [year], [month], [day], [hour]...
					launchTime.setDate(launchTime.getDate() + 15); // Add 15 days
				$("#countdown").countdown({until: launchTime, format: "odHMS"});
	





	

	

	
	
	
	
/*-----------------------------------------------------------------------------------*/
/*	Opacity changes
/*-----------------------------------------------------------------------------------*/

	jQuery(".img-opacity").hover(function() {
		jQuery(this).stop().animate({
			opacity: 0.4
			}, 200);
	},function() {
		jQuery(this).stop().animate({
			opacity: 1
			}, 500);
	});
	
	




/*-----------------------------------------------------------------------------------*/
/*	FitVids
/*-----------------------------------------------------------------------------------*/
        $(".container").fitVids();
       
				




/*-----------------------------------------------------------------------------------*/
/*	Contact 
/*-----------------------------------------------------------------------------------*/
   
	//if submit button is clicked
	$('#submit').click(function () {		
		
		//Get the data from all the fields
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var website = $('input[name=website]');
		var comment = $('textarea[name=comment]');

		//Simple validation to make sure user entered something
		//If error found, add hightlight class to the text field
		if (name.val()=='') {
			name.addClass('hightlight');
			return false;
		} else name.removeClass('hightlight');
		
		if (email.val()=='') {
			email.addClass('hightlight');
			return false;
		} else email.removeClass('hightlight');
		
		if (comment.val()=='') {
			comment.addClass('hightlight');
			return false;
		} else comment.removeClass('hightlight');
		
		//organize the data properly
		var data = 'name=' + name.val() + '&email=' + email.val() + '&website=' + 
		website.val() + '&comment='  + encodeURIComponent(comment.val());
		
		//disabled all the text fields
		$('.text').attr('disabled','true');
		
		//show the loading sign
		$('.loading').show();
		
		//start the ajax
		$.ajax({
			//this is the php file that processes the data and send mail
			url: "process.php",	
			
			//GET method is used
			type: "GET",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {					
					//hide the form
					$('.form').fadeOut('slow');					
					
					//show the success message
					$('.done').fadeIn('slow');
					
				//if process.php returned 0/false (send mail failed)
				} else alert('Sorry, unexpected error. Please try again later.');				
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
	});	
	
	
	

/*-----------------------------------------------------------------------------------*/
/*	curtains
/*-----------------------------------------------------------------------------------*/

 $('.curtains').curtain({
           scrollSpeed: 450,
           controls: '.menu',
           curtainLinks: '.curtain-links'
       });





 
/*=========================================================================
 Tweets
========================================================================= */

    function urlToLink(text) {
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(exp, "<a href='$1'>$1</a>");
    }
    function relTime(time_value) {
        time_value = time_value.replace(/(\+[0-9]{4}\s)/ig, "");
        var parsed_date = Date.parse(time_value);
        var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
        var timeago = parseInt((relative_to.getTime() - parsed_date) / 1000);
        if (timeago < 60) return 'less than a minute ago';
        else if (timeago < 120) return 'about a minute ago';
        else if (timeago < (45 * 60)) return (parseInt(timeago / 60)).toString() + ' minutes ago';
        else if (timeago < (90 * 60)) return 'about an hour ago';
        else if (timeago < (24 * 60 * 60)) return 'about ' + (parseInt(timeago / 3600)).toString() + ' hours ago';
        else if (timeago < (48 * 60 * 60)) return '1 day ago';
        else return (parseInt(timeago / 86400)).toString() + ' days ago';
    }

    $('#tweet-list').hide();
    var user = 'jpthemes'; // Set your twitter id
    var count = '5'; // How many feeds do you want. Recommended Max 10 Twitter Api

    $.getJSON('http://api.twitter.com/1/statuses/user_timeline/jpthemes.json?screen_name=' + user + '&count=' + count + '&callback=?',
    function(tweetdata) {
        var tl = $("#tweet-list");
        $.each(tweetdata,
        function(i, tweet) {
            tl.append("<li>&ldquo;" + urlToLink(tweet.text) + "&rdquo;&ndash; " + relTime(tweet.created_at) + "</li>");
        });
    });

    setTimeout(function() {
        $('.tweets p').hide();
        $('#tweet-list').show();

    },
    1000);		
	
			
			
			
			




});




