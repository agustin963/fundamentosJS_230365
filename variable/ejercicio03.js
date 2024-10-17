// Repaso de Objetos

const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

console.warn("Practixca 05: Repaso de Objetos en Java Script");

console.log("%c1.- Variables Independientes ",style_console);

let producto_Nombre="Computadora  Gammer Laptop 17\"";
let producto_Marca="Asus";
let producto_Modelo="TUF 17";
let Producto_precio=15749.50;
let producto_Disponibilidad=true;
let producto_SKU=Symbol("TUF707VV-HX221W")
let producto_Stock=15;
let producto_Imagen= null;
let producto_Barcode;
let producto_Categorias=["Electronicos","Computación","Gamming","Promociones Buen Fin","Mejor Valorados"];


console.log(`Los datos del PRODUCTO son: \n 
    Nombre: ${producto_Nombre}, Tipo de dato <${typeof(producto_Nombre)}>
    Marca: ${producto_Marca}, Tipo de dato <${typeof(producto_Marca)}>
    Modelo: ${producto_Modelo}, Tipo de dato <${typeof(producto_Modelo)}>
    Precio: ${Producto_precio}, Tipo de dato <${typeof(Producto_precio)}>
    Disponibilidad: ${producto_Disponibilidad}, Tipo de dato <${typeof(producto_Disponibilidad)}>
    Stock: ${producto_Stock}, Tipo de dato <${typeof(producto_Stock)}>
    Barcode: ${producto_Barcode}, Tipo de dato <${typeof(producto_Barcode)}>
    Imagen: ${producto_Imagen}, Tipo de dato <${typeof(producto_Imagen)}>
    Categorias: ${producto_Categorias}, Tipo de dato <${typeof(producto_Categorias)}>`);


    console.log("En el caso del SKU al ser un Simbol, no se puede concatenar a la cadena de impresión anterior")
    console.log(producto_SKU);
    console.log(typeof(producto_SKU));

