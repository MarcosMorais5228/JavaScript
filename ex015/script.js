botao.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (Number(fano.value) == 0 || Number(fano.value > ano)) {
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                img.src = 'imagens/hcrianca.png'
            } else if(idade < 21){
                img.src = 'imagens/hjovem.png'
            } else if(idade < 50){
                img.src = 'imagens/hadulto.png'
            } else if(idade >= 50){
                img.src = 'imagens/hidoso.png'
            }
        } else{
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                img.src = 'imagens/mcrianca.png'
            } else if(idade < 21){
                img.src = 'imagens/mjovem.png'
            } else if(idade < 50){
                img.src = 'imagens/madulto.png'
            } else if(idade >= 50){
                img.src = 'imagens/midosa.png'
            }
        }    
        res.style.fontSize = '1.4em'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}