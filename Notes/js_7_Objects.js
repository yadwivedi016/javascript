//7. JavaScript Objects
function javascript_objects(){
        /*In JavaScript, an object is a collection of properties and methods. Properties are values associated with the object, while methods are functions that perform actions on the object. */
        
        //1. Creating an Object
            let person = {
                name: "John",
                age: 30,
                isEmployed: true,
                greet: function() {
                    console.log("Hello, " + this.name + "!");
                }
            };
            /*You can access the object’s properties and methods using the dot . or bracket [] notation:*/ 
                // console.log(person.name);       // Output: John
                // console.log(person["age"]);     // Output: 30
                // person.greet();                 // Output: Hello, John!
       
        //2. Using the new Object() Constructor
                let car = new Object();
                car.make = "Toyota";
                car.model = "Camry";
                car.year = 2022;
                car.displayInfo = function() {
                    console.log(this.make + " " + this.model + " (" + this.year + ")");
                };
                
                // car.displayInfo(); // Output: Toyota Camry (2022)

        //3. Using a Constructor Function
            /* A constructor function allows you to create multiple objects with the same structure:*/
                function Person(name, age, isEmployed) {
                    this.name = name;
                    this.age = age;
                    this.isEmployed = isEmployed;
                    this.greet = function() {
                        console.log("Hi, my name is " + this.name);
                    };
                }
                
                let person1 = new Person("Alice", 25, true);
                let person2 = new Person("Bob", 40, false);
                
                // person1.greet(); // Output: Hi, my name is Alice
                // person2.greet(); // Output: Hi, my name is Bob

        //Accessing and Modifying Properties

            /*1. Accessing Properties Dot Notation: 
                    1. object.property
                    2. Bracket Notation: object["property"]*/
                    // console.log(person)
                    // console.log("person.name = ",person.name);       // Output: John
                    // console.log("person.age = ",person["age"]);     // Output: 30
            
            //2. Adding or Modifying Properties
                    person.city = "New York";       // Add a new property
                    person.age = 31;                // Modify an existing property
                    
                    // console.log("person.city = 'New York' :",person.city);       // Output: New York
                    // console.log("person.age = 31; :",person.age);        // Output: 31
            
            //3. Deleting Properties
                    delete person.isEmployed;

                    // console.log(person.isEmployed); // Output: undefined
            
            //4. Checking for Properties
                // console.log('"age" in person : ' ,"age" in person); // Output: true
                // console.log('"salary" in person : ' ,"salary" in person); // Output: false
                // console.log(person.hasOwnProperty("city")); // Output: true
                // console.log(person.hasOwnProperty("gender")); // Output: false

            //5. Built-in Object Methods
                // 1.Object.keys(obj): Returns an array of an object’s property names.
                    // console.log(Object.keys(person)); // Output: ["name", "age", "city"]
                
                //2. Object.values(obj): Returns an array of an object’s values.
                    // console.log(Object.values(person)); // Output: ["John", 31, "New York"]

                //3. Object.entries(obj): Returns an array of key-value pairs.
                    // console.log(Object.entries(person));// Output: [["name", "John"], ["age", 31], ["city", "New York"]]

                //4. Object.assign(target, source): Copies properties from one object to another.
                    let target = {};
                    // Object.assign(target, person);
                    // console.log(target); // Output: { name: "John", age: 31, city: "New York" }

                //5. this in objects
                    /*When this is used inside a method of an object, it refers to the object itself. This allows you to access the properties and methods of that object.*/
                   
                    //1. this in object method 
                        let person_1 = {
                            name: "John",
                            age: 30,
                            greet: function() {
                                console.log("Hello, my name is " + this.name); // 'this' refers to the 'person' object
                            }
                        };
                        
                        // person.greet();  // Output: Hello, my name is John
                
                
                    //2. this in Constructor Functions
                        /*When using constructor functions to create objects, this refers to the object that is being created by the constructor*/
                        function Person(name, age) {
                            this.name = name;
                            this.age = age;
                            this.greet = function() {
                                console.log("Hello, " + this.name);
                            };
                        }
                        
                        let person_2 = new Person("Alice", 25);
                        // person_2.greet();  // Output: Hello, Alice
                              
                


            //6. Methods in objects
                    let calculator = {
                        add: function(a, b) {
                            return a + b;
                        },
                        subtract: function(a, b) {
                            return a - b;
                        }
                    };
                    
                    // console.log(calculator.add(5, 3));       // Output: 8
                    // console.log(calculator.subtract(10, 6)); // Output: 4

            //7. Nested Objects
                    let student = {
                        name: "Emma",
                        age: 22,
                        address: {
                            city: "Los Angeles",
                            zip: 90001
                        },
                        courses: ["Math", "Science", "History"]
                    };
                    
                    // console.log(student.address.city); // Output: Los Angeles
                    // console.log(student.courses[1]);   // Output: Science
            
            // 8. Dynamic Property Access in JavaScript
                //1. Using Bracket Notation
                    //In JavaScript, bracket notation allows you to access object properties dynamically using variables or expressions.
                    let member= {
                        name: "John",
                        age: 30,
                        city: "New York"
                    };
                    
                    let prop = "name";  // Property name stored in a variable
                    // console.log(member[prop]);  // Output: John
                                
                //2. Using Template Literals with Bracket Notation
                    let member_1 = {
                        firstName: "John",
                        lastName: "Doe"
                    };
                    
                    let prefix = "first";
                    // let fullName = `${prefix}Name`;  // "firstName"
                    
                    // console.log(person[fullName]);  // Output: John
            
            //9. Object Destructuring
                //Destructuring allows you to extract values from objects and assign them to variables.
                let person_3 = { name: "John", age: 30 };
                let { name, age } = person;
                // console.log(name); // John
                // console.log(age); // 30

            //10. Prototypes and Prototype Chain
                /*In JavaScript, prototypes are like blueprints for objects, and the prototype chain is the mechanism that allows objects to inherit properties and methods from other objects.

                Prototypes
                Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. Think of a prototype as a parent or template for an object.

                Prototype Chain
                When you try to access a property or method on an object, JavaScript will first check if the object has that property. If not, it looks for the property in the object's prototype, then the prototype’s prototype, and so on. This is called the prototype chain.*/

                // Creating an object with a prototype method
                    function Person(name) {
                        this.name = name;
                    }
                    
                    // Adding a method to the prototype of Person
                    Person.prototype.greet = function() {
                        console.log("Hello, " + this.name);
                    };
                    
                    // Creating a new object from the Person function
                    let person_4 = new Person("Alice");
                    
                    // person1 does not have the greet method directly, but it can access it through the prototype
                    // person_4.greet(); // Hello, Alice
  
                


}
javascript_objects()  