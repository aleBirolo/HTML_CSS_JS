function iniciar(){
    var rta = prompt("Ingrese algo: ");

    let esDeTipo = (v) => {return (typeof v);}

    alert( "El dato ingresado es de tipo: " + esDeTipo(rta));
}