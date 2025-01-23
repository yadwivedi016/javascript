//9. Array
function arrayjs(){
    // Creating and Modifying Arrays in JavaScript
        /*In JavaScript, arrays are a special type of object used to store ordered collections of data. They can hold items of any type (strings, numbers, objects, or even other arrays).*/

            //1. Creating Arrays
                    const fruits = ["Apple", "Banana", "Mango"];
                    console.log(fruits);  // Output: ["Apple", "Banana", "Mango"]
                
                // Using the Array Constructor:
                    const numbers = new Array(1, 2, 3);
                    console.log(numbers);  // Output: [1, 2, 3]

                //Empty Array:
                    const emptyArray = [];
                    console.log(emptyArray);  // Output: []

                //Array with Fixed Size (Uninitialized Values):
                    const fixedArray = new Array(5);
                    console.log(fixedArray);  // Output: [ <5 empty items> ]

            //2. Accessing Array Elements
                /*Arrays are zero-indexed, meaning the first element has an index of 0.*/
                    const fruits1 = ["Apple", "Banana", "Mango"];
                    console.log(fruits1[0]);  // Output: Apple      
                    console.log(fruits1[2]);  // Output: Mango

            //3. Modifying Arrays
                //Adding Elements:
                    //1.Using push() (Adds to the end):
                        const fruits2 = ["Apple", "Banana"];
                        fruits2.push("Mango");
                        console.log(fruits2);  // Output: ["Apple", "Banana", "Mango"]
                    
                    //2.Using unshift() (Adds to the beginning):
                        const fruits4 = ["Apple", "Banana"];
                        fruits4.unshift("Mango");
                        console.log(fruits4);  // Output: ["Mango", "Apple", "Banana"]

                //Removing Elements:
                    //1. Using pop() (Removes from the end):
                        const fruits5 = ["Apple", "Banana", "Mango"];
                        fruits5.pop();
                        console.log(fruits5);  // Output: ["Apple", "Banana"]
                    
                    //2. Using shift() (Removes from the beginning):
                            const fruits6 = ["Apple", "Banana", "Mango"];
                            fruits6.shift();
                            console.log(fruits6);  // Output: ["Banana", "Mango"]

                    //3. Adding/Removing Specific Elements with splice():
                        // Syntax: array.splice(start, deleteCount, ...itemsToAdd)
                            const fruits7 = ["Apple", "Banana", "Mango"];
                            fruits7.splice(1, 1, "Orange");  // Replaces "Banana" with "Orange"
                            console.log(fruits7);  // Output: ["Apple", "Orange", "Mango"]

                    //4. Example: Combining Operations
                        let numbers1 = [1, 2, 3, 4, 5];

                        // Add an element at the end
                        numbers1.push(6);  // [1, 2, 3, 4, 5, 6]
                        
                        // Remove the first element
                        numbers1.shift();  // [2, 3, 4, 5, 6]
                        
                        // Replace the middle element
                        numbers1.splice(2, 1, 10);  // [2, 3, 10, 5, 6]
                        
                        // Reverse the array
                        numbers1.reverse();  // [6, 5, 10, 3, 2]
                        
                        console.log(numbers1);
                    
                        
            // 4. Other Modifications
                    //Concatenating Arrays (concat):
                        const arr1 = [1, 2];
                        const arr2 = [3, 4];
                        const combined = arr1.concat(arr2);
                        console.log(combined);  // Output: [1, 2, 3, 4]
            
                    // Copying Array Elements (slice):
                        const fruits8 = ["Apple", "Banana", "Mango"];
                        const newFruits = fruits8.slice(1, 3);  // Copy from index 1 to 3 (not inclusive)
                        console.log(newFruits);  // Output: ["Banana", "Mango"]
                    
                    //Reversing an Array (reverse):
                        const number = [1, 2, 3];
                        number.reverse();
                        console.log(number);  // Output: [3, 2, 1]
                    
                    //Filling an Array (fill):
                        const numbers2 = new Array(5).fill(0);
                        console.log(numbers2);  // Output: [0, 0, 0, 0, 0]

                    //Finding Elements (indexOf, includes):
                        const fruits9 = ["Apple", "Banana", "Mango"];
                        console.log(fruits9.indexOf("Banana"));  // Output: 1
                        console.log(fruits9.includes("Orange"));  // Output: false
            
            //5. Iterating Over Arrays
                    //1. Using for Loop:
                        const fruits_1 = ["Apple", "Banana", "Mango"];
                        for (let i = 0; i < fruits.length; i++) {
                            console.log(fruits_1[i]);
                        }
                        // Output:
                        // Apple
                        // Banana
                        // Mango

                    //2. Using for...of Loop:
                        for (let fruit of fruits_1) {
                            console.log(fruit);
                        }
                        // Output:
                        // Apple
                        // Banana
                        // Mango

                    //3. Using forEach:
                        fruits_1.forEach((fruit, index) => {
                            console.log(`${index}: ${fruit}`);
                        });
                        // Output:
                        // 0: Apple
                        // 1: Banana
                        // 2: Mango
            
            //6. Spread Operator (...) 
                    /*The spread operator (...) is a powerful feature introduced in ES6. It allows you to expand elements of an iterable (like arrays, objects, or strings) into individual elements. It makes copying, merging, and passing elements easier and more concise.*/

                    //1. Using Spread with Arrays
                        //a. Expanding an Array
                            const numbers3 = [1, 2, 3];
                            const expanded = [...numbers3, 4, 5];
                            console.log(expanded);  // Output: [1, 2, 3, 4, 5]
                        
                    
                        //b. Copying an Array
                            const original = [1, 2, 3];
                            const copy = [...original];
                            console.log(copy);  // Output: [1, 2, 3]

                        //c. Merging Arrays
                            const arr = [1, 2, 3];
                            const arr_1 = [4, 5, 6];
                            const merged = [...arr1, ...arr2];
                            console.log(merged);  // Output: [1, 2, 3, 4, 5, 6]
                        
                        //d. Passing Array Elements as Function Arguments
                            const number_1 = [10, 20, 30];
                            const max = Math.max(...number_1);
                            console.log(max);  // Output: 30

                    //2. Using Spread with Objects
                        //a. Expanding an Object
                            //Spread operator can copy all properties from one object to another.
                            const person = { name: "John", age: 30 };
                            const newPerson = { ...person, job: "Developer" };
                            console.log(newPerson);
                            // Output: { name: "John", age: 30, job: "Developer" }
                        
                        //b. Copying an Object
                            const originals = { a: 1, b: 2 };
                            const copyd = { ...original };
                            console.log(copy);  // Output: { a: 1, b: 2 }
                        
                            //c. Merging Objects
                                //Later properties overwrite earlier ones if keys are the same.
                                const obj1 = { a: 1, b: 2 };
                                const obj2 = { b: 3, c: 4 };
                                const merge = { ...obj1, ...obj2 };
                                console.log(merge);  // Output: { a: 1, b: 3, c: 4 }

                    //3. Using Spread with Strings
                        //a. Splitting a String into Characters
                            const str = "Hello";
                            const chars = [...str];
                            console.log(chars);  // Output: ["H", "e", "l", "l", "o"]
                                        
                    //4. Combining Arrays and Objects
                        //You can combine arrays and objects using the spread operator.
                            const ar = [1, 2, 3];
                            const obj = { a: 4, b: 5 };
                            const combine = [...arr, { ...obj }];
                            console.log(combine);
                            // Output: [1, 2, 3, { a: 4, b: 5 }]                     
}
// arrayjs()
