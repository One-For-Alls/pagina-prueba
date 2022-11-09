console.groupCollapsed("CLASE 60: WEB Apis");

	// console.log(window);

	// let texto = "Hola mucho gusto me llamo Anthony, y tu.. como te llamas?";
	// let texto2 = "Hola yo me llamo PC";

	// const speak = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

	// speak(texto);

	// if (speak) {
	// 	speak(texto2);
	// }

console.groupEnd();

console.groupCollapsed("CLASE 61: DOM: Introduccion");
	//referencia a todo el documento incluye el doctype
	// console.log(document);

	// console.log(document.head);
	// console.log(document.body);

	// // referencia a todo el html
	// console.log(document.documentElement); 

	// console.log(document.title);//muestra el titulo
	// console.log(document.doctype);
	// console.log(document.charset);
	// console.log(document.links); // recolecta todos los links de la pagina etiquetas "a" 
	// console.log(document.images);//recolecta las imaganes estan entre corchetes pero no son array
	// console.log(document.styleSheets); // captura los estilos
	// console.log(document.scripts); //captura los scripts
	// document.getSelection().toString() // captura lo que seleccionamos en pantalla

	// setTimeout(() => {
	// 	console.log(document.getSelection().toString());
	// },3000);

console.groupEnd();

console.groupCollapsed("CLASE 62: Nodos, elementos y selectores");

	/*
		NODOS: Un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo,
		el mismo body o incluso las etiquetas de una lista. Con Javascript 
	 	podemos modificar estas etiquetas con el uso de eventos.
		
		ELEMENTOS: las etiquetas ejm <h1></h1> son nodo elementos del DOM

	    SELECTORES: El metodo de selectores acepta uno o mas selectores 
	    seperados por comas entre cada selector para determinar que elemento o 
	    elementos deben ser devueltos. por ejemplo para seleccionar todos los
	    elementos (p) del parrafo en un documento donde la clase CSS
	    EJM : document.querySelectorAll
	 */

 	// console.log(document.getElementsByTagName("li")); // devuele la coleccion por tipo de elemento 
 	// console.log(document.getElementsByClassName("cards")); // devuelve la coleccion de las clases indicadas
 	// console.log(document.getElementsByName("nombre")); // devuelve los datos por el nombre del atributo 
 	// //los 3 primeros estan algo desfasados


 	// console.log(document.getElementById("menu")); // devuelve por medio del id es mas rapido que query selector
 	// console.log(document.querySelector("#menu")); // aqui si se debe poner numeral si es un id y .class  para las clases

 	// console.log(document.querySelector("a")); // llama solo la primera coincidencia
 	// console.log(document.querySelectorAll("a")); // llama todas las coincidencias
 	// console.log(document.querySelectorAll("a").length); // para ver la cantidad
 	// document.querySelectorAll("#menu li").forEach(el => console.log(el)); // tmbn se puede hacer selectores desendientes
 	// console.log(document.querySelectorAll(".card")[3]);
 	// console.log(document.querySelectorAll(".card"));

console.groupEnd();

