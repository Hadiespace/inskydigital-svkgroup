import { enableHeaderInert, disableHeaderInert, hideScroll, showScroll } from './utils';

const SCROLL_STEP = 20;

const headerElement = document.querySelector('.header');
const headerWhiteElement = document.querySelector('.header--white');
const headerMenuToggle = headerElement.querySelector('.header__menu-toggle');
const headerSearch = headerElement.querySelector('.header__search');
const searchHeaderButton = headerSearch.querySelector('.search-header__button');
const searchHeaderInput = headerElement.querySelector('.search-header__input');

if (window.pageYOffset >= SCROLL_STEP) {
	headerElement.classList.add('header--sticky');
	if (headerWhiteElement) {
		headerWhiteElement.style.setProperty('--color', '#2d2d2d');
	}
} else {
	headerElement.classList.remove('header--sticky');
	if (headerWhiteElement) {
		headerWhiteElement.style.setProperty('--color', '#fff');
	}
}

const onHeaderScroll = () => {
	if (window.pageYOffset >= SCROLL_STEP) {
		headerElement.classList.add('header--sticky');
		if (headerWhiteElement) {
			headerWhiteElement.style.setProperty('--color', '#2d2d2d');
		}
	} else {
		const menuVisible = document.querySelector('.menu-visible');
		headerElement.classList.remove('header--sticky');

		if (menuVisible) {
			if (headerWhiteElement) {
				headerWhiteElement.style.setProperty('--color', '#2d2d2d');
			}
		} else {
			if (headerWhiteElement) {
				headerWhiteElement.style.setProperty('--color', '#fff');
			}
		}
	}
};

const onToggleMenu = () => {
	const menuVisible = document.querySelector('.menu-visible');

	if (!menuVisible) {
		headerElement.classList.add('menu-visible', 'header--background');
		headerMenuToggle.setAttribute('aria-expanded', 'true');
		enableHeaderInert();
		hideScroll();
		if (headerWhiteElement) {
			headerWhiteElement.style.setProperty('--color', '#2d2d2d');
		}
	} else {
		headerElement.classList.remove('menu-visible', 'header--background');
		headerMenuToggle.setAttribute('aria-expanded', 'false');
		disableHeaderInert();
		showScroll();

		if (window.pageYOffset >= SCROLL_STEP) {
			if (headerWhiteElement) {
				headerWhiteElement.style.setProperty('--color', '#2d2d2d');
			}
		} else {
			if (headerWhiteElement) {
				headerWhiteElement.style.setProperty('--color', '#fff');
			}
		}
	}
};

const onSearchClose = (evt) => {
	if (!evt.target.closest('form') && searchHeaderInput.value.length === 0) {
		searchHeaderButton.setAttribute('aria-expanded', 'false');
		document.removeEventListener('click', onSearchClose);
	}
};

const onSearchOpen = () => {
	searchHeaderButton.setAttribute('aria-expanded', 'true');
	document.addEventListener('click', onSearchClose);
	searchHeaderInput.focus();
};

export const scrollHeader = () => window
	.addEventListener('scroll', onHeaderScroll);

export const toggleMenu = () => headerMenuToggle
	.addEventListener('click', onToggleMenu);

export const toggleSearch = () => searchHeaderButton
	.addEventListener('click', onSearchOpen);
