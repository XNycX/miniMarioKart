//desclaracion de la clase
class Coche {

    constructor(modelo, marca, velocidad, peso, frenada) {
        this.modelo = modelo;
        this.marca = marca;
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
let coche5 = new Coche("Kart", "peach", 250, 2500, 50);
let coche6 = new Coche("Kart", "daisy", 200, 1900, 70);
let coche7 = new Coche("Kart", "bowser", 200, 1900, 55);
let coche8 = new Coche("Kart", "yoshi", 190, 1750, 90);

