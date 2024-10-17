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


// funciones y metodos de arreglos
//Los metodos de un objeto siempre son invocados usandpo un . y al termino se delimitan los parametros entre (), en caso de que no lleve () , no es un metodo si no una propiedad


console.log("%c4.- Funciones o metods de los Arreglos (Array Methos or ) ", style_console)
console.log("¿Como saber cual es el tamaño de un arreglo?")
console.log(`meses es un arreglo de tamaño: ${arregloMixto.length}`)
console.log("mmmmm, eso me da el tamaño de numero de filas de la matriz, pero no como saber el numero de columbas ")
console.log(`La matriz regular tiene un numero de ${matriz[0].length}`)
console.log(" Y para los irregulares?")
// Para saber la dimencion de una matriz irregular 

console.log(`La longuitud de la fila 0 es : `)
console.log(`La longuitud de la fila 1 es :`)
console.log(`La longuitud de la fila 2 es :`)

let estudiantes = ["Angel rufino","Idai Vega","Daniel Bravo","Esther Gonzales","Ailton Artiaga"]
console.log("%c5.- Agregar un nuevo elemento a un arregllo (PUSH) ", style_console)
console.log("Los elemetos actuales del arreglo son:")
console.table(estudiantes)
console.log("Agregamos un nuevo estudiante llamado: Abril Guzamn ")
estudiantes.push("Abril Guzman")
console.log("Despues de agregarla los elemtos de los arreglos se ve asi ")
console.table(estudiantes)
console.log("Que pasa con los mistos?")
console.log("El arreglo mixto actualmente tiene los sigueintes datos")
console.table(arregloMixto)
console.log("Agregamos la palabra\Hola\, como nuevo elemento")
arregloMixto.push("Hola")
console.log("Y tambien agregamos el numero -325454542343434323.23234332 siendo este un BigInt")
arregloMixto.push(-325454542343434323.23234332)
console.table(arregloMixto)

console.log("%c6.- Agregar un nuevo elemto a un arreglo (UNSHIFT)  en la posicion inicial  ", style_console)
console.table(estudiantes)
console.log("Ahora agregamos a Abishai Flores al comienzo del arreglo . ")
console.log("La lista actual es")
estudiantes.unshift("Abishai Flores")
console.table(estudiantes)

console.log("%c7.- Eliminar el elemto de un arreglo en la ultima  posicion (POP)   ", style_console)
console.log("El arreglo tiene los siguientes elemtos")
console.table(estudiantes)
console.log("Para este caso eliminamos a AbriL Guzman  en la ultima posicion")
estudiantes.pop();
console.log("Despues de eliminar el elemto el arreglo queda de la siguiente manera:")
console.table(estudiantes)

console.log("%c8.- Eliminar el elemto de un arreglo en la PRIMERA  posicion (SHIFT)   ", style_console)
console.log("El arreglo tiene los siguientes elemtos")
console.table(estudiantes)
console.log("Para este caso eliminamos a Abishai Flores en la ultima posicion")
estudiantes.shift();
console.log("Despues de eliminar el elemto el arreglo queda de la siguiente manera:")
console.table(estudiantes)

console.log("%c9.-Modificar un arreglo en un arreglo nuevo con posiciones definidas (SPLICIE) ", style_console)
console.log("El arreglo original tiene los siguientes elemetos ")
console.table(estudiantes)
console.log("Dividir el arreglo en uno nuevo eliminado ciertos elemtos en base a su posicion")
// Cuando la funcion splice recibe un solo parametro eliminara los elemtos de esta posicion en adelante

estudiantes.splice(2)
console.table(estudiantes)
// Cuando la funcion splice recibe 2 parametros elimina todos lo elementos arreglos que no estenten el rango
estudiantes.push("Zyanya Zacatenco");
estudiantes.push("Tania Ibarra");
estudiantes.push("Juvenal Viveros");
estudiantes.push("Marcos Rios ");
estudiantes.push("Jhonathan Baldemar");
console.log("Se agregaron 5 nuevos estudiantes , por lo que el arrgelo es:")
console.table(estudiantes)
console.log("Ahora ya tenemos los elemtos suficientes para aplicar el metodo splice con dos parametros que seran 3,5")
estudiantes.splice(3,5)
console.log(" El resultado en:")
console.table(estudiantes);

