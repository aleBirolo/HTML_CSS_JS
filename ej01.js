
function iniciar(){

    do
    {
        var rta = prompt ("Como esta el dia de hoy?", "(Soleado, Nublado, Lloviendo)");
    }while (rta != "Soleado" && rta!= "Nublado" && "rta!=Lloviendo");
    
    var msj = `El dia de hoy estas ${rta}`;
    
    alert(msj);


}