console.groupCollapsed("CLASE 63: ATRIBUTOS Y DATA ATTRIBUTES");

	// console.log(document.documentElement.lang); 
	// console.log(document.documentElement.getAttribute("lang"));// ambos cumplen la funcion similiar a la vista pero el get
	// //atribute extrae solo el nombre actual de eleemnto abajo el ejm

	// console.log(document.querySelector(".link-dom").href); // traer toda
	// //la url hasta la del servidor
	// console.log(document.querySelector(".link-dom").getAttribute("href")); // solo 
	// // extrae la url actual q contiene la etiqueta href


	// // Modoficar establecer y remover  atributos / valores

	// document.documentElement.lang = "es"; // en el doc original esta en "en", pero con el codigo se cambio a "esp y se refleja en el codigo en vivo"
	// //de esta forma se establece o modifica el valor de un atributo
	// console.log(document.documentElement.lang); 

	// document.documentElement.setAttribute("lang","esPE")// segunda forma de establecer un valor de atributo// se pone el nombre del attr y su valor
	// // con set se modifica y crea nuevos atributos
	// console.log(document.documentElement.lang);

	// const $t = document.querySelector("#t");
	// const $linkDOM = document.querySelector(".link-dom"); // una buena practica es antecederle el signo de dolar a un variable establecida para el elemnto del dom
	// // asi diferenciamos de variable q son de la logica de la porgamacion de los elementos html
	
	// $linkDOM.setAttribute("target","_blank"); // establece attr target y le indica abra una nueva pagina
	// $linkDOM.setAttribute("rel","noopener");
	// $linkDOM.setAttribute("href","https://facebook.com/paradiselovestore");
	// $linkDOM.hasAttribute("rel");
	// console.log($linkDOM.hasAttribute("rel")); // verifica si el atrbuto existe retorna true
	// $linkDOM.removeAttribute("rel"); 
	// console.log($linkDOM.hasAttribute("rel"));// verifica si el atrbuto existe retorna false
	// console.log($t.id);

	// //////////////////////////////////////////////////////////////////

	// //DTA-ATTRIBUTES

	// console.log($linkDOM.getAttribute("data-description")); // get carga el valor del atributo, en este caso de un data-*
	// console.log($linkDOM.dataset); // nuevo valor Expone un mapa de cadenas ( DOMStringMap) con una entrada para cada
	// console.log($linkDOM.dataset.description) // primero se entra al data set, y luego el nombre del data atributo sin el data-* 
	// $linkDOM.setAttribute("data-description", "Modelo de objeto del documento");
	// console.log($linkDOM.dataset.description);// se consulta al mapa dataset
	// $linkDOM.dataset.description = "Sigue perseverando lo vas a lograr Tony, de mi para mi";
	// console.log($linkDOM.dataset.description);
	// $linkDOM.setAttribute("data-id","0001");
	// console.log($linkDOM.dataset.id);
	// console.log($linkDOM.hasAttribute("data-description"));

console.groupEnd();

console.groupCollapsed("CLASE 64: ESTILOS Y VARIABLES CSS");

	const $linkDOM = document.querySelector(".link-dom");
	const $cards3 = document.querySelector(".cards");
	// console.log($linkDOM); // muestra toda la etiqueta don esta 
	//declarado el atributo css

	// ".style"  Esto solo captura los estilos declarados en el mismo html
	// tiene la lista de todos los estilos, pero en vacio pero si los
	// halla muesta sus valores

	// "getAttribute" solo muestra las propiedades y valores dentro del 
	//style declarado dentro del html
	
	//console.log($linkDOM.style.getPropertyValue("font-style"));, tmbn es valida 
	
	// no halla las propiedades de estilos definidas en un documento externo de css	
		//ejm console.log($linkDOM.style.backgroundColor); 
		//console.log($linkDOM.style.color); 

	// "coperty" para establecer propiedad/estilos y su respectivo valor

	console.log($linkDOM.style); 
	console.log($linkDOM.style.fontStyle);
	console.log("Propiedades del style en html: ",$linkDOM.getAttribute("style")); 
	
	$linkDOM.style.setProperty("font-style","normal");
	$linkDOM.style.setProperty("display","block");
	$linkDOM.style.setProperty("text-decoration","none");
	$linkDOM.style.setProperty("text-align","center");
	$linkDOM.style.width = "50%";
	$linkDOM.style.marginLeft = "auto";
	$linkDOM.style.marginRight = "auto";
	$linkDOM.style.padding = '1rem';
	$linkDOM.style.borderRadius = '.5rem';


	// "getComputedStyle"  Muestra todos los estilos sean internos de html 
	// y los externos de css, muestra los valores por defecto de cada 
	//propiedad y si ya establecimos las propias , muestra las nuestras
	//son propiedades computadas, y solo se puede mostrar de manera individual
		//tmbn sirve console.log(getComputedStyle($linkDOM).color);

	console.log(window.getComputedStyle($linkDOM)); 
	console.log(getComputedStyle($linkDOM).getPropertyValue("color")); 
	console.log(getComputedStyle($linkDOM).getPropertyValue("background-color"));
	console.log(getComputedStyle($linkDOM).getPropertyValue("font-style"));



	//////////////////////////////////////////////////////////////

	console.group("FORMA DE JON MIRCHA - ESTABLECIENDO SIN EL VAR");

		//variable css - custom properties css

		const $html = document.documentElement; // accede al html
		const $body = document.body; //accede al body

		//guardamos el color pasado por la pseudaclase root
		let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
		let varYellowColor = getComputedStyle($body).getPropertyValue("--yellow-color");

		//se consulta los colores
		console.log(`var --yellow-color:${varYellowColor} var --dark-color:${varDarkColor}`);

		//indicamos que el body del html tenga el color pasado por la variable
		$body.style.backgroundColor = varDarkColor;
		$body.style.color = varYellowColor;

		//establecemos que la variable --dark-color sea rojo
		$html.style.setProperty("--dark-color","#fff");
		//obtenemos el nuevo color para actualizar
		varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
		//aqui ya establecemos q tome el color rojo
		$html.style.setProperty('background-color',varDarkColor);
		$body.style.setProperty('background-color',varDarkColor);


		$body.style.setProperty('--yellow-color','#000');
		varYellowColor = getComputedStyle($body).getPropertyValue('--yellow-color');
		$body.style.setProperty('color',varYellowColor);

	console.groupEnd();

	console.group("FORMA DINAMICA");

		// LE PASE CON VAR LA PROPIEDAD ESTABLECIDA EN ROOT Y AQUI LO QUE
		// ES CAMBIAR EL VALOR DE LA PROPIEDAD YELLOW-COLOR QUE LLAME EN EL
		// BACKGROUND DE LA CLASE LINK-DOM, esto solo afecto netamente 
		//a link-dom 
		$linkDOM.style.setProperty('--yellow-color',"#9D9");
		$cards3.style.setProperty('--dark-color',"#000");
		$cards3.style.setProperty('--yellow-color',"#ff0");

	console.groupEnd();
 
