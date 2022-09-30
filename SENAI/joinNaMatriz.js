function converterParaFormatoCSV(notas) {
  return notas.join(";")
}
console.log(converterParaFormatoCSV([10, 15, 13, 19])) // "10;15;13;19"
