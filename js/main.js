const cambiaPantalla = (cambio) => {

    let pantallaDeseada = "pantalla" + cambio;

    let arrayPantallas = ["pantalla1", "pantalla2", "pantalla3", "pantalla4"]; //aqui meteriamos todas las pantalla que queramos

    arrayPantallas = arrayPantallas.filter(valor => !pantallaDeseada.includes(valor));

    document.getElementById(pantallaDeseada).style.display = "block";

    for (let pantalla of arrayPantallas) {

        document.getElementById(pantalla).style.display = "none";
    }

}

const selectKart = (numeroCoche) => {

    if (equipo1 == "") {
        equipo1 = allCars[numeroCoche];
        let cochePrimero = document.getElementById(numeroCoche);

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
            verEstadisticas();
        }, 2500)

        comprobarEquipos();

        // setTimeout(() => {
        // }, )
    }


}

const verEstadisticas = () => {
    estadisticasEquipo1.innerHTML = `<div>Nombre: ${equipo1.nombre}<br>Velocidad: ${equipo1.velocidad}<br>Frenada: ${equipo1.frenada}</div>`;

    estadisticasEquipo2.innerHTML = `<div>Nombre: ${equipo2.nombre}<br>Velocidad: ${equipo2.velocidad}<br>Frenada: ${equipo2.frenada}</div>`;

}

//Algoritmo

let estadisticasEquipo1 = document.getElementById("estadisticas1")
let estadisticasEquipo2 = document.getElementById("estadisticas2")

let metrosGanar = 3000;

const acelerar = () => {
    equipo1.metros += Math.random() * (equipo1.velocidad - equipo1.frenada);
}

const comprobarEquipos = () => {
    console.log(equipo1)
    if ((equipo1 !== "") && (equipo2 !== "")) {
        let metrosRecorridos = window.setInterval(() => {
            setInterval(() => {
                equipo2.metros += Math.random() * (equipo2.velocidad - equipo2.frenada);
            }, 2000);
            if (equipo1.metros >= metrosGanar || equipo2.metros >= metrosGanar) {
                document.getElementById("botonResultado").style.display = "block";
                clearInterval(metrosRecorridos);
                if (equipo1.metros > equipo2.metros) {
                    document.getElementById('ganador').innerHTML += 'EL GANADOR ES ' + equipo1.nombre.toUpperCase();
                    document.getElementById("kartGanador").src = "img/" + equipo1.nombre + ".png";
                } else {
                    document.getElementById('ganador').innerHTML += 'EL GANADOR ES ' + equipo2.nombre.toUpperCase();
                    document.getElementById("kartGanador").src = "img/" + equipo2.nombre + ".png";
                }
            }
            document.getElementById("coche1").src = "img/" + equipo1.nombre + ".png";
            document.getElementById("coche2").src = "img/" + equipo2.nombre + ".png";
            document.getElementById('btnAcelerar').addEventListener('click', acelerar)
            document.getElementById("contadorCoche1").innerHTML = "Metros recorridos: " + equipo1.metros.toFixed(0);
            document.getElementById("contadorCoche2").innerHTML = "Metros recorridos: " + equipo2.metros.toFixed(0);
            barraMetrosJugador();
            barraMetrosCpu();
        }, 800)
    }
}


const cleanGame = () => {
    equipo1 = "";
    equipo2 = "";
    ganador = "";
    equipo1.metros = 0;
    equipo2.metros = 0;
    cambiaPantalla(1);
    document.getElementById("botonResultado").style.display = "none";
    location.reload();
}


const barraMetrosJugador = () => {
    if (equipo1.metros >= 800 & equipo1.metros < 2000) { //color de la vida entre 2000 y 800
        metrosJugadorDiv.style.backgroundColor = '#F7D530'
    } else if (equipo1.metros >= 2000) { //color de la vida de 800 a menos
        metrosJugadorDiv.style.backgroundColor = '#F96237'
        metrosJugador.style.color = 'white'
    }
    metrosJugador.innerHTML = equipo1.metros.toFixed(0)
    metrosJugadorDiv.style.width = (3000 - equipo1.metros.toFixed(0)) / 10 + 'px' //calculo de tamaño barra
    if (equipo1.metros >= 3000) {
        metrosJugadorDiv.style.width = 0 + 'px' //
    }
    document.getElementById("cocheJugador").src = "img/" + equipo1.nombre + ".png";
}

const barraMetrosCpu = () => {
    if (equipo2.metros >= 800 & equipo2.metros < 2000) { //color de la vida entre 2000 y 800
        metrosCpuDiv.style.backgroundColor = '#F7D530'
    } else if (equipo2.metros >= 2000) { //color de la vida de 800 a menos
        metrosCpuDiv.style.backgroundColor = '#F96237'
        metrosCpu.style.color = 'white'
    }
    if (equipo2.metros >= 3000) {
        metrosCpuDiv.style.width = 0 + 'px' //
    }
    metrosCpu.innerHTML = equipo2.metros.toFixed(0)
    metrosCpuDiv.style.width = (3000 - equipo2.metros.toFixed(0)) / 10 + 'px' //calculo de tamaño barra

    document.getElementById("cocheCPU").src = "img/" + equipo2.nombre + ".png";
}