$(document).ready(function() {

	$("a[href^='#']").click(function() { 
		var link=$(this).attr("href");
		$(".content").hide();
		$(link).fadeIn(500);
		$("#" + link).fadeIn(500);
	});

})