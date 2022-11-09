console.group("PRACTICA ARRAYS");
//EJERCICIOS ARRAYS 

function ArrayLista(valor){
	let lista = null;

	for(let i = valor.length - 1; i >= 0; i--){
		lista = {value: valor[i], rest: lista};
	}
	return lista;
}

function listToArray(lista){	
	let array = [];
	for (let nodo = lista; nodo ; nodo = nodo.rest) {
		array.push(nodo.value);
	}
	return array;
}

function preceder(value, lista){
	return {value, rest: lista};
}

function posicion(lista, n){
	if(!lista) return undefined;
		else if(n == 0)  return lista.value;
		else return posicion(lista.rest, n - 1);
}

console.log(ArrayLista([10,20]));
console.log(listToArray(ArrayLista([10,20,30])));
console.log(preceder(12,preceder(11,preceder(15, null))));
console.log(posicion(ArrayLista([10,11,12,13,14]), 3));


//FLITRAR SCRIPTS 

function filtrar(array, prueba){
	let pasaron = [];

	for(let elemento of array){
		if (prueba(elemento)){
			pasaron.push(elemento);
		}
	}
	return pasaron;
}

console.log(filtrar(SCRIPTS, codigo => codigo.year > 1900 && codigo.year < 1950  ));


//MAPEAR SCRIPTS

function map(array, transformar){
	let mapeados = [];
	for(let elemento of array){
		mapeados.push(transformar(elemento));
	}
	return mapeados;
}

let codigoDerechaAIzquierda = SCRIPTS.filter(codigo => codigo.direction == "rtl");

console.log(map(codigoDerechaAIzquierda, codigo => codigo.name));


//PRACTICA FILTRADO

let Anime = [ //ESTO ES UN ARARY DE OBJETOS [{}]
	{
		nombre: "YUREI DECO",
		genero: "AVENTURA",
		ano: [[2011, 2017]],
		estado: "EN EMISION"
	},
	{
		nombre: "ONE PIECE",
		genero: "ACCION",
		ano: [[2013, 2017]],
		estado: "EN EMISION"
	},
	{
		nombre: "NARUTO",
		genero: "ACCION",
		ano: [[2022, 2017]],
		estado: "FINALIZADO"
	},
	{
		nombre: "SWORD ART ONLINE",
		genero: "AVENTURA",
		ano: [[1996, 2017]],
		estado: "Finalizado"

	},
	{
		nombre: "DRAGON BALL Z",
		genero: "AVENTURA",
		ano: [[2025, 2012]],
		estado: "FINALIZADO"
	},
	{
		nombre: "AKAME GA KILL",
		genero: "GORE",
		ano: [[1897, 2017]],
		estado: "FINALIZADO"
	}
		
];

let Anime2 = [ //ESTO ES UN ARARY DE OBJETOS [{}]
	{
		nombre: "SWORD ART ONLINE",
		genero: "AVENTURA",
		ano: [2097],
		estado: "Finalizado"

	},
	{
		nombre: "YUREI DECO",
		genero: "AVENTURA",
		ano: [2011],
		estado: "EN EMISION"
	},
	{
		nombre: "ONE PIECE",
		genero: "ACCION",
		ano: [2013],
		estado: "EN EMISION"
	},
	{
		nombre: "NARUTO",
		genero: "ACCION",
		ano: [2022],
		estado: "FINALIZADO"
	},
	{
		nombre: "DRAGON BALL Z",
		genero: "AVENTURA",
		ano: [2025],
		estado: "FINALIZADO"
	},
	{
		nombre: "AKAME GA KILL",
		genero: "GORE",
		ano: [1996],
		estado: "FINALIZADO"
	}
		
];


function filtrar2(array, prueba){
	let contenedor = [];

	for(let elemento of array){
		contenedor.push(prueba(elemento));
	}
	return contenedor;


}
console.log(filtrar2(Anime, indice => indice.nombre));
//Anime.forEach( element => console.log(element));
console.log(filtrar2(Anime, indice => indice.genero =="AVENTURA")); //con igualdad solo verifica si es true o false  
console.log(Anime.filter(indice => indice.ano == 2015 ));// .filter es un metodo predefinida para filtar // funcion flecha parametro => expresion

function mapear(array, prueba){
	let contenedor = [];
	for(let elemento of array){
		contenedor.push(prueba(elemento));
	}
	return contenedor;
}

