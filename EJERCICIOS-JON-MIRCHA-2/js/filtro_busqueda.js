const d = document,
      content = [];

export default function filtro_busqueda(input, selectores){
    let trued = 0, falsed = 0;
    const $input = d.querySelector(input),
          $selectores = d.querySelectorAll(selectores);
    $input.addEventListener('keyup', (e)=>{   //prsionar el enter para buscar si el listener es search
        if(e.target.matches(input)){

            $selectores.forEach((el)=>{

               el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? el.classList.remove('filter')
                : el.classList.add('filter') 
                
                // el.classList.contains('filter')
                //     ? trued = 0
                //     : trued++

                
            });

            // ($selectores.length >= trued)
            //     ? console.log("aun hay un selector visible")
            //     : console.log("no hay selectores visibles")
            
            
           

            // console.log(`SON VERDADEROS: ${trued} Y SON FALSOS ${falsed}`)
        }
       
    });
}