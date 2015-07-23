
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <title>Eventica Staff Agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- CSS -->
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
		<link rel="stylesheet" href="css/proyecto.css">
        <link rel="stylesheet" href="css/test/coming-soon-style.css">
		<link rel="stylesheet" href="css/foundation-icons.css" />
		<script src="js/modernizr.custom.34978.js"></script>
		<link rel="stylesheet" type="text/css" href="css/blur.css" />

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

        <link rel="shortcut icon" href="img/favicon.ico">
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">
		
		<link rel="stylesheet" href="css/demo.css">
		<link rel="stylesheet" href="css/jquery.galereya.css">
		<style>
		.galereya-top {
			position: fixed;
			background: #f6f6f6;
			background: rgba(246, 246, 246, 0.7);
		}
		</style>
		
		
    </head>

    <body style="border-top: 3px solid #fff;">
	
        <!-- Header -->
        <div class="container">
            <div class="header row" style="border-bottom: 3px solid #ffffff;" >
                <div class="large-4 columns">
                    <a href="index.php"><img src="img/logo4.png" style="width:100%;margin-top:10px;"></a>
                </div>
                <div class="tel-skype large-8 columns show-for-large">
                    <p><i class="step fi-telephone size-72"></i> Phone: 0039 123 45 679 </p>
                </div>
            </div>
        </div>

 <div class="ib-container show-for-large-only" id="ib-container" align="center" style="background-color:#ffffff;color:#000;margin-top:30px;">	
 <?php
					for($c=1;$c<31;$c++){
						print'<article class="large" style="background: url(img/Vim/'.$c.'.jpg) no-repeat center center ; -webkit-background-size: 100% 100%; -moz-background-size: 100% 100%;  -o-background-size: 100% 100%; background-size: 100% 100%;">
					<div class="row" >
					<span><!--<p style="font-size:1rem;"><a id="zoom_div_title" target="_blank" href="#"><h2>Title</h2></a></p></span>
					</div>
					<div class="row">
						<h4 id="zoom_div_text">Place</h4>
					</div>
					<div class="row">
						<h4 id="zoom_div_text">Description</h4>
					</div>
					<div class="row" align="center">
						<img src="img/Vim/'.$c.'.jpg" style="height:250px;"/>
					</div>-->
				</article>
						';
					}
				?> 
</div> 
 <div class="ib-container show-for-medium-only" id="ib-container" align="center" style="background-color:#ffffff;color:#000;">	
	<?php
					for($c=1;$c<31;$c++){
						print'<article class="medium" style="background: url(img/Vim/'.$c.'.jpg) no-repeat center center ; -webkit-background-size: 100% 100%; -moz-background-size: 100% 100%;  -o-background-size: 100% 100%; background-size: 100% 100%;">
					<div class="row" >
					<span><!--<p style="font-size:1rem;"><a id="zoom_div_title" target="_blank" href="#"><h2>Title</h2></a></p></span>
					</div>
					<div class="row">
						<h4 id="zoom_div_text">Place</h4>
					</div>
					<div class="row">
						<h4 id="zoom_div_text">Description</h4>
					</div>
					<div class="row" align="center">
						<img src="img/Vim/'.$c.'.jpg" style="height:250px;"/>
					</div>-->
				</article>
						';
					}
				?> 
</div> 


<div class="row show-for-small-only" style="height:1800px;">
	<div id="gallery"></div>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> 
		<script src="js/jquery.galereya.min.js"></script>
		<script>
            $(function() {
                $('#gallery').galereya({
                    load: function(next) {
                        $.getJSON('images.json', function(data) {
                            next(data);
                        });
                    }
                });
            });
        </script>
</div>  
		
<footer>
<section style="background-color:#181e25;">
      <div class="row" style="background-color:#181e25;">
    	<div class="large-4 columns" style="color:white;margin-top:25px;text-align:center;">
    		<span class="nowrap"><b>&copy; 2015</b></span>
        <span class="nowrap">Eventica.</span>
    	</div>
    	<div class="large-4 columns" style="margin-top:25px;text-align:center;" align="center">
    		<nav class="menu">
        <ul>
    		<li style="color:white;">|</li>
          <li><a style="color:white;" href="contact.php">Contact</a></li>
          <li><a style="color:white;" href="comming.php">Sign Up</a></li>
    	  <li style="color:white;">|</li>
        </ul>
      </nav>
    	</div>
    	<div class="large-4 columns" style="color:white;margin-top:25px;text-align:center;"  align="right">
    	<a style="color:#fff;" href="terms.php">Terms</a>|<a style="color:#fff;" href="pivacy.php">Privacy</a>
    	</div>
      </div>
    </section>
</footer>


        <!-- Javascript -->
		<!--<script src="js/proyecto.js"></script>
        <script src="js/jquery.js"></script>
        <script src="js/jquery.backstretch.min.js"></script>
        <script src="js/jquery.countdown.js"></script>
        <script src="js/vim.scripts.js"></script>-->
		
		
		<script type="text/javascript">
			$(function() {
				
				var $container	= $('#ib-container'),
					$articles	= $container.children('article'),
					timeout;
				
				$articles.on( 'mouseenter', function( event ) {
						
					var $article	= $(this);
					clearTimeout( timeout );
					timeout = setTimeout( function() {
						
						if( $article.hasClass('active') ) return false;
						
						$articles.not( $article.removeClass('blur').addClass('active') )
								 .removeClass('active')
								 .addClass('blur');
						
					}, 150 );
					
				});
				
				$container.on( 'mouseleave', function( event ) {
					
					clearTimeout( timeout );
					$articles.removeClass('active blur');
					
				});
			
			});
		</script>
    </body>

</html>

