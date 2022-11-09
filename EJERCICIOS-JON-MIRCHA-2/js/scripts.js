// const $btnMenu = document.querySelector(".btn-menu");
// const $menu = document.querySelector("nav");
// $btnMenu.addEventListener("click",()=>{

// 		$menu.classList.toggle('is-active');

// })

// console.log($btnMenu);
// console.log($menu);
import burgerMenu from "./menu_hamburguesa.js";
import {reloj,reproductor,alarm,volumen} from "./reloj_alarma.js";
import {shortcuts,moveBall} from "./teclado.js";  // SE USA DESTRUCTURACION YA QUE QUE IMPORTA MAS DE 1 FUNCION
import countDown from "./countDown.js";
import go_up from "./go_up.js";
import darkMode from "./dark_mode.js";
import responsive from "./responsive_design.js";
import responsiveTester from "./responsive_tester.js";
import userAgent from "./user_agent.js";
import connection from "./connection.js";
import camara from "./camara_web.js";
import geolocation from "./geolocalizacion.js";
import filtro_busqueda from "./filtro_busqueda.js";
import sorteo from "./sorteo_digital.js";
import carrusel from "./silder_responsive.js";
import scroll_spy from "./scroll_spy.js";

const d = document;
const w = window;

// pueden ir las funciones en un solo DOM  LO DEJO ASI PARA DARME CUENTA
//DOMContentLoaded que todo cargue antes q el html etc
d.addEventListener("DOMContentLoaded", (e) => {  
	burgerMenu(".btn-menu",".panel",".menu a");
	reloj('iniciarReloj','detenerReloj','hora');
	reproductor('playMusica','stopMusica','reproductor');
	alarm('musica/alarma-morning.mp3','#playAlarma','#stopAlarma');
	volumen('playMusica','#ctrVolumen','#reproductor');
	countDown('contador','2022,10,08 14:35:20','VAMOS SIGUE ASI ANTHONY NO TE RINDAS TU PUEDES, LLENALOS DE ORGULLO❤❤❤!!!');
	go_up('.btn-top','.hidden');
	darkMode('.btn-dark-mode','dark');
	responsive(
		'videoYoutube',
		'(max-width:710px)',
		`<a href="https://youtu.be/6IwUl-4pAzc">IR A YOUTUBE</a>`,
		`<iframe width="400" height="350" src="https://www.youtube.com/embed/6IwUl-4pAzc" 
		 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
		 clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

	responsive(
		'mapaGoogle',
		'(max-width:710px)',
		`<a href="https://goo.gl/maps/UYvns7Sw2EQHtdXm7">IR A GOOGLE MAPS</a>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14695.
		 816560239235!2d-43.2104872!3d-22.951916!3m2!1i1024!2i768!4f13.
		 1!3m3!1m2!1s0x0%3A0x9dc984d7019502de!2sCristo%20Redentor!5e0!3m2!1ses!2spe!4v1665513329609!5m2!1ses!2spe" 
		 width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
	responsiveTester('formulario');
	userAgent("user");
	camara("camara","#dispositivo_audio","#dispositivo_video");
	geolocation('geo');
	filtro_busqueda('.input-filter','.card');
	sorteo('.player','#players','btn-sorteo');
	carrusel('#play');
	scroll_spy('(max-width:1024px)');
	
});

//keydown, keypress, keyup
d.addEventListener("keydown",(e) => { 
	shortcuts(e,'#reproductor');
	moveBall(e,'#contenedor','#bola');
});

connection();






