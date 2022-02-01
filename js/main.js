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
        
        cochePrimero.disabled = true;  
        cochePrimero.classList.add("kartSelected")
        
    } else if (equipo2 == "") {
        equipo2 = allCars[numeroCoche];
        let cocheSegundo = document.getElementById(numeroCoche)
        cocheSegundo.disabled = true;
        cocheSegundo.classList.add("kartSelected")

        //una vez he escogido los dos coches.....

        setTimeout(() => {
            cambiaPantalla(3);
        }, 2500)
    }


}
