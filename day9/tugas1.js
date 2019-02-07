
//var arr = [1,5,6,7,3] 5 angka
var arr = [1,2,3,4,5,6] // 6 angka

console.log(medians(arr))

function medians(arr){
    var filterArr = arr.sort()
    var tengah = Math.floor(filterArr.length/2)
    if(arr.length%2===0){
        return(filterArr[tengah-1]+filterArr[tengah])/2;
    }
    else{
        return(filterArr[tengah])
    }
    
}