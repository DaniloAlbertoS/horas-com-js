var agora =new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas`)
var hora = 0
if(hora >=0 && hora <6){
    console.log('boa madrugada!')
}else if( hora <12){
    console.log('bom dia!')
}else if( hora >=18){
    console.log('boa noite!')
}else{
    console.log('boa tarde!')
}