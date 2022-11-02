function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora  são exatamente ${hora} horas...`
if( hora >=0 && hora <12){
    //Bom dia!
    img.src = `imagens/foto-dia1.jpg`
    document.body.style.background = `#7FB3CB`
} else if ( hora >=12 && hora <18){
    //boa tarde!
    img.src = `imagens/foto-dia2.jpg`
    document.body.style.background = `#FAEE76`
} else {
    //boa noite!
    img.src = `imagens/foto-noite.jpg`
    document.body.style.background = `#134972`
}
}