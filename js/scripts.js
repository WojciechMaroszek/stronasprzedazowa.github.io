$(document).ready(function(){

	$(".button, .button h3").mouseover(function() {
		$(".button").css("background", "#c8271c");
		$(".button h3").css("color", "#fff");
	}).mouseout(function() {
		$(".button").css("background", "#fff");
		$(".button h3").css("color", "#c8271c");
	});

});
$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();
	$('html, body').animate({
		 scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});

