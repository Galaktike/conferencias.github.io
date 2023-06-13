function totalAPagar(cantTickets, porcentaje) {
  let totalCompra = cantTickets * 200;
  let resultado = totalCompra - (totalCompra * porcentaje) / 100;
  return resultado;
}

let cantTickets = document.getElementById("cantidad");
let porcentaje = document.getElementById("porcentaje");
let totalPagar = document.getElementById("totalPagar");

let formulario = document.getElementById("form-ticket");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  totalPagar.textContent = totalAPagar(cantTickets.value, porcentaje.value);
});

formulario.addEventListener("reset", () => {
  totalPagar.textContent = "";
});
