var str = 'purwadhika'

console.log(balik(str))

function balik(str){
    var satu = str.split('')
    var hasil = [...satu].reverse()
    return hasil.join('')
}

function dupInclude(){
    
}