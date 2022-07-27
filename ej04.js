function iniciar(){
    do
    {
        var car = prompt("Ingrese Caracter: ", "(Y/N)");
    }while (car.length >=2);

    car = car.toUpperCase();

    if (car=='Y' || car == 'N')
        alert("Correcto");
    else
        alert("incorrecto");
}