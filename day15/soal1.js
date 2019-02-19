var nAwal
var dPertumbuhan
var pMElahirkan
var tArget

console.log(berapaTahun(1500000,100000,2.5,2000000))

function berapaTahun(nAwal,dPertumbuhan,pMElahirkan,tArget) {
    var totPenduduk
    var count
    var hasil = 0 
    totPenduduk = (nAwal+dPertumbuhan)+((nAwal+dPertumbuhan)*pMElahirkan/100)
    do {
        hasil += totPenduduk+dPertumbuhan+((totPenduduk+dPertumbuhan)*pMElahirkan/100)
        //untuk menambahkan populasi kota tiap tahun pakai looping
        count++
        //count untuk hitung tahun
        //logicnya tau pak tapi saya ga tau syntaxnya. 
    } while (hasil<tArget);
    do {
        console.log('Kota akan mencapai '+tArget+ ' dalam waktu '+count+' tahun')
    } while (hasil>tArget);
    
}