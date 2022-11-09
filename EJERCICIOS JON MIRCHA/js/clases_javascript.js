console.groupCollapsed("CLASE 12: OBJETOS");

	//FORMA ANTIGUA
	const obj = new Object();
	console.log(obj);

	//FORMA MODERNA

	const tony = {
		nombre: 'Anthony Franklin',
		apellido: 'Roldan Fernandez',
		dni: 739927223,
		nacimiento: '15/12/1997',
		pasatiempos: ['nadar', 'jugar Dota 2', 'estudiar',
			'caminar'],
		redes: {
			facebook: 'anthony-zavaleta',
			instagram: '@anthonyZavaleta'
		},
		soltero: false,
		saludar() {
			console.log(`Hola, mucho gusto mi nombre es ${this.nombre}`);
		}
	}

	console.log(tony);
	console.log(tony.nombre);
	console.log(tony.apellido);
	console.log(tony.dni);
	console.log(tony.nacimiento);
	console.log(tony.pasatiempos[1]);
	console.log(tony.pasatiempos[3]);
	console.log(tony.redes.facebook);
	console.log(tony.saludar());

	//convierte un objeto en array Y muestra la posicion y nombre
	//de las propiedades
	console.log(Object.keys(tony));

	//convierte un objeto en array Y muestra la posicion y 
	// los valores
	console.log(Object.values(tony));

	//El método hasOwnProperty() devuelve un booleano indicando
	//si el objeto tiene la propiedad especificada.
	console.log(tony.hasOwnProperty("nombre"));
	console.log(tony.hasOwnProperty("hola"));

console.groupEnd();

console.groupCollapsed("CLASE 18: DESTRUCTURACION");
	//la destructuracion permite asignar a valores de arrays o 
	//objetos en variables independientes para su uso 
	//correspondiente

	//SIN DESTRUCTURACION ARREGLO

	let animales = ['gazela', 'loro', 'pollo', 'alce', 'tiburon'];

	let gazela = animales[0],
		loro = animales[1],
		pollo = animales[2],
		alce = animales[3],
		tiburon = animales[4];

	console.log(gazela + '\n' + loro + '\n' + pollo + '\n' + alce + '\n' + tiburon);

	//CON DESTRUCTURACION ARREGLO

	let [Gazela, Loro, Pollo, Alce, Tiburon] = animales;
	console.log(Gazela + '\n' + Loro + '\n' + Pollo + '\n' + Alce + '\n' + Tiburon);

	//SIN DESTRUCTURACION objeto

	const pelicula = {
		nombre: 'matrix',
		genero: ['accion', 'fantasia', 'futurista'],
		duracion: 120,
		anio: 2005
	}

	let nombre = pelicula.nombre,
		genero = [pelicula.genero],
		duracion = pelicula.duracion,
		anio = pelicula.anio;


	console.log(nombre + '\n' + genero + '\n' + duracion + '\n' + anio);

	//CON DESTRUCTURACION objeto

	const pelicula2 = {
		name: 'matrix',
		gender: ['accion', 'fantasia', 'futurista'],
		duration: 120,
		year: 2005
	}

	let { name, gender, duration, year } = pelicula2;
	console.log(name + '\n' + gender + '\n' + duration + '\n' + year);

console.groupEnd();

