function iniciar(){
    
    var valores = [true, 5, false, "hola", "adios", 2];
    var maxString = 0;
    var tamString = 0;
    var elem;

    alert ("El vector es: " + valores);

    valores.forEach(el=>{
        if (  typeof(el).valueOf() == "string" ){
            tamString = el.length;
            if (maxString == 0){
                maxString=tamString;
                elem=el;
            }
            else
                if(tamString > maxString){
                    maxString=tamString;
                    elem=el;
                }
            
        }
    });
    
    var msj=`La Cadena ("${elem}") es la cadena de mayor tamaño. Tiene (${maxString}) caractere/s`;
    alert(msj);

}