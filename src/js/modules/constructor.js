const constructor = document.querySelector('.constructor');

export const createConstructor = () => {
	if (constructor) {
		const sticky = constructor.querySelector('.constructor__sticky');
		const constructorItems = constructor.querySelectorAll('.constructor__item');
		constructor.style.height = `${sticky.clientHeight + 5 * 445}px`;

		constructorItems.forEach((item) => {
			item.classList.remove('constructor__item--active');
			constructorItems[0].classList.add('constructor__item--active');
		});
	}
};

export const changeConstructorImage = (swiper) => {
	const constructorItems = constructor.querySelectorAll('.constructor__item');
	constructorItems[30].style.transition = 'opacity .6s';

	window.addEventListener('scroll', () => {
		if (window.scrollY >= constructor.offsetTop && window.scrollY <= constructor.clientHeight + constructor.offsetTop) {
			if (window.scrollY >= constructor.offsetTop) {
				swiper.slideTo(0);
			}

			if (window.scrollY >= constructor.offsetTop && window.scrollY < constructor.offsetTop + 40) {
				constructorItems[1].classList.remove('constructor__item--active');
				constructorItems[2].classList.remove('constructor__item--active');
				constructorItems[3].classList.remove('constructor__item--active');
				constructorItems[0].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 40 && window.scrollY < constructor.offsetTop + 80) {
				constructorItems[0].classList.remove('constructor__item--active');
				constructorItems[2].classList.remove('constructor__item--active');
				constructorItems[3].classList.remove('constructor__item--active');
				constructorItems[4].classList.remove('constructor__item--active');
				constructorItems[1].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 80 && window.scrollY < constructor.offsetTop + 120) {
				constructorItems[0].classList.remove('constructor__item--active');
				constructorItems[1].classList.remove('constructor__item--active');
				constructorItems[3].classList.remove('constructor__item--active');
				constructorItems[4].classList.remove('constructor__item--active');
				constructorItems[5].classList.remove('constructor__item--active');
				constructorItems[2].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 120 && window.scrollY < constructor.offsetTop + 160) {
				constructorItems[0].classList.remove('constructor__item--active');
				constructorItems[1].classList.remove('constructor__item--active');
				constructorItems[2].classList.remove('constructor__item--active');
				constructorItems[4].classList.remove('constructor__item--active');
				constructorItems[5].classList.remove('constructor__item--active');
				constructorItems[6].classList.remove('constructor__item--active');
				constructorItems[3].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 160 && window.scrollY < constructor.offsetTop + 200) {
				constructorItems[1].classList.remove('constructor__item--active');
				constructorItems[2].classList.remove('constructor__item--active');
				constructorItems[3].classList.remove('constructor__item--active');
				constructorItems[5].classList.remove('constructor__item--active');
				constructorItems[6].classList.remove('constructor__item--active');
				constructorItems[7].classList.remove('constructor__item--active');
				constructorItems[4].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 200 && window.scrollY < constructor.offsetTop + 240) {
				constructorItems[2].classList.remove('constructor__item--active');
				constructorItems[3].classList.remove('constructor__item--active');
				constructorItems[4].classList.remove('constructor__item--active');
				constructorItems[6].classList.remove('constructor__item--active');
				constructorItems[7].classList.remove('constructor__item--active');
				constructorItems[8].classList.remove('constructor__item--active');
				constructorItems[5].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 240 && window.scrollY < constructor.offsetTop + 280) {
				constructorItems[3].classList.remove('constructor__item--active');
				constructorItems[4].classList.remove('constructor__item--active');
				constructorItems[5].classList.remove('constructor__item--active');
				constructorItems[7].classList.remove('constructor__item--active');
				constructorItems[8].classList.remove('constructor__item--active');
				constructorItems[9].classList.remove('constructor__item--active');
				constructorItems[6].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 280 && window.scrollY < constructor.offsetTop + 320) {
				constructorItems[4].classList.remove('constructor__item--active');
				constructorItems[5].classList.remove('constructor__item--active');
				constructorItems[6].classList.remove('constructor__item--active');
				constructorItems[8].classList.remove('constructor__item--active');
				constructorItems[9].classList.remove('constructor__item--active');
				constructorItems[10].classList.remove('constructor__item--active');
				constructorItems[7].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 320 && window.scrollY < constructor.offsetTop + 360) {
				constructorItems[5].classList.remove('constructor__item--active');
				constructorItems[6].classList.remove('constructor__item--active');
				constructorItems[7].classList.remove('constructor__item--active');
				constructorItems[9].classList.remove('constructor__item--active');
				constructorItems[10].classList.remove('constructor__item--active');
				constructorItems[11].classList.remove('constructor__item--active');
				constructorItems[8].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 360 && window.scrollY < constructor.offsetTop + 400) {
				constructorItems[6].classList.remove('constructor__item--active');
				constructorItems[7].classList.remove('constructor__item--active');
				constructorItems[8].classList.remove('constructor__item--active');
				constructorItems[10].classList.remove('constructor__item--active');
				constructorItems[11].classList.remove('constructor__item--active');
				constructorItems[12].classList.remove('constructor__item--active');
				constructorItems[9].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 400 && window.scrollY < constructor.offsetTop + 440) {
				constructorItems[7].classList.remove('constructor__item--active');
				constructorItems[8].classList.remove('constructor__item--active');
				constructorItems[9].classList.remove('constructor__item--active');
				constructorItems[11].classList.remove('constructor__item--active');
				constructorItems[12].classList.remove('constructor__item--active');
				constructorItems[13].classList.remove('constructor__item--active');
				constructorItems[10].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 440 && window.scrollY < constructor.offsetTop + 480) {
				constructorItems[8].classList.remove('constructor__item--active');
				constructorItems[9].classList.remove('constructor__item--active');
				constructorItems[10].classList.remove('constructor__item--active');
				constructorItems[12].classList.remove('constructor__item--active');
				constructorItems[13].classList.remove('constructor__item--active');
				constructorItems[14].classList.remove('constructor__item--active');
				constructorItems[11].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 480 && window.scrollY < constructor.offsetTop + 520) {
				constructorItems[9].classList.remove('constructor__item--active');
				constructorItems[10].classList.remove('constructor__item--active');
				constructorItems[11].classList.remove('constructor__item--active');
				constructorItems[13].classList.remove('constructor__item--active');
				constructorItems[14].classList.remove('constructor__item--active');
				constructorItems[15].classList.remove('constructor__item--active');
				constructorItems[12].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 520 && window.scrollY < constructor.offsetTop + 560) {
				constructorItems[10].classList.remove('constructor__item--active');
				constructorItems[11].classList.remove('constructor__item--active');
				constructorItems[12].classList.remove('constructor__item--active');
				constructorItems[13].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 560 && window.scrollY < constructor.offsetTop + 600) {
				constructorItems[9].classList.remove('constructor__item--active');
				constructorItems[10].classList.remove('constructor__item--active');
				constructorItems[11].classList.remove('constructor__item--active');
				constructorItems[13].classList.remove('constructor__item--active');
				constructorItems[12].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 600 && window.scrollY < constructor.offsetTop + 640) {
				constructorItems[8].classList.remove('constructor__item--active');
				constructorItems[9].classList.remove('constructor__item--active');
				constructorItems[10].classList.remove('constructor__item--active');
				constructorItems[12].classList.remove('constructor__item--active');
				constructorItems[13].classList.remove('constructor__item--active');
				constructorItems[11].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 640 && window.scrollY < constructor.offsetTop + 680) {
				constructorItems[7].classList.remove('constructor__item--active');
				constructorItems[8].classList.remove('constructor__item--active');
				constructorItems[9].classList.remove('constructor__item--active');
				constructorItems[11].classList.remove('constructor__item--active');
				constructorItems[12].classList.remove('constructor__item--active');
				constructorItems[13].classList.remove('constructor__item--active');
				constructorItems[10].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 680 && window.scrollY < constructor.offsetTop + 720) {
				constructorItems[6].classList.remove('constructor__item--active');
				constructorItems[7].classList.remove('constructor__item--active');
				constructorItems[8].classList.remove('constructor__item--active');
				constructorItems[10].classList.remove('constructor__item--active');
				constructorItems[11].classList.remove('constructor__item--active');
				constructorItems[12].classList.remove('constructor__item--active');
				constructorItems[9].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 720 && window.scrollY < constructor.offsetTop + 760) {
				constructorItems[5].classList.remove('constructor__item--active');
				constructorItems[6].classList.remove('constructor__item--active');
				constructorItems[7].classList.remove('constructor__item--active');
				constructorItems[9].classList.remove('constructor__item--active');
				constructorItems[10].classList.remove('constructor__item--active');
				constructorItems[11].classList.remove('constructor__item--active');
				constructorItems[8].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 760 && window.scrollY < constructor.offsetTop + 800) {
				constructorItems[4].classList.remove('constructor__item--active');
				constructorItems[5].classList.remove('constructor__item--active');
				constructorItems[6].classList.remove('constructor__item--active');
				constructorItems[8].classList.remove('constructor__item--active');
				constructorItems[9].classList.remove('constructor__item--active');
				constructorItems[10].classList.remove('constructor__item--active');
				constructorItems[7].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 800 && window.scrollY < constructor.offsetTop + 840) {
				constructorItems[3].classList.remove('constructor__item--active');
				constructorItems[4].classList.remove('constructor__item--active');
				constructorItems[5].classList.remove('constructor__item--active');
				constructorItems[7].classList.remove('constructor__item--active');
				constructorItems[8].classList.remove('constructor__item--active');
				constructorItems[9].classList.remove('constructor__item--active');
				constructorItems[6].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 840 && window.scrollY < constructor.offsetTop + 880) {
				constructorItems[2].classList.remove('constructor__item--active');
				constructorItems[3].classList.remove('constructor__item--active');
				constructorItems[4].classList.remove('constructor__item--active');
				constructorItems[6].classList.remove('constructor__item--active');
				constructorItems[7].classList.remove('constructor__item--active');
				constructorItems[8].classList.remove('constructor__item--active');
				constructorItems[5].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 920 && window.scrollY < constructor.offsetTop + 960) {
				constructorItems[1].classList.remove('constructor__item--active');
				constructorItems[2].classList.remove('constructor__item--active');
				constructorItems[3].classList.remove('constructor__item--active');
				constructorItems[5].classList.remove('constructor__item--active');
				constructorItems[6].classList.remove('constructor__item--active');
				constructorItems[7].classList.remove('constructor__item--active');
				constructorItems[4].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 960 && window.scrollY < constructor.offsetTop + 1000) {
				constructorItems[0].classList.remove('constructor__item--active');
				constructorItems[1].classList.remove('constructor__item--active');
				constructorItems[2].classList.remove('constructor__item--active');
				constructorItems[4].classList.remove('constructor__item--active');
				constructorItems[5].classList.remove('constructor__item--active');
				constructorItems[6].classList.remove('constructor__item--active');
				constructorItems[3].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1000 && window.scrollY < constructor.offsetTop + 1040) {
				constructorItems[0].classList.remove('constructor__item--active');
				constructorItems[1].classList.remove('constructor__item--active');
				constructorItems[3].classList.remove('constructor__item--active');
				constructorItems[4].classList.remove('constructor__item--active');
				constructorItems[5].classList.remove('constructor__item--active');
				constructorItems[2].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1040 && window.scrollY < constructor.offsetTop + 1080) {
				constructorItems[0].classList.remove('constructor__item--active');
				constructorItems[2].classList.remove('constructor__item--active');
				constructorItems[3].classList.remove('constructor__item--active');
				constructorItems[4].classList.remove('constructor__item--active');
				constructorItems[1].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1080 && window.scrollY < constructor.offsetTop + 1120) {
				constructorItems[1].classList.remove('constructor__item--active');
				constructorItems[2].classList.remove('constructor__item--active');
				constructorItems[3].classList.remove('constructor__item--active');
				constructorItems[14].classList.remove('constructor__item--active');
				constructorItems[15].classList.remove('constructor__item--active');
				constructorItems[16].classList.remove('constructor__item--active');
				constructorItems[0].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1120 && window.scrollY < constructor.offsetTop + 1160) {
				constructorItems[0].classList.remove('constructor__item--active');
				constructorItems[1].classList.remove('constructor__item--active');
				constructorItems[2].classList.remove('constructor__item--active');
				constructorItems[13].classList.remove('constructor__item--active');
				constructorItems[15].classList.remove('constructor__item--active');
				constructorItems[16].classList.remove('constructor__item--active');
				constructorItems[17].classList.remove('constructor__item--active');
				constructorItems[14].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1160 && window.scrollY < constructor.offsetTop + 1200) {
				constructorItems[0].classList.remove('constructor__item--active');
				constructorItems[1].classList.remove('constructor__item--active');
				constructorItems[13].classList.remove('constructor__item--active');
				constructorItems[14].classList.remove('constructor__item--active');
				constructorItems[16].classList.remove('constructor__item--active');
				constructorItems[17].classList.remove('constructor__item--active');
				constructorItems[18].classList.remove('constructor__item--active');
				constructorItems[15].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1200 && window.scrollY < constructor.offsetTop + 1240) {
				constructorItems[0].classList.remove('constructor__item--active');
				constructorItems[13].classList.remove('constructor__item--active');
				constructorItems[14].classList.remove('constructor__item--active');
				constructorItems[15].classList.remove('constructor__item--active');
				constructorItems[17].classList.remove('constructor__item--active');
				constructorItems[18].classList.remove('constructor__item--active');
				constructorItems[19].classList.remove('constructor__item--active');
				constructorItems[16].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1240 && window.scrollY < constructor.offsetTop + 1280) {
				constructorItems[14].classList.remove('constructor__item--active');
				constructorItems[15].classList.remove('constructor__item--active');
				constructorItems[16].classList.remove('constructor__item--active');
				constructorItems[18].classList.remove('constructor__item--active');
				constructorItems[19].classList.remove('constructor__item--active');
				constructorItems[20].classList.remove('constructor__item--active');
				constructorItems[17].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1280 && window.scrollY < constructor.offsetTop + 1340) {
				constructorItems[15].classList.remove('constructor__item--active');
				constructorItems[16].classList.remove('constructor__item--active');
				constructorItems[17].classList.remove('constructor__item--active');
				constructorItems[19].classList.remove('constructor__item--active');
				constructorItems[20].classList.remove('constructor__item--active');
				constructorItems[21].classList.remove('constructor__item--active');
				constructorItems[18].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1340 && window.scrollY < constructor.offsetTop + 1380) {
				constructorItems[16].classList.remove('constructor__item--active');
				constructorItems[17].classList.remove('constructor__item--active');
				constructorItems[18].classList.remove('constructor__item--active');
				constructorItems[20].classList.remove('constructor__item--active');
				constructorItems[21].classList.remove('constructor__item--active');
				constructorItems[22].classList.remove('constructor__item--active');
				constructorItems[19].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1380 && window.scrollY < constructor.offsetTop + 1420) {
				constructorItems[17].classList.remove('constructor__item--active');
				constructorItems[18].classList.remove('constructor__item--active');
				constructorItems[19].classList.remove('constructor__item--active');
				constructorItems[21].classList.remove('constructor__item--active');
				constructorItems[22].classList.remove('constructor__item--active');
				constructorItems[23].classList.remove('constructor__item--active');
				constructorItems[20].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1420 && window.scrollY < constructor.offsetTop + 1460) {
				constructorItems[18].classList.remove('constructor__item--active');
				constructorItems[19].classList.remove('constructor__item--active');
				constructorItems[20].classList.remove('constructor__item--active');
				constructorItems[22].classList.remove('constructor__item--active');
				constructorItems[23].classList.remove('constructor__item--active');
				constructorItems[24].classList.remove('constructor__item--active');
				constructorItems[21].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1460 && window.scrollY < constructor.offsetTop + 1500) {
				constructorItems[19].classList.remove('constructor__item--active');
				constructorItems[20].classList.remove('constructor__item--active');
				constructorItems[21].classList.remove('constructor__item--active');
				constructorItems[23].classList.remove('constructor__item--active');
				constructorItems[24].classList.remove('constructor__item--active');
				constructorItems[25].classList.remove('constructor__item--active');
				constructorItems[22].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1500 && window.scrollY < constructor.offsetTop + 1540) {
				constructorItems[20].classList.remove('constructor__item--active');
				constructorItems[21].classList.remove('constructor__item--active');
				constructorItems[22].classList.remove('constructor__item--active');
				constructorItems[24].classList.remove('constructor__item--active');
				constructorItems[25].classList.remove('constructor__item--active');
				constructorItems[26].classList.remove('constructor__item--active');
				constructorItems[23].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1540 && window.scrollY < constructor.offsetTop + 1580) {
				constructorItems[21].classList.remove('constructor__item--active');
				constructorItems[22].classList.remove('constructor__item--active');
				constructorItems[23].classList.remove('constructor__item--active');
				constructorItems[25].classList.remove('constructor__item--active');
				constructorItems[26].classList.remove('constructor__item--active');
				constructorItems[27].classList.remove('constructor__item--active');
				constructorItems[24].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1580 && window.scrollY < constructor.offsetTop + 1620) {
				constructorItems[22].classList.remove('constructor__item--active');
				constructorItems[23].classList.remove('constructor__item--active');
				constructorItems[24].classList.remove('constructor__item--active');
				constructorItems[26].classList.remove('constructor__item--active');
				constructorItems[27].classList.remove('constructor__item--active');
				constructorItems[28].classList.remove('constructor__item--active');
				constructorItems[25].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1620 && window.scrollY < constructor.offsetTop + 1660) {
				constructorItems[23].classList.remove('constructor__item--active');
				constructorItems[24].classList.remove('constructor__item--active');
				constructorItems[25].classList.remove('constructor__item--active');
				constructorItems[27].classList.remove('constructor__item--active');
				constructorItems[28].classList.remove('constructor__item--active');
				constructorItems[29].classList.remove('constructor__item--active');
				constructorItems[26].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1660 && window.scrollY < constructor.offsetTop + 1700) {
				constructorItems[24].classList.remove('constructor__item--active');
				constructorItems[25].classList.remove('constructor__item--active');
				constructorItems[26].classList.remove('constructor__item--active');
				constructorItems[28].classList.remove('constructor__item--active');
				constructorItems[29].classList.remove('constructor__item--active');
				constructorItems[30].classList.remove('constructor__item--active');
				constructorItems[27].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1700 && window.scrollY < constructor.offsetTop + 1740) {
				constructorItems[25].classList.remove('constructor__item--active');
				constructorItems[26].classList.remove('constructor__item--active');
				constructorItems[27].classList.remove('constructor__item--active');
				constructorItems[29].classList.remove('constructor__item--active');
				constructorItems[30].classList.remove('constructor__item--active');
				constructorItems[28].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 1740 && window.scrollY < constructor.offsetTop + 1780) {
				constructorItems[26].classList.remove('constructor__item--active');
				constructorItems[27].classList.remove('constructor__item--active');
				constructorItems[28].classList.remove('constructor__item--active');
				constructorItems[30].classList.remove('constructor__item--active');
				constructorItems[29].classList.add('constructor__item--active');
				constructorItems[29].style.transition = '';
			}

			if (window.scrollY >= constructor.offsetTop + 1780) {
				constructorItems.forEach((item) => item.classList.remove('constructor__item--active'));
				constructorItems[29].style.transition = 'opacity .6s';
				constructorItems[27].classList.remove('constructor__item--active');
				constructorItems[28].classList.remove('constructor__item--active');
				constructorItems[29].classList.remove('constructor__item--active');
				constructorItems[30].classList.add('constructor__item--active');
			}

			if (window.scrollY >= constructor.offsetTop + 445) {
				swiper.slideTo(1);
			}

			if (window.scrollY >= constructor.offsetTop + 890) {
				swiper.slideTo(2);
			}

			if (window.scrollY >= constructor.offsetTop + 1335) {
				swiper.slideTo(3);
			}

			if (window.scrollY >= constructor.offsetTop + 1780) {
				swiper.slideTo(4);
			}
		}
	});
};
