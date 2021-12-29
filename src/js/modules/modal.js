import { enablePageInert, disablePageInert, hideScroll, showScroll, isEscEvent } from './utils';

const modal = document.querySelector('.modal');
const formModal = modal.querySelector('.form-modal');
const successModal = modal.querySelector('.success-modal');
const modalClose = modal.querySelector('.modal__close');

const closeModal = () => {
	modal.classList.remove('modal--opened');
	formModal.classList.remove('form-modal--opened');
	successModal.classList.remove('success-modal--opened');
	document.removeEventListener('keydown', onEscKeydown);

	if (!document.querySelector('header').classList.contains('menu-visible')) {
		disablePageInert();
		showScroll();
	}
};

export const openSuccess = () => {
	modal.classList.add('modal--opened');
	successModal.classList.add('success-modal--opened');
	formModal.classList.remove('form-modal--opened');
	formModal.classList.remove('form-modal--card');

	if (!document.querySelector('header').classList.contains('menu-visible')) {
		enablePageInert();
		hideScroll();
	}
};

function onEscKeydown(evt) {
	if (isEscEvent(evt)) {
		closeModal();
	}
}

modalClose.addEventListener('click', () => {
	closeModal();
});

const onFormOpen = (evt) => {
	if (evt.target.classList.contains('modal-open')) {
		evt.preventDefault();
		modal.classList.add('modal--opened');
		formModal.classList.add('form-modal--opened');
		successModal.classList.remove('success-modal--opened');
		document.addEventListener('keydown', onEscKeydown);

		if (!document.querySelector('header').classList.contains('menu-visible')) {
			enablePageInert();
			hideScroll();
		}

		if (evt.target.classList.contains('product__modal-open')) {
			formModal.classList.add('form-modal--card');
		}
	}
};

export const openForm = () => document.addEventListener('click', onFormOpen);
