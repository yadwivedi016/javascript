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