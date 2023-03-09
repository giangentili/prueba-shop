let carrito = [];


let botonCompra = document.querySelectorAll(".botonCompra");


function agregarToCarrito(e)
{
    let hijo = e.target;

    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;


    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector("span").textContent;
    let img_product = abuelo.querySelector("img").src;

    let producto = 
    {
        nombre : nombre_producto,
        precio : precio_producto,
        img: img_product,
        cantidad: 1
    }

    /*
    console.log(nombre_producto)
    console.log(precio_producto)
    console.log(img_product)
    */

    carrito.push(producto); // aca metemos todo el objeto de producto en el array


    // no agregar duplicados
    // calcular el total del carrito --> reduce
    // guardar los datos del carrito en el local storage
    console.log(carrito)

    let arreglo_Json = JSON.stringify(carrito);
    localStorage.setItem("carrito", arreglo_Json);
    mostrarCarrito();
}



for(let boton of botonCompra)
{
    boton.addEventListener("click", agregarToCarrito)
}

function mostrarCarrito()
{
    let tabla = document.getElementById("tbody");

    //let arreglo = localStorage.getItem("carrito");

   // arreglo = JSON.parse(arreglo);

    tabla.innerHTML = ""; //con esto limpiamos tabla

    for(let producto of carrito)
    {
        let fila = document.createElement("tr");

        fila.innerHTML = `
        <td><img src="${producto.img}"></td>
        <td><p>${producto.nombre}</p></td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio}</td>
        <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>

        `

        tabla.append(fila);    
    }

}

function borrarProducto(e)
{
    let abuelo = e.target.parentNode.parentNode;

    abuelo.remove();


    let btnCompra = document.querySelectorAll(".botonCompra");

    for(let boton of btnCompra)
    {
        boton.addEventListener("click",)
    }

}