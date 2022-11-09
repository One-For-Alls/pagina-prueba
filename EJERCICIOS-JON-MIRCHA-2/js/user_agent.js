const d = document,
	  n = navigator,
	  ua = n.userAgent;

export default function userAgent(user){
	// console.log(ua);
	const $id = d.getElementById(user),
		  isMobile = {
				android: () => ua.match(/android/i),
				ios: () => ua.match(/iphone/i),
				any: function (){  // ACA SI PONES ARROW FUNCTION DA ERROR
					return this.android() || this.ios();
				}
		  },

		  isDesktop = {
		  		windows: () => ua.match(/windows nt/i),
		  		linux: () => ua.match(/linux/i),
		  		mac: () => ua.match(/mac os/i),
		  		any: function (){
		  			return this.windows() || this.mac() || this.linux();
		  		}
		  },

		  isBrowser = {
		  	chrome: () => ua.match(/chrome/i),
		  	firefox: () => ua.match(/firefox/i),
		  	edge: () => ua.match(/edg/i),
		  	safari: () => ua.match(/safari/i),
		  	any: function (){
		  		return this.chrome() || this.firefox() || this.edge() || this.safari();
		  	}
		  },

		  isArchitecture = {
		  	x32: () => ua.match(/x32|win32|aarch32/i),
		  	x64: () => ua.match(/x64|win64|aarch64/i),
		  	any: function () {
		  		return this.x32() || this.x64();
		  	}
		  }

	$id.innerHTML = `

	<ul>
		<li>${ua}</li>
		<li>Sistema Operativo: ${isMobile.any()||isDesktop.any()}</li>
		<li>Arquitectura: ${isArchitecture.any()}</li>
		<li>Navegador: ${isBrowser.any()}</li>
	</ul>

	`;
	
	if (isBrowser.chrome()) {
		$id.innerHTML += '<b> <mark>ESTO SOLO SE VE EN CHROME</mark> </b>';
	}
}

