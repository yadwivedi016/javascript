// 1. Variable var , let , const :
function variables(){
// 1.var
    console.log("1. var has a functioned scope ");
    var a = 1;
    console.log("var a =",a);
    a = 2;
    console.log("a =", a)// reasigne value
    var a = 3;
    console.log("var a =", a) //redifine
    function myFuncVar(){
        var var_temp = 4
        console.log("Inside function a : ",a)
    }
    myFuncVar()
    // console.log(let_temp)   // This will Throw error because outside a function

// 2.let
    console.log("\n2. let has a block scope ");
    let b = 2;
    console.log("b =",b);// reasigne value
    b = 2;
    /*console.log("b =", b)
    var b = 3;
    console.log("var b =", b) */ //but cannot be redefine in same block like this this will thrown an error
    function myFuncLet(){
        let let_temp = 4;
        console.log("Inside function b : ",b)
    }
    myFuncVar()
   //console.log(let_temp)   //This will Throw error because outside a block

// 3.const
    console.log("\n3. const has a block scope ");
    const c = 1;
    console.log("const c = ",1);
    /*c = 2;
    console.log("c = ",1);*/ //This Will throw error cannot reasign in same scome
    /*const c = 4;
    console.log("const c = ",c)*/ // This will Throw error can not redefine const in same scome
    function myFuncConst(){
        const const_temp = 4;
        console.log("Inside function c : ",c)
    }
    myFuncConst()
    // console.log(const_temp)   //This will Throw error because outside a block
}
// variables()


//2. Data Types (String, Number, Boolean, Undefined, Null, Symbol, BigInt)
function dataTypes(){
//1. String
    console.log("\n1. string");
    let name = "John"; // Double quotes
    let greeting = 'Hello'; // Single quotes
    let message = `Welcome, ${name}`; // Template literal
    console.log("let name =",name,"\nlet greeting =",greeting,"\nlet message = `welcome, ${name}` = ",message); // "Welcome, John"

//2. Number
    console.log("\n2. Number");
    let age = 25; // Integer
    let price = 19.99; // Float
    let result = Infinity; // Special value
    console.log("let age = ",age ,"\nlet price = ",price,"\nresult+age = ",result,age + price); // 44.99

//3. Boolean
    console.log("\n3. Boolean");
    let isLoggedIn = true;
    let hasAccess = false;
    console.log("let isLoggedIn = true\nlet hasAccess = false;","\nisLoggedIn && hasAccess =",isLoggedIn && hasAccess); // false

//4. Undefined
    console.log("\n4. Undefined");
    let x;
    console.log(x); // undefined

//5. Null
    console.log("\n5. Null");
    let user = null; // No user is logged in
    console.log(user); // null

//6. Symbol
    console.log("\n6. Symbol");
    let sym1 = Symbol('id');
    let sym2 = Symbol('id');
    console.log(sym1 === sym2); // false (Each symbol is unique)

//7. BigInt
    console.log("\n7. Symbol");
    let bigNumber = 123456789012345678901234567890n; // BigInt literal
    let anotherBig = BigInt("123456789012345678901234567890");
    console.log(bigNumber + anotherBig); // 246913578024691357802469135780n

//8. Objects
    console.log("\n8. Objects")
    let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    console.log("person =",person)

    console.log("Type checking use typof",typeof(person) ,typeof "Hello"); // "string"
}
// dataTypes() 


