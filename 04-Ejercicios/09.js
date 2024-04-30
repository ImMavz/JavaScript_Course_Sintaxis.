/**
 * crear algoritmo que devuelva un
 * array de objetos en base a pares
 */

let pares = [
    [1, {id: 1, name: "Nicolas"}],
    [2, {id: 2, name: "Felipe"}],
    [3, {id: 3, name: "Cristian"}],
];

let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Cristian',
}];



function toCollection(arr){
    let collection = [];
    for (idx in arr){
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0]
    }
    return collection;
}

let resultado = toCollection(pares);
console.log(resultado);