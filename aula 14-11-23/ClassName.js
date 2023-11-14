// Obtém todos os elementos com a classe 'destaque'
var elementosDestaque = document.getElementsByClassName('destaque');

// Itera sobre a NodeList e faz algo com cada elemento em destaque
for (var i = 0; i < elementosDestaque.length; i++) {
    var elemento = elementosDestaque[i];
    elemento.textContent = 'Texto modificado'; // Modifica o texto de cada elemento em destaque
    elemento.style.fontSize = '20px'; // Modifica o tamanho da fonte de cada elemento em destaque
}
