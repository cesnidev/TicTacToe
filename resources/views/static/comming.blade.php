<?php session_start();?>
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <title>Eventica Staff Agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- CSS -->
        <!--<link rel="stylesheet" href="css/test/bootstrap.min.css">-->
		<link rel="stylesheet" href="css/foundation.css">
        <link rel="stylesheet" href="css/test/coming-soon-style.css">
		<link rel="stylesheet" href="css/foundation-icons.css" />
		<script src="js/modernizr.custom.34978.js"></script>

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <link rel="shortcut icon" href="img/favicon.ico">
    </head>

    <body style="border-top: 3px solid #ffffff;">
	    <div id="EventicaModal" class="reveal-modal" data-reveal aria-labelledby="firstModalTitle" aria-hidden="true" role="dialog">
            <h2 id="firstModalTitle">Thank you !!</h2>
            <p>Your message was seccessfully sent.
        We will be contacting you in the next 48 hrs.</p>
            <a class="close-reveal-modal" aria-label="Close">&#215;</a>
        </div>
        <div id="EventicaModal_error" class="reveal-modal" data-reveal aria-labelledby="firstModalTitle" aria-hidden="true" role="dialog">
            <h2 id="firstModalTitle">Sorry !!</h2>
            <p>Please provide a valid email.</p>
            <a class="close-reveal-modal" aria-label="Close">&#215;</a>
        </div>


        <!-- Header -->
        <div class="container">
            <div class="header row" style="border-bottom: 3px solid #ffffff;" >
                <div class="large-4 columns">
                    <a href="index.php"><img src="img/logo4.png" style="width:100%;margin-top:10px;"></a>
                </div>
                <div class="tel-skype large-8 columns">
                    <p><i class="step fi-telephone size-72"></i> Phone: 0039 123 45 679 </p>
                </div>
            </div>
        </div>

        <!-- Coming Soon -->
        <div class="product-showcase">
                <div class="container">
                    <div class="row">
                        <div class="large-12 columns product-background">
                            <div class="row">
                                <div class="large-6 columns" align="center">
                                    <h1 style="font-family:'Century Gothic';color:#FFFFFF;font-weight:bold;">Coming Soon</h1>
                                    <div class="product-description">
                                        <div class="timer">
                                            <div class="datec"> 04/July/2015 </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="large-5 columns">
                                    <div class="product-description product-description-right">
                                        <div class="hide-for-small">
											<p class="eve_des">We are working very hard on the new version of our site. It will bring a lot of new features. Enter your email in the form below and we’ll notify you as soon as we’re ready:</p>
										</div>
										
                                        <form action="functions/send.php" method="post" class="subscribe" data-abide>

                                            <label>
                                              <input type="email" name="email" class="email" placeholder="Your email" required>
                                            </label>
                                            
                                            <button class="button read_more radius" type="submit">Subscribe!</button>
                                        </form>
                                    </div>
                                </div>
								<div class="large-1 columns">
								</div>
                            </div>
                        </div>
                    </div>
                </div>
</div>
        
<footer id="footer" style="background-color:#293440;">
        
<section style="background-color:#293440;">
      <div class="row" style="background-color:#293440;">
        <div class="large-4 columns" style="color:white;margin-top:25px;text-align:center;" align="left">
            <span class="nowrap"><b>&copy; 2015</b></span>
        <span class="nowrap">Eventica.</span>
        </div>
        <div class="large-4 columns hide-for-small" style="margin-top:25px;" align="center">
            <nav class="menu">
        <ul>
            <li style="color:white;">|</li>
          <li><a style="color:white;" href="contact.php">Contact</a></li>
          <li><a style="color:white;" href="comming.php">Sign Up</a></li>
          <li style="color:white;">|</li>
        </ul>
      </nav>
        </div>
        <div class="large-4 columns" style="color:white;margin-top:15px;text-align:center;"  align="right">
        <a style="color:#fff;" href="terms.php">Terms</a>|<a style="color:#fff;" href="privacy.php">Privacy</a>
        </div>
      </div>
    </section>

</footer>


        <!-- Javascript -->
        <script src="js/jquery.js"></script>
        <script src="js/jquery.backstretch.min.js"></script>
        <script src="js/vim.scripts.js"></script>
        <script src="js/foundation.min.js"></script>
        <script>
      $(document).foundation();
      </script>

    <?php
    if(isset($_SESSION['popup_msg']) and !empty($_SESSION['popup_msg']) and $_SESSION['popup_msg'] =='ok')
    {?>
        <script type="text/javascript">
            $(window).load(function(){
                $('#EventicaModal').foundation('reveal', 'open');
            });
        </script>
    <?php 
    $_SESSION['popup_msg']="";
    }
    else if(isset($_SESSION['popup_msg']) and !empty($_SESSION['popup_msg']) and $_SESSION['popup_msg'] =='error')
    {?>
        <script type="text/javascript">
            $(window).load(function(){
                $('#EventicaModal_error').foundation('reveal', 'open');
            });
        </script>
    <?php $_SESSION['popup_msg']=""; }else{} ?>
    </body>

</html>

