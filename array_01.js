var myArray = ["marca", 3, "palabra"];

console.log(myArray.length); // Da 3, tiene elementos.

console.log( myArray[0]);
// myArray[0] -> "marca"
// myArray[1] -> 3
// myArray[2] -> "palabra"
// myArray[myArray.lenght - 1] -> "palabra"
// myArray[myArray.lenght] -> Es undefined


console.log(Array.isArray(myArray));
console.log(Array.isArray(myArray[0]));

console.log(myArray.toString());

var otroArray = ["modelo", 2];

var arrayLargo = myArray.concat(otroArray);

console.log(arrayLargo);

console.log(arrayLargo.slice(0, arrayLargo.length));

console.log(arrayLargo.pop());