console.error("EJERCICIO 1: MAYOR DE EDAD");
document.write("EJERCICIO 1: MAYOR DE EDAD <br><br>");

// //let edad = Number(prompt("Ingresa tu edad"));

// if (Number.isNaN(edad)) document.write("Solo ingresa numeros")
// else{
// 	if (edad > 18) document.write("Ya puedes conducir"); 
//     else document.write("tu edad es menor a 18 y no puedes conducir");
// };
document.write("<br><br> FIN EJERCICIO 1");

console.error("EJERCICIO 2: CALIFICACION");

// let nota = Number(prompt("Ingresa una nota"));

// if(Number.isNaN(nota)) alert("Solo se admiten numero del 1 al 10");
// else if(nota >= 0 && nota < 3){
// 	console.log("Muy deficiente");
// } else if(nota < 5){
// 	console.log("ISUFICIENTE");
// } else if(nota < 6){
// 	console.log("Suficiente");
// } else if(nota < 7){
// 	console.log("Bien");
// } else if(nota < 9){
// 	console.log("Notable");
// } else if(nota <= 10){
// 	console.log("Sobresaliente");
// }else {
// 	console.log("Fuera del rango")
// }
console.error("EJERCICIO 3: unir texto");

//DECLARAMOS UNA VARIABLE DONDE VAMOS A CONCATENAR LAS CADENAS
 var resultado = "";
//BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
do {
    //PEDIMOS LA CADENA POR TECLADO
    var cadena = prompt("Introduce una cadena");
    //SI LA VARIABLE RESULTADO ESTÁ VACÍA
    if (resultado == "") {
        //CONCATENAMOS SIN UTILIZAR GUIÓN
        resultado = resultado + cadena;
    }
    //SINÓ
    else {
        //CONCATENAMOS CON GUIÓN
        resultado = resultado + "-" + cadena;
    }
    //MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
} while (confirm("Desea seguir?"));
//SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO
document.write(resultado);