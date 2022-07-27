function iniciar(){
     var palabra = prompt("Ingrese frase: ", "Soy una frase");
     var newPalabra='';


     for (const key in palabra) {
          newPalabra += palabra[key] + " ";
     }

     alert(newPalabra);
}
