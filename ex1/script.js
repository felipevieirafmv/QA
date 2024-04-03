var nomeGlobal;
var mensagemGlobal;
var dateGlobal;
var dark = false

function conferirMensagemWhatsApp()
{
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    dateGlobal = date.toLocaleString("pt-BR");

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
    document.getElementById("confDate").textContent = dateGlobal;
    
    document.getElementById("conf").className = "conf";
}

function enviar()
{
    var numeroTelefone = "5541988927116";

    var linkWhatsApp =
        "https://wa.me/" +
        numeroTelefone +
        "?text=NOME DO RECEPTOR(A): " +
        nomeGlobal +
        " - MENSAGEM:" +
        mensagemGlobal +
        " - DATA:" +
        dateGlobal;

    window.open(linkWhatsApp);
}

function darkMode()
{
    var element = document.body;
    element.classList.toggle("dark");
    element.classList.toggle("light");
    console.log("AAAAAAAAAAAAAAAAAAA")
}