let verIzqDer = Anime.filter(indice => indice.ano > 2000 && indice.ano < 2018);
console.log(mapear(verIzqDer, indice => indice.nombre));


//STRING Y CODIGOS DE CARACTERES

function codigoCaracter(codigo_caracter) {
for (let codigo of SCRIPTS) { //for (VARIABLE of DE DONDE SE VA A ITERAR) {  DECLARACION }
if (codigo.ranges.some(([desde, hasta]) => {
return codigo_caracter >= desde && codigo_caracter < hasta;
})) {
return codigo;
}
}
return null;
}
console.log(codigoCaracter(121));

function yearAnime1(year_anime){
	for(let year of Anime){
		if (year.ano.some(([inicio, fin]) => {
			return year_anime > inicio && year_anime < fin;
		})) {
			return year;
		}
	}
	return "null porq no coincide";
}

console.log(yearAnime1(1900));

function yearAnime(year_anime){
	for(let year of Anime2){
		if (year.ano.some((inicio) => {
			return year_anime > inicio;
		})) {
			return year;
		}
	}	
	return null;
}

console.log(yearAnime(2000));



let caballoZapato = "🐴👟";
console.log(caballoZapato.length);
console.log(caballoZapato[0]);
console.log(caballoZapato.charCodeAt(0)); //El charCodeAt() método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
console.log(caballoZapato.codePointAt(0)); //El método codePointAt() devuelve un entero no negativo que equivale al valor Unicode code point del carácter.

let frases = "abcABC";
console.log(frases.charCodeAt(0));
console.log(frases.charCodeAt(3));
console.log(frases.codePointAt(0));
console.log(frases.codePointAt(3));



let dragonRosa = "🐉🌹";
for (let caracter of dragonRosa) { //for (VARIABLE of DE DONDE SE VA A ITERAR) {  DECLARACION }
console.log(caracter);
}


//RECONOCIENDO TEXTO

function contarPor(elementos, nombreGrupo) { //RECIBE 2 ARGUMENTOS 1. RECIBE EL ARRAY , 2 ALMACENA LA FUNCION FLECHA
let cuentas = [];                            // SE CREAR ARRAY VACIO DONDE SE ALMACENARA LO Q SE ITERA
	
	for (let elemento of elementos) {			// SE CREAR UNA VARIABLE QUE RECORRERA EL ARRAY Y OBTIENE LOS VALORES Y LO ALMACENARA AHI / ELEMENTOS CONTIENE EL ARRAY
	
	let nombre = nombreGrupo(elemento);			// SE CREA OTRA VARIABLE QUE ALMCENA LA RESPUESTA(FALSE) DE LA FUNCION QUE ESTA DENTRO DE NOMBREGRUPO(ELEMENTO = 1) -> 1=>1>2
	let conocido = cuentas.findIndex(c => c.nombre == nombre); //EN ESTA OTRA VARIABLE, A CUENTAS SE LE UNE EL METODO FINDINDEX QUE SIRVE PARA VERIFICAR SI COINCIDE
															// EL NOMBRE DEL ELEMENTO YA QUE NOMBRE ARROJO FALSE ESO LO COMPARA CON CUENTAS.NOMBRE FININDEX RETONA -1 SI NO 
															// HAY NADA SINO RETORNA EL INDICE DEL ELEMENTO
																 
		if (conocido == -1) {				//CONOCIDO RETORNA -1 YA QUE EN LA PRIMERA ITERACION CUENTAS[] ESTA VACIO Y NO HALLA NADA
		cuentas.push({nombre, cuenta: 1}); // CON PUSH SE ALMACENA DENTRO DEL ARRAY EN ESTE CASO UN OBJETO QUE TIENE 2 VALORES NOMBRE Y CUENTA en nombre entra si es false o true
											// y cuenta eleva la cantidad de coincidencias
		} else {
		cuentas[conocido].cuenta++;			// SI ENCUENTRA COINCIDENCIA RETONAR EL INDICE Y EL .CUENTA ITERA ESE VALOR EN 1 
		}
	}

	return cuentas;	//AL FINAL SE RETORNA EL VALOR DEL ARRAY
}
console.log(contarPor([1, 2, 3, 4, 5], n => n > 2));  //El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función 
													  //de prueba proporcionada. En caso contrario devuelve -1.



