let edadObligatoria = 18;
let edadNoPermitida = 17;
let usuario = "Matias";
let pass = "1234";

let edadUsuario = parseInt(prompt("¿Eres mayor de edad?"));

if (edadUsuario >= 18) {
    alert("Bienvenidos a La Boutique");
} else {
    alert("Está prohibido el consumo de alcohol para menores de 18 años");
}

let ingresouser = prompt("Ingresa tu usuario");
let ingresopass = prompt("Ingresa tu contraseña");
let check = "Buenos Aires";
let checkIngreso = prompt("¿Cuál es la capital de Argentina?");
let credenciales = ingresouser === usuario && ingresopass === pass;

let intentos = 3;
let acceso = false;

for (let i = 0; i < intentos; i++) {
    if (credenciales && checkIngreso === check) {
        acceso = true;
        alert("Bienvenido " + usuario);
        break; // Exit the loop if credentials are correct
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo. Tienes " + (intentos - i - 1) + " intentos");
        ingresouser = prompt("Ingresa tu usuario");
        ingresopass = prompt("Ingresa tu contraseña");
        checkIngreso = prompt("¿Cuál es la capital de Argentina?");
        credenciales = ingresouser === usuario && ingresopass === pass;
    }
}

if (!acceso) {
    alert("Acceso denegado. Has agotado todos los intentos.");
}