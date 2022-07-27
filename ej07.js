function iniciar(){
    do
    {
        var num = prompt("Ingrese numero(Limite positivo): ", "1");
    }while(num<=0);

    var acum=0;

    do
    {
        acum+= parseInt(prompt("Ingrese un numero: ", "0"));
    }while(num>= acum);
}