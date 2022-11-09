const d = document;
let x = 0, y = 0;
export function shortcuts(e,btnPlay){
	// console.log(e);
	// console.log("tipo:",e.type);
	// console.log("codigo:",e.code);
	// console.log("llave:",e.key);
	// console.log("llave codigo:",e.keyCode);
	// console.log("alt:",e.altKey);
	// console.log("shift:",e.shiftKey);
	// console.log("ctrl:",e.ctrlKey);
	// console.log(btnPlay);

	// if (e.key === 'ñ' && e.ctrlKey) {
	// 	d.querySelector(btnPlay).play();
	// }
	// if (e.key === 'y' && e.ctrlKey) {
	// 	d.querySelector(btnPlay).load();
	// }

	// if (e.key === 'A' && e.shiftKey) {
	// 	console.log("bien")
	// 	alert("soy una alerta del teclado");
	// }else {
	// 	console.log('mal')
	// }

	// if (e.key === 'c' && e.altKey) {
	// 	confirm("has enviado una confirmacion con el teclado")
	// }
	// if (e.key === 'p' && e.altKey) {
	// 	prompt("has enviado un aviso del teclado")
	// }

}

//caputaromos los selectores para mover la bola

export function moveBall(e, contendor, bola){

	const $content = d.querySelector(contendor),
		  $ball = d.querySelector(bola);

	const limitBall = $ball.getBoundingClientRect();
	const limitContent = $content.getBoundingClientRect();
		// console.log(limitBall,limitContent);

	switch (e.keyCode) {
		case 37:       //IZQ
			
			
			if (limitBall.left > limitContent.left) {
				console.log("Dentro del limite");
				console.log(limitBall.left);
				console.log(limitContent.left);
				x-=15;
				e.preventDefault();
			}
		break;

		case 38:  
	  			y-= 15;		//UP
			(Math.abs(y) > (limitContent.height - limitBall.height)/2)
			? y = (limitBall.height - limitContent.height)/2
			:e.preventDefault()
			
		break;

		case 39:       //RIGHT
			if (limitBall.right < limitContent.right) {
				console.log("Dentro del limite");
				console.log(limitBall.right);
				console.log(limitContent.right);
				x+=15;
				e.preventDefault();
			}
			 // el preventdefault dentro del case evita
			//q esto apague todos los comportamientos del teclado por ejm scroll
		break;

		case 40:       //DOWN
			y+= 15;		
			(Math.abs(y) > (limitContent.height - limitBall.height)/2) 
				? y = -(limitBall.height - limitContent.height)/2
				: e.preventDefault()
		break;

		default:
		break;
	}
//console.log(e,$content,$ball);
	$ball.style.transform = `translate(${x}px, ${y}px)`

}



//esto es para capturar eventos del teclado y asignar atajos de teclado



// export function shortcuts(e,btnPlay){     
// 	// console.log(e);
// 	// console.log("tipo:",e.type);
// 	// console.log("codigo:",e.code);
// 	// console.log("llave:",e.key);
// 	// console.log("llave codigo:",e.keyCode);
// 	// console.log("alt:",e.altKey);
// 	// console.log("shift:",e.shiftKey);
// 	// console.log("ctrl:",e.ctrlKey);
// 	// console.log(btnPlay);

// 	// if (e.key === 'ñ' && e.ctrlKey) {
// 	// 	d.querySelector(btnPlay).play();
// 	// }
// 	// if (e.key === 'y' && e.ctrlKey) {
// 	// 	d.querySelector(btnPlay).load();
// 	// }

// 	// if (e.key === 'A' && e.shiftKey) {
// 	// 	console.log("bien")
// 	// 	alert("soy una alerta del teclado");
// 	// }else {
// 	// 	console.log('mal')
// 	// }

// 	// if (e.key === 'c' && e.altKey) {
// 	// 	confirm("has enviado una confirmacion con el teclado")
// 	// }
// 	// if (e.key === 'p' && e.altKey) {
// 	// 	prompt("has enviado un aviso del teclado")
// 	// }

// }



// y -= 15;	//UP
// 			 if (Math.abs(y) > ($content.clientHeight - $ball.clientHeight) / 2) 
// 			 	y = -($content.clientHeight - $ball.clientHeight) / 2
               
//                 console.log(($content.clientHeight - $ball.clientHeight) / 2);
                
//                 console.log(($content.clientHeight - $ball.clientHeight) / 2);
//                 console.log(y);