class Usuario{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  
  obterNomeCompleto(){
    return `${this.nome} ${this.sobrenome}`;
  }
  
  obterIniciais(){
        return `${this.nome[0]}${this.sobrenome[0]}`
    }
}

let pedroonietoo = new Usuario("Pedroo", "Nietoo")
console.log(pedroonietoo.obterNomeCompleto()) //Pedroo Nietoo
console.log(pedroonietoo.obterIniciais()) //Pedroo Nietoo
