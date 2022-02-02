//desclaracion de la clase
class Coche {

    constructor(modelo, nombre, velocidad, peso, frenada) {
        this.modelo = modelo;
        this.nombre = nombre;
        this.velocidad = velocidad;
        this.peso = peso;
        this.frenada = frenada;
        this.metros = 0;

    }
};


//instanciando corredores....


let coche1 = new Coche("Kart", "mario", 200, 2000, 50);
let coche2 = new Coche("Kart", "luigi", 195, 1990, 70);
let coche3 = new Coche("Kart", "wario", 230, 2300, 55);
let coche4 = new Coche("Kart", "waluigi", 200, 1950, 90);
let coche5 = new Coche("Kart", "peach", 200, 1900, 70);
let coche6 = new Coche("Kart", "estela", 200, 1900, 70);
let coche7 = new Coche("Kart", "bowser", 250, 2500, 55);
let coche8 = new Coche("Kart", "yoshi", 190, 1750, 90);

// Traductor/DICCIONARIO de JS

let allCars = {
    1: coche1,
    2: coche2,
    3: coche3,
    4: coche4,
    5: coche5,
    6: coche6,
    7: coche7,
    8: coche8,

};
//Generando variables basicas de entorno
let equipo1 = "";
let equipo2 = "";

let ganador = "";