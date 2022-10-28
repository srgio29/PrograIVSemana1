let dispositivo = {
    nombre: "gateway",
    nSeire: 123456,
    valor: 1500,
    direccionIpv4:[192,168,10,5],
    estado:false,
    cambiarEstado: function(){
        this.estado=!this.estado,
        consoloe.log(`Estado cambio: ${this.estado}`)
    }

}

dispositivo,valor_2500
consolo.log(dispositivo)

dispositivo.cambiarEstado()
console.log(dispositivo.estado)

let numeroSeria = dispositivo.nSeire
let nombreDispositivo = dispositivo.nombre

console.log(numeroSeria,nombreDispositivo)

//Extraer informacion de un objeto
//Desctructuracion

let {nSeire,nombre} = dispositivo

console.log(nSeire,nombre)

let Equipo = {
    nombre: "Real Madrid",
    golesFavor: 1,
    golesEnContra: 3,

}

golesLocal
golesVisitantes