function fizzBuzz(){
	let arr = [];

	for(let i = 1; i <= 15; i++){

	let salida = '';

	if (i % 3 == 0) salida += "fizz";
	if (i % 5 == 0) salida += "buzz";

	arr.push(salida || i);
	}
	return arr;
}



const contar = function grupo(n){
	if (n == "fizz") {
		return "fizz";
	}else if (n == "buzz"){
		return "buzz";
	}else {
		return "numeros";
	}
}


function contarFizzBuzz(array,nombreGrupo){
	
	let contenedor = [];

	for(elementos of array){
		let nombre = nombreGrupo(elementos);
		let coincidencia = contenedor.findIndex(contenedor => contenedor.nombre == nombre);

		if(coincidencia == -1){
			contenedor.push({nombre, contador:1});
		}else {
			contenedor[coincidencia].contador++;
		}

	}
	return contenedor;
	
}


console.time("inicio");
console.log(contarFizzBuzz(fizzBuzz(),contar));
console.timeEnd("inicio");



function codigosTexto(texto) { //RECIBE EL PARAMETRO
	let codigos = contarPor(texto, caracter => {let codigo = codigoCaracter(caracter.codePointAt(0)); return codigo ? codigo.name : "ninguno";
												}).filter(({nombre}) => nombre != "ninguno");//crea una variable CODIGOS, esta llama la funcion CONTARPOR
	//que envia el mismo parametro (Texto, y caracter) Este manda todo el texto y lo separa por elementos independientes
	//que encapsula una FUNCION FLECHA dentro de esta se crea otra variable CODIGO que llama a otra funcion 
	//CODIGOCARACTER que lo que hace es mandar ese mismo texto pero selecciona el caracter de posiscion 0 ejemplo solo lleva A  y ese tiene posicion 0 

	let total = codigos.reduce((n, {cuenta}) => n + cuenta, 0);  // REDUCE COMBINA TODO LOS VALORES EN UN SOLO VALOR  0+1+2+3 = 6

	if (total == 0) return "No se encontraron codigos";

	return codigos.map(({nombre, cuenta}) => {
	return `${Math.round(cuenta * 100 / total)}% ${nombre}`;
	}).join(", ");
}


console.log(codigosTexto('Anthony ꆈꌠꁱꂷ 英国的狗说"woof", 俄罗斯的狗说"тяв"')); // se manda el texto a la funcion CODIGOSTEXTO 

console.groupEnd();

console.group("EJERCICIOS ORDEN SUPERIOR");
console.error('EJERCICIOS ORDEN SUPERIOR');


console.group('funcion aplanar');
// ejercicio 1 funciones de orden superior  concatenar grupo de arrays en 1 solo

function aplanar(array){

  let nvo = array.reduce((a,b) => a.concat(b),[]);

	return nvo;

}

console.log(aplanar([[1,2,3],[10,11,12],[100,1000]]));
console.groupEnd();


console.group('funcion ciclo');

function ciclo(n,prueba,actualizar,cuerpo){

for(i = n; prueba(i); i = actualizar(i)){
	cuerpo(i);
}

}
console.log(ciclo(3,n => n > 0 ,n => n - 1,console.log));
console.groupEnd();


console.group('funcion every');

function everys(array,prueba){

	return array.every(prueba);

}

function everys2(array,prueba){

let res;
	for(let elemento of array){
		res = prueba(elemento);
	}
	return res;

}

console.log(everys([12,23,34,41,10], n => n < 40));
console.log(everys2([1,2,54,4,8], n => n < 40));


function salida(array){
	for(let elemento of array){
		if (!(elemento < 40)) {
			return elemento + "soy MAYOR";
		}
	}

		return  "soy MENOR";
	
	
} 

console.log(salida([1,2,3,50]));
console.groupEnd();
console.groupEnd();

console.group("OBJETOS");

let lista = 
{
	valor: 1,
	resto: {
		valor: 2,
		resto: {
			valor: 3,
			resto: null
		}
	}
};

//objetos

let carro = new Object();

carro.marca = "TOYOTA";
carro.modelo = "SANTA FE";
carro.year = 2012;

console.log(carro);

let arr = [1,2,3,4,5,6];

console.log(Object.keys(arr));

//console.log(lista);
console.groupEnd();

