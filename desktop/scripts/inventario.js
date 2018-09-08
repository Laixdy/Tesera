var add_item = document.getElementById("add_item"); //Boton añadir
var item = document.getElementById("inv"); //Muestrario con items
// String con html del item a agregar
var html_item = "<div class=\"col-md-4\"></div>"

var html_itemx = '<div class="col-md-4"><div class="card" style="width: 18rem;"> <div class="card-body"> <h5 class="card-title">Card title</h5> <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p><a href="#" class="card-link">Card link</a> <a href="#" class="card-link">Another link</a> </div></div></div>';

// Evento click
add_item.addEventListener('click', () => {
    item.innerHTML += html_itemx;
    alert("objeto añadido")
});