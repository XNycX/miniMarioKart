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

        comprobarEquipos();


    }


}
//Algoritmo



let metrosGanar = 3000;

const acelerar = () => {
    equipo1.metros += Math.random() * (200 - 50) + 50;
}

const comprobarEquipos = () => {
    if ((equipo1 !== "") && (equipo2 !== "")) {
        let metrosRecorridos = window.setInterval(() => {
            setInterval(() => {
                equipo2.metros += Math.random() * (200 - 50) + 50;
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
    location.reload();
    document.getElementById("botonResultado").style.display = "none";
    
}