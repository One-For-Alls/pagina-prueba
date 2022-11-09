const d = document;
const w = window;

export default function responsive(id, mq, vistaMobile, vistaDesktop){

const breakPoint = w.matchMedia(mq);


const responsive = (e) => {
	//console.log(e.matches);
	if (e.matches) {
		
		d.getElementById(id).innerHTML = vistaMobile;
	}else {
		
		d.getElementById(id).innerHTML = vistaDesktop;
	}
}



	breakPoint.addEventListener("change", responsive);  // SI LE PASAMOS CON PARAMETROS SE AUTOEJECUTA LA FUNCION
	responsive(breakPoint); // AQUI AUTOEJCUTAMOS LA FUNCION PARA Q EN PRIMERA INSTANCIA TOME LOS VALORES FIJADOS Y CON EL EVENTO 
							// SE ACTUALIZA DEPENDIENDO DE LA DIMENSION

}

// $googleMap.innerHTML = `<iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31599.55252747347!2d-79.
//  								13520771776662!3d-8.10717816815472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3
//  								c70802b10bd%3A0x53a6145fe4e8a15a!2sPlaya%20Huanchaquito!5e0!3m2!1ses!2spe!4v1665369027691!5m2!1ses!2spe" 
//  								width="400" height="420" style="border:0;" allowfullscreen="" loading="lazy" 
//  								referrerpolicy="no-referrer-when-downgrade"></iframe>`;

// $googleMap.innerHTML = `<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31599.55252747347!2d-79.
// 	 								13520771776662!3d-8.10717816815472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3
// 	 								c70802b10bd%3A0x53a6145fe4e8a15a!2sPlaya%20Huanchaquito!5e0!3m2!1ses!2spe!4v1665369027691!5m2!1ses!2spe"><h5>Google Maps</h5></a>`;