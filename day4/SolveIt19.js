// var z =''
// var s=''
// for(i=10;i>=0;i--){
//     for(j=0;j<=i;j++){
//         z+='  '
//     }
//     for(k=10;k>=j;k--){
//         z+='* '
//     }
//     for(l=10;l>=i;l--){
//         z+='* '
//     }
//     for(m=0;m<=j;m++){
//         z+='  '
//     }
//     z+='\n'
// }
// console.log(z)
// revision
// for(i=0;i<10;i++){
//     for(j=10;j>i;j--){
//         z+='  '
//     }
//     for(k=0;k<j;k++){
//         z+='* '
//     }
//     for(l=1;l<i;l++){
//         z+='* '
//     }
//     for(m=10;m>j;m--){
//         z+='  '
//     }
//     z+='\n'
// }
// tes 2
// z=''
// for(i=1;i<10;i++){
//     for(j=10;j>i;j--){
//         z+='- '
//     }
//     for(k=0.5;k<j;k+=0.5){
//         z+='* '
//     }
//     z+='\n'
// }
// console.log(z)
// tes 3
var bintang=''
for(let i=0;i<10;i++){
    for(let j=i;j<9;j++){
        bintang+=' '
    }
    for(let k=0;k<=i;k++){
        bintang+='*'
    }
    for (let l=0;l<=i-1;l++){
        bintang+='*'
    }
    bintang+='\n'
}
console.log(bintang)
