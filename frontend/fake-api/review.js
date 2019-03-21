
// function lastArr(arr){
//     if (arr[arr.length-1] > 10) {
//         return arr[arr.length-1]
//     }
//     else if(arr.length -1 <= 10 ){
//         return arr[0]
//     }
// }

// console.log(lastArr([3,2,3,5,8]));
// console.log(lastArr([3,2,3,5,21]));
var param = [
    [1, 1, 1, 2],
    [2, 5, 0, 0],
    [2, 0, 3, -3]
  ]

function sumArr(arr){
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        var sum = 0
        for (let j = 0; j < arr[i].length; j++) {
            //i itu array paling luar
            //j itu arraydalem
            // arr[i][j]itu magsudnya array pertama
            sum += arr[i][j]
            if (arr[i][j] < 0) {
                sum = 0
                break
            }
           
        }
        if (sum > 0) {
            newArr.push(sum)
            
        }
        
    }
    return newArr
  
}
  

console.log(sumArr(param))

// const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
// const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

// const pizzas = [...featured, 'veg pizza', ...specialty];

// console.log(pizzas);