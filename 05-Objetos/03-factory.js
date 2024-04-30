/*let user = {
    id: 1,
    email: 'joseph@gmail.com',
    name: 'Joseph',
    activo: true,
    recuperarClave: function (){
        console.log('recuperando clave...');
    },
};*/

function crearUsuario(name, email){
    return {
        email, //email: email si tenemos una variable que ell nombre es exactamente igual que la propiedad la podemos quitar
        name,
        activo: true,
        recuperarClave: function (){
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Joseph', 'joseph@gmail.com');
let user2 = crearUsuario('Juan', 'Juan@gmail.com');

console.log(user1, user2);
