const filters = document.querySelectorAll('.portfolio__filter');

const onFilterClick = (evt) => {
	if (evt.target.classList.contains('portfolio__filter')) {
		if (evt.target === filters[0]) {
			filters.forEach((filter) => filter.classList.remove('portfolio__filter--current'));
			evt.target.classList.add('portfolio__filter--current');
		} else {
			filters[0].classList.remove('portfolio__filter--current');
			evt.target.classList.toggle('portfolio__filter--current');
		}
	}
};

export const changeFilter = () => document.addEventListener('click', onFilterClick);
