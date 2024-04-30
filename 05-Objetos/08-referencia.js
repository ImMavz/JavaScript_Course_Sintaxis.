/* let a = 1;
let b = a;
b++;
console.log(a, b); */

let a = {};
let b = a;

b.prop = 1;
console.log(a, b);

//el objeto se crea una dirección en la memoria ram

/* 
let c = 1;

function suma(n){
    n++
}
console.log(c) */

let d = { prop: 1};

function suma(n){
    n.prop++;

}
suma(d);
console.log(d);

//Primitivos => se copian
//Referencia => Se referencian (Objetos, array, funciones)