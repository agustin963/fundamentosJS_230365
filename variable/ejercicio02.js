//Tipos de datos en JS

//1.Underfined
let cliente;

console.warn("---Tipo de Dato UNDEFIED ---")

console.log(`El cliente : ${cliente}`)
console.log(`El tipo de dato de la variable cliente es  ${typeof(cliente)}`);
cliente ="Juan Romero"
console.log(`El cliente : ${cliente}`)
console.log(`El tipo de dato de la variable cliente es  ${typeof(cliente)}`);
cliente=209901
console.log(`El cliente : ${cliente}`)

console.log(`El tipo de dato de la variable cliente es  ${typeof(cliente)}`);




//Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas
//2.BOOLEAN - Bolaneos - TRUE/FLASE (falso/verdadero)
console.warn("----Tipo de dato BOOLEAN (BOLEANO -TRUE-FALSE")
let esPremium = "No lo se";
console.log(`¿Es un cliente premium ? ${esPremium}`);
console.log(`El tipo de dato de la variable es Premium es  ${typeof(esPremium)}`);

console.log("asiganando el valor  \"true\" a la variables")
esPremium= "true";
console.log(`el tipo de dato de la variable esPremiun es : ${typeof(esPremium)}`)

console.log(`Es un cliente premium ${esPremium}`);
console.log(`El tipo de dato de la variable es Premium es  ${typeof(esPremium)}`);
console.log(`Es un cliente premium ${esPremium}`);
if(esPremium)
    console.log("Es un cliente pago por usar el servicio");
else
console.log("Es un usuario que recibe los servicios gratuitos ");
