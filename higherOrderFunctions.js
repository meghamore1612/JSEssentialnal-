console.log("Higher Order Functions");
let arr = [10,21,13,44,50,65];



arr.forEach((el)=>{
    console.log(el*el*el)
})

let cube = arr.map((el)=>el*el*el);

let cube = arr.map(function(el){
    return el*el*el;
})

console.log(cube);


Filter

let odd = arr.filter(el=>el%2==1);

let oddCubes = arr.filter(el=>el%2==1).map(el=>el*el*el);

console.log(odd);