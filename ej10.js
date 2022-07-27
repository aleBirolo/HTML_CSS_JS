function iniciar(){
    var palabra = prompt("Ingrese una frase: ", "Soy una frase");

    var vector=[];

    for (const key in palabra) {
        vector[key] = palabra[key] ;
    }

    // Funcion flecha
    let mostrarAlrevec = (vec) => {alert (vec.reverse());}

    mostrarAlrevec(vector);
}
