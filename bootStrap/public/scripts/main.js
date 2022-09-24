/* It's printing "Hello world!" to the console. */
// console.log("Hello world!");

/* It's printing "Hello world!" to the alert box. */
// alert("hello world!");

/* It's asking the user for their name and storing it in the variable name. */
// const name = prompt("Qual é o su nome ? ");

/**
 * This function prints a message to the console.
 */
function imprimeNoConsole() {
  console.log("Função Imprime no console ativada com sucesso!");
}

const user = {
    email: "kifel@gmail.com",
    senha: "12345"
}


/**
 * It gets the values of the email and password fields, and then logs them to the console.
 */
function login() {
  const email = document.querySelector("#email1").value;
  const senha = document.querySelector("#senha1").value;

  console.log("Email: ", email);
  console.log("Senha: ", senha);
}
