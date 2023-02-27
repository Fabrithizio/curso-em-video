function tabuada(){
    let num = document.querySelector("#nu")
    let seletor = document.querySelector("#tabu")
    if(num.value.length == 0)
    {
        alert('Porfavor digite um numero')
    }
    else{
        let n = Number(num.value)
        let c = 1
        seletor.innerHTML = ""
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            seletor.appendChild(item)
            c++
        }
    }
}