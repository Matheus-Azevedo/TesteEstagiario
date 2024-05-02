function sendForms(event) {
  event.preventDefault();
  if (!validation()) {
    return;
  }
  sendFormsToConsole();
  changeFormsDisplay();
  changeH1Text();
}

function validation() {
  const inputName = document.getElementById("inputName");
  const inputEmail = document.getElementById("inputEmail");
  const inputPhone = document.getElementById("inputPhone");

  const theFieldAreBlank =
    inputName.value === "" ||
    inputEmail.value === "" ||
    inputPhone.value === "";

  if (theFieldAreBlank) {
    blankFields();
    return false; // Impede a execução do restante do código na função validation()
  }
  return true;
}

function blankFields() {
  const myModal = new bootstrap.Modal(
    document.getElementById("modalBlankFields")
  );
  myModal.show();
}

function changeFormsDisplay() {
  const forms = document.getElementById("forms");
  forms.style.display = "none";
}

function changeH1Text() {
  const h1 = document.getElementById("h1");
  h1.innerText = "Obrigado por seu cadastro!";
}

function sendFormsToConsole() {
  const inputName = document.getElementById("inputName");
  const inputEmail = document.getElementById("inputEmail");
  const inputPhone = document.getElementById("inputPhone");

  const formData = {
    Nome: inputName.value,
    Email: inputEmail.value,
    Telefone: inputPhone.value,
  };

  console.log(formData);
}
