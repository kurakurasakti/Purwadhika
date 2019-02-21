var arr = ['roy',5,'budi', 2, 6]

console.log(filterString(arr))

function filterString(arr){
    var newArr = [];
    newArr = console.log(arr.filter(e => typeof e !== 'string' & e !== ''))
    return newArr
}