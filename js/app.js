const productos= [
    {
        id: "accesorio-01",
        titulo: "Accesorio 01",
        imagen: "/img/Accesorio-01.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        precio: 1000
    },
    {
        id: "accesorio-02",
        titulo: "Accesorio 02",
        imagen: "/img/Accesorio-02.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        precio: 2000
    },
    {
        id: "accesorio-03",
        titulo: "Accesorio 03",
        imagen: "/img/Accesorio-03.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        precio: 3000
    },
    {
        id: "accesorio-04",
        titulo: "Accesorio 04",
        imagen: "/img/Accesorio-04.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        precio: 4000
    },
    {
        id: "accesorio-05",
        titulo: "Accesorio 05",
        imagen: "/img/Accesorio-05.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        precio: 5000
    },

    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "/img/Camiseta-01.png",
        categoria: {
            nombre: "Camiseta",
            id: "camisetas",
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "/img/Camiseta-02.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 2000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "/img/Camiseta-03.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 3000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "/img/Camiseta-04.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 4000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "/img/Camiseta-05.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 5000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "/img/Camiseta-06.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 6000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "/img/Camiseta-07.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 7000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "/img/Camiseta-08.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 8000
    },
    {
        id: "camiseta-09",
        titulo: "Camiseta 09",
        imagen: "/img/Camiseta-09.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 9000
    },
    {
        id: "camiseta-10",
        titulo: "Camiseta 10",
        imagen: "/img/Camiseta-10.png",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas",
        },
        precio: 10000
    },

    {
        id: "sudadera-01",
        titulo: "Sudadera 01",
        imagen: "/img/Sudadera-01.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 1000
    },
    {
        id: "sudadera-02",
        titulo: "Sudadera 02",
        imagen: "/img/Sudadera-02.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 2000
    }, 
    {
        id: "sudadera-03",
        titulo: "Sudadera 03",
        imagen: "/img/Sudadera-03.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 3000
    }, 
    {
        id: "sudadera-04",
        titulo: "Sudadera 04",
        imagen: "/img/Sudadera-04.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 4000
    },
     {
        id: "sudadera-05",
        titulo: "Sudadera 05",
        imagen: "/img/Sudadera-05.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 5000
    },
     {
        id: "sudadera-06",
        titulo: "Sudadera 06",
        imagen: "/img/Sudadera-06.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 6000
    },


];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");



function cargarProductos(productosElegidos){

contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto =>{
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `  
      <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
      <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
      </div>
    `;
    contenedorProductos.append(div);

  })
  actualizarBotonesAgregar();
}

cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click",(e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

       if (e.currentTarget.id != "todos"){
        const ProductosCategoria = productos.find (producto => producto.categoria.id === e.currentTarget.id)
        tituloPrincipal.innerText = ProductosCategoria.categoria.nombre;
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);}
        else {
            tituloPrincipal.innerText = "Todos los Productos";
            cargarProductos(productos);

        }
   
    })

});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton=> {
        boton.addEventListener("click", agregarAlCarrito);

    });
    
    
}
let productosEnCarrito;

let productosEnCarritoLS =localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLS){
     productosEnCarrito = JSON.parse(productosEnCarritoLS)  ;
    actualizarNumerito();
}
else{
    productosEnCarrito = [];
}



function agregarAlCarrito(e){
    
    const idBoton= e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

            if(productosEnCarrito.some(producto => producto.id === idBoton)) {
               const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
                productosEnCarrito[index].cantidad++;
            } else{
                productoAgregado.cantidad=1;
                productosEnCarrito.push(productoAgregado);
            }
            
            actualizarNumerito();

            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}






