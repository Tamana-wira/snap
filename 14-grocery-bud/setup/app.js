// ****** SELECT ITEMS **********
let formEl=document.querySelector(".grocery-form");
let inputEl=document.getElementById("grocery");
let groceryEl=document.querySelector(".grocery-container");
let groceryListEl=document.querySelector(".grocery-list");

// console.log(groceryEl);


let myarray=[];

console.log(inputEl);
// edit option

// ****** EVENT LISTENERS **********
formEl.addEventListener("submit", (e)=> {
  e.preventDefault()

  let item=inputEl.value;
  myarray.push(item);
  
  console.log("array", myarray);
  groceryEl.classList.add("show-container");

  const newDiv = document.createElement("div");
  newDiv.innerText = item;
  groceryListEl.appendChild(newDiv); 
  // myarray.forEach(
  //   (value ,index)=>{
  //   }
  // )
  let mybtn=document.createElement("button");
  mybtn.innerText="edit";

  let removebtn=document.createElement("button");
  removebtn.innerText="remove";
  groceryEl.appendChild(removebtn);

  
  // mybtn.classList.add("clear-btn");
  return groceryEl.appendChild(mybtn);
  
});




// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********



const storage = ["orange", "tomatoes", "onions"];

console.log("storage: " + storage)
for(let i=0; i<storage.length ;i++) {

  console.log("elemenet: " + storage[i], "index: " + i)
  let el =storage[i]; 
}