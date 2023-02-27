function Contar()
{
    let inicio = document.querySelector("#n1")
    let final = document.querySelector("#n2")
    let pular = document.querySelector("#pular")
    let contagem = document.querySelector('#contagem')
    contagem.innerHTML = "contando :"
    let i =Number(inicio.value)
    let f =Number(final.value)
    let p =Number(pular.value)

    for(let c = 1;c < f;c += p)
    {
        contagem.innerHTML += `${c}-`
    }
}