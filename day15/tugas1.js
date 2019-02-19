// // var inputUser = 10

// // function kelipatan(){
// //     var arr = []
// //     var bilangan = inputUser / 3

// //     // for (let i = 0; i < arr.length; i++) {
        
// //     // }

// // }

// //console.log(keliapatanTiga(1,10));
// function keliapatanTiga(start, end) {
//     var hasil = ''
//     for (let i = start; i < end; i++) {
//         if (i % 3== 0) {
//             hasil += i+','
//         }
        
//     }
//     return hasil.slice(0,hasil.length-1)
// }
// function keliapatanTigaArray(start, end) {
//     var hasil = []
//     for (let i = start; i < end; i++) {
//         if (i % 3== 0) {
//             hasil.push(i)
//         }
        
//     }
//     return hasil.join('-')
// }


// var angka = 1
// var hasil = 0

// function deretBilanganString(deret){

//     // while (angka <= deret){
//     //     hasil = angka + deret
//     //     angka++
        
//     // }
//     // return hasil
//     var isi = ''
//     var tot = 0
//     for (let i = 1; i <= deret; i++) {
//         isi += i+'+'
//         tot += i
//     }
//     isi = isi.slice(0, isi.length-1)
//     isi += '=' +tot
//     return isi
// }

// //console.log(deretBilanganString(20));

// //tiap bulan di potong 
// var bebek = 1000

// function jumBebek(num){
//     bulan = 0
//     for (let i = 1; i < bualan; i++) {
//         bebek= (bebek-(bebek*20/100)*2)
        
//     }
//     return bebek
// }

// console.log(jumBebek(2));
/////////////////////////////////////////////////////////////////////////////////////////
// var nAwal
// var dPertumbuhan
// var pMElahirkan
// var tArget

// console.log(berapaTahun(1500000,100000,2.5,2000000))

// function berapaTahun(nAwal,dPertumbuhan,pMElahirkan,tArget) {
//     var totPenduduk
//     var count
//     var hasil = 0 
//     totPenduduk = (nAwal+dPertumbuhan)+((nAwal+dPertumbuhan)*pMElahirkan/100)
//     do {
//         hasil += totPenduduk+dPertumbuhan+((totPenduduk+dPertumbuhan)*pMElahirkan/100)
//         //untuk menambahkan populasi kota tiap tahun pakai looping
//         count++
//         //count untuk hitung tahun
//     } while (hasil<tArget);
//     do {
//         console.log('Kota akan mencapai '+tArget+ ' dalam waktu '+count+' tahun')
//     } while (hasil>tArget);
    
// }

var a = [];
console.log(segitiga(8))

function segitiga(c) {
  
    for (var i = 0; i < c; i++) {
      a[i] = new Array(i + 1);
  
      for (var j = 0; j < i + 1; j++) {
        if (j === 0 || j === i) {
          a[i][j] = 1;
        } else {
          a[i][j] = a[i - 1][j - 1] + a[i - 1][j];
        }
      }
    }
    return a;
  }