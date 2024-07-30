import { ciudades } from './data.js';

const agregarCiudades = (ciudades) => {
	ciudades.forEach((ciudad) => {
		let iconCiudad = L.icon({
			iconUrl: `../assets/images/icons/smallcity.png`,
			iconSize: [20, 20],
			iconAnchor: [15, 15],
			popupAnchor: [0, -15],
		});
		console.log(iconCiudad);

		L.marker(ciudad.geometry.coordinates, { iconCiudad })
			.addTo(mimapa)
			.bindPopup(ciudad.properties.name);
	});
};

agregarCiudades(ciudades);
