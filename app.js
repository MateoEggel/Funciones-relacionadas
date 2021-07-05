

//Calcular precio IVA
//Nombre de producto
//Precio
//IVA
//Precio mas iva
//Total


let comunicado = alert("Esto es un calculador de precio final");

let nombreProducto = prompt("Ingrese nombre del producto");
let precio = parseInt(prompt ("Ingrese precio sin iva"));

const calculador = (precio) => {return precio*0.21};

alert(`El precio final de ${nombreProducto} es de $${calculador(precio)+precio}`)