console.group("PROGRAMACION ORIENTADA A OBJETOS");

console.group("ENCAPSULACION");
console.error("ENCAPSULACION");
//ENCAPSULACION 

// La encapsulación es el empaquetamiento de datos y 
//funciones en un componente (por ejemplo, una clase) y para luego 
//controlar el acceso a ese componente para hacer un ejecto de "caja negra"
// fuera del objeto.


// una clase seria ujn ejemplo
console.groupEnd();
console.group("METODOS");
console.error("METODOS");
//METODOS 


// Los métodos no son más que propiedades que tienen valores de 
//función. //Este es un método simple:

let conejo = {};

conejo.hablar = function(linea){
	console.log(`El conejo dice '${linea}'`);
};

conejo.hablar("Estoy vivo"); // aqui la funcion es un metodo

function frase(linea){
	console.log(`El conejo ${this.tipo} dice '${linea}'`);
} // THIS HACE REFERENCIA AL OBJETO conejoBlanco y asi tmbn evitamos poner el nombre extenso

function frase2(linea){
	console.log(`El conejo ${conejoHambriento.tipo} dice '${linea}'`);
}
let conejoBlanco = {
	tipo: "blanco",
	frase
};

let conejoHambriento = {
	tipo: "hambriento",
	frase2
};

console.log(conejoBlanco);
console.log(conejoHambriento);

conejoBlanco.frase("me gusta mi color");
conejoHambriento.frase2("me comerias 100 zanahorias del hambre");

frase.call(conejoBlanco,"soy esponjosito"); // EL METODO CALL ES DE 
// DE LAS FUNCIONES SU PRIMER ARGUMENTO ES THIS, Y LOS DEMAS ARGUMENTOS
//SON TOMADOS COMO PARAMETROS NORMALES


function dividirAarray(){

	console.log(this.coordinadas.map(n => n / this.length));// solo funct
	//flecha llaman sus vinculaciones this, las funciones generales dan error  
}

let array = {
	coordinadas: [0, 2, 3], 
	length: 5
}

dividirAarray.call(array); 
dividirAarray.call({coordinadas: [0, 5, 10, 23],length: 5});
console.groupEnd();


console.group("PROTOTIPOS");
console.error("PROTOTIPOS");
//PROTOTIPOS

let vacio = {};
console.log(vacio); 
console.log(vacio.toString); // funcion toString nativa
console.log(vacio.toString()); // objeto

console.log(Object.getPrototypeOf({}) == Object.prototype);
//arroja true por q .getPrototypeOf retorna el prototipo de un objeto

// para funciones, Function primera letra mayuscula
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);

// para Array, Array primera letra mayuscula
console.log(Object.getPrototypeOf([]) == Array.prototype);

let conejoPrototipo = {
	hablar(linea){
		console.log(`El conejo ${this.tipo} dice '${linea}'`);
	}
};

let conejoAssasin = Object.create(conejoPrototipo); //ESTE CREA UN OBJETO
//INDIVIDUAL EXCLUSIVO PARA CONEJO ASESINO PERO TOMA COMO BASE CONEJO
// PROTOTIPO Y PUEDE USAR SUS PROPIEDADES


conejoAssasin.tipo = "asesino";
conejoAssasin.hablar("MEEEE!!!!");
console.log(conejoPrototipo);
console.log(conejoAssasin);

console.groupEnd();


//CLASES
console.group("CLASES");
console.error("CLASES");

// Entonces, para crear una instancia de una clase dada, debes crear
// un objeto que derive del prototipo adecuado, pero también debes 
//asegurarte de que, en sí mismo, este objeto tenga las propiedades 
//que las instancias de esta clase se supone que tengan. Esto es lo
// que una función constructora hace.


// funciom clase
function crearConejo(tipo) {
let conejo = Object.create(conejoPrototipo); // la funcion create 			
conejo.tipo = tipo;												// instancia al objeto
return conejo;
}

console.log(crearConejo("Fuego"));

function Conejo(tipo) {
this.tipo = tipo;
}


Conejo.prototype.hablar = function(linea) {
console.log(`El conejo ${this.tipo} dice '${linea}'`);
};

let conejoRaro = new Conejo("raro"); // CONEJO RARO INSTANCIA A CONEJO
// Y ESTE ES INDEPENDIENTE
console.log(Conejo("aa")); // da undefined porq no retorna ningun varaible
console.log(conejoRaro);
conejoRaro.hablar("jojolete");

