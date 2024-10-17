// Repaso de Arreglos 
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalizacion de salida 
// Para declarar un aregllo (array)  de datos en Jav Script basta con agregar [] , y dentro que contendra el arreglo 
console.warn("Practica 06 : Arreglos en Java Script ")

const mesesAnio = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembree"]

// Estilizacion de los mensajes de salida 
console.log("%c1.- Declaracion  de un Arreglo (Array) ", style_console);

console.log(mesesAnio);
console.table(mesesAnio);

// Acceder a los valores de un arreglo de datos para acceder al valor solo basta enviar la posicion del dato que quereomos dentro de los limites establecidos . siendo el limite inferior 0 y el superior tamaño -1

console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);
console.log(`El primer mes del años es ${mesesAnio[0]}`);
console.log(`El ultimo mes del años es ${mesesAnio[mesesAnio.length-1]}`);
// Nose puede acceder a elementos con posicion negativa o posiciones superiores al tamaño del definido 
console.log(`El primer mes del años es ${mesesAnio[12]}`);
console.log(`El primer mes del años en la posicion-1 es:  ${mesesAnio[12]}`);
console.log(`¿Que tipo de dato es un arrglo?: ${typeof{mesesAnio}}`)

// Al ser JavaScript un lenguaje debilimente tipado podremos crear arreglos mixtos de tipos de datos 

let arregloMixto =["String",5,45.26,-200,-.16854, Symbol ("MARH"), 'z',false,BigInt(1111515455565611), true,{latitud:"20° 18' 0\" N" , longuitud:"97° 58' 00\"W" , altitud:796}]

console.log(arregloMixto)
console.table(typeof(arregloMixto));
console.log("Verificamos los tipos de datos de elemetos del arreglo: ")
console.log(`El dato en la posicion [0]= ${arregloMixto[0] } y es del tipo: ${(typeof(arregloMixto))}`);
console.log(`El dato en la posicion [1]= ${arregloMixto[1] } y es del tipo: ${(typeof(arregloMixto))}`);
console.log(`El dato en la posicion [2]= ${arregloMixto[2] } y es del tipo: ${(typeof(arregloMixto))}`);
console.log(`El dato en la posicion [3]= ${arregloMixto[3] } y es del tipo: ${(typeof(arregloMixto))}`);
console.log(`El dato en la posicion [4]= ${arregloMixto[4] } y es del tipo: ${(typeof(arregloMixto))}`);
console.log(`El dato en la posicion [5]= ${arregloMixto[5].toString } y es del tipo: ${(typeof(arregloMixto))}`);
console.log(`El dato en la posicion [6]= ${arregloMixto[6] } y es del tipo: ${(typeof(arregloMixto))}`);
console.log(`El dato en la posicion [7]= ${arregloMixto[7] } y es del tipo: ${(typeof(arregloMixto))}`);
console.log(`El dato en la posicion [8]= ${arregloMixto[8] } y es del tipo: ${(typeof(arregloMixto))}`);
console.log(`El dato en la posicion [9]= ${arregloMixto[9] } y es del tipo: ${(typeof(arregloMixto))}`);
console.log(`El dato en la posicion [10]= ${arregloMixto[10] } y es del tipo: ${(typeof(arregloMixto))}`);
console.log(`El dato en la posicion [11]= ${arregloMixto[11] } y es del tipo: ${(typeof(arregloMixto))}`);
console.log(`El dato en la posicion [12]= ${arregloMixto[12] } y es del tipo: ${(typeof(arregloMixto))}`);

console.log("%c3.- Arreglos Multidimecionales (Matrices) " , style_console ) ;

// Una matriz es una estructura de datos multidensionales (tabla)
let matriz =[[1,2,3,4],['a','b','c','d']]

// esta es una matriz regular de 4x4
console.log(matriz)
console.table(matriz)

console.log("Declaramos una matriz irregularr")
const matrizIrregular=[["Juan","Pedro","Maria","Ines"],[true,false,null],[9.2]]
console.log(matrizIrregular)
console.table(matrizIrregular)

// Accediendo a los valores de una matriz

console.log("Leyendo las propiedades de una Matriz Regular")
console.log(`Elemeto en la posicion [0][0]: ${matriz[0][0]}`)
console.log(`Elemeto en la posicion [0][0]: ${matriz[1][2]}`)


console.log("Leyendo las propoiedades de una matriz irregular")
console.log(`Elemeto en la posicion [0][0]: ${matrizIrregular[0][0]}`)
console.log(`Elemeto en la posicion [0][0]: ${matrizIrregular[2][0]}`)
console.log(`Elemeto en la posicion [0][0]: ${matrizIrregular[2]}`)



