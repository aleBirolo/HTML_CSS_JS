class Persona{
    nombre;
    edad;
    sexo;
    peso;
    altura;

    constructor( nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo= sexo;
        this.peso = peso;
        this.altura=altura;
    }

    getNombre(){return this.nombre;}
    getEdad(){return this.edad;}
    getSexo(){return this.sexo;}
    getPeso(){return this.peso;}
    getAltura(){return this.altura;}
    
    to_string() {
        var msj = `Nombre= ${this.nombre} \nEdad= ${this.edad}\nSexo= ${this.sexo}\nPeso= ${this.peso}\nAltura= ${this.altura}`;
        return msj;
    }
}


function iniciar(  num ){
   var msj = '';
    var p1 = new Persona( document.getElementById('nombre').value,
                        document.getElementById('edad').value,
                        document.getElementById('sexo').value,
                        document.getElementById('peso').value,
                        document.getElementById('altura').value
                      );
    var perVec = [];

    perVec.push(p1.getNombre());
    perVec.push(p1.getEdad());
    perVec.push(p1.getSexo());
    perVec.push(p1.getPeso());
    perVec.push(p1.getAltura());

    alert(perVec);
    
}

