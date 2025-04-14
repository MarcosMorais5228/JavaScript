function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora >= 0 && hora <12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#E29351'
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#77C1DD'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#14263E'
    }
}