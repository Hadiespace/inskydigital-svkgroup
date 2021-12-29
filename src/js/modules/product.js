const onProductToggle = (evt) => {
	if (evt.target.classList.contains('item-about-product__button')) {
		if (evt.target.getAttribute('aria-expanded') === 'true') {
			evt.target.setAttribute('aria-expanded', 'false');
		} else {
			evt.target.setAttribute('aria-expanded', 'true');
		}
	}
};

export const toggleProduct = () => document.addEventListener('click', onProductToggle);