console.groupEnd();

console.groupCollapsed("CLASE 65: DOM: CLASES");

	const $card = document.querySelector(".card");

	console.log($card);
	console.log($card.className); //imprime el nombre de la clase

	// un domTokenList lista que almacena los valores de las clases
	//parecido a un arreglo // maneja metodos
	console.log($card.classList); 

	console.log($card.classList.contains('.rotate-45'));  // verfica si existe o no con un boolean
	
	$card.classList.add('rotate-45'); // el metodo add agrega la clase tal cual el nombre sin el punto
	console.log($card.classList.contains('rotate-45')); // verfica si entonces es true
	
	$card.classList.remove('rotate-45'); // remueve la clase
	console.log($card.classList.contains('rotate-45')); // false

	$card.classList.toggle("rotate-45");// t0ggle es como interruptor, si no existe agrega y si existe la quita
	console.log($card.classList.contains('rotate-45'));

	$card.classList.toggle("rotate-45");
	console.log($card.classList.contains('rotate-45'));

	$card.classList.toggle("rotate-45");
	$card.classList.replace("rotate-45", "rotate-135");
	$card.classList.toggle("rotate-135");

	// se puede agregar, eliminar  mas de una clase solo separarla por comas
	
	$card.classList.add("opacity-80","sepia");
	//$card.classList.remove("opacity-80","sepia");
	//$card.classList.toggle("opacity-80");

console.groupEnd();

console.groupCollapsed("CLASE 66: DOM: TEXT Y HTML");

	const $whatIsDOM = document.getElementById("que-es");

	let text = ` 
	<p>
	<b>Javascript</b> es el mejor lenguaje de <b>programacion</b>
	</p>
	<p>
	Si me esfuerzo lo voy a lograr 
	</p>
	<p>
	Te llenare de orgullo Robertito
	</p>
	`;

	//$whatIsDOM.innerText = text; // no estandar es de explorer muestra tal cual se digito el codigo con todo y etiquetas
	$whatIsDOM.textContent = text; // muestra tal cual solo quita los espacio entre etiquetas
	$whatIsDOM.innerHTML = text; // muestra sin las etiquetas , pero ejecuta cada etiqueta del codigo html establecida
	$whatIsDOM.outerHTML = text;// de igual forma, pero esta quita la equita principal de id y solo deja lo del text cada uno independiente

console.groupEnd();

