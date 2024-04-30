const punto = {
    x: 10,
    y: 15,
    dibujar(){
        console.log('dibujando');
    }
}
//delete punto.dibujar;
if ('dibujar' in punto){

    punto.dibujar();
}

console.log(Object.keys(punto));
//Esto es una forma vieja de hacerlo, para listar las propiedades de un objeto si no se conocen.
for (let llave of Object.keys(punto)){      //Se puede usar OF para un array
    console.log(llave, punto[llave]);
}
//Propiedades de un objecto cuando no se conocen sus propiedades.
for (let entry of Object.entries(punto)){       //Métodos estáticos.

    console.log(entry);
}      
//Forma relativamente nueva de listar propiedades de un objeto cuando no se conocen.s
for (let llave in punto){
    console.log((llave, punto[llave]));
}
