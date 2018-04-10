<?php

/*
Replace the value ("youremailhere@somedomain.com") of the variable $destination_email with your email address
*/
$to = "youremailhere@somedomain.com";
/*
This part sets the URLs of the supporting pages.
If you change the names of any of the pages, you will need to change the values here too.
*/
$feedback_page = "index.html";
$error_page = "message-failure.html";
$success_page = "message-success.html";

/*
This part loads the data from the form fields of the index.html into corresponding variables.
If you add additional form field, you will need to add it here too.
*/

$name = $_REQUEST['name'] ;
$email_address = $_REQUEST['email_address'] ;
$comments = $_REQUEST['message'] ;

/*
This function checks for email injection.
*/
function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}

/* 
If the user tries to access this script directly, redirects him to the feedback form.
*/
if (!isset($_REQUEST['email_address'])) {
header( "Location: $feedback_page" );
}

/* 
If the form fields are empty, redirect to the error page.
*/
elseif (empty($email_address) || empty($comments)) {
header( "Location: $error_page" );
}

/* 
If email injection is detected, redirect to the error page.
*/
elseif ( isInjected($email_address) ) {
header( "Location: $error_page" );
}

/* 
If all previous tests are passed, send the email then redirect to the success page.
*/
else {
mail( $to, $name, $comments, 'From: $email_address' );
header( "Location: $success_page" );
}

?>