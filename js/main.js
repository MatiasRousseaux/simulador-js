let edadObligatoria = 18;
let edadNoPermitida= 17;

let edadUsuario = parseInt (prompt ("¿Eres mayor de edad?"));

if(edadUsuario >= 18){
    alert("Bienvenidos a La Boutique");
} else(edadUsuario <18); {
    alert("Esta prohibido el consumo de alcohol para menores de 18 años");
}


let usuario = "Matias"
let pass = "1234"

let ingresouser = prompt ("Ingresa tu usuario");
let ingresopass = prompt ("Ingresa tu password");
let check = "Buenos Aires";
let checkIngreso = prompt("¿Cual es la Capital de Argentina?");
let credenciales = ingresouser == usuario && ingresopass == pass;

if(credenciales && checkIngreso == check)
{ 
    alert ("Bienvenidos"+ " " + usuario);
} else {
    alert ("Usuario incorrecto. Por favor, intente de nuevo");
}