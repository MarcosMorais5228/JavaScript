botao.addEventListener('click', contagem)
function contagem(){
    var c = Number(document.getElementById('txtinicio').value)
    var f = Number(document.getElementById('txtfim').value)
    var p = Number(document.getElementById('txtpasso').value)
    var res = document.getElementById('res')
    
    if (c.length == 0|| f.length == 0 || p.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        while(c <= f){
            res.innerHTML += `${c} \u{1F449}`
            c += p
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

/*function contagem() {
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0|| fim.value.length == 0 || passo.value.length == 0) {
        window.alert ('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c+=p){
            res.innerHTML  += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}*/