const d = document;


export default function sorteo(id_selector,id_padre,btn_sorteo){
  const lugares =[],
        $btn_sorteo = d.getElementById(btn_sorteo);
  let contador = 0;
    const get_winner = (id_selector) => {

        const $players = d.querySelectorAll(id_selector),
              $padre = d.querySelector(id_padre),
              random = Math.floor(Math.random()*$players.length),
              winner = $players[random];
              
                $padre.removeChild(winner);
                contador++; 
                lugares.push(winner.textContent);

              return lugares;  
              
    }

    d.addEventListener('click', (e)=>{
        if(e.target.matches(`#${btn_sorteo}`)){

            let ganador = get_winner(id_selector);
            d.querySelector('.primero').textContent = `1 ST: ${(ganador[0]) ? ganador[0] : 'esperando ganadores...'}`;
            d.querySelector('.segundo').textContent = `2 ST: ${(ganador[1]) ? ganador[1] : 'esperando ganadores...'}`;
            d.querySelector('.tercero').textContent = `3 ST: ${(ganador[2]) ? ganador[2] : 'esperando ganadores...'}`;
            console.log(d.querySelector('#ganadores'));

            if(contador === 3){
              $btn_sorteo.setAttribute('disabled','true');      
            }
            console.log(lugares);         
        }
    });
}









// mi metodo

// export default function sorteo(id,btn){
//     const $lista = d.getElementById(id),
//           participantes = ['Anthony','Isabel','Eliza','Sonia','Roberto','Katy','Ali','Gabrielito','Elsa','Christian'];

//           participantes.forEach(el => {
//             const lista = d.createElement('ul');
//                 lista.innerHTML = `
//                 <li>${el}</li>
//                 `;
//                 $lista.appendChild(lista);
//           });

//           d.addEventListener('click',(e) =>{
//             // console.log(e.target.matches(btn));
//             if(e.target.matches(btn)){
//                 const winner = Math.floor(Math.random()*participantes.length);

//                 alert(`El ganador es: ${participantes[winner]}`)
//             }
//           });
    
// }