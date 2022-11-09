const $btnColor = document.getElementById("btn"),
      $color = document.querySelector(".color");

console.log($btnColor);
console.log($color);

const colorHex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


$btnColor.addEventListener("click", ()=>{
	let hexa = '#';
	
	for (var i = 0; i < 6; i++) {
		hexa += colorHex[aleatorio()];
	}
	document.body.style.background = hexa;
	$color.textContent = hexa;
	console.log(aleatorio());
	console.log(hexa);
});






function aleatorio(){
	return Math.floor(Math.random() * colorHex.length);
}
