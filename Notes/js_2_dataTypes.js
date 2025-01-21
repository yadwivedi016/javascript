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