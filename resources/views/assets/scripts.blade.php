<script src="js/proyecto.js"></script>
<script src="owl-carousel/owl.carousel.js"></script>


    <script>
    $(document).ready(function() {
      $("#owl-demo").owlCarousel({
        autoPlay: 2000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });

	  $('nav ul li a').click(function(){
        var el = $(this).attr('href');
        var elWrapped = $(el);  
        scrollToDiv(elWrapped,0);
        return false;    
    });

    function scrollToDiv(element,navheight){
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
			$('body,html').animate({
						scrollTop: totalScroll
			}, 500);
    }
    });
    /*function close_nav()
    {
      document.getElementById('eventica_menu_button').className="menu-toggle radius hide-for-large-up";
      document.getElementById('eventica_menu_nav').style.display="none";
    }*/
    </script>
	  <script src="js/jquery.nicescroll.js"></script>

  </body>
</html>