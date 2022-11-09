const d = document;
const w = window;

export default function go_up(btnUp){

const $goUp = d.querySelector(btnUp);

d.addEventListener("scroll", (e) => {
		if (scrollY > 500) {
			$goUp.classList.remove("hidden");
		}else {
			$goUp.classList.add("hidden");
			// $goUp.style.removeProperty('display'); // retira la propiedad
		}
		//console.log(scrollY,w.pageYOffset, d.documentElement.scrollTop);
	});

d.addEventListener("click", (e) => {
	
	if (e.target.matches(btnUp) || e.target.matches(`${btnUp} *`)) {
		scroll({
			top:0
		});
		// console.log(scrollY); la distancia del scroll
		
	}
});

}