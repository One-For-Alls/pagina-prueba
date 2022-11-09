const d = document,
	  w = window,
	  n = navigator;

export default function connection(){
// console.log(navigator.onLine);
const conectado = () => {
	const $div = d.createElement("div"); // creamos un div
	
	if(n.onLine){  //navigator.online determina si el dispotivo se encuentra conectado o no a la red.
		console.log("online")
		console.log($div)
		$div.classList.add('online');// agregar clase
		$div.classList.remove('offline'); // remover clase
		$div.innerHTML = 'Conexion Restablecida';
	}else{
		console.log("offline")
		$div.classList.add('offline');
		$div.classList.remove('online');
		$div.innerHTML = 'Conexion Perdida';
	}

	d.body.insertAdjacentElement('afterbegin',$div);// insertamos el elemento despues del body

	setTimeout(() => {
		d.body.removeChild($div);
	},1500)
};



	w.addEventListener('online',(e) => conectado()); //el evento online / offline se ejecuta cuando se pierde o retoma la conexion
	w.addEventListener('offline',(e) => conectado());

}