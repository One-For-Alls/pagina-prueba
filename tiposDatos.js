//tipos de datos

//number

let num1 = 3; //entero
let num2 = 2.4; //decimal
let num3 = -8; // entero negativo
let num4 = 32;
let suma = num1 + num4;
let resta = num1 - num4;
let multi = num1 * num4;
let division = num1 / num4;
let modulo = num4 % num1;

//el + concatena string
document.write("soy un valor numerico= "+num1 + "<br><br>");
document.write("soy un valor numerico= "+num2 + "<br><br>");
document.write("soy un valor numerico= "+num3 + "<br><br>");

document.write("soy el valor suma de "+num1 + " y " + num4 + " y el resultado es " +suma+ "<br><br>");
document.write("soy el valor resta de "+num4 + " y " + num1 + " y el resultado es " +resta+ "<br><br>");
document.write("soy el valor multi de "+num1 + " y " + num4 + " y el resultado es " +multi+ "<br><br>");
document.write("soy el valor division de "+num1 + " y " + num4 + " y el resultado es " +division+ "<br><br>");
document.write("soy el valor modulo(%) de "+num4 + " y " + num1 + " y el resultado es " +modulo+ "<br><br>");

//String  
//esto es salto de linea en javascript  "\n" , si queremos que se muestre la barra como texto se debe poner doble
//   ejm     ' Un carácter de salto de linea es escrito así: \"\\n\". '


// VAR se usa para variables locales y globales dentro y fuera de funciones
//LET es solo para uso local 
//CONST variables que no cambiaran de valor;

let text1= "hola soy anthony";
document.write("soy un valor string= '"+ text1 + "'<br><br>");


let text2= "Un carácter de salto de linea es escrito así: \"\\n\"." + "<br><br>";
document.write(text2);


let concatenar = "con"+"ca"+"te"+"nar";

document.write(concatenar + "<br><br>");

/*as comillas simples('') y dobles("") sirven para texto y se usar variaciones 
para otros formatos (" '  '  "), hay tmbn otro 
tipo de comilla invertida(Backticks) o plantillas literales(´´) la cual tiene una funcion 
extra q resuelve operacion con esta funcion ${}*/

let literal = `Al multiplicar 20 x 3 obtenemos: ${20*3}`;

document.write(literal + "<br><br>");


/*No todo los operadores son simbolos. Algunos se escriben como palabras. Un
ejemplo es el operador typeof, que produce un string con el nombre del tipo
de valor que le demos. //  LOS VALORES ANTERIORES OPERABAN CON 2 VALORES(BINARIOS Y TYPEOF SOLO 1 QUE UNARIO)*/

document.write(typeof literal);
document.write(typeof num1);
document.write(typeof num2);
document.write(typeof num3);

/*VALORES BOOLEANOS son 2 valores verdadero o falso, aqui usamos los operadores < > <= >= != */

console.log("abb"<"abc");
console.log("rojo" >= "verde");
console.log("azul" == "azul");
console.log("3" == 3);
console.log("3" === 3);

//solo este es el unico valor q no es igual asi mismo
console.log(NaN === NaN);
console.log(Infinity === Infinity);

//operadores &&(and), ||(or) y not (!)
console.log('and',true && false);
console.log('and',true && true);
console.log('and',false && false);
console.log('or',true || false);
console.log('or',true || true);
console.log('or',false || false);
console.log('not',!true);

console.log(1 + 1 == 2 && 10 * 10 > 50);


// operador condicional o ternario , abreviacion de una condicional

console.log('"operador ternario":',2>0 ? "verdadero" : "falso");

//let estado = prompt("ingresa el estado");

//console.log('"usted se encuentra: "', estado == "activo" ? "habilitado" : "inhabilitado");



// CONVERSION DE TIPO AUTOMATICA

console.log(6*null);
console.log(12*undefined);
console.log("2" * 2);
console.log(121*11);
console.log(3*false);
console.log(true * false);


//VINCULACIONES

let deuda = 140;

deuda = deuda - 100;  //  deuda -= 100;

console.log(deuda);

let nombre = "Anthony";
nombre = "Franlin";
nombre = "jULIO";

const saludo = "Hola como estas ";

console.log(saludo + nombre);

//FUNCIONES

console.log(Math.max(120,43));
console.log(Math.min(23,22));

console.log(Math.max(2,6) + 100);

//CONDICIONAL IF

     let numero;//let numero = Number(prompt("Ingresa un numero"));

if(!Number.isNaN(numero)){
	console.log("El numero " + numero + " es la raiz cuadrada de: " + (numero*numero));
}else{
	console.log("No soy un numero");
}

if (numero <= 10) {
	console.log("pequeño - rango del 1 al 10");
}else if(numero < 100){
	console.log("mediano - rango de 11 al 100");
}else{
	console.log("grande - mayor a 100");
}

let num = 0;

// CONDICION  WHILE
while(num <= 100){
	console.log(num);
	num = num + 2;
}

let num5 = prompt("ingresa el numero base");
let exponente = prompt("ingrese exponente");
let res = 1, contador = 0;
while(contador < exponente){
	contador = contador + 1;
	res = res * num5;
}

console.log(res);

// DO WHILE    PRIMERO EJECUTA EL CUERPO 1 VEZ Y LUEGO HACE EL BUCLE

let nom;
do{
	nom = prompt("¿Como te llamas?");
	console.log(nom);
}while(!nom){
	console.log("bienvenido: " + nom);
}