//CLASES
console.groupEnd();


console.group("NOTACION DE CLASES");
console.error("NOTACION DE CLASES");


// POSICION DE DECLARACION DE UNA CLASE
class Digimon{  //PALABRA CLAVE class, PERMITE DEFINIR EL CONSTRUCTOR
	//Y LOS METODOS TODO EN UN SOLO LUGAR
	constructor(nombreDigimon){
		this.nombreDigimon = nombreDigimon; // THIS REFERENCIA LA CLASE DIGIMON
	}

	etapaDigimon(etapa){
		console.log(`El nombre del digimon es: ${this.nombreDigimon} y se encuentra en la etapa: ${etapa}`);
	}
}

let botomon = new Digimon("Botomon");
console.log(botomon);
botomon.etapaDigimon("BEBE I");

let koromon = new Digimon("Koromon");
console.log(koromon);
koromon.etapaDigimon("BEBE II");

// CLASE USADA COMO UNA EXPRESION, ESTA NO DEFINE UNA VINCULACION
//Y SOLO CONSTRUCTOR SOLO SE PRODUCE COMO UN VALOR

let objeto = new class {obtenerPalabra() {return "hola"}};
console.log(objeto.obtenerPalabra());


console.group("Sobreescribiendo propiedades derivadas");
console.error("Sobreescribiendo propiedades derivadas");

console.groupEnd();

class Persona{
	constructor(nombre){
		this.nombre = nombre;
	}
	hablar(linea){
		console.log(`La persona se llama ${nombre} y dice ${linea}`);
	}
}

let persona1 = new Persona("Isabel");
let persona2 = new Persona("Anthony");
let persona3 = new Persona("Bella");



console.log(Persona.prototype); // ingresa al constructor de la clase
console.log(Persona.name); //. name regresa el nombre de la clase
Persona.prototype.dientes = "pequeños";// esta propiedad la recibe Persona y es unica de la clase
Persona.prototype.hobby = "leer"; //segunda propiedad
console.log(persona1.dientes); // PERSONA 1 ESTA INSTANCIADA A PERSONA Y USA LA PROPIEDAD DIENTES
persona1.dientes = "grandes y filudos"; // se cambio el valor de la propiedad y se pone delante de la primera
console.log(persona1.dientes); // imprime el nuevo valor
console.groupEnd();


console.group("MAPAS");
console.error("MAPAS");

let edades = {
	Anthony: 24,
	Eliza: 21,
	Evangelo: 23
}

console.log(`Anthony tiene ${edades.Anthony} de edad`);
console.log(`Eliza tiene ${edades["Eliza"]} de edad`);
console.log("Se conoce la edad Jack?", "Jack" in edades);
console.log("se conoce la edad de toString?", "toString" in edades);

console.log({x: 1}.hasOwnProperty("x")); //este metodo solo retorna las llavaes
//o propiedades del objeto, pero no usa las del prototipo // true
console.log({x: 1}.hasOwnProperty("toString")); //false
console.groupEnd();

console.group("POLIMORFISMO");
console.error("POLIMORFISMO"); //habilidad de un objeto de realizar una funcion
// de diferentes maneras

Conejo.prototype.toString = function() {
	return `un conejo ${this.tipo}`;
}
console.log(Conejo.prototype);
console.log(String(conejoRaro));

Digimon.prototype.toString = function() {
	return `${this.nombreDigimon} tiene hambre`;
}

console.log(Digimon.prototype);
console.log(String(botomon));

console.groupEnd();

console.group("SIMBOLOS");
console.error("SIMBOLOS");

//buena practica es darle valor de constante y en mayuscula todo

let simbolo = Symbol("nombre");  // son unicos y usables como nomb prop
console.log(simbolo);//Symbol(nombre);
console.log(simbolo == Symbol("nombre")); // false

Digimon.prototype[simbolo] = 2;
console.log(Digimon.prototype); //toda la clase digimon metodos y const.
console.log(koromon[simbolo]); // 2


const simboloToString = Symbol("toString");
Array.prototype[simboloToString] = function(){
	return `${this.length} cm de hilo rojo`;
}
console.log([1,2].toString());
console.log([1,2][simboloToString]());

