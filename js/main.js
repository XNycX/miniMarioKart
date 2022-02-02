
const cleanGame = () => {
    equipo1 = "";
    equipo2 = "";
    ganador = "";
}


const cambiaPantalla = (cambio) => {

    let pantallaDeseada = "pantalla" + cambio;

    let arrayPantallas = ["pantalla1","pantalla2","pantalla3","pantalla4"]; //aqui meteriamos todas las pantalla que queramos

    arrayPantallas = arrayPantallas.filter(valor => !pantallaDeseada.includes(valor));

    document.getElementById(pantallaDeseada).style.display = "block";

    for (let pantalla of arrayPantallas) {

        document.getElementById(pantalla).style.display = "none";
    }

}

const selectKart = (numeroCoche) => {

    if(equipo1 == "") {
        equipo1 = allCars[numeroCoche];
        let cochePrimero = document.getElementById(numeroCoche)
        //una vez he escogido el coche, invalido el img para que nadie haga onclick sobre él
        
        cochePrimero.onclick = ""   
        cochePrimero.classList.add("kartSelected")
        
    } else if (equipo2 == "") {
        equipo2 = allCars[numeroCoche];
        let cocheSegundo = document.getElementById(numeroCoche)
        cocheSegundo.onclick = "" 
        cocheSegundo.classList.add("kartSelected")

        //una vez he escogido los dos coches.....

        setTimeout(() => {
            cambiaPantalla(3);
        }, 2500)
        
        comprobarEquipos()

    }


}
//Algoritmo

let metrosEquipo1 = 0;
let metrosEquipo2 = 0;
let metrosGanar = 3000;


function comprobarEquipos() {
    
    if ((equipo1 !== "") && (equipo2 !== "")){
        let metrosRecorridos = window.setInterval(function () {
            metrosEquipo1 += Math.random() * (200 - 50) + 50;
            metrosEquipo2 += Math.random() * (200 - 50) + 50;
            if (metrosEquipo1 >= metrosGanar || metrosEquipo2 >= metrosGanar) {
                document.getElementById("botonResultado").style.display = "block";
                clearInterval(metrosRecorridos);
                if (metrosEquipo1 > metrosEquipo2) {
                    console.log(document.getElementById("kartGanador").src = "img/" + equipo1.marca + ".png")
                    document.getElementById("kartGanador").src = "img/" + equipo1.marca + ".png";
                }
                else {
                    console.log(equipo2)
                    document.getElementById("kartGanador").src = "img/" + equipo2.marca + ".png";
                }
            }
            document.getElementById("coche1").src = "img/" + equipo1.marca + ".png";
            document.getElementById("coche2").src = "img/" + equipo2.marca + ".png";
            document.getElementById("contadorCoche1").innerHTML = "Metros recorridos: " + metrosEquipo1.toFixed(2);
            document.getElementById("contadorCoche2").innerHTML = "Metros recorridos: " + metrosEquipo2.toFixed(2);
        }, 1000)
    
    }
}