console.log(" Ahora vamos a insetar a \"Antonio Ocpaco \" en los elemtos de la posicion 0 y 1  " )
estudiantes.splice(1,0,"Antonio Ocpaco");
console.log("Resultando en :")
console.table(estudiantes);

// TAMBIEN SPLICE SIRVE PARA REEMPLAZAR ELEMTOS POR OTROS
console.log(" Ahora vamos a reemplazar  a \"Angel Rufino\" en los elemtos de la posicion por  \"Brandon Leon\"  " )
estudiantes.splice(0,1,"Brandon Leon");
console.log("Resultando en :")
console.table(estudiantes);

console.log("%c10.- Metodos para la manipulacion de Arreglos INMUTABLES", style_console)
let signosZodiacales = ["Aries","Tauro","Geminis","Cancer","Leo","Virgo","Libar","Escorpio","Sagitario","Capricarnio","Acuario","Picis"]
// Destructuracion de Arreglos
 
let [signo1,,signo3,,,,signo7,,,,,,] = signosZodiacales
console.log(`El primer signo zodiacal es: ${signo1}`)
console.log(`El tercero signo zodiacal es: ${signo3}`)
console.log(`El septimo signo zodiacal es: ${signo7}`)
//console.log(`El primer signo zodiacal es: ${signo4}`)

//Congelamos el arreglo volviendolo inmutable 
Object.freeze(signosZodiacales)


// Filtrado de datos 
console.log("%c11.- Filtrado de elemeto dentro de un arreglo utilizando el metodo FILTER", style_console)
console.table(estudiantes);

// antes de filtrar datos llenemos el arreglo con 10 elemetos 

estudiantes.push("Angel Rufino");
estudiantes.push("Estger Gonzales");
estudiantes.push("Lorena Galindo");
estudiantes.push("Jonathan Ramirez");
estudiantes.push("Ailton Artiaga ");
estudiantes.push("Tania Ibarra");
console.table(estudiantes);

// Filter es un metodo que recorre los elementos de un arreglo haciendo alguna tarea en especifico , lo que tenemos que considerar
// es que este nuevo arreglo resultante es un objeto que puede ser mutable

console.log("Filtrando los primeros 5 elementos")
let nuevoEstudiante = estudiantes.filter((estudiante,index) => index<5);
console.table(nuevoEstudiante); 


//console.table(listaFiltrada(estudiantes));


//intentamos modificar el arreglo inmutable

//estudiantes.pop();
//console.table(estudiantes);

//Filtrar a los estudiantes que en su nombre tengan mas de 15 caracteres 

let nuevoEstudiantes = estudiantes.filter((estudiante) => estudiante.length>15);



//Intentamos modificar el nuevo arreglo que no ha sido completado
nuevoEstudiante.unshift("Diego Tecorralco");
console.table(nuevoEstudiante);

function filtraPrimeros5(estudiantes){
    let listaFiltrada =[]
      for(let i=0; i<5 ; i++)
      {
         listaFiltrada.push(estudiantes[i]);


      }
      return listaFiltrada;

}

//Filtrado de dato - Transformando los datos
console.log("%c12.- Filtrado de elemnto dentro de un arreglo utilizando el metodo MAP, en el que necesitamos transformalo", style_console);
console.log("Imprimimos los elementos actuales de signosZodiacales:")
console.log(signosZodiacales);
// Que podemos hacer si necesitamos el mismo arreglo pero ahora con todos sus elementos con letra Mayuscula

console.table(signosZodiacales.map(signoZodiacal=> signoZodiacal.toUpperCase()));

//Reduccion de elementos de un arreglo, se usa cuando debemos hacer operaciones matematicas o cuantitativa a un arreglo, como optener totales , la idea es reducir la lista a un valor mas simplificado 
const costosListaCompras =[15,52,50,16.90,32.50,28,105,42.2,94.10]
//Como podemos calcular el total de una lista de costos de un carrito de compras 
console.log("Los precios son:")
console.table(costosListaCompras)
console.log(`El totaal de la comprar es. ${costosListaCompras.reduce((total,precio)=> total+precio,0).toFixed(2)}`)





