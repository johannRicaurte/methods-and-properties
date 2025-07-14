// Agregar Lista de compras

//funcion constructora

function lista(){
    this.productos = []; // Inicializar un array para almacenar los productos

    //Metodo para agregar metodos a la lista
    this.agregarProductos = function(producto)
    {
        this.productos.push(producto); // Agregar el producto al array
    }
    // Método para mostrar los productos en la lista
    this.mostrar = function (){
        for(let i = 0; i < this.productos.length; i++){
            console.log("Producto" + (i + 1) + " : " + this.productos[i]);
        }

    }


}

 let producto = " manzana";
  let producto2 = " Pera";
   let producto3 = " uva";
 let listaCompras = new lista();
    listaCompras.agregarProductos(producto); // Agregar un producto a la lista
    listaCompras.agregarProductos(producto2); // Agregar otro producto a la lista// Mostrar los productos en la lista nuevamente
    listaCompras.agregarProductos(producto3); // Agregar otro producto a la lista
    listaCompras.mostrar(); // Mostrar los productos en la lista nuevamente