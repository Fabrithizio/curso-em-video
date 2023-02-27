let pessoa = {nome:"fabricio",sexo:"M",peso:95.7,emagrecer(p=0){
    console.log('engordou')
    this.peso+= p
}}
console.log(pessoa.sexo)