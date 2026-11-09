objects/classes

//not gonna go deeper into classes but this is enough...
//so basically classes are like a blue print to build objects
//assume ur a builder and u only build certain type of houses...how do u do i mean all houses same...ull have a blueprint basically 


class Player {
  constructor(name, level) {
    this.name = name;//here this takes the value of the object u call..i mean its basically..obj.name

    this.level = level;//the first level is the name of variable i mean the one with which u call or assign and the second name is parameter orange coloured
  }

  levelUp() {
    this.level += 1;//this is a method when u do obj.levelUP() this will be serving as obj
  }
}

const user = new Player("Yash", 1);

//using new u make a object..via blueprint
//constructor is used to make a common properies that are shared by multiple objects..
