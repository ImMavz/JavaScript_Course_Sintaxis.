let animales = ['cerdito', 'caballo'];
console.log(animales);
console.log(animales[0]);
animales[2] = 'dragon';

animales[10] = 'pez' //Nos deja 7 espacios vacios
console.log(animales[7]) //Nos devuelve undefined pq no hay nada
console.log(typeof animales) //objeto
console.log(animales.length) //longitud del array
