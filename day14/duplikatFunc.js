var a = [4,3,5,7,1,2]

var anon = function(val){
    return val * 2 
}

function filterMaping(arr, fn){
    let newArr = []
    //var arr = [...arr]
    for (let i = 0; i < arr.length; i++) {
     newArr.push(fn(arr[i]))
        
    }
    return newArr
}

console.log(filterMaping(a, anon));
// function filterDupe(arr,fn){
//     var newArr = []
//     for(var i=0; i<a.length;i++){
//         if(fn(arr[i]==true)){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(filterDupe(a,anon));


