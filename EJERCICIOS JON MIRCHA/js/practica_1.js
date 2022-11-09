console.groupCollapsed("EJERCICIO N° 1");
	//1) Programa una función que cuente el número de caracteres de una cadena de 
	//texto, pe. miFuncion("Hola Mundo") devolverá 10.
	let cadena = "hola mundo";
	let array = ["hola",2,3];
	let objeto = {
		nombre: "tony",
		apellido: "zavaleta"
	};
	let numero = 12345;

		function contar(cadena){
			if (typeof cadena == "object") {
				let nuevaCadena = Object.values(cadena);
				console.log(`El tipo de dato es ${typeof cadena} tiene ${nuevaCadena.length} elementos`);
			}else if (typeof cadena == "string"){
				
			console.log(`El tipo de dato es ${typeof cadena} tiene ${cadena.length} caracteres`);
			}else if(typeof cadena == "number"){

				console.log(typeof numero,cadena.toString().length);
				console.log(`El tipo de dato es ${typeof cadena} tiene ${cadena.toString().length} digitos`);
			}
		}
	contar(cadena);
	contar(array);
	contar(objeto);
	contar(numero);
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 3");
	//2)Programa una función que te devuelva el texto recortado según el número 
	//de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

	function recortarTexto(texto,value){
		let = newTexto ='';
		console.log(texto.length);
		console.log(value);
		if (value > texto.length) {
				console.log("el numero supera al numero de caracteres");
			}else{

			if (typeof texto == "string") {
				for(let i = 0; i < texto.length; i++){
					newTexto += texto[i];
					if (i == (value)) {
						console.log(newTexto);
					}
				}
			}else{
				console.log("no es un formato valido");
			}
		}
	}

	recortarTexto("hola como estas",15);
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 3");
	//3) Programa una función que dada una String te devuelva un Array de textos 
	//separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 

	function stringToArray(texto, value){

		let newTexto = texto.split(value);
		console.log(typeof newTexto);
		console.log(newTexto);
	}

	stringToArray("hola como estan amigos mios"," ");

	console.groupEnd();

	console.groupCollapsed("EJERCICIO N° 4");
	/*
	4) Programa una función que repita un texto X veces, pe. 
	miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

	function repetirTexto(texto, cantidad){
		let contenedor = '';
		for(let i = 1; i <= cantidad; i++){
			contenedor += ' ' + texto;

		}
		console.log(contenedor);
	}

	repetirTexto("hola mundo2",3);
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 5");
	//INVERTIR UNA CADENA DE TEXTO

	function invertirTexto(texto = ''){

		let contenedor = '';

		if(!texto) return console.warn("El texto no puedo ir vacio");

		for(let i = texto.length - 1; i >= 0; i--) contenedor += texto[i];
		
		return contenedor;
	}

	function invertirTexto2(texto = ''){

		let contenedor = '';

		if(!texto) return console.warn("El texto no puedo ir vacio");

		return texto;
	}


	console.log(invertirTexto("hola como estas amigo 123"));
	//console.log(invertirTexto2("hola como estas amigo 123"));
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 6");
	//Contar NUMERO DE VECES Q SE REPITE UNA PALABRA

	const contarPalabra = (texto = '', palabra = undefined) =>{

		if(!texto)  return console.warn("El texto no puede ir vacio");
		if(!palabra)  return console.warn("La palabra no puede ir vacio");

		let contador = 0, contenedor = texto.split(" ");
		// console.log(contenedor);

		for(let i = 0; i < contenedor.length; i++) if(contenedor[i] == palabra) contador ++;
		
		return console.info(`La palabra "${palabra}" se repite ${contador} veces`);
	}

	const contarPalabra2 = (texto = '', palabra = undefined) =>{
		
		if(!texto)  return console.warn("No ingresaste el texto largo");
		if(!palabra)  return console.warn("La palabra no puede ir vacio");

		let contador = 0, i = 0;
		
		while(i !== -1){
			
			i = texto.indexOf(palabra, i);

			if(i !== -1){

			i++;
			contador++;

			}
		}

		return console.info(`la palabras "${palabra}" se repite ${contador} veces`);
	}

	contarPalabra("","");
	contarPalabra2("hola hamigo","h");
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 7");

	function validadPalindromo(texto = ''){
		if (!texto) console.info("El texto no puede ir vacio");
		let invertir = '';

		for(let i = texto.length -1; i >= 0; i--){
			invertir += texto[i];		
		}

		if (invertir === texto) return `La palabra ${texto} es palindroma`
		else return `La palabra ${texto} no es palindroma`
		
	}

	function validadPalindromo2(texto = ''){
		if (!texto) console.info("El texto no puede ir vacio");
		texto = texto.toLowerCase();
		let reves = texto.split("").reverse().join("");
		(texto === reves) 
		? console.log(`La palabra ${texto} es palindroma`)
		: console.log(`La palabra ${texto} no es palindroma`)
	}

	console.log(validadPalindromo("otto"));
	validadPalindromo2("Salas");
	validadPalindromo2("Anthony");
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 8");

	function eliminarPatron(texto,patron){

		return texto.replace(new RegExp(patron,"ig"),"");
	}

	console.log(eliminarPatron("xyzTxyzE xyzAxyzMxyzO xyzIxyzSxyzAxyzBxyzExyzL","xyz"));
	console.groupEnd();

	console.groupCollapsed("EJERCICIO N° 9");

	//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

	const numAleatorio = () => {
		let min = 501, max = 600;
		return `numero aleatorio entre 501 y 600: ${Math.round(Math.random(501,600) * (max - min) + min)}`;
	}

	console.log(numAleatorio());
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 10");
	const capicua = (valor = 0) => {
	if (typeof valor !== "number") return console.error("Solo se admiten numeros");
		let capicua = valor.toString().split("").reverse().join("");
		(valor == capicua)
		? console.info(`El numero ${valor} es capicua`)
		: console.info(`El numero ${valor} no es capia`)
	}

	capicua();
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 11");
	//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
	//se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

	const factorial = (valor = 0) => {
		if (Math.sign(valor) === -1) return console.error("no se puede sacar factorial de numeros negativos")
		if (typeof valor !== "number") return console.warn("Los datos ingresados no son numeros");
		if (!valor.toString().trim()) return console.warn("No se admite espacios en blanco");
		let contenedor = 1;
			for(let i = valor; i > 0; i--) contenedor *= i;
			console.log(`El factorial de ${valor} es: ${contenedor}`);
	}

	factorial(5); 
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 12");
	//NUMEROS PRIMOS

	const numeroPrimo = (num) =>{
		//Esta funcion math devuelve 1 si es positivo -1 para numeros negativos y 0 si es cero

		if(Math.sign(num) === -1) return console.error("Los numeros negativos no son primos");

		if(typeof num !== "number") return console.error("Solo se admiten numeros");

		if(num <= 1) return console.info(`el numero ${num} no se considera primo ni compuesto`);

		let estado = false;

		for(let i = 2; i < num; i++){
			if (num % i === 0) estado = true;
			break;
		} 

		(estado) 
			? console.info(`El numero ${num} NO es primo`)
			: console.info(`El numero ${num} SI es primo`)

		// (num % num == 0  && num % 1 == 0) 
		// ? console.log(`el numero ${num} es primo`)
		// : console.info(`el numero ${num} no es primo`)
	}
	numeroPrimo();
	numeroPrimo(-1);
	numeroPrimo(" ");
	numeroPrimo("a");
	numeroPrimo(1);
	numeroPrimo(0);
	numeroPrimo(29);
	numeroPrimo(2);
	numeroPrimo(6);
	numeroPrimo(9);
	numeroPrimo(100);
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 13");
	//NUMERO PAR O IMPAR

	function parImpar(num = undefined){
		if(num === undefined) return console.error("No ingresaste un numero");
		if(typeof num !== 'number')  return console.error('Solo se admiten numero');

		(num < 0)
		? parImpar(-num)
		: (num % 2 === 0) 
		  ? console.info(`El numero ${num} es PAR`)
		  : console.info(`El numero ${num} es IMPAR`)
	}

	parImpar({});
	parImpar(-102);
	parImpar(1);
	parImpar("aa");
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 14");

	function converTemperatura(valor = 0, escala = ''){
		if (typeof valor !== 'number') return console.error("Solo se admite valores numericos para los calculos");
		if (!escala) return console.warn("El valor de unidad no puede ir vacio, ingrese C o F");
		escala = escala.toUpperCase();
		if(!(escala === "C" || escala === "F")) return console.warn("solo se admiten la escala Celsius 'C' o Fahrenheit 'F' ");
		(escala === "C")
		? console.info(`El valor de ${valor} °${escala} a grados fahrenheit es ${valor = (valor * 1.8) + 32} °F`)
		: console.info(`El valor de ${valor} °${escala} a grados fahrenheit es ${valor = (valor - 32) / 1.8 } °C`)

	}
	converTemperatura("","");
	converTemperatura();
	converTemperatura(68,"F");
	converTemperatura(20,"C");
	converTemperatura("A",12);
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 15"); 

	const binarioDecimal = (numero = undefined, base = undefined) =>{

		if (numero === undefined) return console.error("El numero esta vacio");
		if (base === undefined) return console.error("La base esta vacia");
		if (typeof numero !== 'number' && base !== 'number') return console.warn("Solo se admiten numeros");
		if (Math.sign(numero) === -1) return console.warn(`El numero ${numero} es negativo, no se aceptan negativos`);
		if (Math.sign(base) === -1) return console.warn(`La base ${base} es negativa, no se aceptan negativos`);
		if (base.toString().length > 2) return console.warn("la base solo puede admitir 2 digitos");
		
		if(base === 2){
			let verify = numero.toString().split("");
			for(let i = 0; i < verify.length; i++){
				
				if(verify[i] > 1) return console.error(`El numero ${numero} no es un numero en base ${base}`);

			}
			
			let arr = [];
			arr = numero.toString().split("").reverse();
			let valor = 0;
			let suma = 0;

			for(let i = 0; i < arr.length; i++){

				valor = arr[i] * (base ** i);
				suma += valor;

				//console.log(valor,arr[i],base, i);
			}
			
			return console.log(`El numero ${numero} base(${base})  =  ${suma} base(10)`);

		}else if(base === 10){

			let contenedor = [];
			
			for(let i = numero; 0 < i; i = Math.floor(i / 2)){

				if (i % 2 >= 10) {
					return console.log("error");
				}else{
					 contenedor.push(i%2);
				}

			}
			contenedor = contenedor.reverse().join("");
			return console.log(`El numero ${numero} base(${base})  =  ${contenedor} base(2)`);

		}else{return console.warn("Solo se admite la base binaria (2) o decimal (10)")}
		
	}
	binarioDecimal(11,10);
	//SEGUNDA FORMA MAS FACIL :D

	const binarioToDecimal = (numero = undefined, base = undefined) => {
		if (numero === undefined) return console.error("El numero esta vacio");
		if (base === undefined) return console.error("La base esta vacia");
		if (typeof numero !== 'number' && base !== 'number') return console.warn("Solo se admiten numeros");
		if (Math.sign(numero) === -1) return console.warn(`El numero ${numero} es negativo, no se aceptan negativos`);
		if (Math.sign(base) === -1) return console.warn(`La base ${base} es negativa, no se aceptan negativos`);
		if (base.toString().length > 2) return console.warn("la base solo puede admitir 2 digitos");

		if(base === 2){
			numero = parseInt(numero,base);
			console.log(numero);
		}else if (base === 10){
			numero = parseInt(numero.toString(2),base);
			console.log(numero);
		}
		
	}
	binarioToDecimal(987,10);
	binarioToDecimal(987,10);
	binarioToDecimal(1000,-10);
	binarioToDecimal(1000,25);
console.groupEnd();         

console.groupCollapsed("EJERCICIO N° 16");
	//Programa una función que devuelva el monto final después de aplicar 
	//un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
	const descuento = (monto = undefined, descuento = undefined) => {

		if(monto === undefined) return console.error("EL MONTO A PROCESAR ESTA VACIO");
		if(descuento === undefined) return console.error("EL VALOR DE DESCUESTO ESTA VACIO");
		if(typeof monto !== 'number') return console.warn("Solo ingrese un monto numerico, verifique");
		if(typeof descuento !== 'number') return console.warn('El valor del descuente debe ser numerico, verifique');
		if(Math.sign(monto) === -1 || Math.sign(descuento) === -1) return console.error("FATAL ERROR: NO SE ADMITEN VALORES NEGATIVOS");

		let total = monto - (monto * (descuento/100));
		console.log(
	`\nSub total:          ${monto} S/. 
	Descuento:          ${descuento} %  \n
	Total:              ${total} S/.\n`); 

	}

	// descuento();
	// descuento(" "," ");
	// descuento(-100,-20);
	// descuento(100,"");
	// descuento("",20);
	descuento(120.20,20);
	// console.table({nombre:'anthony'});
	descuento(1580.20,35);
	descuento(3200,-35);
	descuento(1000,35);
console.groupEnd();

console.groupCollapsed("EJERCICIO N° 17");

		console.groupCollapsed("REPASO DATE");
		let fecha = new Date();
		console.log(fecha); // tipo de dato OBJECT
		console.log(Date());// tipo de dato String

		console.log("FECHA EN MILISEGUNDOS desde 1970 - actual: " +  Date.now());  // fecha actual desde 1 de Enero de 1970
		// retornado su valor en milisegundos
		const myBirthday = "April 11,2001";
		console.log("FECHA EN MILISEGUNDOS Isabel: " + Date.parse(myBirthday)); //retorna una fecha en milisegundos
		//desde el 1 de enero de 1970 "nombre mes dia, año"

		console.log("FECHA EN MILISEGUNDOS Anthony: ",Date.UTC(1997,11,15,21,30,12)); // retorna el valor en milisegundos

		let fechaX = new Date("september 07, 2022 18:03:00:000");
		let fechaX2 = new Date("December 08, 2022 21:30:12:000");
		console.log("DIA: " + fechaX.getDate()); // retorna el dia de una fecha
		console.log("DIA DE LA SEMANA: " + fechaX.getDay()); // retorna el dia de la semana (D-L / 0-6) de una fecha
		console.log("MES: " + fechaX.getMonth()); // retorna el mes ene-dec (0-11);
		console.log("AÑO: " + fechaX.getFullYear()); // Retorna el año (4 dígitos para años de 4 dígitos) 
		//para la fecha especificada acorde a la hora local.
		console.log("MILISEGUNDOS: " + fechaX.getMilliseconds()); // obtiene los milisegundos (0-999)
		console.log("SEGUNDOS: " + fechaX.getSeconds()); // obtiene los segundos (0-59)
		console.log("MINUTOS: " + fechaX.getMinutes()); // obtiene los minutos (0-59)
		console.log("HORAS: " + fechaX.getHours()); // obtiene la hora (0-23)
		console.log("CONVIERTE FORMATO FECHA EN MILISEGUNDOS: " + fechaX.getTime());// FECHA UNIVERSAL EN MILISEGUNDOS
		console.log("HORAS: " + fechaX.getTimezoneOffset());
		console.log("HORAS: " + fechaX2.getTimezoneOffset());
		console.groupEnd();

	// CALCULAR CUANTOS AÑOS PASARON ENTRE 2 FECHAS

	const cantidadAnios = (fecha = undefined)=>{

		if (fecha === undefined) {return console.warn("No has ingresado ninguna fecha");}
		if (!(fecha instanceof Date)) {return console.error("Solo se admite el formato fecha")} // aqui valida si fecha no es instancia del objeto Date

		// let anioActual = new Date();
		// anioActual = anioActual.getFullYear(Date.now());
		// let anioAntiguo = fecha.getFullYear();

		// diferenciaAnios = anioActual - anioAntiguo;

		let diferenciaAnios = new Date().getTime() - fecha.getTime();
		aniosMs = 1000 * 60 * 60 * 24 * 365;
		aniosHumanos = Math.floor(diferenciaAnios/aniosMs);

		return (Math.sign(aniosHumanos) === 1) 
			?console.log(`Han trasncurrido ${aniosHumanos} años desde ${fecha.getFullYear()}`)
			:(Math.sign(aniosHumanos) === -1)
				?console.log(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
				:console.log(`Nos encontramos en el año actual ${fecha.getFullYear()}`)	
	}

	console.log(cantidadAnios(new Date(2022,11,15)));
	console.log(cantidadAnios(""));
console.groupEnd();

console.groupCollapsed("EJERCICIO 18.1");

	const contarPalabras = (texto = undefined) => {

		if(texto === undefined) return console.warn("NO SE INGRESO NINGUN TEXTO");
		if(typeof texto !== "string") return console.error("solo se admite el ingreso de texto");
		texto = texto.toLowerCase();	

		const vocales = ['a','e','i','o','u'];
		const consonantes = ['b','c','d','f','g','h','j','k','l','m','n','ñ','o','p','q','r','s','t','v','w','x','y','z'];

		let contador = 0;
		let arrVocales = [];
		let contador2 = 0;
		let arrConsonantes = [];

		for(let i = 0; i < texto.length; i++ ){
		    for (let j = 0; j < vocales.length; j++) {
		        if(texto.at(i) === vocales[j]){
		        	contador++;
		        	arrVocales.push(vocales[j]);
		        }

		    }
		}
		return console.log(`cantidad de vocales : ${contador} y las vocales son: "${arrVocales}"`);
		
		for(let i = 0; i < texto.length; i++ ){
		    for (let j = 0; j < consonantes.length; j++) {
		        if(texto.at(i) === consonantes[j]){
		        	arrConsonantes.push(consonantes[j]);
		        	contador2++;  
		        }
		    }      
		}
		return console.log(`cantidad de consonantes : ${contador2} y las consonantes son: "${arrConsonantes}"`);
	}

	console.log(contarPalabras("digimon"));
	console.log(contarPalabras());
	contarPalabras();
console.groupEnd();

console.groupCollapsed("EJERCICIO 18.2");

	const contarPalabras2 = (texto = undefined) => {

		if(texto === undefined) return console.warn("NO SE INGRESO NINGUN TEXTO");
		if(typeof texto !== "string") return console.error("solo se admite el ingreso de texto");
		texto = texto.toLowerCase();

		let vocal = 0;
		let consonante = 0;

		for(let letras of texto){
			if (/[aeiou]/.test(letras)){
			vocal++;
			} else if (/[bcdfghjklmnñpqrstuvwxyz]/.test(letras)){
				consonante++;
			} else {
				console.info("El texto ingresado esta fuera del rango");
			}
		}

		console.info(
			{
				texto,
				vocal,
				consonante
			}
		)

	}

		contarPalabras2("polo");
		contarPalabras2("Anthony 2023 sera programador junior");
console.groupEnd();

console.groupCollapsed("EJERCICIO 19");

	const validarNombre = (texto = undefined) => {

		if(texto === undefined) return console.warn("NO SE INGRESO NINGUN TEXTO");
		if(typeof texto !== "string") return console.error("solo se admite el ingreso de texto");

		const exReg = /^[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ][a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ\s]+$/;

		return (exReg.test(texto))
		? console.info(`El nombre es valido`)
		: console.warn(`El nombre "${texto}" no es valido`)
		

		

	}

		validarNombre();
		validarNombre("");
		validarNombre("ANTHONY ZAVALETA ROLDAN");
		validarNombre("$");
		validarNombre("ÍSABEL AGüERO");
console.groupEnd();

console.groupCollapsed("EJERCICIO 20");

	const validarCorreo = (texto = undefined) => {

		if(texto === undefined) return console.warn("NO SE INGRESO NINGUN TEXTO");
		if(typeof texto !== "string") return console.error("solo se admite el ingreso de texto");

		const exReg = /^([a-zA-Z0-9][a-zA-Z0-9\_\-\$]+)+@([a-zA-Z]+\.)[a-z]{2,6}$/;

		return (exReg.test(texto))
		? console.info(`El nombre "${texto}" es valido`)
		: console.warn(`El nombre "${texto}" no es valido`)
		

		

	}

		validarCorreo();
		validarCorreo("");
		validarCorreo("anthony_tlv_45@hotmail.com");
		validarCorreo("anthony-tlv-25$@hotmail.com");
		validarCorreo("$");
		validarCorreo("anthony@gmail.com");
console.groupEnd();

console.groupCollapsed("EJERCICIO 21");

	const potenciaArray = (array = undefined, potencia = undefined) => {

		if(array == undefined) return console.warn("No se a ingresado ningun valor");
		if(!(array instanceof Array)) return console.error(`El ${array} no es un objeto array`);
		if(potencia == undefined) return console.warn("No se a ingresado ningun valor de exponente");
		if(typeof potencia !== 'number') return console.error(`la ${potencia} no es un numero`);
	
		array = [...new Set(array)];
		let arrayConversion =[];

		for(numero of array){
			arrayConversion.push(Math.pow(numero,potencia));
		}
		console.log(`El array ${array} elevado al cuadra da como resultado ${arrayConversion}`);
		

	}

	potenciaArray();
	potenciaArray([123]);
	potenciaArray("aasd");
	potenciaArray([1,2,3],2);
	potenciaArray([1,2,3,6,5,5,5,5,5,5,7,4,],2);	
console.groupEnd();

console.groupCollapsed("EJERCICIO 22");

	const minMax = (array = undefined) => {

		if(array == undefined) return console.warn("No se a ingresado ningun valor");
		if(!(array instanceof Array)) return console.error(`El ${array} no es un objeto array`);
		
		array = [...new Set(array)];

		for(numero of array){
			if (typeof numero !== 'number') return console.error(`El valor ${numero} no es un numero`)
		}
	return console.info(`Array principal: ${array}\nValor mayor:${Math.max(...array)}\nValor menor:${Math.min(...array)}`);
	}

	minMax();
	minMax([1,2,2,3,4,5,6]);		
console.groupEnd();

console.groupCollapsed("EJERCICIO 23");

	console.groupCollapsed("forma Anthony");
		const arregloParesImpares = (array = undefined) => {

			if(array == undefined) return console.warn("No se a ingresado ningun valor");
			if(!(array instanceof Array)) return console.error(`El ${array} no es un objeto array`);
			if(array === 0) return console.error(`El arreglo esta vacio`);
			
			array = [...new Set(array)];
			let pares = [], impares = [];

			for(numero of array){
				if (Math.sign(numero) === -1) return console.error(`El valor ${numero} es un numero negativo, no se admiten numero negativos`);
				if (typeof numero !== 'number') return console.error(`El valor ${numero} no es un numero`);
				(numero % 2 === 0)
				? pares.push(numero)
				: impares.push(numero)
			}
			return console.log({
				array,
				pares,
				impares
			})		
		}
		arregloParesImpares();
		arregloParesImpares([0,1,2,2,3,4,5,6,7,8,9,10,10,10,10,11,12,13,14,15]);
	console.groupEnd();

	console.groupCollapsed("forma JON MIRCHA");
		const arregloParesImpares2 = (array = undefined) => {

			if(array == undefined) return console.warn("No se a ingresado ningun valor");
			if(!(array instanceof Array)) return console.error(`El ${array} no es un objeto array`);
			if(array === 0) return console.error(`El arreglo esta vacio`);

			array = [...new Set(array)];

			for(numero of array){
				if (Math.sign(numero) === -1) return console.error(`El valor ${numero} es un numero negativo, no se admiten numero negativos`);
				if (typeof numero !== 'number') return console.error(`El valor ${numero} no es un numero`);

			}
			return console.log({
				array,
				pares: array.filter(num => num % 2 === 0),
				impares: array.filter(num => num % 2 === 1)
			})		
		}
		arregloParesImpares2();
		arregloParesImpares2([0,1,2,2,3,4,5,6,7,8,9,10,10,10,10,11,12,13,14,15]);
	console.groupEnd();	
console.groupEnd();

console.groupCollapsed("EJERCICIO 24");

	console.group("forma Anthony");
		const ascDescArreglo = (array = undefined) => {
			if(array === undefined) return console.warn("No se admiten datos vacios");
			if(!(array instanceof Array)) return console.error(`El elemento ${array} no es un arreglo`)
			if(array.length === 0) return console.error("El arreglo esta vacio");
			
			array = [...new Set(array)];
			console.log(array);

			for(numero of array){
				if (typeof numero !== 'number') return console.error(`${numero} no es un numero`);
			}

			return console.info({
				descendente: array.map(desc=>desc).sort((a,b)=>a-b),
				ascendente: array.map(asc=>asc).sort((a,b)=>b-a)
			})


		}

		ascDescArreglo([1,11,2,7,4,4,5,5,6,3,12,13,8,9,10]);
	console.groupEnd();
console.groupEnd();

console.groupCollapsed("EJERCICIO 25");

	console.groupCollapsed("objetos javaScript");
		let tasks = [
		  {
		    'name'     : 'redactar libro', 
		    'duration' : 120
		  },
		 
		  {
		    'name'     : 'leer',
		    'duration' : 60
		  },
		 
		  {
		    'name'     : 'procesar datos',
		    'duration' : 240
		  }
		 
		];

		var total_time1 = 0;
		     
		tasks.forEach(function (task) {
		    // The plus sign just coerces 
		    // task.duration from a String to a Number
		    total_time1 += (+task.duration);
		});

		let total = tasks.reduce((a,b) => ({duration:a.duration + b.duration}));
		console.log(total);
	console.groupEnd();

	console.groupCollapsed("RESOLUCION 1");
		const noRepetirValorArray = (array = undefined) => {
			if(array === undefined) return console.warn("No se admiten datos vacios");
			if(!(array instanceof Array)) return console.error(`El elemento ${array} no es un arreglo`)
			if(array.length === 0) return console.error("El arreglo esta vacio");
				
				// for(let i=0; i < array.length; i++){
				// 	console.log(array.indexOf(array[i]));
				// }
			return array.filter((valor,indice) => array.indexOf(valor) === indice); // filter busca las coincidencias
			// tienes 3 parametros: valor, indice, array mismo estos son opcionales pero encajan bien para el motivo
			// el array busca el indice de cada valor , INDEXOF HALLA LA PRIMERA OCURRENCIA Y LE ASIGNA EL MISMO INDICE EN CASO 
			//ENCUENTRE MAS DUPLICADOS DE ESE VALOR , y los compara con el indice y si cumple solo muestra ese array evitando asi duplicados
		}
		console.log(noRepetirValorArray([1,2,2,2,2,3,3,4,5,5,5,6]));
	console.groupEnd();

	console.groupCollapsed("RESOLUCION 2");
		const noRepetirValorArray2 = (array = undefined) => {
			if(array === undefined) return console.warn("No se admiten datos vacios");
			if(!(array instanceof Array)) return console.error(`El elemento ${array} no es un arreglo`)
			if(array.length === 0) return console.error("El arreglo esta vacio");
				
			array = [...new Set(array)];
			console.log(array);
			 // EL ARRAY SE IGUAL A UN ARRAY, QUE USA EL SPREAD OPERATOR, Q SACA LOS CORCHETES DE UN ELEMENTO Y LOS METE A UN SET
			// QUE ESTE EVITA VALORES DUPLICADOS 
		}
		console.log(noRepetirValorArray2([[],[],[],true,true,true,{},{},2,2,2,2,'2','2']));
	console.groupEnd();
console.groupEnd();

console.groupCollapsed("EJERCICIO 26");

	const promedioArray = (array = undefined) => {
			if(array === undefined) return console.warn("No se admiten datos vacios");
			if(!(array instanceof Array)) return console.error(`El elemento ${array} no es un arreglo`)
			if(array.length === 0) return console.error("El arreglo esta vacio");
			
			let suma = array.reduce((anterior,actual) => (anterior + actual));
			//reduce tiene 4 parametros opcionales, 
			//1. acumulador o valor inicial
			//2. valor actual
			//3. indice
			//4. array
			//con estos valores poder tener el valor unico del array
			let promedio = suma/array.length;
			console.log(promedio);
		}

	promedioArray([1,2,3,4,5,6,7,8,9,0]);
console.groupEnd();

console.group("EJERCICIO 27");

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
				//   - Todos los datos del objeto son obligatorios.
				//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
				//      7 restantes números.
				//   - Valida que el título no rebase los 100 caracteres.
				//   - Valida que el director no rebase los 50 caracteres.
				//   - Valida que el año de estreno sea un número entero de 4 dígitos.
				//   - Valida que el país o paises sea introducidos en forma de arreglo.
				//   - Valida que los géneros sean introducidos en forma de arreglo.
				//   - Valida que los géneros introducidos esten dentro de los géneros 
				//      aceptados*.
				//   - Crea un método estático que devuelva los géneros aceptados*.


//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, 
// Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, 
// History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance,
//  Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

	class Pelicula{
		constructor({id, titulo, director, estreno, pais, genero, calificacion}){
			
			this.id = id;
			this.titulo = titulo;
			this.director = director;
			this.estreno = estreno;
			this.pais = pais;
			this.genero = genero;
			this.calificacion = calificacion;

			this.validarIMDB(id); // se esta llamando al metodo y este se ejecuta automaticamente 
								 //al instanciar la clase, asi no se le pase parametros
								 //pero si se le pasa podemos usarlo para referirnos a algo de la clase
			this.validarTitulo(titulo);
			this.validarDirector(director);
			this.validarEstreno(estreno);
			this.validarPais(pais);
			this.validarGenero(genero);
			this.validarCalificacion(calificacion);

		}

		static get listaPermitidos(){ return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 
			'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 
			'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance',
			 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']}

		static generosPermitidos(){
			return `Los generos permitidos son: ${Pelicula.listaPermitidos.join(', ')}`;
		}


		validarCadena(propiedad, valor){
			if (!valor) return console.error(`${propiedad}: ${valor} esta vacio`);
			if (typeof valor !== 'string') return console.warn(`${propiedad}: ${valor} no es una cadena de texto`);

			return true;
		}

		validarLongitud(propiedad, valor, longitud){

			if (valor.length > longitud ) return console.warn(`EL ${propiedad}: ${valor}, superar el limite de ${longitud} caracteres`);
		}

		validarNumero(propiedad, valor){

			if (!valor) return console.error(` ${propiedad} ${valor} esta vacio`);
			if (typeof valor !== 'number') return console.warn(`${propiedad} ${valor} solo admite numeros`);
			
			return true;		
		}

		validarArreglo(propiedad, valor){

			if (!valor) return console.error(`${propiedad}: ${valor} esta vacio`);
			if (!(valor instanceof Array)) console.warn(`${propiedad}: ${valor} no es un arreglo`);
			if (valor.length === 0) return console.error(`${propiedad}: ${valor} no tiene datos`);
			for(let paises of valor){
				if (typeof paises !== 'string') return console.error(`El formato de "${paises}" no es texto`)
			}
			return true;
		}

		///////////////////////////////////////////////////////
		///////////////////////////////////////////////////////

		validarIMDB(id){
			if (this.validarCadena("IMBD", id)) 
				if (!(/^[a-z]{2}[0-9]{7}$/.test(id))) 
					console.error(`Error: el ID debe empezar con 2 letras seguida de 7 numeros`);
		}

		validarTitulo(titulo){
			if (this.validarCadena("Titulo",titulo)) {
				this.validarLongitud("Titulo",titulo,100);
			}
			
		}

		validarDirector(director){
			if (this.validarCadena("Titulo",director)) {
				this.validarLongitud("Director",director,50);
			}
		}

		validarEstreno(estreno){
			if(this.validarNumero("Año de estreno:",estreno))
				if (!(/^[0-9]{4}$/.test(estreno))) 
					return console.error(`Año de estreno: "${estreno}" supera el limite (4 digitos)`);
		}

		validarPais(pais){

			this.validarArreglo("Pais",pais);	
		}

		validarGenero(genero){

			if (this.validarArreglo("Genero", genero)){

				let generosIncorrectos = [];

				for (let genre of genero) {

					if(!Pelicula.listaPermitidos.includes(genre))

						generosIncorrectos.push(genre);

				}	
					
				if (generosIncorrectos.length !== 0) {

					return console.error(`Genero(s) incorrectos: "${generosIncorrectos.join(", ")}"\n${Pelicula.generosPermitidos()}`);								
				
				}
			}
				
		}

		validarCalificacion(calificacion){
			
			if(this.validarNumero("Calificacion:",calificacion)){

				return (calificacion > 0 && calificacion <= 10) 
					
						? console.info(`${calificacion} bien!`)

						: this.calificacion = calificacion.toFixed(1)
				
			}

		}

		fichaTecnica(){

			console.info(`Titulo: ${this.titulo}\nDirector: ${this.director}\nEstreno:${this.estreno}\nPais: ${this.pais.join(" - ")}\nGenero: ${this.genero.join(", ")}\nCalificacion: ${this.calificacion}\nID: ${this.id}\n`);
		}
	}

	const Movie = new Pelicula ({
		id: 'tt0000005',
		titulo: 'avengers: END GAME',
		director: 'Mel Gibson',
		estreno: 2012,
		pais: ["peru",'colombia','argentina','españa'],
		genero: ['Action', 'Sci-Fi','Drama','Sport','Musical'],
		calificacion: 12.33333
		});

		console.log(Movie);





	const peli = ([{
		id: 'tt000000100',
		titulo: 'avengers: END GAME#',
		director: 'Mel Gibson',
		estreno: [2012],
		pais: ["peru",'colombia','argentina',{}],
		genero: ['Action', 'Sci-Fi','Drama','Sport','Musical'],
		calificacion: 12.33333
		},{
		id: 'tt0000002',
		titulo: 'avengers: END GAME',
		director: 'Mel Gibson',
		estreno: 2012,
		pais: ["peru",'colombia','argentina'],
		genero: ['Action', 'Sci-Fi','Drama','Sport','Musical'],
		calificacion: 12.33333
		},{
		id: 'tt0000003',
		titulo: 'avengers: END GAME',
		director: 'Mel Gibson',
		estreno: 2012,
		pais: ["peru",'colombia'],
		genero: ['Action', 'Sci-Fi','Drama','Sport','Musical'],
		calificacion: 12.33333
		},{
		id: 'tt0000004',
		titulo: 'avengers: END GAME',
		director: 'Mel Gibson',
		estreno: 2012,
		pais: ["peru",'colombia','argentina','paraguay'],
		genero: ['Action', 'Sci-Fi','Drama','Sport','Musical'],
		calificacion: 12.33333
		},{
		id: 'tt0000005',
		titulo: 'avengers: END GAME',
		director: 'Mel Gibson',
		estreno: 2012,
		pais: ["peru",'colombia','argentina','españa'],
		genero: ['Action', 'Sci-Fi','Drama','Sport','Musical'],
		calificacion: 12.33333
		}]);

		peli.forEach(peli => new Pelicula(peli).fichaTecnica());

 


console.groupEnd();