//8. ES6 Classes Overview
function ES6classes(){
    /*A class in JavaScript is defined using the class keyword, and it is used to create new objects and define their properties and methods. It is essentially a blueprint for creating objects, similar to classes in other programming languages.*/ 
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        greet() {
            console.log(`Hello, my name is ${this.name}.`);
        }
    }
    
    const person1 = new Person("Alice", 30);
    person1.greet();  // Output: Hello, my name is Alice.
    
}
// ES6classes()