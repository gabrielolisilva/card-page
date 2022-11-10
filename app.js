const submitButton = document.querySelector(".submitButton");

const nameCard = document.querySelector("#nameCard");
const numberCard = document.querySelector("#numberCard");
const mounthValid = document.querySelector("#mounthValid");
const yearValid = document.querySelector("#yearValid");
const cvcCard = document.querySelector("#cvcCard");

let camposInvalidos = false;

function mensagemNaTela(msg) {
  return window.alert(msg);
}

submitButton.addEventListener("click", () => {
  if (nameCard.value.length === 0) {
    mensagemNaTela("Nome do titular faltando ou inválido");
    camposInvalidos = true;
  }

  if (numberCard.value.length === 0) {
    mensagemNaTela("Número faltando");
    camposInvalidos = true;
  }

  if (mounthValid.value.length === 0) {
    mensagemNaTela("Mês de validade faltando");
    camposInvalidos = true;
  }

  if (yearValid.value.length === 0) {
    mensagemNaTela("Ano de validade faltando");
    camposInvalidos = true;
  }

  if (cvcCard.value.length === 0) {
    mensagemNaTela("CVC faltando");
    camposInvalidos = true;
  }

  console.log(camposInvalidos);
});
