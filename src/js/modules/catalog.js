const catalogItems = document.querySelectorAll('.preview-catalog__item');

const onCatalogChange = (evt) => {
	if (evt.target.classList.contains('preview-catalog__link')) {
		catalogItems.forEach((item) => item.classList.remove('preview-catalog__item--current'));
		evt.target.parentElement.classList.add('preview-catalog__item--current');
	}
};

export const changeCatalog = () => document.addEventListener('click', onCatalogChange);
