var add_item = document.getElementById("add_item"); //Boton añadir
var item = document.getElementById("inv"); //Muestrario con items

// String con html del item a agregar
var html_item = '';
// JSON a guardar
var plant = {
    "id": "",
    "date": "",
    "cont": {
        "html": "",
        "name": "",
        "cantidad": "",
        "precio": "",
        "info": [
            {"ventas": []},
            {"time": []}
        ]
    }
}

// funcion que hace que el string tenga un nombre y cantidad personalizada
function html() {
    html_item = '<div class="col-md-4"><div class="container mt-5"><div class="card" style="width: 18rem;"> <div class="card-body"> <h5 class="card-title">' + prompt("Nombre del producto") + '</h5> <h6 class="card-subtitle mb-2 text-muted">Cantidad disponible: ' + prompt("Cantidad") + '</h6> <a href="#" class="card-link">Reponer</a> <a href="#" class="card-link">Graficos</a> </div></div></div></div>';
}

// Evento click
add_item.addEventListener('click', () => {
    html();
    item.innerHTML += html_item; //Añade html al ya existente
    // Lo guarda en el JSON
    plant.cont.html = html_item;
    // Crea un id para el JSON
    plant.id = chance.guid();
    // El nombre se asigna con una i mas la cantidad de objetos actual inicia en 0
    // y lo guanda en el local storage
    Lockr.set("i" + localStorage.length, plant);
});