console.groupCollapsed("CLASE 67: RECORRIDO DEL DOM");

	// // tenemos 12 tipos de nodo //tabulacion o espacio tmbn en un tipo de nodo
	// //nodo de elementos etc

	//  const $cards = document.querySelector(".cards");
	// console.log($cards);

	//  // hijos de cards / figures en coleccion html
	// console.log($cards.children);

	// // lista de nodos
	// console.log($cards.childNodes);

	// // tipo un array para entrar a la posicion del hijo 3
	// console.log($cards.children[3]); 

	// //para mostrar el padre del cual depende la clase en cuestion
	// console.log($cards.parentElement); 

	// // muestra el primer hijo de la clase cards
	// //el "firstElementChild" muestra toda la etiqueta
	// console.log($cards.firstChild);
	// console.log($cards.firstElementChild);

	// //muestra el ultimo hijo de la clase cards // 
	// //el "lastElementChild" muestra toda la etiqueta
	// console.log($cards.lastChild);
	// console.log($cards.lastElementChild);

	// //muestra el hermano anterior
	// console.log($cards.previousSibling);
	// console.log($cards.previousElementSibling);

	// //muestra el hermano posterior
	// console.log($cards.nextSibling);
	// console.log($cards.nextElementSibling);

	// //metodo "closest" busca el padre mas cercano, toma como referencia un hijo y 
	// //busca un ancestro mas cercano

	// console.log($cards.children[3].closest("section"));
	const $cards2 = document.querySelectorAll(".cards .card figcaption");
	console.log($cards2);
	$cards2.forEach(el => {
		el.style.setProperty("text-align",'center');
	});
	
	//$cards2.style.setProperty("text-align","center");

console.groupEnd();

console.groupCollapsed("CLASE 68: CREANDO ELEMENTOS Y FRAGMENTOS");

	//DE FORMA DINAMICA

	//"createElement" crear nuevas etiquetas de html
	//"createTextNode" crea un nuevo nodo de texto

	// const $figure = document.createElement("figure"),
	// 	  $img = document.createElement("img"),
	// 	  $figcaption = document.createElement("figcaption"),
	// 	  $figcaptionText = document.createTextNode("Animals"),

	// 	  // capturamos el selector con clase .cards
	// 	  $cards = document.querySelector(".cards"); 

	// 	  //Agrega un nuevo nodo al final de la lista de 
	// 	  //un elemento hijo de un elemento padre especificado.
	// 	  //"append" agregar varios nodos
	// 	  //"appendChild" solo 1 nodo a la vez

	// 	  //$figure.append($img, $figcaption); 

	// 	  $img.setAttribute("src", "https://placeimg.com/200/200/animals");
	// 	  $img.setAttribute("alt", "Animals");
	// 	  $figure.classList.add("card");
	// 	  $figure.appendChild($img);
	// 	  $figure.appendChild($figcaption);
	// 	  $figcaption.appendChild($figcaptionText);
	// 	  $cards.appendChild($figure); 

	// 	 // forma 2 de agregar etiquetas dinamicas
	// 	  document.currentScript.insertAdjacentHTML('afterend','<h1>ESTACIONES DEL AÑO</h1>');

	// 	  const estaciones = ['VERANO',"OTOÑO","PRIMAVERA","INVIERNO"];
	// 	  const $ul = document.createElement('ul');
	// 	  document.body.appendChild($ul);

	// 	  estaciones.forEach(el => {
	// 	  	const $li = document.createElement('li'); // crea "li"
	// 	  	$li.textContent = el;  // asigna estaciones dentro de "li"
	// 	  	$ul.appendChild($li);// se inserta "li" a "ul"
	// 	  })

	// 	 // forma 3 menos recomendada

	// 	 document.write('<h1> Continentes del mundo </h1>');

	// 	 const continentes = ["AMERICA","ASIA","OCEANIA","AFRICA","EUROPA"];
	// 	 const $ul2 = document.createElement('ul');
	// 	 document.body.appendChild($ul2);

	// 	 $ul2.innerHTML = '';
	// 	 continentes.forEach(el => {$ul2.innerHTML += `<li>${el}</li>`;})


	// 	 document.write('<h1>MESES DEL AÑO</h1');

	// // Crea un nuevo vacío "DocumentFragmenten" el que se pueden 
	// // 	agregar nodos DOM para crear un árbol DOM fuera de pantalla.
	// // 	es mas eficiente y rapido con el fragment

	// 	//forma 4 y las mas optima
	
	// 	const meses = ["enero","febrero","marzo","abril",'mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
	// 	 	   $ul3 = document.createElement('ul'),
	// 	 	   $fragmento = document.createDocumentFragment();

	// 	meses.forEach(el =>{

	// 		const $li = document.createElement('li');
	// 		$li.textContent = el;
	// 		$fragmento.appendChild($li);
	// 	});

	// 	$ul3.appendChild($fragmento);
	// 	document.body.appendChild($ul3); 