// ahora lo declaramos como un objeto
console.log("%c2.- Variables Independientes ",style_console);
    let producto= 
    {
        ID:3436,
        Nombre: "Tenis Deportivos",
        Marca: "Nke",
        Modelo: "Jodan ' 24",
        Precio: 3361.25,
        Disponiblidad: false,
        Stock: 0,
        SKU: "DZ5485-612",
        Imagen: "../Assets/Products/sneaker/JORDAN.png",
        Barcode: null,
        Categorias:["Deportes", "Tenis","Juvenil"]

    
    }

    // Ahora leemos el objeto 
    console.table(producto)

    // Para acceder a las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer.

    console.log("Accediendo a propiedades especificas del PRODUCTO")
    console.log(`Nombre Completo del PRODUCTO: ${producto.Nombre} ${producto.Marca} ${producto.Modelo} `)
    console.log(`Precio: ${producto.Precio}`)
    if(producto.Disponiblidad ==0)
    console.log(`Estatus: Agotado`)
    else
    console.log(`Estatus: ${producto_Stock} , Unidades disponibles`)


    console.log("%c3.- Destructuración de Objetos ",style_console);
    let producto2= 
    {
        ID: 2323,
        Clave: 316,
        Nombre: "Lentes para sol",
        Marca: "Oakley",
        Modelo: "QNTM Kato",
        Precio: 6829.00,
        Disponiblidad: true,
        Stock: 5,
        SKU: "OO9481D-03",
        Imagen: "../Assets/Products/sunglasses/katoRed.png",
        Barcode: 888392491626,
        Categorias:["Deportes", "Lentes","Accesorios"]

    
    }

    let Comprador=
    {
        Clave:3216,
        Nombre: "Agustin",
        Apellidos: "Jimenez Castillo ",
        Tipo: "Frecuente",
        Correo: "230365@utxicotepec.edu.mx",
        PaisOrigen: "México",
        SaldoActual: 14000.00
    }
    let Pedido=
    {
        ID:232121,
        Producto_Clave: 316,
        Comprador_Clave: 3216,
        Cantidad: 2,
        Estatus: "Carrito de compra",
        TipoPago : "Tajeta de credito"
    }

    // En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldos a favor 

    let { Precio: producto_precio2}=producto2;
    let {Cantidad:pedido_cantidad}=Pedido;
    let {SaldoActual:Cliente_SaldoActual}=Comprador;
    let Costo_compra=Producto_precio*pedido_cantidad;

    
    console.log(`El cliente ha agregado a su carrito de compras ${pedido_cantidad} unidades, con un costo total de: ${Costo_compra}`)
    if(Costo_compra<Cliente_SaldoActual)
        console.log("El cliente tiene saldo suficiente");

    // Actualizar el valor de los Objetos 
    console.log("%c4.- Actualizacion de los valores de las propiedades de un Objeto",style_console);

    console.log(`El objeto  actualmente tiene los siguientes valores `);
    console.log(JSON.stringify(producto2,null,2));
    //Convierte el objeto a una cadena para evitar problemas de referencia 
    console.log(`Por cuestiones de inflacion el costo del producto ha cambiado y debe de ser actualizado ... de $6829.00 a $6,915.00`);
    //Para podificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada 
    producto2.Precio=6915.00;
    console.log(`Los nuevos valores del producto son : `);
    console.log(producto2)

    // ¿Puedo cambiar no solo el valor ,sino  el tipo de dato a un Objeto en JavaScript?
    console.log(`---------------------------------------`)
    console.log(`El objeto  actualmente tiene los siguientes valores `);
    var tipoDisponibilidad =typeof(producto2.Disponiblidad)
    console.log(`El tipo de dato de la disponibilidad es : ${tipoDisponibilidad}`)
    console.log(JSON.stringify(producto2,null,2));
    producto2.Disponiblidad="SI";
    let nuevoTipoDisponibilidad = typeof(producto2.Disponiblidad)
    console.log(producto2)
    console.log(`El nuevo tipo de dato es : ${nuevoTipoDisponibilidad}`)



    // Agregar nuevas propiedades al Objeto 
    console.log("%c5.- Agregar nuevas propiedades al Objeto",style_console);
    // Para agregar una nueva propiedad utilizaremos el nombre del objeto los corchetes [] y el nuevo de la propiedad con su valor por defecto
    console.log("Los datos actuales del Comprador son :  ")
    console.table(Comprador)
    
    Comprador[`Direccion`] = "Del Reparo 118 , Xicotepec de Juarez , Puebla"
    Comprador[`Tipo`] = "NUEVO CLIENTE"
    Comprador[`Actividadreciente`]= true
    Comprador[`TotalCompras`] = 3516.25
    console.log("Despues de haber agregado las propiedadea Direccion,Tipo,Actividadreciente,TotalCompras...")
    console.table(Comprador)


    //Eliminar propiedades existentes de un Objeto
    console.log("%c6.- Eliminar propiedades existentes del Objeto ",style_console);
    console.log("La estructura y valores del Objeto PEDIDO son previos a la modificacion: ")
    console.table(Pedido)
    delete Pedido.TipoPago
    console.log("Despues de la modificacion")
    console.table(Pedido)

    console.log("%c7.- Metodos para controlar la mutabilidad de los Objetos , Congelacion (FREEZE) ",style_console);
    
    //si deseamos no permitir que los objetos sean modificados ni en estructura , ni en valor , utilizaremos el metodo FREEZE (congelar)
    console.log(`La estructura actual de los Objetos COMPRADOR es :`)
    console.table(Comprador)
    Object.freeze(Comprador)
    //Intentamos agregar , eliminar o modificar los valores de sus productos 
    Comprador.FechaUltimaCompra= "05/09/2024 10:15:25"
    delete Comprador.Tipo;
    Comprador.Direccion= "Calle 16 de Septiembre #102, Col. Manantiales,Huauchinango,Puebla,Mexico";
    console.log(`Verificamos si se realizaron los cambios en el Objeto COMPRADOR : `)
    console.table(Comprador)
    console.log("%c8.- Metodos para controlar la mutabilidad de los Objetos , Sellado (SEAL) ",style_console);
    //Sin embargo , en el caso que deseamos pódemos modificar los valores de las propiedades del Objeto . pero no su estructura , usaremos SEAL
    console.log("Objetos antes de ser modificados : ")
    console.table(Pedido)
    //Sellamos el objeto
    Object.seal(Pedido)
    //Intentemos modificar su estructura 
    Pedido[`FechaPedido`]="25/09/2024 11:05:03"
    delete Pedido [`Cantidad`]
    console.log(`Verificaremos si se reralizaron los cambios en el Objeto Pedido:`)
    console.table(Pedido)
    //Ahora intentamos modificar el valor de las propiedades 
    Pedido.Cantidad=5
    console.log(`Verificamos si se realizaron los cambios en el Objeto PEDIDO`)
    console.table(Pedido)


    //Desestructuracion de 2 o mas objetos 
    console.log("%c9. Desestructuracion de 2 o mas Objetis ",style_console);

    let {Precio : Productoprecio, Marca: productoMarca}= producto
    let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual:clientesaldo, Tipo: clienteTipo}= Comprador

    //Transformar valores cuantitativos en cualitativos 
    if(Productoprecio>2000)
    Productoprecio= "Caro"
    else
    Productoprecio ="Barato"

    if(clientesaldo >0)
    clientesaldo = "A favor"
    else if (clientesaldo <0)
    clientesaldo = "En contra"
    else
    clientesaldo ="Sin deuda"


    //Transformar valores cualitativos en cuatitativos 

    let clienteNivel;

    if(clienteTipo=="Premium")
    clienteNivel = 1
    if(clienteTipo= "Freemium")
    clienteNivel = 2
    if(clienteTipo =="No identificado")
    clienteNivel = 3


    //  Clasificamos al cliente por su pais Origen 

    if(clientePais =="Mexico")
    clientePais ="Nacional"
    else
    clientePais = "Extranjero"


    //OLE - OBJECT LITERAL ENNHACEMENT

    let datosClientePromociones = {clienteCorreo,clientePais,clienteNivel,clientesaldo,productoMarca,Productoprecio}

    //El nuevo objeto que creamos seria un ejemplo de la informacion que enviaremos al area de marketing para la difusion de promociones

    console.log("Los datos del cliente y sus habitps de compra son : ")
    console.table(datosClientePromociones)



    console.log("%c10.- Union de los Objetos usando el metodo de asignacion (ASSING) ",style_console);

    console.log("Imprimimos la estructura y valores del Objeto PRODUCTO");
    console.table(producto);
    console.log("Imprimimos la estructura y valores del Objeto PEDIDO");
    console.table(Pedido);

    //Suponiendo que el usuario ya realizo el pago el pedido se convertira en una VENTA que requiere la informacion de ambos objetos 

    const Venta = Object.assign(producto,Pedido);
    console.log("Consultamos este nuevo objeto VENTA ")
    console.table(Venta);



