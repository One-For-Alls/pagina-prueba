
// ejercicio 1 v.0.1

// let x = '*'; //  'declaro el simbolo'

// while(x.length <= 8){
// 	console.log(x);  //imprimo
// 	x += '*';		//le sumo otro asterisco cada q itera
// }

// ejercicio 1 v.0.2  que se ingrese la cantidad de asteriscos deseados

// let cantidad = Number(prompt("Ingresa el numero de asteriscos"));

//let caracter = prompt("Ingresa el caracter");
//let valor = caracter;


// if (Number.isNaN(cantidad)) {
// 	alert(("Solo ingresa numeros"));
// 	window.location.href="index.php";
// }

// if (caracter.length > 1) {
// 	alert(("Solo ingresa 1 caracter"));
// 	window.location.href="index.php";
// }

// while(caracter.length <= cantidad){
// 	console.log(caracter);
// 	caracter += valor;
// }

// for(let i = 1; i <= cantidad; i++){
// 	let out = '';
// 	if (i % 3 == 0) out='Fizz';
// 	if (i % 5 == 0) out+='Buzz';

// 	console.log(out || i);

// }

// let dimensionx = 20;
// let dimensiony = 50;
// let tablero = '';
// let x = 0;
// while (x < dimensionx) {
// 	x++;
// 	let y = 0;
// 	while (y < dimensiony) {
// 		y++;
// 		if ((x+y) % 2 == 0) {
// 			tablero +=' ';
// 		}else {
// 			tablero += '#';
// 		}
// 	}
// 	tablero +='\n';
// }
// console.log(tablero);
// let arr = [];
// let suma = 0;
// for(i = 1; i <= 100; i++){
// 	if (i % 7 == 0) {
// 		arr.push(i);
// 		suma += i;
// 	}

// }
// console.log('Los numeros de 7 del 1 al 100 son: '+arr);
// console.log('Los cantidad de multiplos de 7 del 1 al 100 son: '+arr.length);
// console.log('La suma de los multiplos de 7 del 1 al 100 son: '+suma);

// var num = [];
//             for(var i=100;i<=1000;i++){
//                 var ge=i%10;
//                 var shi=parseInt(i/10)%10;
//                 var bai=parseInt(i/100);
//                 if(ge**3+shi**3+bai**3==i){
//                     num.push(i);
//                 }
//             }
//             document.write(num);

// let numero = Number(prompt("Ingresa el numero a verificar"));

// if (Number.isNaN(numero)) {
// 	alert("SOLO SE ADMITEN NUMERO");
// 	reload();
// }

// if (numero == 1) {
// 	alert('este numero no es primo ni compuesto');
// }

// if (numero / 1 == numero && numero /) {}

// function isPrime(n) 
// {
//     if (n<=1) return false;
//     for (var i = 2; i <= n-1; i++)
//         if (n % i == 0) return false;
//     return true;
// }

// console.log(isPrime(2));
// console.log(isPrime(23));

// function esPar(x){
// 	if(x == 0){
// 		return true
// 	} else if(x == 1){
// 		return false;
// 	}else if(x < 0){
// 		return esPar(-x);
// 	}else {
// 		return esPar(x-2);
// 	}
// }


// console.log(esPar(-4));

function contarLetra(texto){
	return contar(texto, "o");
}

function contar(texto, letra){
	num = 0;
	for (var i = 0; i < texto.length; i++) {
		if (texto[i] === letra) {
			num+=1;
			// console.log("hay " + num + " B");
		// } else {
		// 	console.log("No se encontraron coincidencias")
		}
	}
	return num;
}

console.log(contarLetra('baBoso'));

// nombre= 'anthony';
// console.log(nombre[0]);