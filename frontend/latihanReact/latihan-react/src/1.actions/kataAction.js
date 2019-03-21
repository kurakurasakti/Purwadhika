export const fnCountWord = (str) =>{
    var arr = str.split(' ')
    var jumlahKata = arr.lentgh
    return{
        type : 'HITUNG_KATA',
        payload :  jumlahKata 
        //payload sesuatu yang di kirim (berati ini kirim parameter berupa nama.)
    }
}