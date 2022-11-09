const d = document,
	  ls = localStorage;

export default function darKMode(btn,darkTheme){

	const $btnDark = d.querySelector(btn),
		  $selectores = d.querySelectorAll("[data-dark]");
		//  console.log($selectores)

let moon = '🌙',
	sun = '☀️';

	const  modoClaro = () => {
		$selectores.forEach(el => el.classList.remove(darkTheme));
		$btnDark.textContent = moon;
		$btnDark.style.setProperty('background-color','var(--second-color)');
		ls.setItem("theme","light");
	}

	const modoOscuro = () => {
		$selectores.forEach(el => el.classList.add(darkTheme));
		$btnDark.style.setProperty('background-color','var(--main-color)');
		$btnDark.textContent = sun;
		ls.setItem("theme","dark");
	}

	d.addEventListener("click",(e) => {

		if (e.target.matches(btn)) {

			if ($btnDark.textContent === moon) {
				 modoOscuro();
			}else {
				modoClaro();
			}

		}

	});

	if (ls.getItem('theme') === null) {
		ls.setItem('theme','light');
	}

	if (ls.getItem('theme') === 'light') {
		modoClaro();
	}

	if (ls.getItem('theme')  === 'dark') {
		modoOscuro();
	}

}