let objetoToString = {
	[simboloToString]() {return "una cuerda de cañamo"; }
	//debe estar definido el simbolo  (const simbolotostring)
};

console.log(objetoToString[simboloToString]());

console.groupEnd();

console.group("La interfaz de iterador");
console.error("La interfaz de iterador");

const iteradorOk = "OK"[Symbol.iterator](); // con esto se inicialia el iterador
console.log(iteradorOk.next()); //con el metodo next envia al prox resultado
console.log(iteradorOk.next()); // con este pasa al siguiente value "K" done false // ya que aun hay elementos iterables
console.log(iteradorOk.next()); // retorna value undefined y el done que es boolean retorna true

const numeroArray1 = [1,2,3,4,5,6,7,8];
const iteradorNumeroArray1 = numeroArray1[Symbol.iterator]();
// console.log(iteradorNumeroArray1.next());
// console.log(iteradorNumeroArray1.next());
// console.log(iteradorNumeroArray1.next());
// console.log(iteradorNumeroArray1.next());
// console.log(iteradorNumeroArray1.next());
// console.log(iteradorNumeroArray1.next());
// console.log(iteradorNumeroArray1.next());
// console.log(iteradorNumeroArray1.next());
// console.log(iteradorNumeroArray1.next());

let next = iteradorNumeroArray1.next();

while(!next.done){
	console.log(next.value);
	next = iteradorNumeroArray1.next();
}

class Matriz {
	constructor (ancho, altura, elemento = (x, y) => undefined){
		this.ancho = ancho;
		this.altura = altura;
		this.contenido = [];

		for(let y = 0; y < altura; y++){
			for(let x = 0; x < ancho; x++){
				this.contenido[y*ancho+x] = elemento(x, y);
			}
		}
	}

	obtener(x, y) {
	return this.contenido[y * this.ancho + x];
	}
	establecer(x, y, valor) {
	this.contenido[y * this.ancho + x] = valor;
	}
}
console.log(Matriz.prototype);
// let matriz = new Matriz(2,3);
// matriz.establecer(2,3,2);
// console.log(matriz);


class IteradorMatriz {
	constructor(matriz){
		this.x = 0;
		this.y = 0;
		this.matriz = matriz;
	}

	next(){
		if(this.y == this.matriz.altura) return {done: true};

		let value = {
			x: this.x,
			y: this.y,
			value : this.matriz.obtener(this.x, this.y)
		};
		this.x++;

		if(this.x == this.matriz.ancho){
			this.x = 0;
			this.y++;
		}
		return {value, done: false};
	}
}

console.log(IteradorMatriz.prototype);

Matriz.prototype[Symbol.iterator] = function(){
	return new IteradorMatriz(this);
}
console.log(Matriz.prototype);

let matriz = new Matriz(2,2, (x,y) => `valor ${x}, ${y}`);
for(let {x,y,value} of matriz){
	console.log(x,y, value);
}
console.log(matriz);
console.groupEnd();

console.group("Getters, setters y estáticos");
console.error("Getters, setters y estáticos");

let tamañoCambiante = {
	get tamaño(){
		return Math.floor(Math.random() * 100);
	}
};

console.log(tamañoCambiante.tamaño);
console.log(tamañoCambiante.tamaño);

class Temperatura{  //se define la clase Temperatura
	constructor(celsius){  //constructor(parametro celcius)
		this.celsius = celsius; // this.celsius referencia a la clase = al parametro
	}
	// DE CELSIUS A FAHRENHEIT
	get fahrenheit(){ // GET  obtiene o recibe el valor 
		return this.celsius * 1.8 + 32; // ya de manera previa se paso valor a celsius
	}
	// DE FAHRENHEIT A CELSIUS
	set celsius2(valor){ // set recibe o establece un valor;
		this.celsius = (valor - 32)/1.8; // aqui se le asigna el valor por parametro
	}		// y el resultado se almacena en la prop del constructor

	static desdeFahreinheit(valor){ // este instancia a la clase y se almacena en el constructor
		return new Temperatura((valor - 32) / 1.8);
	}															
}


let temp = new Temperatura(22);
console.log(`La temperatura en FAHRENHEIT es: ${temp.fahrenheit} °F`);

 temp.celsius2 = 30; // ESTE MANDA EL VALOR AL SET TMBN SE LLAMABA fahrenheit
 //pero lo puse asi para entenderlo mejor
