var x = 1
var y = 24
var z = 20

console.log(angkaTerbesar(x,y,z))

function angkaTerbesar(x,y,z){
    var big = Math.max(x, y, z)
    return console.log("angka terbesar dari "+x+", "+y+ ", " +z+ ", adalah "+big)
}