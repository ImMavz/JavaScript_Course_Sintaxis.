// short-circuit 


//Valores falsos:
/*
false
0
''
null
undefined
NaN
*/

let nombre = 'Cerdito feliz'
let username = nombre || 'anonimo';
console.log(username);         //Ejecutar funciones siempre y cuando una sea True

function fn1(){
    console.log('soy funcion 1');
    return false;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();
