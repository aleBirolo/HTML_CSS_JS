function iniciar(){
    var acum=0;
    var lista=[];

    do
    {
        var num = parseInt ( prompt("Ingrese numero: (0:Salir)", "1") );
        lista.push(parseInt (num));
        acum+=num;
    }while(num!=0);

    lista.splice( lista.length -1 ,true);
    lista.sort();

    if (lista.length != 0)
    {
        var msj = 
        `Maximo = ${lista[lista.length - 1]} \nMinimo = ${lista[0]} \nPromedio = ${(acum / lista.length).toFixed(2)}`;

        alert(msj);
    }
    else
        alert("Sin datos");
}