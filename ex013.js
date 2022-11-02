var agora= new Date()
var diaSema = agora.getDay()
console.log('legal , hoje é')
switch(diaSema){
    case 0:
        console.log('domingo')
    case 1:
        break
        console.log('segunda-feria')
        break
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('quarta-feira')
        break
    case 4:
        console.log('quinta-feira')
        break
    case 5:
        console.log('sexta-feira')
        break
    case 6:
        console.log('sabado')
        break
    default:
        console.log('DIA INVALIDO [ERRO]')        
}