
jQuery(document).ready(function() {

    /*
        Product showcase background
    */
    $('.product-showcase').backstretch([
      "img/comming/2.jpg",
	  "img/comming/4.jpg"
    ], {duration: 5000, fade: 950});

    /*
        Countdown initializer
    */

	
	$(window).bind("load", function () {
				var footer = $("#footer");
				var pos = footer.position();
				var height = $(window).height();
				height = height - pos.top;
				height = height - footer.height();
				if (height > 0) {
					footer.css({
						'margin-top': height + 'px'
					});
				}
			});


});


