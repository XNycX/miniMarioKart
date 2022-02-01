const cambiaPantalla = (cambio) => {

    let pantallaDeseada = "pantalla" + cambio;

    let arrayPantallas = ["pantalla1","pantalla2","pantalla3","pantalla4"]; //aqui meteriamos todas las pantalla que queramos

    arrayPantallas = arrayPantallas.filter(valor => !pantallaDeseada.includes(valor));

    document.getElementById(pantallaDeseada).style.display = "block";

    for (let pantalla of arrayPantallas) {

        document.getElementById(pantalla).style.display = "none";
    }

}