//3.Operators (Arithmetic, Comparison, Logical, Assignment, Ternary)
function operators(){
    // Arithmetic Operators
let a = 10, b = 3;

// Addition, Subtraction, Multiplication, Division, Modulus
let add = a + b;        // 13
let subtract = a - b;   // 7
let multiply = a * b;   // 30
let divide = a / b;     // 3.333...
let modulus = a % b;    // 1

console.log("Arithmetic:");
console.log("Addition:", add);
console.log("Subtraction:", subtract);
console.log("Multiplication:", multiply);
console.log("Division:", divide);
console.log("Modulus:", modulus);


// Comparison Operators

let x = 5, y = "5";

// Comparing values and types
let isEqual = x == y;      // true (compares value)
let isStrictEqual = x === y; // false (compares value & type)
let isNotEqual = x != y;   // false
let isStrictNotEqual = x !== y; // true
let isGreaterThan = x > 3;   // true
let isLessThanOrEqual = x <= 5; // true

console.log("\nComparison:");
console.log("Equal (==):", isEqual);
console.log("Strict Equal (===):", isStrictEqual);
console.log("Not Equal (!=):", isNotEqual);
console.log("Strict Not Equal (!==):", isStrictNotEqual);
console.log("Greater Than:", isGreaterThan);
console.log("Less Than or Equal:", isLessThanOrEqual);

// Logical Operators
let isSunny = true, isWeekend = false;

// AND, OR, NOT
let andResult = isSunny && isWeekend;   // false
let orResult = isSunny || isWeekend;    // true
let notResult = !isSunny;               // false

console.log("\nLogical:");
console.log("AND (&&):", andResult);
console.log("OR (||):", orResult);
console.log("NOT (!):", notResult);

// Assignment Operators
let num = 10;

// Using assignment operators
num += 5; // num = num + 5
let numAfterSubtraction = num -= 3; // num = num - 3
let numAfterMultiplication = num *= 2; // num = num * 2
let numAfterDivision = num /= 4; // num = num / 4
let numAfterModulus = num %= 3; // num = num % 3

console.log("\nAssignment:");
console.log("After += 5:", num);
console.log("After -= 3:", numAfterSubtraction);
console.log("After *= 2:", numAfterMultiplication);
console.log("After /= 4:", numAfterDivision);
console.log("After %= 3:", numAfterModulus);

// Ternary Operator
let age = 20;
let status = age >= 18 ? "Adult" : "Minor"; // Checks if age is greater than or equal to 18

console.log("\nTernary:");
console.log("Status:", status); // "Adult"
    
}
// operators()


//4.Input, Output and Prompt
function input_output_prompt(){
    // Input using prompt()
    let name = prompt("What is your name?");
    let age = prompt("How old are you?");

    // Output using alert()
    alert("Hello " + name + "! You are " + age + " years old.");

    // Output using console.log()
    console.log("User's Name:", name);
    console.log("User's Age:", age);

    // Example of further interaction
    let favoriteColor = prompt("What is your favorite color?");
    alert("Your favorite color is " + favoriteColor + ".");
    console.log("User's Favorite Color:", favoriteColor);

}
// input_output_prompt()


//5. Control Structures Conditionals (if, else if, else, switch) 
    // Loops (for, while, do...while, for...in, for...of 
    // Break and Continue Statements
function controlStructure(){
//1. if, else if, else
    console.log("\n1. if, else if, else")
    let age = 18;

    if (age < 18) {
    console.log("You are underage.");
    } else if (age === 18) {  //=== for type cheking
    console.log("You just turned an adult!");
    } else {
    console.log("You are an adult.");
    }

//2. switch
    console.log("\n2. Switch")
    let day = 3;

    switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
    }

//3.for loop
    console.log("\n3.Loops")
    for (let i = 1; i <= 5; i++) {
        console.log("Iteration", i);
    }

//4.while loop
    console.log("\n4.While")
    let count = 1;

    while (count <= 5) {
        console.log("Count:", count);
        count++;
    }

//5. do...while 
    console.log("\n5.do...while");
    let num = 1;

    do {
        console.log("Number:", num);
        num++;
    } while (num <= 5);

//6. for...in Loop : Iterates over the properties of an object.
    console.log("\n6.for...in Loop");
    let user = { name: "Alice", age: 25 };

    for (let key in user) {
        console.log(`${key}: ${user[key]}`);
    }
    // Output:
    // name: Alice
    // age: 25

