//whats a callback fn...??
//its the function passed as an argument in another fn to be simple

function sum(a,b){
    console.log(a+b);
}

function prod(a,b){
    return a*b;
}

function call (a,b,callback){
   return callback(a,b);
} //here basically u passed a fn callled callback fn..now when u call the actual fn call u can pass
//u can pass parameters ie..a , b and a fn that takes two arguments..ill show it.

call(3,4,sum);//here what happens is callback=sum..therefore callback(a,b) is basically sum(a,b)
//mental mode can be like..how u do a fn basically..first forget everything above
//let call=function sum(a,b){return a+b}; thats it..

//we used these callbacks while usinga array properties like forEach and filter and map etc

//SET TIME OUT

//lets see all the ways in which we can use a timeout fn

function greet(){
    console.log("hello");
}
setTimeout(greet,2000);

//method 2 directly pass a arrow functon

setTimeout(()=>{
    console.log("hello yooo");
},2000);

//method 3 u can create a fn u dont only have to pass an arrow

setTimeout(function (){
    console.log("hello world");
},3000);

//method 4 if u have arguments to pass...take sum for example

setTimeout(sum,4000,3,9);//first fn then time then 1st argument then second
//or do the fn call insde it..i mean use one more fn ie arrow fn

setTimeout(()=>sum(4,8),5000);

//u wanna call timeout u can basically write it in another fn 

function calling(){
    setTimeout(()=>{console.log("broooo")},2000);
}
//or 
//let calls=setTimeout(()=>{console.log("yoooo")},3000); wont work i mean u cant call it ...tho the line is correct..u cant call beqz even if u call it woudt return anything so theres no use because settimeout
//is calling another fn so calls will expect some return value or return a function
//and now u can call

calling();

