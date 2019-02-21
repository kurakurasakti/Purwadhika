var z =''
var s=''
for(i=5;i>0;i--){
    for(j=0;j<i;j++){
        z+='* '
    }
    z+='\n'
}
for(i=1;i<5;i++){
    for(j=0;j<=i;j++){
        z+='* '
    }
    z+='\n'
}
console.log(z)