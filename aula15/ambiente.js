var valores =[2,3,5,6,8,4,9]
valores.sort()
/*for (var pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
for (var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}