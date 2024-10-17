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

// 3. NUMBER (Numeros)

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion ;

console.warn ("---- Tipo de Dato -NUMBER (Numeros,positivos,decimales,flotantes)")
console.log(`Tu saldo al dia de hoy es de : ${saldo_cuenta} ,(Tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta : ${costo_producto} (T)`)
cantidad =8;
console.log(`Has elegido comprar : ${cantidad} de productos .`)
console.log(`El importe total de la compra es : ${cantidad*costo_producto}`)


saldo_cuenta= saldo_cuenta -(cantidad*costo_producto);
console.log(`Tu saldo nuevo es de : ${saldo_cuenta}`);

//El cliente realiza un abono de 1500 

monto_transaccion=1500;
console.log (`Tu abono de : ${monto_transaccion} ha sido recibido , tu nuevo saldo es de : ${saldo_cuenta+monto_transaccion}`)


//4.- string (cadena de carcateres)

const alumno ="Jose Agustin Jimenez Castillo"
let producto ;

console.warn("-------Tipo de dato -String (Cadena de Carcacteres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo ed dato ${typeof (alumno)}`);

// inicializamos el valor de la variable producto

producto= "MONITOR 20\" FULL HD"
console.log(`El nombre del PRODUCTO es: ${producto}, que es un tipo de dato ${typeof(producto)}`);

//Manipulando los STRING
console.log(`Mas adelante podremos transformar el contenido de los STRING usando los metodos y funciones especificas , como convertir su valor 
    a mayusculas: ${alumno} => ${alumno.toUpperCase()}`);
    console.log(`O en su defecto a minusculas: ${producto} => ${producto.toLocaleLowerCase()}`);

// 5. BIGINT (Numero de Mayor Amplitud)

let numeroGrande = 1234567890
let numeroGrande2= 12345678901234567890
let numeroGrande3= 123456789012345678901234567890
let numeroGrande4= 1234567890123456789012345678901234567890

console.log(`El primer experimento de un numero grande es : ${numeroGrande},que si es soportado por NUMBER y su tipo de dato es ${(numeroGrande)}`)
console.log(`El segundo experimento de un numero grande es : ${numeroGrande2},que si es soportado por NUMBER y su tipo de dato es ${(numeroGrande2)}`)
console.log(`El tercer experimento de un numero grande es : ${numeroGrande3},que no es soportado por NUMBER perdiendo presicion y su tipo de dato es ${(numeroGrande3)}`)
console.log(`El cuarto experimento de un numero grande es : ${numeroGrande4},que no es soportado por NUMBER perdiendo presicion y su tipo de dato es ${(numeroGrande4)}`)

numeroGrande3 = BigInt("123456789012345678901234567890")
console.log(`El quinto experimento de un numero grande es : ${numeroGrande3},que ya fue convertido a BIGINT  y su tipo de dato es ${(numeroGrande3)}`)

numeroGrande4 = BigInt("1234567890123456789012345678901234567890")
console.log(`El SEXTO experimento de un numero grande es : ${numeroGrande4},que ya fue convertido a BIGINT  y su tipo de dato es ${(numeroGrande4)}`)

// se pueden realizar operaciones con bigint
const numero = 129 ;
console.log(`Intentado realizar la suma: numero + numeroGrande3 , el resultado es: ${BigInt(numero) + numeroGrande3}`)
