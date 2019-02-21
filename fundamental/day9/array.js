var nama = ['steve jobs','billgates','lalalalal']
var pekerjaan = ['java','apple','microsoft']

var gabungan = [
    [0,1],
    [1,2],
    [2,0]
]

console.log(lalala())


function lalala(){
    var text = ''
    for(i=0; i<gabungan.lenght; i++){
        text += (i+1)+ '. '+nama[gabungan[i][0]] + ' ='+ pekerjaan[gabungan[i][1]]+'\n'
    }
    return text
}