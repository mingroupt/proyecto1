<!DOCTYPE html>
<!--[if IEMobile 7 ]>    <html class="no-js iem7"> <![endif]-->
<!--[if (gt IEMobile 7)|!(IEMobile)]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8" />
        <title>Water Mobile</title>
        <meta name="description" content="" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
        <!-- Cleartype for Windows Phone - uncomment below 1 line to apply-->
        <!--<meta http-equiv="cleartype" content="on">-->

        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/touch/apple-touch-icon-144x144-precomposed.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/touch/apple-touch-icon-114x114-precomposed.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/touch/apple-touch-icon-72x72-precomposed.png" />
        <link rel="apple-touch-icon-precomposed" href="images/touch/apple-touch-icon-57x57-precomposed.png" />
        <link rel="shortcut icon" href="images/touch/apple-touch-icon.png" />

        <!-- Tile icon for Win8 (144x144 + tile color)  - uncomment below 2 lines to apply-->
        <!--<meta name="msapplication-TileImage" content="images/touch/apple-touch-icon-144x144-precomposed.png">-->
        <!--<meta name="msapplication-TileColor" content="#222222">-->


        <!-- For iOS web apps. Delete if not needed. https://github.com/h5bp/mobile-boilerplate/issues/94 -->
        <!--
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="">
        -->

        <!-- This script prevents links from opening in Mobile Safari. https://gist.github.com/1042026 -->
        <!--
        <script>(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")</script>
        -->
        
        <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:100,200,300,400' rel='stylesheet' type='text/css' />
        <link href='http://fonts.googleapis.com/css?family=Josefin+Sans:100,300' rel='stylesheet' type='text/css' />
        

        <link rel="stylesheet" href="css/normalize.css" />
        <!--<link rel="stylesheet" href="css/jquery.mobile-1.2.0.min.css">-->
        <link rel="stylesheet" href="css/jquery.mobile.structure-1.2.0.min.css" />
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        <link rel="stylesheet" href="css/flexslider.css" />
        <link rel="stylesheet" href="css/photoswipe/photoswipe.css" />
        
        <link rel="stylesheet/less" href="css/main.css" />
        <script src="js/less-1.3.3.min.js"></script>
        
        
        <!--<script src="js/vendor/zepto.min.js"></script>-->

        <script src="js/jquery-1.8.2.min.js"></script>
        <script src="js/jquery.mobile-1.2.0.min.js"></script>
        <script src="js/helper.js"></script>
        <script src="js/jquery.flexslider-min.js"></script>
        <script src="js/photoswipe/klass.min.js"></script>
        <script src="js/photoswipe/code.photoswipe.jquery-3.0.5.min.js"></script>
        <script src="js/jquery.easyListSplitter.js"></script>
        <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
        
        <script src="js/forms.js"></script>
        <script src="js/main.js"></script>
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[["_setAccount","UA-XXXXX-X"],["_trackPageview"]];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
            g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
            s.parentNode.insertBefore(g,s)}(document,"script"));
        </script>
        
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body class="my-body">
        <!-- Add your site or application content here -->

        <div id="contact-page" class="page" data-theme="a" data-role="page">
            
            <div id="header" data-role="header">
                <div class="margpage">
                    <h1>Contact Us</h1>
                    <a href="home.php" class="menu-button left">=</a>
                </div>
            </div>
            <div class="ui-body margpage">
                
                    <div class="content-box theme-text bottom-margin-killer type-1">
                        51st street, 5th Avenue<br />
                        New York City,<br />
                        The US
                        <div id="map" class="map hide" data-location="Sharjah Airport Free Zone"></div>
                    </div>
                    
                    <a href="#" class="map-control" data-target="#map"></a>
                    
                    <div class="content-box theme-text group type-1">
                        <a href="tel:+971551231231" class="left"> Phone </a>
                        <a href="tel:+971551231231" class="right"> +971551231231 </a>
                    </div>
                    
                    <div class="content-box theme-text group type-1">
                        <a href="mailto:someone@example.com" class="left"> Email </a>
                        <a href="mailto:someone@example.com" class="right"> someone@example.com</a>
                    </div>
                    <div class="border"></div>
                    
                    <div class="content-box theme-text group type-1">
                        <div class="success-message message">Thank you for contacting us.</div>
                        <div class="title"> Write To Us </div>
                        <form action="send-email.php" method="post" />
                            <input type="text" id="contact-name" required="" name="contact-name" class="input" placeholder="Name" />
                            <input type="email" id="contact-email" required="" name="contact-email" class="input" placeholder="Email" />
                            <input type="tel" id="contact-tel" name="contact-tel" class="input" placeholder="Phone" />
                            <textarea id="contact-message" required="" name="contact-message" class="textarea" placeholder="Message"></textarea>
                            
                            <input type="submit" class="button" data-role="none" id="submit" name="submit" value="Send" />
                        </form>
                    </div>

            </div>
            
            
                        <div id="footer" class="footer">
                <div class="padpage group">
                    <div class="social left ">
                        <ul class="child-left">
                            <li> <a href="#" class="twitter" title="Follow us on Twitter"></a> </li>
                            <li> <a href="#" class="facebook" title="Like us on Facebook"></a> </li>
                            <li> <a href="#" class="linkedin" title="Follow us on Linkedin"></a> </li>
                        </ul>
                    </div>
                    <div class="slogan right">
                        You start the ending...
                    </div>
                </div>
            </div>            
        
        </div>


        
        
    </body>
</html>
