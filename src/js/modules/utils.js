const body = document.querySelector('body');
const header = body.querySelector('.header');
const main = body.querySelector('.main');
const footer = body.querySelector('.footer');

export const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const lockPaddingValue = `${window.innerWidth - document.body.clientWidth}px`;

export const enableHeaderInert = () => {
	main.inert = true;
	footer.inert = true;
};

export const disableHeaderInert = () => {
	header.inert = false;
	main.inert = false;
	footer.inert = false;
};

export const enablePageInert = () => {
	header.inert = true;
	main.inert = true;
	footer.inert = true;
};

export const disablePageInert = () => {
	header.inert = false;
	main.inert = false;
	footer.inert = false;
};

export const hideScroll = () => {
	header.style.paddingRight = lockPaddingValue;
	main.style.paddingRight = lockPaddingValue;
	footer.style.paddingRight = lockPaddingValue;

	const pagePosition = window.scrollY;
	body.classList.add('disabled-scroll');
	body.dataset.position = pagePosition;
	body.style.top = `${-pagePosition}px`;
};
export const showScroll = () => {
	header.style.paddingRight = '0';
	main.style.paddingRight = '0';
	footer.style.paddingRight = '0';

	const pagePosition = parseInt(body.dataset.position, 10);
	body.style.top = 'auto';
	body.classList.remove('disabled-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	body.removeAttribute('data-position');
};
