const d = document,
      n = navigator,
      ng = n.geolocation;

export default function geolocation(geo){

    const $geo = d.getElementById(geo);

    // const $latitud = d.getElementById(latitud),
    //       $longitud = d.getElementById(longitud),
    //       $radio = d.getElementById(radio);

    const opciones = {
        enableHighAccuracy: true, // Alta precisión
        maximumAge: 0, // No queremos caché
        timeout: 5000 // Esperar solo 5 segundos
    };
    
    const success = (position) => {
    
        const crd = position.coords;

        $geo.innerHTML = `
            <ul>
                <li>Latitud: <b>${crd.latitude}</b> </li>
                <li>Longitud: <b>${crd.longitude}</b> </li>
                <li>Precision: <b>${crd.accuracy}</b> metros </li>
            </ul>
            <a href="https://www.google.com/maps/@${crd.latitude},${crd.longitude},20z" target="_blank" rel="noopener">Ver en google maps</a>
        `;
   
    }
    
    const error = (err) => {
    
       console.log(err);
        
    }

    ng.watchPosition(success,error,opciones);
    
}

