$(document).ready(function() {

	// mobile -menu
	$('.main-nav__burger').on('click', function() {
		$(this).toggleClass('main-nav__burger-open');
		$('.main-nav__list').slideToggle(300, function() {
			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});

	$('.partners-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"><i class="fas fa-chevron-right"></i></div>',
		prevArrow: '<div class="arrow arrow_left"><i class="fas fa-chevron-left"></i></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.slider').slick({
		fade: true,
		speed: 500,
		cssEase: 'linear',
		nextArrow: '<div class="arrow arrow_right"><i class="fas fa-chevron-right"></i></div>',
		prevArrow: '<div class="arrow arrow_left"><i class="fas fa-chevron-left"></i></div>'
	});

}); // -> end scripts