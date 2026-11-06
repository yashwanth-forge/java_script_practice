// practicing arrays
//looping over arrays using diff for ways
let arr=["gojo","sukuna","yuji"," maki","zenin"];

    for(let idx=0;idx < arr.length;idx++)
    {
        console.log(arr[idx]);
    }
    

for(let i of arr)
{
    console.log(i);
}

//call back function array.forEach(another function)

arr.forEach((val)=>{
    console.log(val);
})

//you can also pass a normal function instead of a arrow function

arr.forEach(function yo(hi){
    console.log(hi);
})

//practicing array methods

arr.push("ryoeki tenkai");
console.log(arr);

let gojo=arr.pop();
console.log(gojo);
console.log(arr);

let Hi=["hello","fahh","yo"];

let Con=arr.concat(Hi);

console.log(Con);

Con.unshift("daijobe");
console.log(Con);

let star=Con.shift();

console.log(star);
console.log(Con);

//using map and filter just small example for my understandin
let loki=[1,2,3,5,7];
let yo=loki.map((val)=>{
    return val*2;
})

console.log(yo);
console.log(loki);

let eve=loki.filter((n)=>{
    return n%2==0;
});
console.log(eve);
