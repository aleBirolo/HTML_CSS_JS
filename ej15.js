class Circulo{
    radio;
    area;
    perimetro;

    constructor( radio){
        if (radio <=0){
            this.radio = 1;
            this.area = 1 ;
            this.perimetro= 1;
        }
        else{
        this.radio = Number (radio);
        this.area = this.calcularArea() ;
        this.perimetro= this.calcularPerimetro();
        }
    }

    calcularArea(){
        return Math.PI * this.radio**2;
    }

    calcularPerimetro(){
        return 2 * Math.PI * this.radio;
    }

    to_string() {
        var msj= `Radio = ${(this.radio).toFixed(2)}
        Area = ${ (this.area).toFixed(2) }
        Perimetro = ${(this.perimetro).toFixed(2) }`;

        return msj;
    }
}

function iniciar(){

    do
    {
        var rta = Number(prompt("Ingrese el valor del radio de una circunferencia: "));
        if (rta<=0)
            alert("Opcion invalida");
    }while (rta <=0);

    var c1 = new Circulo(rta);

    alert(c1.to_string());
}