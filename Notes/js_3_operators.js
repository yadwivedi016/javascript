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