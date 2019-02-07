var bintang2=''
var number = 5
for (let i = 1; i <= number; i++) {
    for (let j = i; j < 4; j++) {
        bintang2 += ' '
    }
    for (let k = 0; k<=i; k++){
        bintang2 += '*'
    }
    for (let l = 0; l <= -i; l++){
        bintang2 += '*'
    }
    bintang2 += '\n'
    
}
console.log(bintang2);