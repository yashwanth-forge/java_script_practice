//whats a callback fn...????
//the fn in which another fn is passsed as an argument is called a callback fn

function sum(a,b){
    console.log(a+b);
}

function prod(a,b){
    return a*b;
}

function call (a,b,callback){
    callback(a,b);
} //here basically u passed a fn callled callback fn..now when u call the actual fn call u can pass
//u can pass parameters ie..a , b and a fn that takes two arguments..ill show it.

call(3,4,sum);//here what happens is callback=sum..therefore callback(a,b) is basically sum(a,b)
//mental mode can be like..how u do a fn basically..first forget everything above
//let call=function sum(a,b){return a+b}; thats it..
