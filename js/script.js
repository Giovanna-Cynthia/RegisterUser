const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");


/* Eventos de JS */
button.addEventListener("click", (event) => {
    event.preventDefault();

    const inputNameValue = nome.value;
    const inputEmailValue = email.value;
    const inputTelefoneValue = telefone.value;
    const templateHTML = `<li> 
    Nome: ${inputNameValue} <br>
    Email: ${inputEmailValue} <br> 
    Telefone: ${inputTelefoneValue} <br>
    <button class="excluir">Excluir</button>
    </li>`;

    if (inputNameValue, inputEmailValue, inputTelefoneValue === "") {
        alert("Preencha o campo vazio");
        return false;
    }

    lista.innerHTML += templateHTML;

    nome.value = "";
    email.value = "";
    telefone.value = "";

    lista.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("excluir")) {
            e.target.parentElement.remove();
        }
    });

});