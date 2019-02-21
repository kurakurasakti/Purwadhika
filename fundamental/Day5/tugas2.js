var lamaParkir = 7
var satuJamPertama = 2000
console.log(parkir(lamaParkir))

function parkir(lamaParkir){
    if(lamaParkir > 2){
        var parkirPerJam = (lamaParkir - 2) *500
        var hasil = parkirPerJam + satuJamPertama
        return console.log("Anda harus bayar Rp "+hasil+",-") 
    }
    else if(lamaParkir <= 2){
        var hasil = 2000
        return console.log("Anda harus bayar Rp "+hasil+",-")
    }
    else{
        console.log("input salah!")
        return 0
    }
}

function parkirCangih(lamaParkir){
    biaya = 0
    lamaParkir <=2 ? biaya += lamaParkir*2000 : biaya += (2*2000) + ((lamaParkir-2)*500)
    return biaya
}