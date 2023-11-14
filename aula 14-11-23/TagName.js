// Obtém todos os elementos <p> dentro do <div>
var paragrafos = document.getElementsByTagName('p');

// Itera sobre a NodeList e faz algo com cada parágrafo
for (var i = 0; i < paragrafos.length; i++) {
    var paragrafo = paragrafos[i];
    console.log(paragrafo.textContent); // Exibe o texto de cada parágrafo no console
}
