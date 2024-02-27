//ACCESO
let usuario = "Matias";
let hashedPassword = "1234";
let check = "Buenos Aires";

let ingresouser, ingresopass, checkIngreso;
let intentos = 3;
let acceso = false;

for (let i = 0; i < intentos; i++) {
    ingresouser = prompt("Ingresa tu usuario (Matias)");
    ingresopass = prompt("Ingresa tu contraseña (1234)");
    checkIngreso = prompt("¿Cuál es la capital de Argentina? (Buenos Aires)");

    let isValidCredentials = ingresouser === usuario && validatePassword(ingresopass, hashedPassword);

    if (isValidCredentials && checkIngreso === check) {
        acceso = true;
        alert("Bienvenido " + usuario);
        break;
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo. Tienes " + (intentos - i - 1) + " intentos");
    }
}

if (!acceso) {
    alert("Acceso denegado. Has agotado todos los intentos.");
}


function validatePassword(inputPassword, storedHashedPassword) {
    return inputPassword === storedHashedPassword;
}

const carrito = [];

function Producto(id, tipo, stock, marca, precio) {
    this.id = id;
    this.tipo = tipo;
    this.stock = stock;
    this.marca = marca;
    this.precio = precio;
    this.mostrarInfo = function () {
        return `Tipo: ${this.tipo}, Stock: ${this.stock}, Marca: ${this.marca}, Precio: ${this.precio}`;
    };
    this.mostrarStock = function () {
        return this.stock;
    };
}



const listaProductos = [];


for (let i = 0; i < 1; i++) {
    const producto1 = new Producto("Auriculares Inalambricos", 1, "Sony", "$26500");
    const producto2 = new Producto("Conjunto Hombre", 2, "Adidas", "$65000");
    const producto3 = new Producto("Gorra Azul", 1, "LA", "$15000");
    const producto4 = new Producto("Perfume", 1, "Dolce Gabbana", "$50000");
    const producto5 = new Producto("Reloj", 4, "Tissot", "$230000");
    const producto6 = new Producto("Zapatillas", 2, "Adidas", "$105000");

    listaProductos.push(producto1, producto2, producto3, producto4, producto5, producto6);
}

console.log(listaProductos);


const productos = [
    {
        id: 1,
        nombre: "Auriculares Inalambricos",
        stock: 1,
        marca: "Sony",
        precio: 26500,
        img: "auriculares.jpg"
    },
    {
        id: 2,
        nombre: "Conjunto Hombre",
        stock: 2,
        marca: "Adidas",
        precio: 65000,
        img: "conjunto.jpg"
    },
    {
        id: 3,
        nombre: "Gorra Azul",
        stock: 1,
        marca: "LA",
        precio: 15000,
        img: "gorra.jpg"
    },
    {
        id: 4,
        nombre: "Perfume",
        stock: 1,
        marca: "Dolce Gabbana",
        precio: 50000,
        img: "perfume.jpg"
    },
    {
        id: 5,
        nombre: "Reloj",
        stock: 4,
        marca: "Tissot",
        precio: 230000,
        img: "reloj.jpg"
    },
    {
        id: 6,
        nombre: "Zapatillas",
        stock: 2,
        marca: "Adidas",
        precio: 105000,
        img: "zapatillas.jpg"
    },
]
console.log(productos.length);

 
function mostrarDatos(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }



}

mostrarDatos(productos)


//AGREGAR PRODUCTOS AL STOCK

function Producto(nombre, stock, marca, precio, img){
    this.nombre = nombre;
    this.stock = stock;
    this.marca = marca;
    this.precio = parseFloat (precio);
    if(img)
    {
        this.img = img;
    } else {
        this.img = "httpps://via.placeholder.com/300";
    }
}
console.log(productos);

//DE ESTA FORMA AGREGO PRODUCTOS
const newProducto = new Producto ("Reloj", 2, "swatch", 190000,"img.png")
productos.push(newProducto);


 