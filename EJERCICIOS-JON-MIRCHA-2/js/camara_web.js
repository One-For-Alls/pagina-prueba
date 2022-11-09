const d = document,
      n = navigator;
export default function camara(id, idAudio, idVideo){

    const limpiarSelect = elemento => {
        for (let x = elemento.options.length - 1; x >= 0; x--) {
            elemento.options.remove(x);
        }
    }

    const $video = d.getElementById(id),
          $dispoAudio = d.querySelector(idAudio),
          $dispoVideo = d.querySelector(idVideo),
         

     llenarLista = () => {
        navigator
            .mediaDevices
            .enumerateDevices()
            .then(dispositivos => {
                limpiarSelect($dispoAudio);
                limpiarSelect($dispoVideo);
                dispositivos.forEach((dispositivo, indice) => {
                    if (dispositivo.kind === "audioinput") {
                        const $opcion = document.createElement("option");
                        // Firefox no trae nada con label, que viva la privacidad
                        // y que muera la compatibilidad
                        $opcion.text = dispositivo.label || `Micrófono ${indice + 1}`;
                        $opcion.value = dispositivo.deviceId;
                        $dispoAudio.appendChild($opcion);
                    }else if (dispositivo.kind === "videoinput") {
                        const $opcion = document.createElement("option");
                        // Firefox no trae nada con label, que viva la privacidad
                        // y que muera la compatibilidad
                        $opcion.text = dispositivo.label || `Camara ${indice + 1}`;
                        $opcion.value = dispositivo.deviceId;
                        $dispoVideo.appendChild($opcion);
                    }
                })
            })
    };
  
    llenarLista();

    const constraints = { 
        audio:{
           deviceId: $dispoAudio.value
        },
        video:{
            deviceId: $dispoVideo.value
         }
        // {
        //     width: {exact:3700}, para dar la resolucion de pantalla   min, max, exact y ideal se usan
        //     height: {exact:400}
        //  }
};

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
           // console.log(stream);
            $video.srcObject = stream;
            console.log(n.mediaDevices.getUserMedia(constraints));
        })
        .catch((err) => {
            if (err.name === 'OverconstrainedError') {
                
                console.error(
                  `The resolution ${constraints.video.width.exact} x ${constraints.video.height.exact} px is not supported by your device.`
                );
              }else{
                $video.insertAdjacentHTML(
                    "beforebegin",
                    `<p>¡Sucedio un error! <mark>${err}</mark></p>`
                )
               // console.log(`Sucedio un error: ${err}`);
            }
            })

    }
}
