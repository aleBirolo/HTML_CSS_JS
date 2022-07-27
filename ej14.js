class Libro{
    isbn;
    titulo;
    autor;
    nroPag;

    constructor( isbn, titulo, autor, nroPag){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor=autor;
        this.nroPag = nroPag;
    }

    to_string() {
        var msj = `ISBN= ${this.isbn}\nTitulo= ${this.titulo}\nAutor= ${this.autor}\nNumero de Paginas= ${this.nroPag}`;
        return msj;
    }
}

function iniciar(){
    
    var p1 = new Libro( document.getElementById('isbn').value,
                        document.getElementById('titulo').value,
                        document.getElementById('autor').value,
                        document.getElementById('nroPag').value
                      );
    
    alert(p1.to_string() );
 
}

