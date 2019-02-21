var a = [];
//console.log(segitiga(8))

function segitiga(c) {
  
    for (var i = 0; i < c; i++) {
      a[i] = new Array(i + 1);
  
      for (var j = 0; j < i + 1; j++) {
        if (j === 0 || j === i) {
          a[i][j] = 1;
        } else {
          a[i][j] = a[i - 1][j - 1] + a[i - 1][j];
        }
      }
    }
    return a;
}
function good(n) {
  var result = [];
      result[0] = [1];
      result[1] = [1,1];
      for (let row = 2; row < n; row++) {
          result[row] = [1];
          for (let col = 1; col < row -1; col++) {
            result[row][col] = result[row-1][col]+ result[row-1][col-1];
            
          }
        result[row].push[1];
      }
      return result

}

function ganjil(n) {
  

}

console.log(ganjil(5));
