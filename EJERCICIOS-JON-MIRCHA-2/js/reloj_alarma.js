const d = document;

export function reloj(btnInicioReloj, btnFinReloj, txtHora){	
	let reloj;

	d.addEventListener("click", (e) => {
		if (e.target.matches(`#${btnInicioReloj}`)) {
			reloj = setInterval(() =>{
				let hora = new Date().toLocaleTimeString();
			// let formatoHora =`${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`
				d.getElementById(txtHora).innerHTML = hora;
			},1000);

			e.target.disabled = true;
		}

		if (e.target.matches(`#${btnFinReloj}`)) {
			clearInterval(reloj);
			d.getElementById(txtHora).innerHTML = null;
			d.getElementById(btnInicioReloj).removeAttribute("disabled");
		}
	});
}

export function reproductor(btnPlayMusica, btnStopMusica, reproductor){

	d.addEventListener("click",(e) => {
		if (e.target.matches(`#${btnPlayMusica}`)) {
			d.getElementById(reproductor).play();
			d.getElementById(btnPlayMusica).setAttribute("disabled", "true");
			d.getElementById(reproductor).volume = 0.5;

		}

		if (e.target.matches(`#${btnStopMusica}`)) {
			d.getElementById(reproductor).load();  // 
			d.getElementById(btnPlayMusica).removeAttribute("disabled");
		}
	});

}

export function alarm(sound, btnPlay, btnStop){

	let alarmTempo;
	const $alarm = d.createElement("audio");
	$alarm.src = sound;

	d.addEventListener("click",(e) => {

		if (e.target.matches(btnPlay)) {
			alarmTempo = setTimeout(() => {
				$alarm.play();
			},500);

			e.target.disabled = true;
		}
		
		if (e.target.matches(btnStop)) {
			clearTimeout(alarmTempo);
			$alarm.load();  //tmbn existe  .currentTime = 0;
			d.querySelector(btnPlay).disabled = false;
		}
	});

}

export function volumen(btnPlayMusica,ranVolumen,moduloReproductor){
	const $barra = d.querySelector(ranVolumen);

	$barra.addEventListener("click", (e) => {
		
		let audio = d.querySelector(moduloReproductor);
		
		if (e.target.matches(ranVolumen)) {
			audio.volume = e.currentTarget.value;
		}
	},true);
}

