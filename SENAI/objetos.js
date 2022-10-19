//Objeto
let usuario = {
  nome: "Pedroo",
  sobrenome: "Nietoo,
  idade: 1
};

usuario.sexo = "Masculino"; //Add uma chave ao objeto
console.log(usuario.idade); //1

//Objetos aninhados
let estudante = {
  nome: "Pedroo",
  sobrenome: "Nietoo,
  idade: 1,
  cursoMatriculado: {
    nome: DEVstart,
    concluido: true
  } 
};

console.log(estudante.nome); //Pedroo
console.log(estudante.cursoMatriculado.concluido); //true

//Matriz de objetos
let usuarios = [
  {
    nome: "Pedroo-Nietoo",
    idade: 1,
  },
  {
    nome: "Nietoo-Pedroo,
    idade: 2,
  }
];

usuarios.forEach(function(usuario){
  console.log(usuario.nome);
});
//Pedroo-Nietoo
//Nietoo-Pedroo
