function resposta()
{
    let data = new Date();
    let ano = data.getFullYear();
    let nascido = document.querySelector("#nascimento").value;
    let res = document.querySelector("#res")
    
    if(nascido > ano || nascido <= 0){ 
        res.innerHTML = "[ERRO] verifique a sua data de nascimento"

    }
    else
    {
        let resultado = ano - Number(nascido)
        let sexo = document.getElementsByName("sexo")
        if(sexo[0].checked)
        {   
            res.innerHTML = `Voce é um homem e  tem ${resultado} Anos de idade`
        }
        else if(sexo[1].checked)
        {
            res.innerHTML = `Voce é uma mulher e  tem ${resultado} Anos de idade`
        }
        
      
    }
    
}