const resetItems = () => {
	const items = document.querySelectorAll('.item-portfolio-home__sub-item');
	items.forEach((item) => item.classList.remove('item-portfolio-home__sub-item--active'));
};

export const createPortfolioBalloon = () => {
	const portfolioHomeItems = document.querySelectorAll('.item-portfolio-home__sub-item');

	if (portfolioHomeItems) {
		portfolioHomeItems.forEach((portfolio) => {
			const obj = JSON.parse(portfolio.dataset.balloon);
			portfolio.style.marginTop = `${obj['y']}%`;
			portfolio.style.marginLeft = `${obj['x']}%`;
		});

		resetItems();
	}
};

const onBalloonClick = (evt) => {
	if (evt.target.classList.contains('item-portfolio-home__sub-button')) {
		resetItems();
		evt.target.parentElement.parentElement.classList.add('item-portfolio-home__sub-item--active');
		console.log(123);
	}
};

export const openPortfolioBalloon = () => {
	document.addEventListener('click', onBalloonClick);
};
