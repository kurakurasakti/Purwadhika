var str = 'abcde'

console.log(dupeString(str))

function dupeString(str){
    var hasil = [...str].map((c, i) => c.repeat(i+1)).join('');
    return hasil
}
