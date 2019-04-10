
	var mywidth = $('.single').width();
	$('.flip-container').css('height', mywidth + 'px');
	$('.back').css('height', mywidth + 'px');
	$('.front').css('height', mywidth + 'px');

	$(window).resize(function () {
		var mywidth = $('.double').width();
		$('.flip-container').css('height', mywidth + 'px');
		$('.back').css('height', mywidth + 'px');
		$('.front').css('height', mywidth + 'px');

		var viewportWidth = $(window).width();
		if (viewportWidth > 960) {
			$('#mainnav').show();
		}
		else {
			$('#mainnav').hide();
		}
	});

	$('#mobilenav h2').click(function () {
		$('#mainnav').slideToggle('slow');
	});