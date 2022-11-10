const submitButton = document.querySelector(".submitButton");

const nameInput = document.querySelector("#nameCard");
const numberInput = document.querySelector("#numberCard");
const mounthInput = document.querySelector("#mounthValid");
const yearInput = document.querySelector("#yearValid");
const cvcInput = document.querySelector("#cvcCard");

const cardNumber = document.querySelector(".cardNumber");
const cardName = document.querySelector(".cardName");
const cardValid = document.querySelector(".cardValid");
const cardCVC = document.querySelector(".cardCVC");

let camposInvalidos = false;

function mensagemNaTela(msg) {
  return window.alert(msg);
}

submitButton.addEventListener("click", () => {
  if (nameInput.value.length === 0) {
    mensagemNaTela("Nome do titular faltando ou inválido");
    camposInvalidos = true;
  }

  if (numberInput.value.length === 0) {
    mensagemNaTela("Número faltando");
    camposInvalidos = true;
  }

  if (mounthInput.value.length === 0 || mounthValid.value.length > 2) {
    mensagemNaTela("Mês de validade faltando ou inválido");
    camposInvalidos = true;
  }

  if (yearInput.value.length === 0 || yearValid.value.length > 2) {
    mensagemNaTela("Ano de validade faltando ou inválido");
    camposInvalidos = true;
  }

  if (cvcInput.value.length === 0 || cvcCard.value.length > 3) {
    mensagemNaTela("CVC faltando");
    camposInvalidos = true;
  }

  if (camposInvalidos) return;

  cardNumber.innerHTML = numberInput.value;
  cardName.innerHTML = nameInput.value;
  cardValid.innerHTML = `${mounthInput.value}/${yearInput.value}`;
  cardCVC.innerHTML = cvcInput.value;

  if (camposInvalidos === false) window.alert("Cadastrado com sucesso");
});