console.groupCollapsed("CLASE 20: REST Y SPREAD OPERATOR");

	function sumar(a, b, ...c) { //...c es el elemento rest, este almacena
		//todo lo que viene desues de los parametros a y b	

		let total = a + b;

		c.forEach(num => total += num)

		return total;
	}
	console.log(sumar(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

	//SPREAD OPERATOR  

	const arr1 = [1, 2, 3, 4, 5];
	const arr2 = [6, 7, 8, 9, 0];

	const arr3 = [...arr1, ...arr2];

	console.log(arr3);

console.groupEnd();

console.groupCollapsed("CLASE 22: PROTOTIPO");

	function Animal(nombre, genero) {
		this.nombre = nombre;
		this.genero = genero;
		//Metodo
		this.sonido = function () {
			console.log(`Soy un ${this.nombre} y mi genero es ${this.genero}`);
		}
	}

	Animal.prototype.saludar = function () {
		console.log(`Hola`);
	}

	const aguila = new Animal("aguila", "macho");
	console.log(aguila);
	console.log(aguila.sonido());
	console.log(aguila.saludar());

console.groupEnd();

console.groupCollapsed("CLASE 23: HERENCIA PROTOTIPICA");

	function Perro(nombre, genero, tamanio) {
		this.super = Animal; // super se agina para instancia que ANIMAL ES EL PADRE
		this.super(nombre, genero);//SE PASA LOS ATRIBUTOS DEL ANIMAL
		this.tamanio = tamanio;
	}

	console.log(Perro.prototype);

	//Perro hereda de Animal

	Perro.prototype = new Animal();
	Perro.prototype.constructor = Perro; // se define a Perro como constructor

	console.log(Perro.prototype);

	Perro.prototype.saludar = function () { //Al perro heredear los metodos de Animal tmbn puede sobre escribirlo solo para su propio uso
		console.log(`Hola soy un ${this.nombre} y soy de tamaño ${this.tamanio}`);
	}

	const scooby = new Perro("perro", "macho", "grande");
	console.log(scooby);
	console.log(scooby.sonido());
	console.log(scooby.saludar());

console.groupEnd();

console.groupCollapsed("CLASE 24: CLASES Y HERENCIA");

	class Games {
		constructor(nombre, categoria, precio) {
			this.nombre = nombre;
			this.categoria = categoria;
			this.precio = precio;
		}

		ejecutar() {
			console.log(`Se esta ejecutando... el juego ${this.nombre}`);
		}

		cerrar() {
			console.log(`Se esta cerrando... el juego ${this.nombre}`);
		}

		static informacion() { //si le ponemos static se puede usar sin necesidad de instanciarlo
			console.log(`El juego se llama ${this.nombre} es de la categoria ${this.categoria} y cuesta S/. ${this.precio}`)
		}
	}

	const dota = new Games("Dota 2", "ONLINE", 20);
	console.log(dota);
	console.log(dota.ejecutar());
	console.log(dota.cerrar());
	console.log(Games.informacion());

	class Dispositivo extends Games {
		constructor(nombre, categoria, precio, dispositivo) {

			super(nombre, categoria, precio);
			this.dispositivo = dispositivo;
			this.fabricante = null;
		}

		informacion() {
			console.log(`El juego se llama ${this.nombre} solo se ejecuta en ${this.dispositivo}`)
		}

		//GETTERS(OBTENER) Y SETTERS(ESTABLECER) SON METODOS ESPECIALES Q NOS PERMITEN OBTENER Y 
		//ESTABLECER VALORES DE LOS ATRIBUTOS EN LA CLASE

		get getFabricante() {
			return this.fabricante;
		}

		set setFabricante(fabricante) {
			this.fabricante = fabricante;
		}
	}

	const Dota = new Dispositivo("Dota 2", "online", 20, "PC");
	console.log(Dota);
	console.log(Dota.informacion());
	console.log(Dota.fabricante);
	Dota.setFabricante = "VALVE";
	console.log(Dota);
	console.log(Dota.getFabricante);

console.groupEnd();

console.groupCollapsed("CLASE 33: FUNCION ANONIMA AUTOEJECUTABLE"); //JAVASCRIPT ES DE 1 SOLO HILO SINGLE THREAD

	(function () {   // va parentesis la funcion tal cual y luego otro patensis solo con punto y coma

		console.log("eres guapo!!!");

	})();

	(function (d, w, c) {   //tmbn se le puede pasar parametros 

		c.log("eres guapisimo!!!");

	})(document, window, console);

	+function () {   //version unaria

		console.log("eres guapo1!!!");

	}();

	((function () {   // version crockford

		console.log("eres guapo2!!!");

	})());

console.groupEnd();

console.groupCollapsed("CLASE 45: TEMPORIZADORES"); //JAVASCRIPT ES DE 1 SOLO HILO SINGLE THREAD

	// setTimeout(() => {  //SE EJECUTA UNA SOLA VEZ
	// 	console.log("EJECUTANDO SETTIMEOUT");
	// },3000);

	let timeout = setTimeout(() => {  //SE EJECUTA UNA SOLA VEZ
		console.log("EJECUTANDO SETTIMEOUT");
	}, 3000);

	clearTimeout(timeout);


	// setInterval(() => { //SE EJECUTA de manera indefinida cada cierto tiempo
	// 	console.log("ejecutando setInterval");
	// },10000);


	let interval = setInterval(() => { //SE EJECUTA de manera indefinida cada cierto tiempo
		console.log(new Date().toLocaleTimeString());
	}, 1000);

	clearInterval(interval);

console.groupEnd();

console.group("CLASE 46: ASINCRONIA y EVENT LOOP");//JAVASCRIPT ES DE 1 SOLO HILO SINGLE THREAD

	//PROCESAMIENTO SINGLE THREAD Y MULTI THREAD

	console.group("FUNCIONAMIENTO EVENT LOOP")

		//primero se ejecuta todo el codigo sincrono en la call stack, y lo asincrono se 
		//asigna a la callback a la espera de que termine todo lo sincrono
		//por eso primero imprime "1" luego toma el primer setTimeout lo guarda, luego imprime "3",
		// luego toma el setIterval y lo guarda, luego guarda el otro setTimeout casi simultaneo
		//luego imprime "7" luego el 2 , luego el 4 y guarda el setTimeout y despues el 6 y final
		//imprime 5

		// console.log(1);

		// setTimeout(function(){
		// 	console.log(2);
		// },0);

		// console.log(3);

		// let interv = setInterval(function(){

		//               		 console.log(4);  

		//        			setTimeout(function(){console.log(5)
		//        		 },500);

		//            },1000); 

		// setTimeout(function(){

		// 	clearInterval(interv); 

		// 	console.log(6)

		// },1100);	

		// console.log(7);
	console.groupEnd();

console.groupCollapsed("CALLBACKS")

	function cuadrado(valor, callback) {
		setTimeout(() => {
			callback(valor, valor * valor); // aca llama como una funcion
		}, 0 | Math.random() * 1500);
	}

	//CALLBACK HELL O INFIERNO

	// cuadrado(1, (valor,resultado) => { //aca se manda la funcion
	// 	console.log("iniciamos");
	// 	console.log(`callback: ${valor}, ${resultado}`);
	// 	cuadrado(2, (valor,resultado) => { //aca se manda la funcion
	// 		console.log("iniciamos");
	// 		console.log(`callback: ${valor}, ${resultado}`);
	// 		cuadrado(3, (valor,resultado) => { //aca se manda la funcion
	// 			console.log("iniciamos");
	// 			console.log(`callback: ${valor}, ${resultado}`);
	// 			cuadrado(4, (valor,resultado) => { //aca se manda la funcion
	// 				console.log("iniciamos");
	// 				console.log(`callback: ${valor}, ${resultado}`);
	// 			});
	// 		});
	// 	});
	// });

	console.groupEnd();

console.groupEnd();

console.group("CLASE 47: PROMESAS")

	function cuadradoPromesa(valor) {

		if (typeof valor !== 'number') {
			//Promise no necesita ser instanciado con el new
			return Promise.reject(`El "${valor}" no es un numero`);
		}
		//instanciando Promesa // RESOLVE LO QUE VENDRA BIEN // REJECT SI HAY ERROR
		return new Promise((resolve, reject) => {

			setTimeout(() => {

				resolve({
					valor,
					result: Math.pow(valor, 2)
				});

			}, 0 | Math.random() * 1000);
		});
	}

	// cuadradoPromesa(0)
	// //then ejecuta la continuacion de la promesa, porque sino se define
	// //se queda esperando la llamada de la promesa
	// .then(obj => {
	// 	console.log("Empezando promesa");
	// 	console.log(`Promesa: ${obj.valor}, ${obj.result}`);
	// 	return cuadradoPromesa(1);

	// })
	// .then(obj => {
	// 	console.log(`Promesa: ${obj.valor}, ${obj.result}`);
	// 	return cuadradoPromesa(2);
	// })
	// .then(obj => {
	// 	console.log(`Promesa: ${obj.valor}, ${obj.result}`);
	// 	console.log("fin promesa");
	// })
	// //par ver errores se usa el catch
	// .catch(error => console.error(error));

	// en el then no se puede declarar ariables

	console.groupEnd();

console.groupCollapsed("CLASE 48: FUNCIONES ASINCRONAS");

	// SI NO SE DECLARA LA FUNCION CON ASYNCRONA, NO PODRE USAR AWAIT
	async function funcionAsyncronaDeclarada() {

		// try {
		// 	// statements
		// 	console.log("Empezando ASYNC");
		// 	let obj = await cuadradoPromesa(0); // await espera que se cumpla la promesa para ejecutar
		// 	console.log(`Async function: ${obj.valor}, ${obj.result}`);
		//     obj = await cuadradoPromesa(1); // await espera que se cumpla la promesa para ejecutar
		// 	console.log(`Async function: ${obj.valor}, ${obj.result}`);
		//     obj = await cuadradoPromesa(2); // await espera que se cumpla la promesa para ejecutar
		// 	console.log(`Async function: ${obj.valor}, ${obj.result}`);
		// 	console.log("fin ASYNC");
		// } catch(e) {
		// 	// statements
		// 	console.error(e);
		// }

	}

	funcionAsyncronaDeclarada();

console.groupEnd();

console.groupCollapsed("CLASE 49: SYMBOL (SIMBOLOS)");

	// TIPO DE DATO PRIMITIVO DE ECMA SCRIPT 2015, QUE CREA UN IDENTIFICADOR
	//UNICO, como buena parctic siempre va en constante, NO SE INICIALIZA CON NEW
	//usado para crear elementos privados dentro de un OBJETO


	const id = Symbol();
	const id2 = Symbol("codigo 2"); // dentro del simbolo podemos escribir
	//dandole a si una etiqueta para poder identificarlos

	console.log(id);
	console.log(id2);

	console.log(id === id2);
	console.log(typeof id);

	// Para introducir un simbolo dentro de un objeto primero se lo referencia
	const SALUDAR = Symbol();
	const NOMBRE = Symbol('nombre'); // le defino la etiqueta "nombre"

	const persona = {
		edad: 24,
		[NOMBRE]: 'Anthony' //Para usarla dentro del objeto debe ir dentro de corchetes
		// es una propiedad unica , si se crea una igual, pero sin corchetes esta bien
	}

	persona.NOMBRE = "Robertito";
	persona[SALUDAR] = () => console.log("hola mi amigo");

	console.log(persona);
	console.log(persona[NOMBRE]); // ESTE SE USA TMBN EN OBJETOS PERO ES OBLIGATORIO PARA LOS SYMBOLS
	console.log(persona[SALUDAR]());

	for (propiedad in persona) {   // in es para propiedades
		console.log(propiedad);
		console.log(persona[propiedad]);
	}

	// for(valor of persona){ para los valores y que sea iterable arrays
	// 	console.log(propiedad);
	// }

	console.log(Object.getOwnPropertySymbols(persona));

console.groupEnd();

console.groupCollapsed("CLASE 50: SET");

	// ESTE NUEVO TIPO DE DATO ES SIMILAR A UN ARRAY MAS NO SE PUEDE IMPRIMIR
	//POR LA POSICION DEL ELEMENTO

	let arr = [1, 2, 3, 4, 5, 6, 7, true, true, false, false, 9, 9, 9, 9];
	const set1 = new Set(arr);

	console.log(arr);
	console.log(set1);

	const set2 = new Set([1, 1, 1, 1, 1, 1, 2, 2, 3, 4, 5]);
	console.log(set2);
	console.log(set2.size); // size exclusivo de set, length es para longitud de palabras

	set2.add("hola bro"); // para agregar al set
	console.log(set2);

	set2.delete(1); // para eliminar un elemento del set
	console.log(set2);

	console.log(set2.has(4)); // verifica si existe o no

	for (item of set1) {
		console.log(item);
	}

	set2.forEach((valor) => console.log("SET2: " + valor)); // solo para arrays y sets

	console.log(set2[0]); // esto no se puede dirctamente
	console.log(Array.from(set2)[0]); // este ya que se convirtio en array

	set1.clear(); //limpia todo el set dejandolo vacio

console.groupEnd();

console.groupCollapsed("CLASE 51: MAP");

	// ESTE NUEVO TIPO DE DATO ES SIMILAR A UN ARRAY MAS NO SE PUEDE IMPRIMIR
	//POR LA POSICION DEL ELEMENTO

	let mapa = new Map(); // instanciamos un nuevo mapa

	mapa.set("nombre", "Anthony");  // con set establecemos valores, el primero 
	mapa.set("apellido", "Zavaleta"); //seria la llave(key) y el segundo el valor(value)
	mapa.set("edad", 24);

	console.log(mapa); // son mostrados como array y tienen la flecha como un funcion flecha
	console.log(mapa.has("correo")); // has verifica si esta definida la llave y retorna true o false
	console.log(mapa.has("nombre"));

	console.log(mapa.get("apellido")); // obtiene el valor de la llave
	console.log(mapa.delete("edad")); // delete elimina la llave

	//COMO ES ITERABLE PODEMOS USAR FOR OF Y FOREARCH

	// sin destructurar
	for (let item of mapa) {
		console.log(item);
	}

	//destructurando// ya que este map tiene 2 propiedad, key y value
	//se puede hacer la destructuracion llamando esos datos en un array 
	// y proceder a iterar
	for (let [key, value] of mapa) {
		console.log(`llave: ${key}, Valor: ${value}`);
	}

	mapa.forEach((value, key) => console.log(key, value));

	const mapa2 = new Map([
		["nombre", "Agumon"],
		["etapa", "bebe"],
		["genero", "masculino"]
	]);

	console.log(mapa2);

	const llavesMapa2 = [...mapa2.keys()];
	const valoresMapa2 = [...mapa2.values()];

	console.log(`Llaves: ${llavesMapa2}`);
	console.log(`valores: ${valoresMapa2}`);

console.groupEnd();

console.groupCollapsed("CLASE 52: WeakSets & WeakMaps");
	/*
	* NO SON ELEMENTOS ITERABLES 
	* NO SE PUEDE VER SU TAMAÑO CON SIZE
	* SE PUEDE PASAR LLAVES DE TIPO OBJETO Y  DE UNO EN UNO
	*/

	// const ws = new WeakSet();

	// let valor1 = {hola:'tony'};
	// let valor2 = {'AMIGO':3};
	// let valor3 = {'total':330};

	// ws.add(valor1);
	// ws.add(valor2);

	// console.log(ws);

	// console.log(ws.has(valor1));
	// console.log(ws.has(valor3));

	// ws.delete(valor2);

	// console.log(ws);

	// ws.add(valor3);
	// ws.add(valor2);

	// console.log(ws);

	// let wsT = setInterval(() => console.log(ws),1000);


	// setTimeout(() => {
	// 	valor1 = null;
	// 	valor2 = null;
	// 	valor3 = null;
	// 	setTimeout(() => {
	// 		clearInterval(wsT);
	// 	},3000);
	// },5000);

	// const wm = new WeakMap();

	// let valors1 = {};
	// let valors2 = {};
	// let valors3 = {};

	// wm.set(valors1,"tony");
	// wm.set(valors2,3);

	// console.log(wm);

	// console.log(wm.has(valors1));
	// console.log(wm.has(valors3));

	// wm.delete(valors2);

	// console.log(wm);

	// wm.set(valors3,330);
	// wm.set(valors2,3);

	// console.log(wm);

	// let wmT = setInterval(() => console.log(wm),1000);


	// setTimeout(() => {
	// 	valors1 = null;
	// 	valors2 = null;
	// 	valors3 = null;
	// 	setTimeout(() => {
	// 		clearInterval(wmT);
	// 	},3000);
	// },5000);

console.groupEnd();

console.groupCollapsed("CLASE 53:INTERABLES & ITERATORS");

	const elementoIterable = [1,2,3,4,5,6];

	//accedemos al iterador del elementoiterable
	const iterador = elementoIterable[Symbol.iterator]();
	const iterador2 = "Isabel"[Symbol.iterator]();

	console.log(iterador);
	console.log(iterador.next());
	console.log(iterador.next());
	console.log(iterador.next());
	console.log(iterador.next());
	console.log(iterador.next());
	console.log(iterador.next());
	console.log(iterador.next());

	console.log(iterador2);

	let next = iterador2.next();

	while (!next.done) { //mientras done sea falso que siga iterando
		console.log(next.value);
		next = iterador2.next(); // se vuelve a indicar el que haga next destro del bucle
	}

	//tambien el elemnto iterable puede ser un set o map o array
	// solo deben ser iterables

console.groupEnd();

console.groupCollapsed("CLASE 54: GENERADORES");

	//la funcion es convertir el codigo de una funcion en codigo iterable
	//yield asincronia no bloqueante es similar a await asincronia bloqueante  

	// function* iterable(){
	// 	yield "hola"; //es como el return pero del generador
	// 	console.log("Hola consola");
	// 	yield 2;
	// 	console.log("Sigue las instrucciones");
	// 	yield 'hola3';
	// 	console.log("final");     
	// }

	// // console.log(iterador3.next());
	// // console.log(iterador3.next());
	// // console.log(iterador3.next());
	// // console.log(iterador3.next());

	// let iterador3 = iterable();

	// for (let y of iterador3) {
	// 	console.log(y);
	// }

	// const array = [...iterable()];
	// console.log(array);
	
	// function numCuadrado(valor){ // primero se creo la funcion 
	// 	setTimeout(() => {
	// 		return console.log({valor, resultado: valor * valor})
	// 	}, Math.random() * 1000);
	// }

	// function* generador(){ // luego se creo la funcion generadora,
	// 	//(siempre va un asterisco luego de function) y dentro se invoca a 
	// 	//la funcion

	// 	console.log("inicio");

	// 	yield numCuadrado(0); //el yield maneja asincronia no bloquante
	// 	yield numCuadrado(1);
	// 	yield numCuadrado(2);
	// 	yield numCuadrado(3);

	// 	console.log("final");
	// }

	// let gen = generador(); // guardamos la funcion generadora en una variable

	// for (let y of gen) { // iteramos esa funcion
	// 	console.log(y);
	// }

console.groupEnd();

console.groupCollapsed("CLASE 55: PROXYS");


	//proxys crean una copia del objeto original y estan enlazadas
	const person = {
		nombre: "",
		apellido: "",
		edad: 0
	}

	console.log(person);

	const manejador = {

		set(obj,prop,value){

			// (obj.hasOwnProperty(prop)) aqui se verifica si existe la propiedad retorna true o false
			// 	? obj[prop] = value
			// 	: console.error(`La propiedad "${prop}", no se encuentra en el objeto principal`)
		  	if(Object.keys(obj).indexOf(prop) === -1){ // object key transforma en array al(obj) y  indexof verifica si se encuentra definida la propiedad(prop)
				return console.error(`La propiedad ${prop}, no se encuentra en el objeto principal`)
			}

			if((prop === "nombre" || prop === "apellido") && 
			  !(/^([a-zA-ZáéíóúÁÉÍÓÚñÑ]\s?)+$/.test(value))){
				return console.error(`${prop},${value} no es valido`);
			}

			if(prop === "edad" && !(/^[0-9]{1,3}$/.test(value))){
				return console.error(`La edad: ${value} sale fuera de los parametros`);
			}

			obj[prop] = value;

		  }
	}
	console.log(manejador);

	const anthony = new Proxy(person, manejador);
	console.log(anthony);

	anthony.nombre = "anthony";
	anthony.apellido = "Zavaleta";
	anthony.edad = 24;
	anthony.pasatiempo = 'programar';

	console.log(person);
	console.log(anthony);

console.groupEnd();

console.groupCollapsed("CLASE 56: PROPIEDADES DINAMICAS");
 /*	para crearpropiedades se puede con . o corchete 
 	pero dinamicamente se usa el corchete []

 	ahora se puede realizar propiedades dinamicas con los corchetes
 	dentro del objeto    { [`id_${n}`]  }
 */



	const objUser = {};

	console.log(objUser);

	const users = ['Anthony','Isabel','Eliza','Sonia','Roberto'];

	users.forEach((num, posicion) => objUser[`id_${posicion}`] = num);
	console.log(objUser);

	const objUser2 = {
		[`id_${Math.round(Math.random() * 100)}`]: "boris"
	};
	console.log(objUser2);

console.groupEnd();

console.groupCollapsed("CLASE 57: THIS");

	console.log(this); 
	console.log(window);
	console.log(this === window); // es el contexto global

	this.names = "contexto global";

	console.log(this.names);

	function imprimir(){
		console.log(this.names);  //imprime contexto global porq aun esta en el ambito 
			// del window, en el ambito general
	}

	imprimir();

	const objt = {
		nombre: 'contexto del objeto',
		imprimir // este this hace referencia al contexto pero del objeto
			//da igual de las 2 formas como si creo la funcion o solo la referencio
	}

	objt.imprimir();

	const obj2 = {
		nombre: 'contexto del objeto',
		imprimir: () => {
			console.log(this.names); // las arrow function no crean un scoope propio y por eso referencia al contexto global
		}	
	}
	obj2.imprimir();

	function Personas(nombre){  // funcion constructora crea su propio sc0ope
		const that = this; // usando antiguamente para asignar el this 
		// this.nombre = nombre;
		that.names = nombre;

		//return console.log(this.nombre);
		
		return function(){ //internamente crea un nuevo contexto, aqui no existe this.mnombre, asi que retrocede y toma el contexto global
			console.log(that.names);
		}

		// return () => console.log(this.nombre);
	}

	let franklin = new Personas("Anthony");

	franklin();

console.groupEnd();

console.group("CLASE 58: CALL, APPLY, BIND");

	console.log(this);
	this.lugar = "contexto global"; // es global porq se declara fuera de todo
	//si no se define salta undefined

	function saludar(saludo,aQuien){ //si se declarara dentro de la funcion this no seria global
		console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
	}

	saludar("Hola preciosa",'Isabel');

	const Obj = {
		lugar: "Contexto del objeto",
		saludar
	}

	saludar.call(Obj,"hola","Anthony"); //Es un metodo que llama a la funcion y puede pasar
	//parametros a la funcion, separada por comas
	saludar.call(this,"hola","Anthony"); // this hace referencia al global
	saludar.call(null,"hola","Anthony");// null hace referencia al global

	saludar.apply(Obj, ["chausito", 'Anthony']) //Es un metodo similar al call y puede pasar
	//parametros a la funcion por medio de un array

	const juguete = {
		nombre: "dinasaurio",
		precio: '20',
		info: function(){
			console.log(`El juegue es un ${this.nombre}`);
		}
	}

	juguete.info();

	const juego = {
		//info: juguete.info //lanza undefined porq no tiene el contexto del objeto JUGUETE
		info: juguete.info.bind(juguete) // metodo bind enlaza a un contexto
	}

	juego.info();
console.groupEnd();

console.group("CLASE 59: JSON -> JavaSript Object Notation");
	//JSON es una sintaxis para serializar objetos, matrices, números, cadenas, booleanos y null. Se basa en la sintaxis 
	//de JavaScript pero es distinta de ella: algunas JavaScript es no JSON.

	const json = {
		string: 'Anthony',
		arreglo: ['comer','dormir','leer'],
		number: 24,
		boolean: true,
		object:{
			correo: '@anthony',
			fb: '@anthony.zavaleta'
		},
		null: null
	}

	console.log(json);

	//JSON.parse, transforma de formato JSON a JavaScript
	console.log(JSON.parse("[1,2,3]")); 
	console.log(JSON.parse("true"));
	console.log(JSON.parse("23"));
	console.log(JSON.parse('"hola"'));
	console.log(JSON.parse('{"nombre":"anthony","edad":24}'));

	//JSON.stringify, transforma de JavaScript a formato JSON

	console.log(JSON.stringify('hola'));
	console.log(JSON.stringify([1,2,3]));
	console.log(JSON.stringify({"nombre":"anthony","edad":24}));
	console.log(JSON.stringify(json));

	const javascript = JSON.stringify(json);
	console.log(JSON.parse(javascript));

console.groupEnd();


