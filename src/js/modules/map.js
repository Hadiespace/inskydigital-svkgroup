const mapElement = document.querySelector('#map');

const init = () => {
	const map = new ymaps.Map('map', {
		center: [mapElement.dataset.lat, mapElement.dataset.lng],
		zoom: 16,
	});

	const placemark = new ymaps.Placemark([mapElement.dataset.lat, mapElement.dataset.lng], {
		balloonContent:
			`<div class="balloon">
					<p class="balloon__name">Офис</p>
					<address class="balloon__address">119285, Москва, Воробьевское шоссе 6</address>
					<a class="balloon__phone" href="tel:+7(499)702-31-31">+7 (499) 702-31-31</a>
					<p class="balloon__work-mode">Режим работы</p>
					<div class="balloon__mode">
						<p>ПН — ПТ: 10:00 — 18:00</p>
						<p>СБ — ВС: выходные</p>
					</div>
				</div>`,
	}, {
		iconLayout: 'default#image',
		iconImageHref: './images/map-pin.svg',
		iconImageSize: [30, 30],
		iconImageOffset: [-15, -15],
	});

	map.behaviors.disable('scrollZoom');
	// map.behaviors.disable('drag');
	map.geoObjects.add(placemark);
};

export const createMap = () => mapElement ? ymaps.ready(init) : null;
