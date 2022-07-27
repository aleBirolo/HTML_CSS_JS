
// JSON Persona
/*
var persona = {
    nombre : "miNombre",
    edad : 12345678,
    sexo: 'M',
    peso: '70',
    altura: '1.70',
};
*/
class Persona{
    nombre;
    edad;
    sexo;
    peso;
    altura;

    constructor( nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.sexo=sexo;
        this.altura=altura;
    }

    to_string() {
        var msj = `Nombre= ${this.nombre} \nEdad= ${this.edad}\nSexo= ${this.sexo}\nPeso= ${this.peso}\nAltura= ${this.altura.toFixed(2)}`;
        return msj;
    }
}

function iniciar(){
    var p1 = new Persona("miNombre", 25, "M", 80,1.80);

    alert(p1.to_string());
}