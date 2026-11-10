//classes

//not gonna go deeper into classes but this is enough...
//so basically classes are like a blue print to build objects
//assume ur a builder and u only build certain type of houses...how do u do i mean all houses same...ull have a blueprint basically 


class Player {
  constructor(name, level) {
    this.name = name;//here this takes the value of the object u call..i mean its basically..obj.name

    this.level = level;//in this left side is property of the object and the right side is the constructors parameter
    //to undertsan u can make a mental mode like left side is variable name and the right side is the value i mean that parameter
  }

  levelUp() {
    this.level += 1;//this is a method when u do obj.levelUP() this will be serving as obj
  }
}

const user = new Player("Yash", 1);

//using new u make a object..via blueprint
//constructor is used to make a common properies that are same for many objects by multiple objects..
//every object gets it own copy of name and level