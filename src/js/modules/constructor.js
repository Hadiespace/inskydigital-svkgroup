const constructor = document.querySelector('.constructor');

export const createConstructor = () => {
	if (constructor) {
		const sticky = constructor.querySelector('.constructor__sticky');
		const constructorItems = constructor.querySelectorAll('.constructor__item');
		constructor.style.height = `${sticky.clientHeight + 5 * 300}px`;

		constructorItems.forEach((item) => {
			item.classList.remove('constructor__item--active');
			constructorItems[0].classList.add('constructor__item--active');
		});
	}
};

export const changeConstructorImage = (swiper) => {
	const constructorItems = constructor.querySelectorAll('.constructor__item');
	constructorItems[16].style.transition = 'opacity .6s';

	window.addEventListener('scroll', () => {
		if (window.scrollY >= constructor.offsetTop && window.scrollY <= constructor.clientHeight + constructor.offsetTop) {
			if (window.scrollY >= constructor.offsetTop) {
				swiper.slideTo(0);
			}

			if (window.scrollY >= constructor.offsetTop) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[0].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 50) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[1].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 100) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[2].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 150) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[3].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 200) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[4].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 250) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[5].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 300) {
				swiper.slideTo(1);
			}

			if (window.scrollY >= constructor.offsetTop + 300) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[6].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 350) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[7].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 400) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[8].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 450) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[9].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 500) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[10].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 550) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[11].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 600) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[12].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 650) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[13].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 700) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[14].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 750) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[15].classList.add('constructor__item--active');
				constructorItems[15].style.transition = '';
			}

			if (window.scrollY >= constructor.offsetTop + 900) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[15].style.transition = 'opacity .6s';
				constructorItems[16].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 600) {
				swiper.slideTo(2);
			}

			if (window.scrollY >= constructor.offsetTop + 900) {
				swiper.slideTo(3);
			}

			if (window.scrollY >= constructor.offsetTop + 1200) {
				swiper.slideTo(4);
			}
		}
	});
};
