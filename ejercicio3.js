// Ejercicio reporductor de musica

// Función constructora para crear una lista de reproducción
function Reproductor() {
    this.estado = "detenido" || "Reproduciendo" || "Pausado"; // Estado inicial del reproductor
    
    // Método para reproducir una canción
    this.play = function(){
        if(this.estado === "detenido" || this.estado === "Pausado") {
            this.estado = " Reproduciendo música...";
            console.log("Reproduciendo la canción.");
        } else if (this.estado === "Reproduciendo") {
            console.log("La canción ya está reproduciéndose.");
        }
    }

    // Método para pausar la canción
    this.pause = function(){
        if(this.estado === "Reproduciendo") {
            this.estado = "Pausado";
            console.log("La canción ha sido pausada.");
        } else  {
            console.log("La canción ya está pausada.");
      
    }
    }

    // Método para detener la canción
    this.detener= function(){
        if(this.estado === "Reproduciendo" || this.estado === "Pausado") {
            this.estado = "detenido";
            console.log("La canción ha sido detenida.");
        } 
    }
}
