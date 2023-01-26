const shopContent = document.getElementById("lista-hamburguesas");
const verCarrito = document.getElementById("verCarrito");
const container = document.getElementById("carrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "descripcion bg-propio col col-12 col-sm-6 col-md-4 col-lg-3 p-3 border border-warning border-1"
    content.innerHTML = `
    <h3>${product.nombre}</h3>
    <p>${product.precio}$</p>
    <img class="ham" src="${product.img}">
     `;
    shopContent.append(content);
    let comprar = document.createElement("button");
    comprar.className = "comprar"
    comprar.innerHTML=`AÑADIR AL CARRITO`
    content.append(comprar);

    comprar.addEventListener("click", () =>{

    const repeat = carrito.some ((repeatProduct) => repeatProduct.id === product.id);

    if(repeat){
        carrito.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad++;
            }
        })
    }else{carrito.push({
            id : product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
        saveLocal();
    }
        console.log(carrito);
    });

});



