// Create an Animal class that will have name, color, age, and legs properties. Create different methods for Animal class.

class animal{
    constructor(name, color, age, legs){
        this.name = name;
        this.color = color;
        this.age = age;
        this.legs = legs;
    }
    info (user){
        console.log("This is " + this.name + ".");
    }
}
const lion = new animal('Simba', "yellow-gold", 15, 4);
console.log(lion);
lion.info(lion);

const cheetah = new animal("Chester Cheetah", "spotted", 30, 4);
console.log(cheetah);
cheetah.info(cheetah);