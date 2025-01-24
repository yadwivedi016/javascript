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
            
            //3. hasAttribute , hasAttribute, removeAttribute:
                //hasAttribute and removeAttribute
                    let click = document.getElementById("click");
                    let attr = document.getElementById("six");

                    console.log("\nby using hasAttribute :\n");
                    console.log("attr.hasAttribute('hidden') : ",attr.hasAttribute('hidden'))
                    click.addEventListener("click", () => {
                        if (attr.hasAttribute("hidden")) {
                            attr.removeAttribute("hidden"); // Removes the hidden attribute to make it visible
                        } else {
                            attr.setAttribute("hidden", ""); // Adds the hidden attribute to hide the element
                            console.log("attr.hasAttribute('hidden') : ",attr.hasAttribute('hidden'))
                        }
                    });
                
                //hasAttributes
                    let stro = document.getElementsByTagName("strong")
                    console.log("\nby using hasAttributes :\n");
                    console.log("strong tag hasAttributes",stro[0].hasAttributes())

            //4. Event Listner:
                    let element = document.getElementById("eight");
                    element.addEventListener("mouseover",()=>{
                        if(element.innerHTML === "Hey This is Javascript"){
                            element.innerHTML = "Event Listner amazing right!!!"
                        }
                    })

                    element.addEventListener("mouseout",()=>{
                        if(element.innerHTML === "Event Listner amazing right!!!"){
                            element.innerHTML = "Hey This is Javascript"
                        }
                    }) 
                   
 }
dom()