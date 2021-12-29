const getHeight = () => {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const changeMenuHeight = () => {
	getHeight();

	window.addEventListener('resize', () => {
		getHeight();
	});
};
