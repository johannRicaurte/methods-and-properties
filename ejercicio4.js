//carrito de compras con descuentos
  // Función constructora para crear un carrito de compras
function Carrito() {
    this.productos = []; // Inicializar un array para almacenar los productos
    this.total = 0; // Inicializar el total del carrito

    // Método para agregar productos al carrito
    this.agregarProducto = function(producto, precio) {
        this.productos.push({ nombre: producto, precio: precio });
        this.total += precio; // Sumar el precio del producto al total
        console.log("Producto agregado: " + producto + " - Precio: $" + precio);
    }

    // Método para aplicar un descuento al total
    this.aplicarDescuento = function() {
        if (this.total > 0 && this.total <= 100) {
            let descuento = 10; // Descuento del 10%
            let descuentoAplicado = (this.total * descuento) / 100;
            this.total -= descuentoAplicado;
            console.log("Descuento aplicado: " + descuento + "% - Total después del descuento: $" + this.total.toFixed(2));
        } else if(this.total >= 100 && this.total < 50) {
            let descuento = 5; // Descuento del 5%
            let descuentoAplicado = (this.total * descuento) / 100;
            this.total -= descuentoAplicado;
            console.log("Descuento aplicado: " + descuento + "% - Total después del descuento: $" + this.total.toFixed(2));

        }
        else {
            console.log("Descuento no válido.");
            console.log("Total sin descuento: $" + this.total.toFixed(2));
        }
    }


}

// Crear una instancia del carrito de compras
let miCarrito = new Carrito();
// Agregar productos al carrito
miCarrito.agregarProducto("Manzana", 30);
miCarrito.agregarProducto("Pera", 20);
miCarrito.agregarProducto("Uva", 50);
// Aplicar descuento al total del carrito
miCarrito.aplicarDescuento(); // Aplicar descuento si corresponde

