function notasTriplicadas(notas) {
  let novasNotas = notas.map(function(nota){
    return nota * 3
  })
  return novasNotas
}
console.log(notasTriplicadas([10, 20]))
