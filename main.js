const numberInput = document.getElementById("number-input");
const submitInput = document.getElementById("submit-input");
const form = document.getElementById("form");
const container = document.getElementById("container-cards");

const Pizzas = [
  {
    nombre: "Pizza Diavola🍕",
    id: 1,
    ingredientes: ["Muzza", "Oregano", "Tomate", "Salame"],
    precio: "1290",
  },

  {
    nombre: "Fugazza🍕",
    id: 2,
    ingredientes: ["Muzza", "Cebollas asadas" , "Oregano", "Tomate"],
    precio: "1300",
  },

  {
    nombre: "Pizza Margarita 🍕",
    id: 3,
    ingredientes: ["Muzza", "Tomate", "Albahaca"],
    precio: "1170",
  },

  {
    nombre: "Pizza Jamon Crudo 🍕",
    id: 4,
    ingredientes: ["Muzza", "Jamon crudo", "Tomate"],
    precio: "1400",
  },

  {
    nombre: "Pizza 4 Quesos 🍕",
    id: 5,
    ingredientes: ["Muzza", "Provolone", "Sardo", "Roquefort"],
    precio: "1260",
  },

  {
    nombre: "Pizza Jamón🍕",
    id: 6,
    ingredientes: ["Muzza", "Jamon", "Morron"],
    precio: "1400",
  },

  {
    nombre: "Pizza Argenta 🍕",
    id: 7,
    ingredientes: ["Muzza", "Chorizo asado", "Provolone"],
    precio: "1690",
  },
];

const agarraPizza = () => {
  const numberValue = numberInput.value.trim();

  const findPizzas = Pizzas.find((pizza) => {
    return pizza.id == numberValue;
  });
  if (isEmpty(numberValue)) {
    container.classList.add("hidden");
    showError(numberInput, "ERROR- Debe ingresar algún número.");
  } else if (!findPizzas) {
    container.classList.add("hidden");
    showError(numberInput, "ERROR- Debe ingresar un número entre 1 y 7.");
  } else if (findPizzas) {
    removeError(numberInput);
    container.classList.remove("hidden");
    container.innerHTML = `<div>
    <h2 class="pizza.name">${findPizzas.nombre}</h2>
    <h3 class="valor">$${findPizzas.precio}</h3>
  </div>
  <div><i class="fa-solid fa-pizza-slice"></i></div>`;
  }
};

const isEmpty = (value) => !value.length;

const showError = (input, message) => {
  const div = input.parentElement;
  div.classList.add("error");
  const error = div.querySelector("small");
  error.textContent = message;
};

const removeError = (input) => {
  const div = input.parentElement;
  div.classList.remove("error");
  const error = div.querySelector("small");
  error.textContent = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  agarraPizza();
}
);