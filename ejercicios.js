//EJERCICIO  N° 1;
document.write("EJERCICIO 1" + "<br>");
let contador1 = 0;
let letra = "#";
while (contador1 < 7) {
	contador1 ++;
	console.log(contador1);
	document.write(letra+'<br>');
	console.log(letra);
	letra = letra + "#";
}

document.write("RESOLUCION 1" + "<br>");
//RESOLUCION 1

for(let letra1 = "#"; letra1.length < 8; letra1 += "#"){
	document.write(letra1 + "<br>");
	console.log(letra1);
}


//EJERCICIO 2
document.write("EJERCICIO 2" + "<br>");


// for(let num2 = 1; num2 <= 100; num2++){
// 	let content = '';
// 	if(num2 % 3 == 0 && num2 % 5 == 0){
// 		content += 'FizzBuzz' + '<br>';
// 	}else if(num2 % 3 == 0){
// 		content += 'Fizz'+ '<br>';
// 	}else if(num2 % 5 == 0){
// 		content += 'Buzz'+ '<br>';
// 	}
// 	document.write(content || num2+'<br>');
// }

//FALLE

for(let num = 1; num <= 100; num++){
	let corregi="";
	if (num % 3 == 0) {
		corregi = "fizz";
	}
	if (num % 5 == 0){
		corregi += "buzz";
	}
//console.log(corregi || num);
}

//RESOLUCION 2
document.write("RESOLUCION 2" + "<br>");
for(let n = 1; n <= 100; n++){
	let salida = "";
	if (n % 3 == 0) {salida = "Fizz"}
	if (n % 5 == 0) {salida += "Buzz"}
		//console.log(salida || n);
}


//EJERCICIO 3
document.write("EJERCICIO 3" + "<br>");


let tabla = "";
let tabla1 = "";
let x = 0;
let y = 0;
let x1 = 0;
let y1 = 0;

let tam = 8;

while(x < tam){
	x++;
	while (y < tam) {
		y++;
		if ((x+y) % 2 == 0) {
			tabla += " ";
		}else {
			tabla += "#";
		}		 
	}
}
console.log(tabla);

while(x1 < tam){
	x1++;
	while (y1 < tam) {
		y1++;
		if ((x1+y1) % 2 == 0) {
			tabla1 += "#";
		}else {
			tabla1 += " ";
		}		 
	}
}
console.log(tabla1);//falle



//RESOLUCION 3
document.write("RESOLUCION 3" + "<br>");
let size = 10;   //def la dimension
let table = ""; //donde se colocara las 2 partes ("#" , " ")

for(let a = 0; a < size; a++){ //se declara 0 y este debe ser menor a 8 (horizontal) e incrementa en 1 cada que itera
	for (let b = 0; b < size; b++) {//se declara b y este sera menor a 8 (vertical) e incrementa en 1 cada iteracion
		if ((a+b) % 2 == 0) { //se suman y sacan el residuo de la division
			table += " ";// si no tiene resto muestra en blancho
		}else{
			table += "#";//si tiene residuo muestra numeral
		}
	}
	table += "\n"; //salto de linea para horizontal
}

console.log(table);


const humus = function(factor) {
  const ingrediente = function(cantidad, unidad, nombre) {
    let cantidadIngrediente = cantidad * factor;
    if (cantidadIngrediente > 1) {
      unidad += "s";
    }
    console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
  };
  ingrediente(1, "lata", "garbanzos");
  ingrediente(0.25, "taza", "tahini");
  ingrediente(0.25, "taza", "jugo de limón");
  ingrediente(1, "clavo", "ajo");
  ingrediente(2, "cucharada", "aceite de oliva");
  ingrediente(0.5, "cucharadita", "comino");
};



function saludar(nombre){
	console.log("hola " + nombre);
}

saludar("Anthony");
console.log("adios");

