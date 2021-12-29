import Swiper from 'swiper/bundle';
import { createPortfolioBalloon } from './portfolio';
import { changeConstructorImage } from './constructor';

const constructorSwiper = document.querySelector('.constructor .swiper');
const portfolioHome = document.querySelector('.portfolio-home .swiper');
const about = document.querySelector('.about .swiper');
const portfolio = document.querySelector('.portfolio-work .swiper');
const product = document.querySelector('.product .product-swiper');
const productThumbs = document.querySelector('.product .product-thumbs');

const createConstructorSlider = () => {
	if (constructorSwiper) {
		const info = document.querySelector('.constructor__info');
		const next = document.querySelector('.constructor__button--next');
		const prev = document.querySelector('.constructor__button--prev');
		const swiper = new Swiper(constructorSwiper, {
			slidesPerView: 1,
			effect: 'fade',
			allowTouchMove: false,
			fadeEffect: {
				crossFade: true
			},
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			pagination: {
				el: info,
				type: 'custom',
				clickable: true,
				renderCustom: (_swiper, current, total) => {
					const width = 100 / total * current;
					return (`
						<div class="constructor__dots"><span class="constructor__dot">${current} из ${total}</span></div>
						<div class="constructor__progress"><span style="width: ${width}%;"></span></div>
						<div class="constructor__position"><span>${current}</span></div>
					`);
				},
			},
		});
		changeConstructorImage(swiper);
	}
};

const createPortfolioHomeSlider = () => {
	if (portfolioHome) {
		const dots = document.querySelector('.portfolio-home__progress');
		const next = document.querySelector('.portfolio-home__button--next');
		const prev = document.querySelector('.portfolio-home__button--prev');

		new Swiper(portfolioHome, {
			slidesPerView: 1,
			loop: true,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			pagination: {
				el: dots,
				type: 'bullets',
			},
			on: {
				init: createPortfolioBalloon,
				slideChange: createPortfolioBalloon,
			}
		});
	}
};

const createAboutSlider = () => {
	if (about) {
		const titles = about.querySelectorAll('.slide-about h2');
		const dots = about.querySelector('.about__swiper-dots');

		const changeTitleMargin = () => {
			titles.forEach((title) => {
				title.style.paddingTop = `${dots.offsetHeight}px`;
			});
		};

		window.addEventListener('resize', () => {
			changeTitleMargin();
		});

		new Swiper(about, {
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			allowSlidePrev: true,
			autoHeight: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: true,
			},
			pagination: {
				el: dots,
				type: 'bullets',
				clickable: true,
			},
		});

		setTimeout(() => {
			changeTitleMargin();
			document.querySelector('.about__swiper-dots .swiper-pagination-bullet-active').click();
		}, 0);
	}
};

const createPortfolioSlider = () => {
	if (portfolio) {
		const dots = portfolio.querySelector('.portfolio-work__dots');
		const next = portfolio.querySelector('.portfolio-work__button--next');
		const prev = portfolio.querySelector('.portfolio-work__button--prev');

		new Swiper(portfolio, {
			slidesPerView: 1,
			autoHeight: true,
			loop: true,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			pagination: {
				el: dots,
				type: 'bullets',
				clickable: true,
			},
		});
	}
};

const createProductSlider = () => {
	if (product) {
		const next = document.querySelector('.product__button--next');
		const prev = document.querySelector('.product__button--prev');

		const swiper = new Swiper(productThumbs, {
			spaceBetween: 20,
			slidesPerView: 3,
			watchSlidesProgress: true,
			breakpoints: {
				360: {
					slidesPerView: 3,
				},
				768: {
					spaceBetween: 30,
				},
				1400: {
					spaceBetween: 40,
				}
			},
		});

		new Swiper(product, {
			spaceBetween: 40,
			loop: true,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			thumbs: {
				swiper: swiper,
			},
		});
	}
};

export const createSwiper = () => {
	createPortfolioHomeSlider();
	createAboutSlider();
	createPortfolioSlider();
	createProductSlider();
	createConstructorSlider();
};
