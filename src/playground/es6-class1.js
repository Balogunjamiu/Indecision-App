
class Person {
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age
    }
    getGreeting(){
        return `Hi, i am  ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }
}
class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major
    }
    hasMajor(){
        return !!this.major     
    }
    getDescription(){
        let description = super.getDescription()
        if (this.hasMajor){
            description += ` Their major is ${this.major}`
        }
        return description
    }
}
class Traveller extends Person {
    constructor (name, age , homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting(){
        let greeting = super.getGreeting()
        if(this.homeLocation){
            greeting += ` i am visiting from ${this.homeLocation}`            
        }
        return greeting
    }
}
const me = new Traveller("balogun jamiu", 21, 'lagos')
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());

