const d = document,
	  w = window;

export default function responsiveTester(idForm) {
	
	const $idForm = d.getElementById(idForm);
	let ventana;

	d.addEventListener("submit", (e) => {

		if (e.target === $idForm) {
			console.log(e.target);
			e.preventDefault();
			console.log($idForm.input_link.value);
			 ventana = w.open(`${$idForm.input_link.value}`,"tester", `innerWidth=${$idForm.input_width.value}, innerHeight=${$idForm.input_high.value}`);

		}

	});

	d.addEventListener("click", (e) => {

		if (e.target === ($idForm.outTest)) {
			console.log(e.target);
			ventana.close();
		}
	})

}
