function fatorial(n){
    var fat =1
    for(var c =n; c>1; c--){
        fat*=c
    }
    return fat
}
console.log(fatorial(6))
//6! = 6 x 5 x 4 x 3 x 2 x 1 = 720