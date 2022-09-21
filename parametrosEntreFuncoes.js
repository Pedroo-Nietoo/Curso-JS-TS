function dobro(x) {
    return x * 2
}

function executar(operacao, x) {
    if (operacao === "dobro") {
        return dobro(x)
    }
}

console.log(executar("dobro", 4)) //8
console.log(executar("dobro", 5)) //10