console.groupEnd();

console.groupCollapsed("CLASE 69: TEMPLATE HTML");

	const $cards = document.querySelector(".cards"),
		  $template = document.getElementById("template-card").content,
		  // aqui se almacena la info antes de pasarlo al dom
		  $fragmento = document.createDocumentFragment(), 
		  cardContent = [
			  {
			  	titulo: "Tecnologia",
			  	img: "https://placeimg.com/200/200/tech"
			  },
			  {
			  	titulo: "Animales",
			  	img: "https://placeimg.com/200/200/animals"
			  },
			  {
			  	titulo: "Arquitectura",
			  	img: "https://placeimg.com/200/200/arch"
			  },
			  {
			  	titulo: "Gente",
			  	img: "https://placeimg.com/200/200/people"
			  },
			  {
			  	titulo: "Naturaleza",
			  	img: "https://placeimg.com/200/200/nature"
			  }
			]

	cardContent.forEach(el => {
		$template.querySelector("img").setAttribute("src", el.img);
		$template.querySelector("img").setAttribute("alt", el.titulo);
		$template.querySelector("figcaption").textContent = el.titulo;

		let $clone = document.importNode($template, true);
		$fragmento.appendChild($clone);
	})		

	$cards.appendChild($fragmento);

console.groupEnd();

console.groupCollapsed("CLASE 70: MODIFICANDO ELEMENTOS OLD STYLE");

	// const $cards = document.querySelector(".cards"),
	// 	  $newCard = document.createElement("figure"),
	// 	  $cloneCards = $cards.cloneNode(true);

	// $newCard.innerHTML=`
	// 	<img src="https://placeimg.com/200/200/any" alt="Any"> 
	// 	<figcaption>Any</figcaption>
	// `;

	// $newCard.classList.add("card");

	// // reemplaza un hijo por otro definido
	// //$cards.replaceChild($newCard,$cards.children[2]);

	// //inserta antes del primer hijo
	// //$cards.insertBefore($newCard, $cards.firstElementChild);

	// //elimina el ultimo hijo
	// //$cards.removeChild($cards.lastElementChild);

	// document.body.appendChild($cloneCards); // agrega el clon

console.groupEnd();

console.groupCollapsed("CLASE 71: MODIFICANDO ELEMENTOS COOL STYLE");

	/*
	INSERTADJACENT...
		.insertAdjacentElement(posicion, elemento) // etiqueta html
		.insertAdjacentHTML(posicion, html) // formato html
		.insertAdjacentText(posicion, texto) // texto

	POSICIONES...
		beforebegin(hermano anterior)
		afterend(hermano siguiente)

		afterbegin(primer hijo)
		beforeend(ultimo hijo)
	*/

	// const $cards = document.querySelector(".cards"),
	// 	  $newCard = document.createElement("figure");

	// let $contentCard =`
	// 	<img src="https://placeimg.com/200/200/any" alt="Any"> 
	// 	<figcaption></figcaption>
	// `;

	// $newCard.classList.add("card");

	// //primer hijo de cards
	// $newCard.insertAdjacentHTML("beforeend", $contentCard);
	// $newCard.querySelector("figcaption").insertAdjacentText("beforeend", "ANY");
	// $cards.insertAdjacentElement("afterbegin",$newCard);


	//ultimo hijo de cards
	// $cards.insertAdjacentElement("beforeend",$newCard);

	//PRIMER HERMANO  de cards
	// $cards.insertAdjacentElement("beforebegin",$newCard);

	//Ultimo HERMANO  de cards
	// $cards.insertAdjacentElement("afterend",$newCard);

	// $cards.before(hermano anterior)
	// $cards.after(hermano siguiente)  -> esto es de jquery pero nativo a js
	// $cards.prepend(primer hijo)
	// $cards.append(ultimo hijo)

