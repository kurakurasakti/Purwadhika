var a = 6

a += 2
//itu berati
a = a+2

//object bisa simpen function jadi namaya method
//array juga bisa simpen function

a = [
    function(){
        return function(){
            console.log('hello');
        }
    }
]

//cara pangilnya a[0]()()

var b = [1,2,34,5,6,4]

class manusia{
    constructor(a,b,c,d){
        this.nama = a


    }
}

//bikin function pake =>
var func = (num) => {
    return num %2
}

var d = [1,2,6,7,8,9,12]

//console.log(d.filter(func));

var q = [4,5,6,2,3]

// var hasilMap = q.map(function(item,index){
//     var hasil = 
// })