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
        <div id="about-page" class="page" data-theme="a" data-role="page">
            <div id="header" data-role="header">
                <div class="margpage">
                    <!--<h2>Water</h2>-->
                    <h1>About Water</h1>
                    <a href="home.php" class="menu-button left">=</a>
                </div>
            </div>
            <div class="ui-body margpage">
                
                <div class="column-container column-2 group">
                    <p class="column">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    </p>
                    <p class="column">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    </p>
                </div>
                    
                <div class="flexslider">
                    <ul class="slides">
                        <li>
                            <img src="http://lorempixel.com/518/282/business/?x=1" alt="Info" />
                        </li>
                        <li>
                            <img src="http://lorempixel.com/518/282/business/?x=2" alt="Info" />
                        </li>
                    </ul>
                </div>
                <p class="border">
                    Aliquam augue mi, luctus at pharetra vel, lacinia dignissim ipsum. Maecenas luctus elit ac eros varius at molestie elit adipiscing. Etiam pretium, lectus vitae euismod hendrerit, quam nibh fringilla libero.
                </p>
                
                
                        
                <h2> Our Tweets </h2>
                
                <ul id="twitter_update_list" class="border">
                  <div style="text-align: center; width: 100%">
                    <img src="images/ajax-loader.gif" alt="loader" />
                  </div>
                </ul>
                <script type="text/javascript" src="http://twitter.com/javascripts/blogger.js"></script>
                <!-- link doesn't work anymore -->
                <!--<script type="text/javascript" src="http://twitter.com/statuses/user_timeline/rahul_vagadiya.json?callback=twitterCallback2&count=5"></script>-->
                <script type="text/javascript" src="https://api.twitter.com/1/statuses/user_timeline.json?screen_name=rahul_vagadiya&callback=twitterCallback2&count=10"></script>
                
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
