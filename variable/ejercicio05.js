//Repaso de Ciclos y Sentencias de Control

//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199,10,36,1) 0%, rgba(129,25,26,1) 33%, rgba(201,10,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalizacion de salida de consola
console.warn("Practica 07: Arreglos en Java Script");


console.log("%c1.- Si/Entonces ... (IF)",  style_console);
//Le indica al programa que hacer o que no hacer en base a una prueba de lógica de verdadero o falso 
let fechaActual = new Date();

// let fechaActual = new Date(2024,6,5);
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

//¡Y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }
);
console.log(`En formato local (México): ${fechaLocalMX}`);

//Si es antes de las doce saluda con un "Buenos días"

if(fechaActual.getHours()<12)//Si solo tiene una instrucción no es necesario colocar llaves
    console.log(`Buenos días, hoy es: ${fechaLocalMX}`);

    //Existe unextensor de la sentencia if(sí) que es else (en caso contrario)
    if(fechaActual.getMonth()<=6)
        console.log(`Estas en la primera mitad del año.`);
    else
    console.log(`Estas en la segunda mitad del año.`)


// Que pasa si la validación tiene varias operaciones

const anio = fechaActual.getFullYear();
let inicioPrimavera = new Date(anio,2,21);
let inicioVerano = new Date(anio,5,21);
let inicioOtonio = new Date(anio,8,23);
let inicioInvierno = new Date(anio,11,21);
let estacion;

let horarioVerano=false;
if(fechaActual >=inicioPrimavera && fechaActual< inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la floracion de muchas plantas...")
    console.log("Los dias son mas largos y las noches masss cortas..")
    console.log("Muchos animales despiertan de la hibernacion ...")
    console.log()
    estacion="Primavera"
    horarioVerano=true;
}else if(fechaActual >= inicioOtonio && fechaActual<inicioInvierno){

    console.log("Estamos en OTOÑO...")
    console.log("Los arboles suelen cambiar de follaje ...")
    console.log("Se registan temperaturas mas templadas ...")
    console.log("Los animales comienza con la recoleccion de alimento y preparan sus espacios para la hibernacion, incluso algunas aves migran   ...")
    console.log()
    estacion="Otoño"
    horarioVerano=true;


}else {
    console.log("Estamos en INVIERNO...")
    console.log("En esta temporada los dias son mas cortos y las noches mas largas .....")
    console.log("En algunas regiones suelen nevar  ...")
    console.log("Dada las bajas temperaturas   ...")
    console.log()
    estacion="Verano"
    horarioVerano=true;

}


console.log("%c2.- Operador Ternario (Validacion : cumple:no_cumple", style_console);
//En java Script existe una operacion simplificada que valida si una condicion se cumple o no , y que hacer en cada caso 

const edadPersona=18;
const mayoriaEdadMX=18;
const mayoriaEdadUS= 21;
 let evaluarMayoriaEdad= (edad) =>
edad >=18 ? "Eres mayor de edad .": "No eres mayor de edad"
console.log("Evaluando la mayoria de edad de una persona ")
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar   que la mayoria de edad varia en cada pais por cuestiones legales , por lo que debemos considerar un segundo parametro de validacion 
evaluarMayoriaEdad=(edad,pais)=> 
(edad=18 && pais ==="MX")? `En ${pais} eres mayor de edad`:`En ${pais} NO eres mayor de edad `;
console.log("Eres mayor de edad ")
console.log("Evaluando la mayoria de edad de una persona en Mexico ")
console.log(evaluarMayoriaEdad(edadPersona , "MX"));
console.log("Evaluando la mayoria de edad de una persona en Estados Unidos  ")
console.log(evaluarMayoriaEdad(edadPersona , "US"));




console.log("%c2.- SWITCH - CASE (Eleccion por valor definifo )", style_console);

//Calculando tu generacion en base a tu edad 
let anioNacimiento =2003;
let asignaGeneracion = (anioNacimiento)=>{
switch(true)
{
case (anioNacimiento<1968)://Baby boomers
    return " Generacion Baby boomers"; 
    
    case (anioNacimiento>1968 && anioNacimiento <=1980):
        return "Generacion X";

    case(anioNacimiento >1980 && anioNacimiento <=1994):
    return "Generacion Millenials";

    case(anioNacimiento >1994 && anioNacimiento <=2010):
    return "Generacion Centenials  ";
    case(anioNacimiento >2010):
    return "Krystal";
     
}
}

