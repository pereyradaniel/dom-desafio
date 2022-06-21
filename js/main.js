let total = 0;
let cantidad = 0;
let fecha = new Date();

// array productos
const productos = [
  { id: 1, producto: "LECHE", precio: 100, stock: 50 },
  { id: 2, producto: "YERBA", precio: 450, stock: 50 },
  { id: 3, producto: "AGUA", precio: 80, stock: 50 },
]


// funcion buscar
function buscarProd() {
  let buscar = prompt("Ingrese Producto a Buscar").toUpperCase();
  const resultado = productos.find((p) => p.producto === buscar);
  if (resultado == undefined) {
    alert("El producto no existe");
  } else {
    alert(
      "Se encontró " +
        resultado.producto +
        " El precio es de $" +
        resultado.precio
    );
  }
}

// //funcion filter
function filtrar(){
let ingresoPrecio = prompt("Ingrese menor que")
const menorQue = productos.filter((e) => {return e.precio < ingresoPrecio});

console.log(menorQue);
}

// funcion calcular precio de unidades
function CalcularIva(subTotal) {
  ivaInc = subTotal * 1.21;
  return ivaInc;
}

// funcion registrar pedido
function registrarPedido() {
  cantidad = parseInt(prompt("Ingrese Cantidad"));
  if (cantidad <= productos[pedido - 1].stock) {
  
    productos[pedido - 1].stock = productos[pedido - 1].stock - cantidad;
    let subTotal = productos[pedido - 1].precio * cantidad;
    CalcularIva(subTotal);

    total = total + ivaInc;let listPedido = productos[pedido - 1];
    const nuevoProducto = document.createElement("li")
    nuevoProducto.innerText = `${listPedido.producto} Unidades: ${cantidad} Precio $${subTotal}`;
    root.append(nuevoProducto);

  } else {
    alert(
      "No tenemos esa cantidad en stcok. Stock disponible " +
        productos[pedido - 1].stock
    );
      }
}

// Clase clientes
class Clientes {
  constructor(nombre, edad) {
    (this.nombre = nombre), (this.edad = edad);
  }
}

//Función de registro de cliente
function registroCliente() {
  nombre = prompt("Ingrese su Nombre");
  edad = prompt("Ingrese su Edad");
  clientenuevo = new Clientes(nombre, edad);
  const title = document.getElementById("title")
  console.log(title.innerText)
  title.innerText = "Hola "+nombre+" este es tu pedido";
}

// Llamo a la funcion registro cliente
registroCliente();

let pedido = parseInt(
  prompt("Ingrese su Pedido\n1.Leche\n2.Yerba\n3Agua\n4.Salir\n5.Buscar\n6.Menor que")
);
while (pedido != 4) {
  switch (pedido) {
    case 1:
      registrarPedido();
      break;
    case 2:
      registrarPedido();
      break;
    case 3:
      registrarPedido();
      break;
    case 4:
      registrarPedido();
      break;
    case 5:
      buscarProd();
      break;
      case 6:
     filtrar();
        break;
     default:
      alert("No se reconoce la opción");
      break;
  }
  pedido = parseInt(
    prompt("Ingrese su Pedido\n1.Leche\n2.Yerba\n3Agua\n4.Salir\n5.Buscar\n6.Menor que")
  );
}
const sumaTotal = document.createElement("p")
sumaTotal.innerText=`Su gasto total con IVA es de $${total}\nFecha de Entrega ${fecha.toLocaleDateString()}`;
root.append(sumaTotal);