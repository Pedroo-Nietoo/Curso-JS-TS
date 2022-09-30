let nome = "Pedroo-Nietoo"
let idade = 18
let itensDeCompra = idade-10

function obtenhaMensagem(valor) {
    if(valor < 0){
        return "Número inválido"
    }
    if(valor === 0){
        return nome+", você não tem nenhum item em sua lista de compras"
    }
    if(valor === 1){
        return nome+", você tem um item em sua lista de compras"
    }
    if(valor >1){
        return nome+", você tem "+itensDeCompra+" itens em sua lista de compras"
    }
}
console.log(obtenhaMensagem(itensDeCompra))
