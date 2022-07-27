function iniciar(){
    do
    {
        var car = prompt("Ingrese Operacion: ", "(S/R/M/D)");
    }while (car.length >=2);

    car = car.toLocaleUpperCase();

    var n1 = Number (prompt("ingrese el primer numero: ", "0"));
    var n2 = Number (prompt("ingrese el segundo numero: ", "0"));

    var resul =0;


    switch(car){
        case 'S':
            car = "Suma";
            resul = n1+n2;
            break;
        case 'R':
            car = "Resta";
            resul = n1-n2;
            break;
        case 'M':
            car = "Multiplicacion";
            resul = n1*n2;
            break;
        case 'D':
            car = "Division";
            if (n2==0)
                resul = "Error";
            else
                resul = n1/n2;
            break;
        default:
            alert("Error de sistema");
            break;
    }

    var msj= `El resultado de la ${car} es = ${resul}`;
    alert(msj);
}