'use strict'
class Human{
    constructor(){
        this.gender = 'Male';
    }
    printGender(){
        console.log(`Genswe: ${this.gender}`)
    }
}
class Person extends Human {
    constructor(){
        // we need super keyword to work with inherited classes
        super();
        this.name = 'Mahendra';
    }
    call = () =>{
        console.log(`Hello ${this.name}`);
    }
}

 
const person = new Person();
person.call();