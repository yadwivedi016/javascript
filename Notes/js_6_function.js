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