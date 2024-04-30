// Cuales son los numeros pares

let i = 0
while (i < 3){           //Evalua primero la condicion, si es true se ejecuta lo demas.
    if(i % 2 == 0){
        console.log('Numero par', i);
    }
    i++;
}

do {        //Primero se ejecuta el codigo y despues la condicion.
    if(i % 2 == 0){
        console.log('Numero par', i);
    }
    i++;

} while (i < 10)