console.log(`Dado que nacvio en el año 2005 soy de la generacion ${asignaGeneracion(2005)}`)

console.log("%c4.-Manejoo de Exepciones (TRY / CATCH)" ,style_console);

//En algunas ocasiones existiran errores que no son culpa del programa , si no del usuario , la red, el so o incluso de un middleware , pero que si duda debemos de controlar para evitar las fallas de ejecucion
console.log("Intentamos dividir : 0/10 , el resultado es : ")
try{  // Intenta 
let result = 0/10; //Dividir un entero entre cero
console.log(result)
}
catch(error)
{
    console.log("Ocurrio un eror:  "+ error.message);
}
console.log("Intentamos dividir : 0/10 , el resultado es : ")
try{  // Intenta 
let result = 10/0; //Dividir un entero entre cero
console.log(result)
}
catch(error)
{
    console.log("Ocurrio un eror:  "+ error.message);
}
console.log("Intentamos dividir : a/10 el resultado es ")
try{  // Intenta 
    let result = "a"/0; //Dividir una letra  entre cero
    console.log(result)
    }
    catch(error)
    {
        console.log("Ocurrio un eror:  "+ error.message);
    }
    console.log("Intentamos dividir la variable a  : a/10 el resultado es ")
    try{  // Intenta 
        let result = a/0; //Intentamos 
        console.log(result)
        }
        catch(error)
        {
            console.log("Ocurrio un eror:  "+ error.message);
        }


        console.log("Intentamos dividir :el valor de la variable x / entre el valor de la variable y, el resultado es ")
    try{  // Intenta 
        let  = x=8, y=2 , result=x/y; //Intentamos 
        console.log(result)
        }
        catch(error)
        {
            console.log("Ocurrio un eror:  "+ error.message);
        }
        console.log("%c5. Control de Ciclos  (BREAK / CONTINUA) " ,style_console);

        //En algunas ocasiones sera importante detener un ciclo der manera abrupta para controlar casos especiales en un ciclo...

        console.log("Vamos a contarde 1 al 10...")
        for(let num =1;num<=10;num++){
            console.log(num)
        }

        console.log("Ahorita necesitamos que si llegas al 7 pares de contar ... suponiendo que solo por hoy es de mala suerte ..")
        
        for( num =1;num<=10;num++)
            if(num==7)
                break;
        else
            console.log(num);

            console.log("Ahorita necesitamos que si llegas al 7 te saltes ese numero y continues")
        
        for( num =1;num<=10;num++)
            if(num==7)
                continue;
        else
            console.log(num);
         

            console.log("%c6.- Ciclo Iterativo - (FOR) ", style_console)

            // Recorre de manera iterativo (i), de incremental o decremental 

            console.log("Los dias de la semana son  de orden ascendente son :")
    let dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

    for(let i=0;i<dias.length-1;i++){
        console.log(dias[i])
    }

    console.log("Ahora vamos a imprimir con los meses en orden descendente")
    const meses= ["Enero","Febrero","Narzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    for(let i=11;i>=0;i--){
        console.log(meses[i])
    }

    console.log("%c7.- Ciclo Condicionales - (WHILE)",style_console);
    //Estos ciclos (BUCKLE) dependen de una condicion para continuar ejecutandose 
    let finDeSemana = false;
    let mensaje = "";
    let j=0;
    while(j<7){
        
        
        switch(dias[j]){
            case 0: 
            finDeSemana = true;
            mensaje = "Mormingoooooo..... ZzZzZzZzZZZZZzzzzzzz"
            break;
            case 1:
                finDeSemana = false;
                mensaje ="San Lunes a chambiar ..."
                break;
                case 2: 
                finDeSemana = false;
                mensaje ="Segundo dia de chamba a darle..."
                break;
                case 3: 
                finDeSemana = false;
                mensaje ="Ya meroooo el miercoles si se puede "
                break;
                case 4: 
                finDeSemana = false
                mensaje =" Ya jueveees que hueva vdd? pero si se puede "
                break;
                case 5: 
                finDeSemana = false
                mensaje = "Vierneeeeeees  si se pudo , recuerda eres lo que comes "
                break;
                case 6: 
                finDeSemana = true;
                mensaje ="Por fin , fin de semanaaaaaaa si se pudo "
                break;
        }
        console.log(`Dia ${j} ${dias[j]}`)
        console.log(`Mensaje del dia : ${mensaje[j]}`)
        j++;


    }




