botao.addEventListener('click', contagem)
function contagem() {
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
        if(i<f){
            for(let c = i; c <= f; c+=p){
                res.innerHTML  += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c-=p){
                res.innerHTML  += `${c} \u{1F449}`
            }
        }      
        res.innerHTML += `\u{1F3C1}`
    }
}