(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	


	$mouseover = $('.mouseover');
	$click     = $('.click');
	$sub       = $('.submit');
	var i = 0;

	$(".mouseover").mouseover(function() {
		// because having it get taller and taller was annoying
		if (i == 0){
			i= i+1;
			$(".mouseover").height($(this).height() + 50);
		}

		$(".mouseover").css("font-weight", "200");
		$(".mouseover").css("font-size", "65pt");


		$(".mouseover").html('Scrooge McDuck!');
		
	});

	$(".click").click(function() {
		$(".click").html('<p>Peace Out!</p>')
		$(".click").fadeOut(1500);
		return false;
	});

	$sub.on('submit', function(e) {
		e.preventDefault();

		var input = $('#form').val();
		if (input!==""){
			$(".submit").append("<h2>Congratulations! You\'ve entered some text!</h2>");

			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
		}
		
	});

	// Was this supposed to just fade in after a delay?  I hope so.  That's what it does.

	$(document).on("ready", function() {
		//$(".timeout").fadeIn("slow");
		 setTimeout(function(){
		 	$(".timeout").fadeIn("slow");
		 }, 3000);

	});

})(jQuery);