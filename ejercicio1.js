//Sistema prestamo de libros

// Funcion para crear el constructor de libros
function libro(titulo,autor,prestado)
{
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = prestado || false; // Por defecto, no está prestado

    // Método para prestar el libro
    this.prestar = function(){
        if (!this.prestado) {
           
            console.log("El libro '" + this.titulo + "' esta disponible para prestar.");
        } else {
            this.prestado = true;
            console.log("El libro está actualmente prestado.");
        }
    }
    
    };

libro1 = new libro("El Quijote", "Miguel de Cervantes",true);
libro1.prestar();// Prueba de prestar el libro
libro1 = new libro("El Quijote", "Miguel de Cervantes", false);
libro1.prestar();// Prueba de prestar el libro
