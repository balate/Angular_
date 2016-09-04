/**
 * Created by balate on 4/9/16.
 */

function cuentaAtras(desde){

    //Notificamos al hilo principal
    postMessage(desde);

    //Comprobamos que la cuenta atras no ha llegado a 0;
    if(desde > 0){

        //decrementamos el valor de la cuenta atras
        desde -=1

        //Esperamos un segundo y lanzamos de nuevo la función
        setTimeout(function() {cuentaAtras(desde);},1000)
    }
}

//Iniciamos la cuenta atrás.
cuentaAtras(10);