function iniciar(){
    var num=prompt("Ingrese un numero: ", "0");


    num = Math.round(num);

    if (num % 2 == 0 && num!=0)
        alert("El numero es par");
    else 
        if (num ==0)
            alert("El numero no es par ni impar");
        else
            alert("El numero es impar");
}