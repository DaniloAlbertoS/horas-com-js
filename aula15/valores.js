var valores = [5,8,6,1,3,2,7]
valores.sort()
console.log(valores)
console.log(` o vetor tem ${valores.length} posições`)
console.log(`o primeiro valor do vetor  e ${valores[0]}`)
var pos = valores.indexOf(8)
if (pos ==-1){
    console.log(`nao foi posivel encontrar o valor`)
}else{
    console.log(`o valor ${valores[pos]} esta na posição ${pos}`)
}