// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// }

// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => {
//       return code >= from && code < to;
//     })) {
//       return script;
//     }
//   }
//   return null;
// }

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// function textScripts(text) {
//   let scripts = countBy(text, char => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.name : "none";
//   }).filter(({name}) => name != "none");

//   let total = scripts.reduce((n, {count}) => n + count, 0);
//   if (total == 0) return "No scripts found";

//   return scripts.map(({name, count}) => {
//     return `${Math.round(count * 100 / total)}% ${name}`;
//   }).join(", ");
// }




function contarPor(elementos, nombreGrupo) { //RECIBE 2 ARGUMENTOS 1. RECIBE EL ARRAY , 2 ALMACENA LA FUNCION FLECHA
let cuentas = [];                            // SE CREAR ARRAY VACIO DONDE SE ALMACENARA LO Q SE ITERA
  
  for (let elemento of elementos) {     // SE CREAR UNA VARIABLE QUE RECORRERA EL ARRAY Y OBTIENE LOS VALORES Y LO ALMACENARA AHI / ELEMENTOS CONTIENE EL ARRAY
  
  let name = nombreGrupo(elemento);     // SE CREA OTRA VARIABLE QUE ALMCENA LA RESPUESTA(FALSE) DE LA FUNCION QUE ESTA DENTRO DE NOMBREGRUPO(ELEMENTO = 1) -> 1=>1>2
  let conocido = cuentas.findIndex(c => c.name == name); //EN ESTA OTRA VARIABLE, A CUENTAS SE LE UNE EL METODO FINDINDEX QUE SIRVE PARA VERIFICAR SI COINCIDE
                              // EL NOMBRE DEL ELEMENTO YA QUE NOMBRE ARROJO FALSE ESO LO COMPARA CON CUENTAS.NOMBRE FININDEX RETONA -1 SI NO 
                              // HAY NADA SINO RETORNA EL INDICE DEL ELEMENTO
                                 
    if (conocido == -1) {       //CONOCIDO RETORNA -1 YA QUE EN LA PRIMERA ITERACION CUENTAS[] ESTA VACIO Y NO HALLA NADA
    cuentas.push({name, cuenta: 1}); // CON PUSH SE ALMACENA DENTRO DEL ARRAY EN ESTE CASO UN OBJETO QUE TIENE 2 VALORES NOMBRE Y CUENTA en nombre entra si es false o true
                      // y cuenta eleva la cantidad de coincidencias
    } else {
    cuentas[conocido].cuenta++;     // SI ENCUENTRA COINCIDENCIA RETONAR EL INDICE Y EL .CUENTA ITERA ESE VALOR EN 1 
    }
  }

  return cuentas; //AL FINAL SE RETORNA EL VALOR DEL ARRAY
}





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





