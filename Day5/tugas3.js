var angka = 5

console.log(ganjilGenap(angka))

function ganjilGenap(angka){
    if(angka % 2 == 0){
        var hasil = console.log(angka+" adalah bilangan genap")
        return hasil
    }
    else if(angka % 2 == 1){
        var hasil = console.log(angka+" adalah bilangan ganjil")
        return hasil
    }
    else
    {
        console.log("salah input")
    }
}