//7.for...of Loop : Iterates over iterable objects (e.g., arrays, strings).
    console.log("\n7.for...of Loop");
    let colors = ["red", "green", "blue"];

    for (let color of colors) {
        console.log(color);
    }
    // Output:
    // red
    // green
    // blue

//8.Break and Continue Statements
    //1.break
        console.log("\nStatments :\n1.break statment")
        for (let i = 1; i <= 5; i++) {
            if (i === 3) {
                break; // Exits the loop when i is 3
            }
            console.log(i);
        }
        
    //2.continue
        console.log("\n2.continue statment")
        for (let i = 1; i <= 5; i++) {
            if (i === 3) {
                continue; // skips the loop when i is 3
            }
            console.log(i);
        }

}
// controlStructure()


//6. functions
function functions(){
    //1. Function Declaration and Invocation
        function function_declaration_and_Invocation() {
            //Function Declaration
                /*A function declaration is when you define a function using the function keyword, followed by the function's name, parameters, and the body.*/
                    function greet(name) {
                        console.log("Hello, " + name + "!");
                    }

                /*A function invocation is when you execute (or call) a function by using its name followed by parentheses. You can pass arguments inside the parentheses.*/
            
            //Function Invocation
                 /*A function invocation is when you execute (or call) a function by using its name followed by parentheses. You can pass arguments inside the parentheses.*/
                    greet("Alice"); // Output: Hello, Alice!

        }
        // function_declaration_and_Invocation()


    //2. Parameters and Return Values
        function Parameters_and_Return_Values(){
            /*1. Parameters Parameters are variables defined in the function declaration that act as placeholders for the values (arguments) passed to the function when it's invoked.
            You can define multiple parameters in a function, separated by commas.*/
                function greet(name, age) {
                    console.log("Hello, " + name + "! You are " + age + " years old.");
                }
                greet("Alice", 25); // Output: Hello, Alice! You are 25 years old.

            //2. Return Values
                /*Functions can use the return statement to send a value back to the caller.
                If no return statement is present, the function returns undefined by default.*/ 
                        function square(number) {
                            return number * number;
                        }
                        let result = square(4); // The function returns 16
                        console.log("Square:", result); // Output: Square: 16
                
        }
        // Parameters_and_Return_Values()


    //3. Arrow Functions
        function arrow_Functions(){
           /* Arrow functions are a concise syntax for writing functions introduced in ES6 (ECMAScript 2015). They provide a simpler way to write functions and have some differences in behavior compared to traditional function declarations.*/
                const add = (a, b) => {
                    return a + b;
                };
                console.log(add(1,2))
           /*If the function body has only one statement and returns a value, you can omit the braces {} and the return keyword:*/
                let greet = () => console.log("Helloo!");
                greet()
        }
        // arrow_Functions()
    

    //4. Function Expressions
        function functionExpressions(){
            /*A function expression is a way to define a function as part of an expression. It can be assigned to a variable, passed as an argument to another function, or used as an IIFE (Immediately Invoked Function Expression).*/

            //1. Basic Function Expression
                const greet = function(name) {
                    return "Hello, " + name + "!";
                };
                // console.log(greet("Alice")); // Output: Hello, Alice!
            
            //2. Anonymous Function Expression
                // The function doesn't have a name.
                const square = function(num) {
                    return num * num;
                };
                // console.log(square(4)); // Output: 16

            //3. Named Function Expression
                //The function has a name, which can be useful for debugging.
                const factorial = function fact(n) {
                    if (n <= 1) return 1;
                    return n * fact(n - 1); // Using the function's name for recursion
                };
                // console.log(factorial(5)); // Output: 120
            
            //Special Uses of Function Expressions
                //1. Passing a Function as an Argument javascript
                    const numbers = [1, 2, 3, 4, 5];
                    const doubled = numbers.map(function(num) {
                        return num * 2;
                    });
                    // console.log(doubled); // Output: [2, 4, 6, 8, 10]

                //2. Storing Functions in Arraysjavascript
                    const operations = [
                        function(a, b) { return a + b; },
                        function(a, b) { return a - b; },
                        function(a, b) { return a * b; },
                    ];
                    // console.log(operations[0](5, 3)); // Output: 8
                    // console.log(operations[1](5, 3)); // Output: 2
                    // console.log(operations[2](5, 3)); // Output: 15

        }
        // functionExpressions()


    //5. Default Parameter
        function defaultParameter(){
            //1. Default Parameters
                /*Default parameters allow you to specify default values for function parameters. If no argument is passed or if the argument is undefined, the default value will be used.*/

                //1. Simple Default Parameter
                function greet_1(name = "Guest") {
                    console.log("Hello, " + name + "!");
                }
                
                // greet_1("Alice"); // Output: Hello, Alice!
                // greet_1();        // Output: Hello, Guest!

            //2. Default Parameter with Expressions
                function multiply(a, b = 2) {
                    return a * b;
                }
                
                console.log(multiply(3, 5)); // Output: 15
                console.log(multiply(3));    // Output: 6 (default value of b is 2)
            
            //3. Default Parameter with Objects
                function createUser(name = "Anonymous", age = 18) {
                    return { name: name, age: age };
                }
                
                console.log(createUser("Alice", 25)); // Output: { name: "Alice", age: 25 }
                console.log(createUser("Bob"));       // Output: { name: "Bob", age: 18 }
                console.log(createUser());            // Output: { name: "Anonymous", age: 18 }

            //4. Default Parameter with undefined
                 //If you explicitly pass undefined, the default parameter will still be used.
                    function greet_2(name = "Guest") {
                        console.log("Hello, " + name + "!");
                    }
                    
                    greet_2(undefined);  // Output: Hello, Guest!
            
            //5. Using Default Parameters with Destructuring
                function createProfile({ name = "Anonymous", age = 18 } = {}) {
                    return `Name: ${name}, Age: ${age}`;
                }
                
                console.log(createProfile({ name: "Alice", age: 25 }));  // Output: Name: Alice, Age: 25
                console.log(createProfile({}));                          // Output: Name: Anonymous, Age: 18
                console.log(createProfile());                            // Output: Name: Anonymous, Age: 18

                // When no argument is passed, the default value {} is used.
                // If an object is passed but without some properties, the default values for missing properties are applied.
        }
    // defaultParameter()


    //6. Rest Parameters
        // You can combine rest parameters with other regular parameters, but the rest parameter must always come last.
        function sum(...numbers) {
            console.log(numbers)
            // return numbers.reduce((acc, num) => acc + num, 0);
        }
            // console.log(sum(1, 2, 3, 4)); // Output: 10
            // console.log(sum(5, 10));      // Output: 15
            // console.log(sum(1,2,3));           // Output: 0

        
            // You can combine rest parameters with other regular parameters, but the rest parameter must always come last.
            function sum(...numbers) {
                console.log(numbers)
                // return numbers.reduce((acc, num) => acc + num, 0);
            }
            
            // console.log(sum(1, 2, 3, 4)); // Output: 10
            // console.log(sum(5, 10));      // Output: 15
            // console.log(sum(1,2,3));           // Output: 0
    

    //7. Callback function  
        function greet_3(name, callback) {
                // A callback function is a function that is passed as an argument to another function and is executed once the outer function has completed its task. Callbacks allow for asynchronous programming and are widely used in JavaScript, especially in handling events, asynchronous operations like setTimeout(), and interacting with APIs.
            console.log("Hello, " + name + "!");
            callback();  // Execute the callback after greeting
        }
        
        function sayGoodbye() {
            console.log("Goodbye!");
        }
        // greet_3("Alice", sayGoodbye); // Output:
        // Hello, Alice!
        // Goodbye!

    
    //8. Immediately Invoked Function Expressions (IIFE)
        ///An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after its creation. It helps in creating a local scope for variables, preventing them from polluting the global scope.
        //    (function() {
        //         console.log("This function runs immediately!");
        //     })(); // Output: This function runs immediately
    
}
// functions()


//7. JavaScript Objects

        