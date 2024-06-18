//Asignación de Lugares por Jugador
let LugaresA = ['0,0','0,1','0,3','0,4','1,0','3,1','3,2','4,2']
let LugaresB = ['1,1','1,3','1,4','2,0','2,1','3,4','4,3','4,4']
let LugaresC = ['3,0','4,0','4,1','0,2','1,2','2,3','2,4','3,3']
let Lugares = [LugaresA,LugaresB,LugaresC]
Lugares[Math.randomRange(0,2)].push('2,2')

const Juego = {
    disparos : {
    },
    JugadorA:{
        lugares:LugaresA,
        puntos:0
    },
    JugadorB: {
        lugares: LugaresB,
        puntos:0
    },
    JugadorC: {
        lugares: LugaresC,
        puntos:0
    }

}


basic.forever(function () {
    for (let j = 0; j < Lugares.length; j++) {
        for (let i = 0; i < Lugares[j].length; i++) {
            let x = parseInt(Lugares[j][i].split(',')[0])
            let y = parseInt(Lugares[j][i].split(',')[1])
            led.plot(x, y)
        }
        pause(500)
        basic.clearScreen()

    }
})