// Unión de Objetos usando SPREAD OPERATOR para evitar la perdida de información con objetos que comparten el mismo nombre en sus propiedades

console.log("%c11.- Unión de Objetos usando el SPREAD OPERATION (...)", style_console);


//Parchamos el error, reiniciando el valor del producto Id al original
//Producto.ID=100;

console.table(producto)
console.table(Comprador)
console.table(Pedido)

const Venta2 = 
{
    producto: {...producto},
    comprador:{...Comprador},
    pedido:{...Pedido}
}                 
console.log("Fusionamos los 3 objetos en uno nuevo, sin perdida de información")
console.log(Venta2)
console.table(Venta2)




console.log("%c12.- Mutabilidad POST Unión de Objetos", style_console);



// Vamos a verificar el estatus de mutabilidad de los obetos
console.log("Vamos a verificar el estatus de mutabilidad del objeto PEDIDO")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Pedido)}` );
console.log(`Esta el objeto de Pedido Sellado? : ${Object.isSealed(Pedido)}` );

console.log("Vamos a verificar el estatus de mutabilidad del objeto COMPRADOR")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Comprador)}` );
console.log(`Esta el objeto de Pedido Sellado? : ${Object.isSealed(Comprador)}` );

console.log("Vamos a verificar el estatus de mutabilidad del objeto PRODUCTO")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(producto)}` );
console.log(`Esta el objeto de Pedido Sellado? : ${Object.isSealed(producto)}` );

// Modificamos la estructura de producto, agregando una nueva propiedad
producto['isLegacy']=false;
console.table(producto)
console.log(Venta2);
