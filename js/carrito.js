    const pintarCarrito = () => {
    container.innerHTML = "";
    container.style.display = "flex";
    const carritoHeader = document.createElement("div");
    carritoHeader.className = "carritoHeader"
    carritoHeader.innerHTML =`
    <h3>CARRITO</h3>
    `;
    container.append(carritoHeader);
    
    const carritoButton = document.createElement("h3");
    carritoButton.className= "carritoHeader"
    carritoButton.innerText="X";
    carritoButton.addEventListener("click", () =>{
        container.style.display = "none";
    });
    
    carritoHeader.append(carritoButton);
    
        carrito.forEach((product) => {
            let carritoContent = document.createElement("div");
            carritoContent.className = "carritoEstilo"
            carritoContent.innerHTML = `
            <img class="imagenCarrito" src="${product.img}">
            <h3 class="letraCarrito">${product.nombre}</h3>
            <p class="letraCarrito">${product.precio}$</p>
            <p class="letraCarrito">${product.cantidad}</p>
            <p class="letraCarrito">Total: ${product.cantidad * product.precio}</p>
             
            `;
        
            container.append(carritoContent);

            let eliminar = document.createElement("span");
            eliminar.innerHTML = "X";
            eliminar.className = "letraCarrito";
            carritoContent.append(eliminar);

            eliminar.addEventListener("click", eliminarProducto);

    
        }); 
    
    const total = carrito.reduce((acc,el) => acc + el.precio * el.cantidad, 0);
    
    const totalCompra = document.createElement("div");
    totalCompra.innerHTML = `TOTAL A PAGAR: ${total}$`;
    container.append(totalCompra);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundID = carrito.find((element) => element.id);

    carrito = carrito.filter ((carritoId) => {
        return carritoId !== foundID;
    }); 

    pintarCarrito ();
};


const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));  
}

JSON.parse(localStorage.getItem("carrito"));