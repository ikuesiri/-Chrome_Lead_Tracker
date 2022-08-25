
let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn  = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.getElementById("tab-btn")

// not needed but shows how the URLs in a chrome page is represented
// const tabs = [
//     {url: "https://www.linkedlin.com/in/per-harald-borgen/"}
// ]


inputBtn.addEventListener("click", function() {
    //getting value from input field & pushing into the myLead array
    myLeads.push(inputEl.value);
    //auto clears the input bar, hen you click "Save input"
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads); //this render function is displaying entered links from inputEl.value
 
})


tabBtn.addEventListener("click", function() {
    //Connecting a chrome extension API to enable the tab button to grab the Url from the current page when clicked.
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
     });
}) 

//create a function that holds all the list items

function render(leads) {

    let listItems = "";
    
    for (i = 0; i < myLeads.length; i++) {
    
        // listItems += "<li><a href= '" + leads[i] + " ' target = '_blank'>" + leads[i] + "</a></li>";
        
        //alternatively-using a "template string" for the above expression
        listItems += `
        <li>
            <a href= '${leads[i]}' target = '_blank'>
              ${leads[i]}
            </a>
        </li>
        <hr>
        `;    
    }
    
        ulEl.innerHTML = listItems;
}



//storing the leads from local storage to a variable
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads); // this renderLeads is displaying links saved in the local storage
}


deleteBtn.addEventListener("dblclick", function() {

    localStorage.clear();//clears local storage
    myLeads = [] //clears myLeads
    render(myLeads) // clears DOM (becoz at this point its re-rendering the myLeads variable is empty here)

})











//PRACTICE ZONE

//Using the innerHTML to creat a button element from the Js file

// const container = document.getElementById("container");

// container.innerHTML = "<button onclick='buy()'>Buy!</button>";

// //creating a paragraph with a message, when Buy! button is clicked

// function buy() {
//     container.innerHTML += "<p>Thank You for Buying</p>";
// }


     //template string practice

    //  const recipient = "James";
    //  const sender = "Kola";

    // //  const email ="Hey " + recipient +"! How is it going? Cheers Per";

    //  const email =`
    //  Hey ${recipient}! 
    //  How is it going? 
    //  Cheers ${sender}
    //  `;


    //  console.log(email);




    //localStorage is a global JavaScript variable

// localStorage.setItem("myName", "Kola Ikuesiri");
// console.log(localStorage.getItem("myLeads"));
// localStorage.clear()

// console.log(localStorage.getItem("myLeads"));

//Using JSON.parse() and JSON.stringify()

// let myLeads = `["www.facebook"]`

// // turn myLeads into an array
// myLeads = JSON.parse(myLeads)
// //push a new value to the array
// myLeads.push("www.goal.com")
// //Turn the array in a string again
// myLeads = JSON.stringify(myLeads)

// //log out  the type of datat] type 
// console.log(typeof myLeads)


//Trusy and Falsy values 

// console.log(  Boolean("") )  // false
// console.log(  Boolean("0") )  // true
// console.log(  Boolean(100) )  // true
// console.log(  Boolean(null) )  // false
// console.log(  Boolean([0]) )  // true
// console.log(  Boolean(-0) )  // false


//PARAMETERS

// function welcomeUser(greeting) {
//     let greet = greeting + ", Ikuesiri Kola 😇.";
//     console.log(greet);
// }

// welcomeUser("You're welcome")

    //2 -parameters & applying template literals/strings


// function welcomeUser(greeting, name) {
//     // let greet = greeting + ", " + name + " 😇.";
//     let greet = `${greeting}, ${name} 😇.`;

//     console.log(greet);
// }

// welcomeUser("Hello", "IKUESIRI")


    //Number as a parameter

// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(3, 4));
// console.log(add(9, 102));


   //Array as a parameter

//    function getFirst(arr) {
//        return arr[0]
//    }

//    let allValues  =  ["Tutu","ikuesiri", "kelvin", "cynthia"];
//    let allNumbers  =  [18, 50, 11, 23];

//    console.log(getFirst(allValues));
//    console.log(getFirst(allNumbers));