console.log(`La temperatura en celsius es: ${temp.celsius.toFixed(4)} °C`);// aqui se llama al
					// this.celsius del constructor que toma el valor del parametro

console.log(`La temperatura en celsius es: ${temp.celsius.toFixed(4)} °C`);// aqui se llama al


console.log(`La temperatura en celsius es: ${Temperatura.desdeFahreinheit(100).celsius.toFixed(4)} °C`);

console.groupEnd();

console.group("HERENCIA");
console.error("HERENCIA");

class MatrizSimetrica extends Matriz {

	constructor(tamaño, elemento = (x, y) => undefined) {

			super(tamaño, tamaño, (x, y) => {

			if (x < y) return elemento(y, x);

			else return elemento(x, y);

			});

		}
	set(x, y, valor) {

		super.set(x, y, valor);

		if (x != y) {

		super.set(y, x, valor);

		}
	}
}

let matriz2 = new MatrizSimetrica(5, (x, y) => `${x},${y}`);
console.log(matriz2.obtener(2, 3));
console.log(matriz2.obtener(6, 2));
console.groupEnd();


console.group("INSTANCEOF");
console.error("INSTANCEOF");
console.log(new MatrizSimetrica(2) instanceof MatrizSimetrica);
// → true
console.log(new MatrizSimetrica(2) instanceof Matriz);
// → true
console.log(new Matriz(2, 2) instanceof MatrizSimetrica);
// → false
console.log([1] instanceof Array);
// → true

console.group("EJERCICIO");
console.error("EJERCICIO");

class Vec{

	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	mas(z){
		return new Vec(this.x + z.x, this.y + z.y);
	}
	menos(z){
		return new Vec(this.x - z.x, this.y - z.y);
	}

	get getLongitud(){
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

}

let t= new Vec(3,4);
console.log(t);
console.log(t.mas(new Vec(2,3)));
console.log(t.menos(new Vec(2,3)));
console.log(t.getLongitud);

class Conjunto{

	constructor(){
		this.miembros = [];
	}

	add(value){
		if (!this.has(value)) { // aca this.has retornaria un false si no esta  
			this.miembros.push(value);//dentro del array y se lo niega para que haga el push
			//siendo true si esta vacio y se pushea cada valor nuevo
		}
	}

	delete(value){
		 this.miembros = this.miembros.filter(v => v !== value);
	}// filter crea un nuevo array con los valores que retornan en true
	// y se almacenar en miembros
	has(value){
		return this.miembros.includes(value); // verifica si los valores estan incluidos
	} // si lo estan retorna true sino retorna false;

	static desde(coleccion){ // metodo estatico que recibe un parametro
		let conjunto = new Conjunto; // instancia a Class conjunto
		for(let valor of coleccion){ // recorre el array y y obtiene los valores individuales
			conjunto.add(valor); // aplica el metodo añadir
		}
		return conjunto; // y retorna el conjunto
	}
}

let grupo = Conjunto.desde([1,9,10]);
console.log(grupo);
grupo.add(1);
grupo.add(5);
grupo.delete(1);
console.log(grupo.has(5));

console.groupEnd();

console.groupEnd();





const caminos = [
"Casa de Alicia-Casa de Bob",
"Casa de Alicia-Cabaña",
"Casa de Alicia-Oficina de Correos",
"Casa de Bob-Ayuntamiento",
"Casa de Daria-Casa de Ernie",
"Casa de Daria-Ayuntamiento",
"Casa de Ernie-Casa de Grete",
"Casa de Grete-Granja",
"Casa de Grete-Tienda",
"Mercado-Granja",
"Mercado-Oficina de Correos",
"Mercado-Tienda",
"Mercado-Ayuntamiento",
"Tienda-Ayuntamiento"
];

function construirGrafo(bordes) {
	let grafo = Object.create(null);
		function añadirBorde(desde, hasta) {
			if (grafo[desde] == null) {
				grafo[desde] = [hasta];
			} else {
				grafo[desde].push(hasta);
			}
		}
	for (let [desde, hasta] of bordes.map(c => c.split("-"))) {
		añadirBorde(desde, hasta);
		añadirBorde(hasta, desde);
	}
	return grafo;
}
const grafoCamino = construirGrafo(caminos);

console.log(grafoCamino);