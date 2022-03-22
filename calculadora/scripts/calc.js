let numa = document.getElementById("numa");
let numb = document.getElementById("numb");
let buttonSum = document.getElementById("sum");
let buttonSubt = document.getElementById("subt");
let buttonMult = document.getElementById("mult");
let buttonDivision = document.getElementById("division");
let buttonReset = document.getElementById("reset");
let result = document.getElementById("output");
let form = document.getElementById("calcForm");

function somar(numa, numb) {
  let response = 0;
  response = parseFloat(numa.value) + parseFloat(numb.value);
  if (isNaN(response) == true) {
    response = "Algo está errado.";
  }
  return (result.innerHTML = response);
}

function subtrair(numa, numb) {
  let response = 0;
  response = parseFloat(numa.value) - parseFloat(numb.value);
  if (isNaN(response) == true) {
    response = "Algo está errado.";
  } else if (numb.value < 0) {
    response = parseFloat(numa.value) + parseFloat(numb.value);
  }
  return (result.innerHTML = response);
}

function multiplicar(numa, numb) {
  let response = 0;
  response = parseFloat(numa.value) * parseFloat(numb.value);
  if (isNaN(response) == true) {
    response = "Algo está errado.";
  }
  return (result.innerHTML = response);
}

function dividir(numa, numb) {
  let response = 0;
  response = parseFloat(numa.value) / parseFloat(numb.value);

  if (response == Infinity || response == -Infinity) {
    response = "Nice try :)";
    return (result.innerHTML = response);
  } else if (isNaN(response) == true) {
    response = "Algo está errado.";
    return (result.innerHTML = response);
  } else response = response.toFixed(4);
  return (result.innerHTML = parseFloat(response));
}

buttonSum.addEventListener("click", (event) => {
  event.preventDefault();
  somar(numa, numb);
});

buttonSubt.addEventListener("click", (event) => {
  event.preventDefault();
  subtrair(numa, numb);
});

buttonMult.addEventListener("click", (event) => {
  event.preventDefault();
  multiplicar(numa, numb);
});

buttonDivision.addEventListener("click", (event) => {
  event.preventDefault();
  dividir(numa, numb);
});

buttonReset.addEventListener("click", (event) => {
  event.none;
  result.innerHTML = result.dataset.defaultValue;
});
