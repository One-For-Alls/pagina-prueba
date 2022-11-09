// RANGO DE NUMEROS PARA IMPRIMIR ARRAY


// function rango(inicio, final){
// 	let datos = [];
// 	for(i = inicio; i <= final; i++){
// 		datos.push(i);
// 	}
// 	return datos;
// }

// function suma(datos){
// 	let sumar = 0;
// 	for (var i = 0; i <= datos.length; i++) {
// 		sumar += i;
// 	}
// 	return sumar;
// }

//  console.log(suma(rango(10,1)));



// REVERTIR ARRAY 


// function revertirArray(datos){

// 	let salida = [];

// 	for(i = datos.length - 1; i >= 0; i--) {
// 		salida.push(datos[i])
// 	}
// 	return salida;
// }

// console.log(revertirArray(['A','B','C','D','E','F']));


// function revertirArrayEnSuLugar(array) {
//   for (let i = 0; i < Math.floor(array.length / 2); i++) {
//     let old = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = old;
//   }
//   return array;
// }

// console.log(revertirArrayEnSuLugar(['A','B','C','D','E','F']));

// let number = [1,2,3,4,5,6];

// console.log(number);
// console.log(...number);



// function unless(test, then) {
//   if (!test) then();
// }

// function repeat(n, accion) {
// 	for (let i = 0; i < n; i++) {
// 	accion(i);
// 	}
// }


// repeat(3, n => {
//   unless(n % 2 == 1, () => {
//     console.log(n, "is even");
//   });
// });

let txt = 'hola como estas';

console.log(txt.indexOf('o'));