//DOM :-
//  The Document Object Model (DOM) represents the structure of an HTML document as a tree of objects. Each HTML element is a node in this tree, and it allows JavaScript to interact dynamically with the web page.
function dom(){
    //1. DOM Selector:
        //Finding HTML elements by id
            let firstH1 = document.getElementById("one");
            console.log("by using getElementById :")
            console.log(firstH1.innerHTML);

        //Finding HTML elements by tag name
            let secondH1 = document.getElementsByTagName("h1");
            console.log("\nby using getElementsByTagName:")
            for(let i = 0; i < secondH1.length;i++){
                data = secondH1[i].innerHTML
                console.log(data)
            }
        
        //Finding HTML elements by class name
            let thirdH1 = document.getElementsByClassName("three");
            console.log("\nby using getElementsByClassName:\n")
            for(let i = 0; i < thirdH1.length; i++ ){
                data = thirdH1[i].innerHTML;
                console.log(data)
            }

        //Finding HTML elements by CSS selectors
            //1. querySelector:
                let forthH1 = document.querySelector(".four")
                console.log("\nby using querySelector:\n");
                // forthH1.style.color = "red"; //uncomment for result
                data = forthH1.innerHTML;
                console.log(data);
            
            //2. querySelectorAll:
                let collectionP = document.querySelectorAll(".five");
                console.log("\nby using querySelectorAll:\n");
                for (let i = 0; i < collectionP.length; i++) {
                    // data = collectionP[i].style.color = "red"; //uncomment for result
                    let content = collectionP[i].innerHTML;
                    console.log(content)
                }

}    
dom()