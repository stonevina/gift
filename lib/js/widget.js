jQuery.noConflict();
jQuery(function($) {
	
	// When to show the scroll link
	// higher number = scroll link appears further down the page	
	var upperLimit = 1200; 
		
	// Our scroll link element
	var scrollElem = $('a#scroll-to-top').addClass("rocketLevel0");
	
	// Scroll to top speed
	var scrollSpeed = 1000;
	
	var flag = false;
	
	// Show and hide the scroll to top link based on scroll position	
	scrollElem.hover(function() {
		$(this).addClass("rocketLevel1");
	}, function() {
		$(this).removeClass("rocketLevel1");
	}).hide();
	
	$(window).scroll(function () { 			
		var scrollTop = $(document).scrollTop();		
		if ( scrollTop > upperLimit ) {
			scrollElem.stop().fadeTo(300, 1, function() {
				$(this).css("bottom","30px");
			}); // fade back in			
		}
	});

	// Scroll to top animation on click
	$(scrollElem).click(function(){
		scrollElem.addClass("rocketLevel2");
		$('html, body').animate({scrollTop : 0}, scrollSpeed, function() {
			scrollElem.animate({bottom : 1000}, 2000, function(){
				scrollElem.removeClass("rocketLevel2").addClass("rocketLevel0");
			});
		}); 
		return false; 
	});

}); 