console.groupEnd();

console.groupCollapsed("CLASE 72: MANEJADORES DE EVENTOS");

	// //con atributo onclick poco recomentado
	// function holaMundo(){
	// 	alert("hola mundo");
	// 	console.log(event);
	// }

	// //sin atributo, se pone la funcion sin parentsis para q no se autoejecute
	// //sus limitaante esq solo ejecuta solo 1 funcion
	// const $eventoSemantico = document.getElementById("evento-semantico");
	// const $eventoMultiple = document.getElementById("evento-multiple");

	// $eventoSemantico.onclick = holaMundo;
	// $eventoSemantico.onclick = (e) => {
	// 	alert("Hola mundo con maejador semantico");
	// 	console.log(e);
	// 	console.log(event);
	// }

	// $eventoMultiple.addEventListener("click",holaMundo);
	// $eventoMultiple.addEventListener("click",(e) => {
	// 	alert("manejador de evento multiple"); 
	// 	console.log(e);
	// 	console.log(e.type); 
	// 	console.log(e.target); 
	// 	console.log(event);
	// });

console.groupEnd();

console.groupCollapsed("CLASE 73: EVENTO CON PARAMENTROS Y REMOVER EVENTOS");

	function holaMundo(){
		alert("hola mundo");
		console.log(event);
	}

	//cuando se pasan parametros directo en la funcion no la va a leer, ya que solo
	//lee o imprime la palabra reservada event, esto solo se da en dunciones 
	//que son manejadores de eventos 

	function saludar(nombre = "Desconocido"){
		console.log(`Hola ${nombre} como estas?`);
	}

	const $eventoMultiple = document.getElementById("evento-multiple");
	const $eventoRemover = document.getElementById("remover-multiple");


	$eventoMultiple.addEventListener("click",saludar);

	//la forma para q muestre el arametro es crear un arrow function y dentro
	//llamar a la funcion
	$eventoMultiple.addEventListener("click",() => {
		saludar("Anthony");
	});

	const removerDobleClick = (e) => {
		alert("removiendo el manejador de eventos");
		console.log(e.type);
		console.log(e);
		$eventoRemover.removeEventListener("dblclick",removerDobleClick);
		$eventoRemover.disabled = true;
	};

	$eventoRemover.addEventListener("dblclick", removerDobleClick);

console.groupEnd();

console.groupCollapsed("CLASE 74: FLUJO DE EVENTOS (BURBUJA Y CAPTURA)");

	//FASE POR DEFECTO ES BURBUJA INTERNO AL EXTERNO Y FASE CAPTURA EXTERNO AL INTERNO

	// const $divEventos = document.querySelectorAll(".eventos-flujo div");
	// console.log($divEventos);

	// function flujoEventos(e){
	// 	console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`)
		
	// }

	// $divEventos.forEach( div => {
	// 	div.addEventListener("click",flujoEventos,true);
	// 	// div.addEventListener("click",flujoEventos,{
	// 	// 	capture: true,
	// 	// 	once: true // esto valida si se ejecuta una sola vez el evento
	// 	// });
	// })

	//el addeventlistener recibe 3 parametros // false es por defecto mayor a menor
	//true lo invierte de menor a mayor(fase de captura)

console.groupEnd();

console.groupCollapsed("CLASE 75: stopPropagation & preventDefault");

	// const $linkEventos = document.querySelector(".eventos-flujo a");

	// function flujoEventos(e){
	// 		console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`)
	// 		e.stopPropagation(); // detiene la propagacion
	// 	}


	// 	$divEventos.forEach( div => {
	// 		div.addEventListener("click",flujoEventos,false);
	// 	});


	// 	$linkEventos.addEventListener("click", e => {
	// 		alert("Te saluda anthony");
	// 		e.preventDefault(); // hace q no se ejecute nada por defecto 
	// 		e.stopPropagation(); // evita la propagacion
	// 	});

console.groupEnd();

