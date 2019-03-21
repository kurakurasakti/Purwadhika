export const fnUbahUser = (nama) =>{
    return{
        type : 'UBAH_USER',
        payload : nama //sesuatu yang di kirim (berati ini kirim parameter berupa nama.)
    }
}