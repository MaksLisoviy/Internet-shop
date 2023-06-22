$(document).ready(function () {
	$('.dresses__catalog').slick({
		infinite: true,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					infinite: true,
					arrows: true,
					slidesToShow: 3,
					slidesToScroll: 1,
				},

			},
			{
				breakpoint: 1200,
				settings: {
					infinite: true,
					arrows: true,
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 680,
				settings: {
					infinite: true,
					arrows: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				},

			},
		],
	});
});

$(document).ready(function () {
	$('.immerse__wrapper').slick({
		infinite: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,

	});
});

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// If we need pagination

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
});





const buttonOpen = document.querySelector('#button-open');
const buttonClose = document.querySelector('#button-close');
const menuHidden = document.querySelector('#menuHidden');

buttonOpen.addEventListener("click", function () {
	menuHidden.classList.add('visability')
})

buttonClose.addEventListener("click", function () {
	menuHidden.classList.remove('visability')

})


const buttonCategories = document.querySelector('#button-categories');
const arrowDown = document.querySelector('#arrow-downs');

buttonCategories.addEventListener("click", function () {
	arrowDown.classList.toggle('arrow-transform')
})


const categorisHiddenMenu = document.querySelector('#categoris-hidden-menu');
const arrowDown1 = document.querySelector('#arrow-downs1');
categorisHiddenMenu.addEventListener("click", function () {
	arrowDown1.classList.toggle('arrow-transform')

})