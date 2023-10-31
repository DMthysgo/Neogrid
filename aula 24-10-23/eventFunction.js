function soma(numero1, numero2){
    var soma = numero1 + numero2
    console.log(soma)
}

const paragrafo = document.getElementById("Paragrafo")
const input = document.getElementById("inputTexto").value
paragrafo.addEventListener("click", function(){
    paragrafo.innerHTML = prompt("Digite aqui:")
} )

/*
document.addEventListener("click", function() {
    alert("Click!")
})
*/