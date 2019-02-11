//#region mapp
// var a = [4,3,5,7,1,2]

// var anon = function(val){
//     return val * 2 
// }

// function filterMaping(arr, fn){
//     let newArr = []
//     //var arr = [...arr]
//     for (let i = 0; i < arr.length; i++) {
//      newArr.push(fn(arr[i]))
        
//     }
//     return newArr
// }
//#endregion
//#region filter
// console.log(filterMaping(a, anon));
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
//#endregion
//#region sort
var a = [1,4,5,6,7,8]

var sortDupe = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (fn(arr[i], arr[j]<0)) {
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp;
            }
            
        }
        
    }
    return arr
}

sortDupe(a,function(a,b){return a-b})

//#endregion