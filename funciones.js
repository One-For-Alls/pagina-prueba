//PILA DE LLAMADASD

//RECURSIVIDAD
function encontrarSolucion(objetivo){
	function encontrar(actual, historia){
		if(actual == objetivo){
			return historia;
		}else if(actual > objetivo){
			return null;
		}else{
			return encontrar(actual + 5, `(${historia} + 5)`) || encontrar(actual * 3, `(${historia} * 3)`);
		}
	}
	return encontrar(1, "1");

}

document.write(encontrarSolucion(13));



let stringVaca = String(7);
while (stringVaca.length < 3) {
stringVaca = "0" + stringVaca;
}

console.log(`${stringVaca} VACAS`);


function min(valor1,valor2){
	console.log("El menor valor es: " + Math.min(valor1,valor2));
	return "correcto";
}

console.log(min(12,30));