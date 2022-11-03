function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('txtano')
var res = window.document.getElementById('res')
if(fano.value.length == 0 || fano.value > ano){
    window.alert('[Erro]verifique os dados e tente novamente!')
} else{
    var fsex = window.document.getElementsByName('txtradio')
    var idade = ano - fano.value
    var genero =''
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    img.style.width = '320px'
    img.style.height = '320px'
    img.style.borderRadius = '50%'
    if(fsex[0].checked){
        genero ='masculino'
        if( idade >=0 && idade <=10){
            //crianca
            img.setAttribute('src' , 'imagens/crianca--homem.jpg')
        }else if(idade <25){
            //jovem
            img.setAttribute('src', 'imagens/jovem-homem.jpg')
        }else if(idade <50){
            //adulto
            img.setAttribute('src', 'imagens/adulto-homem.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'imagens/idoso-homem.jpg')
        }
    }else if (fsex[1].checked){
        genero = 'feminino'
        if( idade >=0 && idade <=10){
            //crianca
            img.setAttribute('src', 'imagens/crianca-mulher.jpg')

        }else if(idade <25){
            //jovem
            img.setAttribute('src', 'imagens/jovem-mulher.jpg')
        }else if(idade <50){
            //adulto
            img.setAttribute('src' , 'imagens/adulto-mulher.jpg')
        }else{
            //idoso
            img.setAttribute('src' , 'imagens/idoso-mulher.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `detectamos uma pessoa do sexo ${genero} com ${idade} anos!`
    res.appendChild(img)
}
}