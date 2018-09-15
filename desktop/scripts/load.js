var muestra = document.getElementById("inv"); //Muestrario con items

// Ciclo por cada objeto en el local storage
for (var i = 0; i < localStorage.length; i++) {
    // Obtiene el valor del dato correspondiente con i
    var obj = Lockr.get("i" + i)
    // Lo dibuja en el html
    muestra.innerHTML += obj.cont.html;
}