function iniciar(){
    do
    {
        var edad = prompt("ingrese edad: ");

        if (edad >= 18)
            alert("Sos Mayor de edad");
    }while (edad<=0);
}