
function getValores() {

    var dados = {
        nome: document.querySelector("#nome").value,
        telefone: document.querySelector("#telefone").value,
        email: document.querySelector("#email").value,
        mensagem: document.querySelector("#mensagem").value,
    }

    let dados_serialized = JSON.stringify(dados);
    localStorage.setItem("dados", dados_serialized);

}


function teste() {

    let dados = JSON.parse(localStorage.getItem("dados"));
    document.getElementById("tabela-nome").innerHTML = dados.nome;
    document.getElementById("tabela-telefone").innerHTML = dados.telefone;
    document.getElementById("tabela-email").innerHTML = dados.email;
    document.getElementById("tabela-mensagem").innerHTML = dados.mensagem;

}