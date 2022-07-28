function iniciar(flag){
 
    var cad = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    var newCad = cad;
    
    if (flag==0)
        return document.getElementById('textoLorem').innerHTML = cad;
    
    var palabra='';
    var letra;
    var i;

    for (i=0; i< cad.length ; i++){
        letra = cad.charAt(i);

        if (letra != ' ')
            palabra = palabra+letra;
        else
        {
            if (palabra.length >= 8)
                newCad = newCad.replace( palabra , "<mark>"+palabra+"</mark>"  );
            palabra='';
        }
    }
    
    return document.getElementById('textoLorem').innerHTML = newCad;
}
