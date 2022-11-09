const d = document;

export default function carrusel(play){
    const $prev = d.querySelector('.btns-slider .prev'),
          $next = d.querySelector('.btns-slider .next'),
          $slide = d.querySelectorAll('.slider-slide'),
          $play = d.querySelector('.btns-controls .play'),
          $stop = d.querySelector('.btns-controls .stop');

let i = 0;

const previous = () =>{
    $slide[i].classList.remove('active');
    i--;

    if(i < 0){
        i = $slide.length-1;
    }
    $slide[i].classList.add('active');
    //console.log($slide[i]);
}

const next = () =>{
    $slide[i].classList.remove('active');
    i++;

    if(i >= $slide.length){
        i = 0;
    }
    $slide[i].classList.add('active');
}

let idInterval;

const autoplay = () =>{   //si lo ejecuto directamente como setinterval sale el autoplay automatico sin botones

    if(!idInterval){  // pregunto si 
        idInterval = setInterval(() => {
            previous();  
        },1500);
    }

}     

const stop = () =>{
    clearInterval(idInterval);
    idInterval = null;
}

    d.addEventListener('click', (e)=>{
        console.log(e.target.matches('#prev'));
        if(e.target === $prev){
            e.preventDefault();
            previous();
        }

        if(e.target === $next){
            e.preventDefault();
           next();
        }

        if(e.target === $play){
            e.preventDefault();
            autoplay();
            $prev.style.setProperty('pointer-events','none');
            $next.style.setProperty('pointer-events','none');
        }

        if(e.target === $stop){
            e.preventDefault();
            stop();
            $prev.style.removeProperty('pointer-events');
            $next.style.removeProperty('pointer-events');
        }

    });
}
