let anime = ['digimon','pokemon','bleach','swort art online','one piece','akame ga kill'];
console.log(anime);
let anime1 = ['digimon','pokemon','bleach','swort art online','one piece','akame ga kill'];
console.log(anime1);
let frutas = ['pera', 'manzana', 'platano', 'zandia'];
console.log(frutas);
let juegos = ['karos online', 'Op7', 'Gound Bound', 'Zula'];
console.log(juegos);
let str = 'Hola mundo';
let num = 12345;

// * LOS METODOS SOLO APLICAN PARA ARRAYS

console.error('.toString()');
//To string convierte un array a texto plano separado por comas y es un solo texto

console.log(anime.toString() + ' son animes');  
console.log(str.toString());
console.log(num.toString());

console.error('typeof variable');
 console.log(typeof str);// con este metodo vemos el tipo de dato de una vinculacion o variable
 console.log(typeof num);

//.join se encarga de unir un array como en tostring pero este ademas añade el separdor entre 
// indices solo aplica en matrices

console.error('.join()');
console.log(anime.join(' / ')); 
console.log(frutas.join(' - '));

//array.pop(),elimana el ultimo valor del indice del array y devuelve este valor de
// manera independiente y no recibe parametro o argumentos
console.error('.pop()');
let anime2 = anime.pop();
let frutas2 = frutas.pop();
console.log(anime2); // akame ga kill
console.log(frutas2);// zandia


//array.push() agrega un nuevo elemento al final de la matriz o array y solo poner 
// push() sin parametros devuelve la longitud del array

console.error('.push()');
let anime3 = anime.push('hajime no ippo'); //5
console.log(anime);

let frutas3 = frutas.push('naranja'); //3
console.log(frutas);

console.error('.shift()');
//El método shift() elimina el primer elemento de la matriz y "cambia" todos los demás
// elementos para que retrocedan un índice más abajo. y tmbn devuelve de forma
//independiente

let anime4 = anime.shift();
console.log(anime4); // digimon
console.log(anime);


console.log(frutas.shift());
console.log(frutas); //pera

console.error('.unshift()');
//El unshift()método agrega un nuevo elemento a una matriz (al principio) y 
//"desplaza" los elementos más antiguos y devuelve la nueva longitud

console.log(anime.unshift('doraemon')); // 6
console.log(anime);

console.log(frutas.unshift('pacay')); // 4
console.log(frutas);

console.error('indices array[0]');
// indices de matriz, si se pasa un indice que no existe arroja undefined

console.log(anime[0] +' '+ anime[1] +' '+  anime[2] +' '+ anime[3]); 
console.log(frutas[0] +' '+ frutas[1] +' '+  frutas[2] +' '+ frutas[3] +' '+ frutas[4]);

console.error('array[array.length]');
// array[array.length] agrega un elemento a la vez obteniendo el indice final y agregandolo

anime[anime.length] = "dragon ball";
console.log(anime);

frutas[frutas.length] = "fresa";
console.log(frutas);

console.error('delete array[0];');
// delete array[0]; elimina elementos del array y su indice, pero aun existe como vacio 
// se recomienda usar pop o shift

delete anime[4];
console.log(anime);

delete frutas[3];
console.log(frutas);

console.error('.concat()');
// Concatena 2 o mas matrices y crea una nueva matriz y no afectas a los array base
// tmbn puede concatenar cadenas

let nuevaUnion = anime.concat(frutas);
let nuevaUnion2 = anime.concat(frutas, juegos);

console.log(nuevaUnion);
console.log(nuevaUnion2);
console.log(anime.concat('Re-Zero'));

//Matrices de empalme y corte

//El splice()método agrega nuevos elementos a una matriz.
console.error('splice()');

anime.splice(2,0,'attack of titan', 'eyeshield 21'); // inicio izq a der, cant de eliminados, 
//elementos agregados

console.log(anime);
anime.splice(2); // devuelve los eliminados anteriores del indice indicado(0,1)
console.log(anime);

anime.splice(-2,1); // devuelve los eliminados anteriores del indice indicado DE DER A IZQ(0,1)
console.log(anime);

anime.splice(); // sin argumentos MUESTRAS LOS ELEMENTOS BORRADOS Y SI NO HAY DA VACIO
console.log(anime);

frutas.splice(3,1,'piña','mandarina');
console.log(frutas);
console.log(frutas.splice());

juegos.splice(0,2,'Mario bross','Final fantasy')
console.log(juegos);
console.log(juegos.splice());


//El slice()método corta una parte de una matriz.
console.error('slice()');


console.log(anime1.slice(4)); // corta la solo hasta la parte donde indica el indice 
//sin tomarla
console.log(anime1.slice(0,4));// toma como inicio el primer argumento y el segundo 
//sin contarlo como el final