str = "justinbiber"
console.log(hapusVocal(str))

function hapusVocal(str){
    var hasil = str.replace(/[aiueo]/g,"")
    return hasil
}
