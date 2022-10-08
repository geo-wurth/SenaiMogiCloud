function alterarNome() {
    const nomeAlunoInput = document.querySelector("#nomeDoAlunoInput");
    const nomeAlunoText = document.querySelector("#nomeDoAlunoText");
    const nomeAlunoButton = document.querySelector("#nomeDoAlunoButton")

    nomeAlunoText.innerText = nomeAlunoInput.value;
    nomeAlunoInput.remove();
    nomeAlunoButton.remove();

}

let modalState = false;


const myModal = new bootstrap.Modal('#staticBackdrop', {
    keyboard: false
});

function closeModal() {
    myModal.show(!modalState)
};

myModal.show(!modalState);