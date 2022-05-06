const moment = require('moment');

let tiempoTrabajo = 1;
let tiempoDescanso = 1;
let descansoLargo = tiempoDescanso
let contadorDeciclo = 0;
let minutero = 1000;


const Pomodoro = () =>{
    
    console.log("Incio del Pomodoro", moment().format('HH:mm'),"cuenta",contadorDeciclo)
    let ensesion = setInterval(async () =>{

        console.log("termino pomodoro", moment().format('HH:mm'))    
        if(contadorDeciclo == 4){
            
            console.log("Inicio del descanso Largo", moment().format('HH:mm'))
            setTimeout(async () =>{
                
                console.log("fin del descanso largo", moment().format('HH:mm'))
                clearInterval(ensesion);
                
            },descansoLargo*minutero)


        }else if(tiempoDescanso){
            
            console.log("Inicio del descanso corto", moment().format('HH:mm'))
            setTimeout(async () =>{

                console.log("Finalizo el descanso corto", moment().format('HH:mm'))
                
            },tiempoDescanso*minutero) 


        }

        contadorDeciclo++;

    },tiempoTrabajo*minutero)
}


Pomodoro();

 