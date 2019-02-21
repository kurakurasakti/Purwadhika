

// calss gramedia{
//     constructor(a,b,c){
//         this.judul = a;
//         this.author = b;
//         this.tahunTerbit = c;
//     }
// }

// var lemari = [
//     new gramedia('naruto', 'kisi', 1980),
//     new gramedia('dawdawd', 'dawdawdawdw', 1980),
//     new gramedia('narudwadwdwato', 'kiswadi', 1980)
// ]

// //console.log(lemari[0].judul)
// var text = '';
// var lemari1 = [
//     for(i=0; i<lemari.length; i++){
//         text = lemari[i][0]+"dibikin sama "+ lemari[i][1]+"tahun " +lemari[i][2];
//     }
// ]

calss gramedia{
    constructor(a,b,c){
        this.judul = a;
        this.author = b;
        this.tahunTerbit = c;
    }
}
var lemari = [
    new gramedia('naruto', 'kisi', 1980),
    new gramedia('dawdawd', 'dawdawdawdw', 1980),
    new gramedia('narudwadwdwato', 'kiswadi', 1980)
]

function filterJudul(arr, filtering='', author=''){
    var newArr = []
    for (var i = 0; i< arr.lenght; i++){
        if(arr[i].judul.includes(filtering)){
            newArr.push(arr[i])
        }
    }
    return new arr;
}

