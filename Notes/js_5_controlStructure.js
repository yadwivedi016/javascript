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