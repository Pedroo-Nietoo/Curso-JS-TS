function somaNumeros(numeros) {
  let soma = numeros.reduce(function(total, atual){
    total = total + atual
    return total + atual
  }, 0)
  return soma
}
console.log(somaNumeros([10, 20, 30])) // 60
