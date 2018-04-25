$(document).ready(function(){

	$.fn.scrollView = function () {
		return this.each(function() {
			$('html, body').animate({
				scrollTop: $(this).offset().top
			}, 1000);
		});
	}



	$(".picture").click(function(event) { // jQuery Function #1
		event.preventDefault();
		$(this).fadeOut(); // jQuery Function #2
		$(this).fadeIn(); // jQuery Function #3
		$(".blog-title1").scrollView(); // jQuery Function #4
	})



	$(".picture2").click(function(event) {
		event.preventDefault();
		$(this).fadeOut();
		$(this).fadeIn();
		$("#blog-title2").scrollView();
	})	

	$(".picture3").click(function(event) {
		event.preventDefault();
		$(this).fadeOut();
		$(this).fadeIn();
		$("#blog-title3").scrollView();
	})


// -----------------------

	$(".moic1").click(function() {
		$(this).addClass("pic-click-moic"); // jQuery Function #5
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".moic1").removeClass("pic-click-moic"); // jQuery Function #6
	});

	$(".moic2").click(function() {
		$(this).addClass("pic-click-moic");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".moic2").removeClass("pic-click-moic");
	});

		$(".moic3").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".moic3").removeClass("pic-click");
	});

		$(".moic4").click(function() {
		$(this).addClass("pic-click-vertical");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".moic4").removeClass("pic-click-vertical");
	});

		$(".moic5").click(function() {
		$(this).addClass("pic-click-vertical");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".moic5").removeClass("pic-click-vertical");
	});

// -----------------------

	$(".sf1").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".sf1").removeClass("pic-click");
	});

	$(".sf2").click(function() {
		$(this).addClass("pic-click-vertical");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".sf2").removeClass("pic-click-vertical");
	});

		$(".sf3").click(function() {
		$(this).addClass("pic-click-vertical");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".sf3").removeClass("pic-click-vertical");
	});

		$(".sf4").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".sf4").removeClass("pic-click");
	});

		$(".sf5").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".sf5").removeClass("pic-click");
	});




// -----------------------

	$(".ski1").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".ski1").removeClass("pic-click");
	});

	$(".ski2").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".ski2").removeClass("pic-click");
	});

		$(".ski3").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".ski3").removeClass("pic-click");
	});

		$(".ski4").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".ski4").removeClass("pic-click");
	});

		$(".ski5").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".ski5").removeClass("pic-click");
	});

		$(".ski6").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".ski6").removeClass("pic-click");
	});
		


});


