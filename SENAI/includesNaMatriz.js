function oTesteEhMuitoFacil(notas) {
  return notas.includes(20)
}

console.log(oTesteEhMuitoFacil([10, 15, 13, 19])) // false
console.log(oTesteEhMuitoFacil([7, 13, 20, 15])) // true
