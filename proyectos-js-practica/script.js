const $btnColor = document.getElementById("btn"),
      $color = document.querySelector(".color");

console.log($btnColor);
console.log($color);

const colores = ["red","green","blue"];


$btnColor.addEventListener("click", ()=>{
	const posColor = aleatorio();
	document.body.style.background = colores[posColor];
	$color.textContent = colores[posColor];
	console.log(aleatorio());
});

function aleatorio(){
	return Math.floor(Math.random() * colores.length);
}



