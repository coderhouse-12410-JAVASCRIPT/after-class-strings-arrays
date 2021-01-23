// ES5 compatible
function MyItem(argNombre) {
    this.nombre = argNombre;
}

// ES6 compatible
class MyItem2 {
    nombre;
    
    constructor(argNombre){
        this.nombre = argNombre;
    }
}

var miCarrito = [];

const itemsCarrito = 5;
// Llenamos datos... podria venir un backend
for (let index = 0; index < itemsCarrito; index++) {
    const element = new MyItem("ITemNumero" + index);
    miCarrito.push(element);
}

console.log(miCarrito);
var miLista = document.getElementById('myList');

for (let index = 0; index < itemsCarrito; index++) {
    var myItemList = document.createElement("li");

    var myItem = miCarrito[index];

    myItemList.appendChild(document.createTextNode(myItem.nombre));

    miLista.appendChild(myItemList);
}






