const d = document;

export default function countDown(id, limitDate, message){
	
	const $countDown = d.getElementById(id);
	let countDownDate = new Date(limitDate).getTime();

	
	const tempoDown = setInterval(() => {

		let now = new Date().getTime(),
			difTime = countDownDate - now,
			anio,
			mes,
			semana,
			dia,
			hora,
			minuto,
			segundo;

			anio = Math.floor(difTime / (1000 * 60 * 60 * 24 * 365));
			mes = Math.floor(difTime % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30));
			semana = Math.floor(difTime % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24 * 7));
			dia = Math.floor(difTime % (1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24));
			hora = ('0' + Math.floor((difTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
			minuto = ('0' + Math.floor((difTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
			segundo = ('0' + Math.floor((difTime % (1000 * 60)) / 1000)).slice(-2);

			$countDown.innerHTML = `<h3>${anio} años ${mes} meses ${semana} semanas ${dia} dias // ${hora} horas ${minuto} minutos ${segundo} segundos</h3>`;

			// console.log(difTime);

				if (difTime < 0) {
					clearInterval(tempoDown);
					$countDown.innerHTML = `<h3>${message}</h3>`;
				}
			
	},1000);

}