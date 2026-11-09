//so what were  basically gonna do is completer objects,prototypes and using related properties 
//starting with how a basic array looks

let yuji={

    //these are properties .Basiaclly, this is how u define variables inside an object and yeah these are called properties
    power: "blackflash",//we seperate with commas
    moto:"protect",
    posseses: "sukuna",

    //now lets see how we can define a fn...we call them methods

    domain : function(){
        console.log("ryoyiki_tenkai");
    },

    //in short we can directly define a fn as..

    expansion(){
        console.log("shrine");//i dont need any arguments to be passed so im not passing any
    }
}

//its time to call them..and how..simple.using dot notation same as how we did in dom
//lets go

console.log(yuji.power);//itll show blackflash..

yuji.domain();//we call a method like this...obj.method()..and those paranthesei ae mandatory...just bez we dont have arguments doesnt mean we dont need paranthesis

//now lets get to know about prototypes and other methods to create obj or use objs props
//we are not gonna cover total inheritance we dont have major use with those in async or fetch..

//prototype is basically an object..if u use an object to define anothier object then this used object can be called as prototype

//yujis son is moji

let moji={
    character: "nonchalant",
    power: "unlimitedcurse"
};
//..after 50 lines of code..u rember he also have all the abilities of yuji..u can basically do

moji.__proto__= yuji;

//now moji has all the abilities of his dad

console.log(moji.moto);
//power property is in both but the main object has 1st preference

console.log(moji.power);

//thats it and now suppose yuji has one more son koji..he only have same things as his father for now
//so u basically creat a obj for him again?? nah! just get it from his father using creat.Object

let koji=Object.create(yuji);

console.log(koji.power);
//suppose koji is grown and now he unlocks a ability called sync u can

koji.ability="sync";
// the only problem is suppose u rember he had this ability after 60 lines of code ull add but itll be a bit confusing 
//i mean u createc obj like that earlier and ur giving it properties now..and u basically cant see that total object in code..