class Human {
    // when an instance is called, the construster method is run
    constructor(name,strength) {
        // these are class properties
        this._name = name;
        this._strength = strength;
        this._speed = 10;
        this.hp = 100;
    }

    get name() {
        return this._name;
    }

    get strength() {
        return this._strength;
    }
    
    incrementStrength() {
        this._strength++;
    }

    eat(healthInc) {
        this._hp += healthInc;
        console.log(`${this._name} is now eating`);
    }

    sleep() {
        this._strength += 10;
        console.log(`strength is now ${this._strength}!`);
    }

    run() {
        this._speed += 3;
        this._hp -= 10;
        console.log(`Speed increased`);
    }

    wash() {
    this._hp += 15;
    console.log(`if you washed and health is now ${this._hp}`);
    }

    
    // static methods only work for this class, not its subclasses 
    static generateLuckyNum() {
        return Math.floor(math.random() * 10000);
    }
}

// instantiate human in code 
var jeffHuman = new  Human("jeff", 10);
console.log(jeffHuman.name);
console.log(jeffHuman.stregnth);
jeffHuman.incrementStrength();
console.log(jeffHuman.strength);

var superHuman = new Human("beto", 100); 
console.log(superHuman.strength);
jeffHuman.eat(20);
superHuman.eat(5);

superHuman.wash();
superHuman.run();
jeffHuman.run();
jeffHuman.wash();


class horse {
    // when an instance is called, the construster method is run
    constructor(name,strength) {
        // these are class properties
        this._name=name;
        this._speed = 20;
        this._strength = strength;
        
    }
    get name() {
        return this._name;
    }

    get strength() {
        return this.strength;
        
    }

    
    incrementstrength() {
        this._strength++;
    }

    eat (speedInc) {
        this._speed += speedInc;
        console.log(`${this._speed} is running fast`);
    }

}
var Horse = new horse("Horse", 20);

class Athlete extends Human {
    
    constructor(name,strength,ability) {
        super(name,streneth);
        this._ability = ability;
    }

    get ability() {
       return this.ability;
    }

}

var powerforward = new Athlete("giannis",90,"Mad ballin");
powerforward.incrementStregnth();
console.log(powerforward.name);
console.log(powerforward.strength);
console.log(powerforward.ability);
console.log(powerforward.run);

class Teacher extends Human {

    constructor(name,strength,ability,fast) {
        super(name,strength,ability);
        this.fast = fast;

    }

    get name() {
        return this._name;
    }

    get strength() {
        return this.strength;
        
    }

    get fast(){
        return this.fast;
    }

    eat(healthInc) {
        this._hp += healthInc;
        console.log(`${this._name} is now eating`);
    }

    ability(tigerClaw) {
        this._strength += tigerClaw;
        console.log(`${this._name} will use tiger swipe on kids who dont respect coding`);
    }

    fast(typeFast) {
        this._speed += typefast;
        console.log(`${this._name} will type fast to mess up ricks notes`);
    }
    
}
var Teacher = new Teacher("El tigre" ,strength,"tigerClaw",25);