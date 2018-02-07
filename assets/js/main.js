$(document).ready(function() {

	// Cache the window object
	var $window = $(window);

	// Parallax background effect
	$('section[data-type="background"]').each(function() {
		
		var $bgobj = $(this); //assigning the object

		$window.scroll(function() {

			// Determine the amount of scroll from the top
			// Divide this by the data-speed
			// yPos is the final value position of the backhround and it negative 
			// because it's opposing the user's scroll
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Coords for final background position
			var coords = '50% ' + yPos + 'px';

			// Move the background
			$bgobj.css({backgroundPosition: coords });

		}) // End window scroll
	}) // end each

});