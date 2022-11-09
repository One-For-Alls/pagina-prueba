export default function burgerMenu(btnMenu, panel, menuLink){
	const d = document;
	// console.log(btnMenu, panel);

	d.addEventListener("click",e =>{
		if (e.target.matches(`${btnMenu} *`) || e.target.matches(`${btnMenu}`)) {
			d.querySelector(panel).classList.toggle("is-active");
			d.querySelector(btnMenu).classList.toggle("is-active");
		}
	});

	d.addEventListener("click", (e) => {
		if (e.target.matches(menuLink)) {
			d.querySelector(panel).classList.remove("is-active");
			d.querySelector(btnMenu).classList.remove("is-active");
		}
	});
}