const user = { id: 1};

user.name = 'Nicolas';
user.guardar = function() {
    console.log('Guardando', user.name);
}
user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

//const = no podemos cambiar el valor a la variable.
//si el valor es un objeto si se le puede cambiar el valor a las propiedades.

//Object.freeze({}) No se puede cambiar nada al objeto.

//const user1 = Object.freeze({ id: 5}); //No cambia nada
const user1 = Object.seal({id: 4}); // NO deja agregar propiedad pero si deja cambiar un valor de una propiedad.
user1.name = 'Joseph';
user1.id = 10; 
console.log(user1);