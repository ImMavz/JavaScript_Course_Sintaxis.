let user = {
    id: 1,
    name: 'Mario',
    age: 25
};

for (let prop in user){
    console.log(prop, user[prop]);
}

//Para acceder a un arreglo es mejor usa el for of y no el for in, por si hay codigo escrito asi.
let animales = ['Cerdito','dragon','canguro'];
for (let indice in animales){
    console.log(indice, animales[indice]);
}