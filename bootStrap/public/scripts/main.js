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

/* It's creating a user object with the email and password properties. */
const user = {
  email: "kifel@gmail.com",
  senha: "12345",
};

/**
 * It gets the values of the email and password fields, and then logs them to the console.
 */
function login() {
  const email = document.querySelector("#email1");
  const senha = document.querySelector("#senha1");

  if (email.value == "" || senha.value == "") {
    alert("Please enter your email and password");
  } else if (email.value == user.email && senha.value == user.senha) {
    alert("Logado com sucesso");
  } else {
    alert("Senha ou email errado");
  }

  email.value = "";
  senha.value = "";
}

/**
 * If the button is checked, change the background color to black and the text color to white. If the
 * button is not checked, change the background color to white and the text color to black.
 */
function switchTheme() {
    const button = document.querySelector("#flexSwitchCheckDefault")

    if(button.checked) {
        document.body.style.backgroundColor = "#000"
        document.body.style.color = "#fff"
    }else {
        document.body.style.backgroundColor = "#fff"
        document.body.style.color = "#000"
    }

}
