jQuery(function($){
	
	$.supersized({
	
		// Functionality
		slideshow               :   1,			// Slideshow on/off
		autoplay				:	1,			// Slideshow starts playing automatically
		start_slide             :   1,			// Start slide (0 is random)
		stop_loop				:	0,			// Pauses slideshow on last slide
		random					: 	0,			// Randomize slide order (Ignores start slide)
		slide_interval          :   3000,		// Length between transitions
		transition              :   6, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	1000,		// Speed of transition
		new_window				:	1,			// Image links open in new window/tab
		pause_hover             :   0,			// Pause slideshow on hover
		keyboard_nav            :   1,			// Keyboard navigation on/off
		performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
		image_protect			:	1,			// Disables image dragging and right click with Javascript
												   
		// Size & Position						   
		min_width		        :   0,			// Min width allowed (in pixels)
		min_height		        :   0,			// Min height allowed (in pixels)
		vertical_center         :   1,			// Vertically center background
		horizontal_center       :   1,			// Horizontally center background
		fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait         	:   1,			// Portrait images will not exceed browser height
		fit_landscape			:   0,			// Landscape images will not exceed browser width
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		thumb_links				:	1,			// Individual thumb links for each slide
		thumbnail_navigation    :   0,			// Thumbnail navigation
		slides 					:  	[			// Slideshow Images
											{image : 'resource/02.jpg', thumb : 'resource/02.jpg'},  
											{image : 'resource/06.jpg', thumb : 'resource/06.jpg'},
											{image : 'resource/07.jpg', thumb : 'resource/07.jpg'},
											{image : 'resource/08.jpg', thumb : 'resource/08.jpg'},
											{image : 'resource/09.jpg', thumb : 'resource/09.jpg'},
											{image : 'resource/10.jpg', thumb : 'resource/10.jpg'},
											{image : 'resource/11.jpg', thumb : 'resource/11.jpg'},  
											{image : 'resource/12.jpg', thumb : 'resource/12.jpg'},  
											{image : 'resource/13.jpg', thumb : 'resource/13.jpg'},
											{image : 'resource/16.jpg', thumb : 'resource/16.jpg'},
											{image : 'resource/17.jpg', thumb : 'resource/17.jpg'},
											{image : 'resource/18.jpg', thumb : 'resource/18.jpg'},
											{image : 'resource/19.jpg', thumb : 'resource/19.jpg'},
											{image : 'resource/20.jpg', thumb : 'resource/20.jpg'},
											{image : 'resource/21.jpg', thumb : 'resource/21.jpg'},
											{image : 'resource/22.jpg', thumb : 'resource/22.jpg'},  
											{image : 'resource/23.jpg', thumb : 'resource/23.jpg'},
											{image : 'resource/24.jpg', thumb : 'resource/24.jpg'},
											{image : 'resource/25.jpg', thumb : 'resource/25.jpg'},
											{image : 'resource/26.jpg', thumb : 'resource/26.jpg'},
											{image : 'resource/27.jpg', thumb : 'resource/27.jpg'},
											{image : 'resource/28.jpg', thumb : 'resource/28.jpg'},
											{image : 'resource/30.jpg', thumb : 'resource/30.jpg'},
											{image : 'resource/31.jpg', thumb : 'resource/31.jpg'},
											{image : 'resource/32.jpg', thumb : 'resource/32.jpg'}
									],
									
		// Theme Options			   
		progress_bar			:	1,			// Timer for each slide							
		mouse_scrub				:	0		
	});
});