console.groupCollapsed("CLASE 76: DELEGACION DE EVENTOS");

	// const $divEventos = document.querySelectorAll(".eventos-flujo div");
	// console.log($divEventos);

	// function flujoEventos(e){
	// 	console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
	// }

	// document.addEventListener("click", e =>{
	// 	console.log('Click en',e.target);

	// 	if(e.target.matches('.eventos-flujo div')){
	// 		flujoEventos(e);
	// 	}

	// 	if (e.target.matches(".eventos-flujo a")) {
	// 		alert("Hola soy Anthony");
	// 		e.preventDefault();
	// 	}
	// });

	// $divEventos.forEach( div => {
	// 	div.addEventListener("click",flujoEventos,true);  // SI PONEMOS UNA FUNCION CON PARENTESIS SE AUTO EJECUTA
	// 	// div.addEventListener("click",flujoEventos,{
	// 	// 	capture: true,
	// 	// 	once: true // esto valida si se ejecuta una sola vez el evento
	// 	// });
	// })

console.groupEnd();

console.group("CLASE 77: BOM PROPIEDADES Y EVENTOS");

	// console.log(window.innerWidth); // ancho interno de la navegador
	// console.log(window.innerHeight);// alto interno de la ventana navegador
	// console.log(window.outerWidth); //ancho de toda la ventana del navegador
	// console.log(window.outerHeight); // alto de toda la ventana del navegador

	// window.addEventListener("resize", e => {
	// 	console.clear();
	// 	console.log("****************EVENTO RESIZE****************")
	// 	console.log(window.innerWidth); 
	// 	console.log(window.innerHeight);
	// 	console.log(window.outerWidth); 
	// 	console.log(window.outerHeight);
	// 	console.log(e);

	// });

	// window.addEventListener("scroll", e => {
		
	// 	console.log("****************EVENTO SCROLL****************")
	// 	console.log(window.scrollX); 
	// 	console.log(window.scrollY);

	// 	console.log(e);

	// });

	// window.addEventListener("load", e => {  
		
	// 	console.log("****************EVENTO LOAD****************")
	// 	console.log(window.screenX); 
	// 	console.log(window.screenY);
	// 	console.log(e);

	// });

	// window.addEventListener("DOMContentLoaded", e => { // es mucho mas veloz

	// 	console.log("****************EVENTO DOMContentLoaded****************")
	// 	console.log(window.screenX); 
	// 	console.log(window.screenY);
	// 	console.log(e);

	// });


	// $(window).load(function);
	// $(document).ready(function);
	// $(window).on("load", function);

console.groupEnd();


console.group("CLASE 78: BOM METODOS");

	const $btnAbrir = document.getElementById("abrir-ventana"),
		  $btnCerrar = document.getElementById("cerrar-ventana"),
		  $btnImprimir = document.getElementById("imprimir-ventana");

	let ventana;

	$btnAbrir.addEventListener("click", e => {

		ventana = window.open("https://google.com"); // metodo del objeto window

	});

	$btnCerrar.addEventListener("click", e => {
		console.log(ventana);
		ventana.close();

	});

	$btnImprimir.addEventListener("click", e => {

		print();

	});

console.groupEnd();


console.group("CLASE 79: BOM URL HISTORIAL Y NAVEGACION");

console.log('********** LOCATION O URL ***************'); 

	// console.log(location);  //LOCATION O URL
	// console.log(location.origin);
	// console.log(location.protocol);
	// console.log(location.host);
	// console.log(location.hostname);
	// console.log(location.port);
	// console.log(location.href);
	// console.log(location.hash);
	// console.log(location.search);
	// console.log(location.pathname);

	console.log('********** HISTORIAL ***************'); 
	console.log(history);
	console.log(history.length);
	//console.log(history.back(3)); // cantiad de paginas a regresar atras
	//console.log(history.forward(3)); // cantiad de paginas va para adelante
	console.log(history.go(4));

	console.log('********** HISTORIAL ***************');
	console.log(navigator);
	console.log(navigator.connection);
	console.log(navigator.geolocation);
	console.log(navigator.mediaDevices);
	console.log(navigator.mimeTypes);
	console.log(navigator.onLIne);
	console.log(navigator.serviceWorker);
	console.log(navigator.storage);
	console.log(navigator.usb);
	



console.groupEnd();


// console.group("CLASE 57: THIS");



// console.groupEnd();



