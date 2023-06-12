function totalAPagar(cantTickets, porcentaje) {
  let totalCompra = cantTickets * 200;
  let resultado = totalCompra - (totalCompra * porcentaje) / 100;
  return resultado;
}

let comprarTicket = document.getElementsByClassName("comprarTicket");
let contenedorTicket = document.getElementById("contenedorTicket");
let presentacion = document.getElementById("presentacion");
let oradores = document.getElementById("oradores");
let fecha = document.getElementById("fecha-lugar");
let form = document.getElementById("form");

let cantTickets = document.getElementById("cantidad");
let porcentaje = document.getElementById("porcentaje");
let totalPagar = document.getElementById("totalPagar");

let formulario = document.getElementById("form-ticket");

for (compra of comprarTicket) {
  compra.addEventListener("click", () => {
    contenedorTicket.style.display = "block";
    presentacion.style.display = "none";
    oradores.style.display = "none";
    fecha.style.display = "none";
    form.style.display = "none";
  });
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  totalPagar.textContent = totalAPagar(cantTickets.value, porcentaje.value);
});

formulario.addEventListener("reset", () => {
  totalPagar.textContent = "";
});
