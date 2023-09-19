const meuBotao1 = document.getElementById("meuBotao1");

meuBotao1.addEventListener("click", function() {
    alert("Botão 1 clicado");
});

function customAlert(message) {
    const customAlertDiv = document.createElement('div');
    customAlertDiv.className = 'custom-alert';
    customAlertDiv.textContent = message;
    document.body.appendChild(customAlertDiv);
}
function showDialog(message) {
    const dialogMessage = document.getElementById('dialog-message');
    dialogMessage.textContent = message;
    document.getElementById('custom-dialog').style.display = 'block';
}

function closeDialog() {
    document.getElementById('custom-dialog').style.display = 'none';
}

function acao1() {
    showDialog("Botão 2 Clicado");
}