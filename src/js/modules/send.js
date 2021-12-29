import { validateForm } from './validate';
import { openSuccess } from './modal';

export const sendForm = () => {
	window.addEventListener('DOMContentLoaded', () => {
		const forms = document.querySelectorAll('form');

		forms.forEach((form) => {
			const fetchPath = form.getAttribute('action');

			if (!form.classList.contains('search-header') && !form.classList.contains('search-result__form')) {
				form.addEventListener('submit', async (evt) => {
					evt.preventDefault();
					const error = validateForm(form);
					if (error === 0) {
						const formData = new FormData(form);

						if (form.classList.contains('question__form')) {
							formData.append('title', 'Вопрос');

							// const request = await fetch(fetchPath, {
							// 	method: 'POST',
							// 	body: formData,
							// });

							// const response = await request.json();
							// if (response.success) {
							form.reset();
							openSuccess();
							// }
						} else if (form.classList.contains('modal__form')) {
							if (form.classList.contains('form-modal--card')) {
								const title = document.querySelector('.product__title');
								formData.append('title', title.textContent);
							} else {
								formData.append('title', 'Новая заявка');
							}

							// const request = await fetch(fetchPath, {
							// 	method: 'POST',
							// 	body: formData,
							// });

							// const response = await request.json();
							// if (response.success) {
							form.reset();
							openSuccess();
							// }
						} else if (form.classList.contains('discuss-portfolio')) {
							formData.append('title', 'Обсудить проект');

							// const request = await fetch(fetchPath, {
							// 	method: 'POST',
							// 	body: formData,
							// });

							// const response = await request.json();
							// if (response.success) {
							form.reset();
							openSuccess();
							// }
						}
					}
				});
			}
		});
	});
};
