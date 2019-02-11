// var inputUser = 10

// function kelipatan(){
//     var arr = []
//     var bilangan = inputUser / 3

//     // for (let i = 0; i < arr.length; i++) {
        
//     // }

// }

//console.log(keliapatanTiga(1,10));
function keliapatanTiga(start, end) {
    var hasil = ''
    for (let i = start; i < end; i++) {
        if (i % 3== 0) {
            hasil += i+','
        }
        
    }
    return hasil.slice(0,hasil.length-1)
}
function keliapatanTigaArray(start, end) {
    var hasil = []
    for (let i = start; i < end; i++) {
        if (i % 3== 0) {
            hasil.push(i)
        }
        
    }
    return hasil.join('-')
}


var angka = 1
var hasil = 0

function deretBilanganString(deret){

    // while (angka <= deret){
    //     hasil = angka + deret
    //     angka++
        
    // }
    // return hasil
    var isi = ''
    var tot = 0
    for (let i = 1; i <= deret; i++) {
        isi += i+'+'
        tot += i
    }
    isi = isi.slice(0, isi.length-1)
    isi += '=' +tot
    return isi
}

//console.log(deretBilanganString(20));

//tiap bulan di potong 
var bebek = 1000

function jumBebek(num){
    bulan = 0
    for (let i = 1; i < bualan; i++) {
        bebek= (bebek-(bebek*20/100)*2)
        
    }
    return bebek
}

console.log(jumBebek(2));