function iniciar(){
    do
    {
        var rta = prompt("Ingrese el valor del radio de una circunferencia: ");
        if (rta<=0)
            alert("Opcion invalida");
    }while (rta <=0);

    var msj= `Area = ${ (Math.PI * rta**2).toFixed(2) }
    Perimetro = ${ (2 * Math.PI * rta).toFixed(2) }`;

    alert(msj);
}