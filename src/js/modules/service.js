const onMoreClick = (evt) => {
	if (evt.target.classList.contains('item-service__more')) {
		evt.target.parentElement.classList.toggle('item-service--current');

		if (evt.target.parentElement.classList.contains('item-service--current')) {
			evt.target.querySelector('span').textContent = 'Свернуть';
		} else {
			evt.target.querySelector('span').textContent = 'Подробнее';
		}

	}
};

export const openItemServiceMore = () => document.addEventListener('click', onMoreClick);
