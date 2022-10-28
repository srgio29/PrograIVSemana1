// Comentar una linea

/* 
Abre un comentario

Cierro el comentario 
*/

/* 
Lenguahes de programacion tipados> Java, C++, C
integer
string
boolean

Lenguaje de programacion no tipado> javascript
Superset TypeScript

let: declara la variable en su entorno local
var: Declara la variable en un entorno global
const: Es una variable estatica o fija


this. 

*/


const NUMERODIAS =5;

//NUMERODIA = 10;
console.log(NUMERODIAS)

let NOMBRE='Pedro';
console.log(NOMBRE)
NOMBRE='Luis'
console.log(NOMBRE)
if(true){
    let NOMBRE='Juan';
    
}
console.log(NOMBRE)


edad=14
console.log(edad);



var saludo='Hola';

console.log(saludo)

function saludar(){
    /// this.nombre se defionio para entorno global
    this.nombre='Sergio';
    console.log(this.nombre)
    //nombre se definio para entorno individual, dentro de esta funcion
    let nombre='Daniel';
    console.log(this.nombre,nombre)

}

saludar(saludo)

