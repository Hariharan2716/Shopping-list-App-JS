// using Array to store shopping list
let ShoppingList = [];

// Selecting elements
const itemInput = document.getElementById("inputItem");
const addItemButton = document.getElementById("addItem");
const shoppingListContainer = document.getElementById("shoppingList");

// Function to update the list display
const displayList = () =>{
  shoppingListContainer.innerHTML =""; //Clear the list before updating
  ShoppingList.forEach((item, index)=>{
    const li = document.createElement("li");
    li.innerHTML = `${item} <button onclick="removeItem(${index})">Remove</button>`;
    shoppingListContainer.appendChild(li);
  })
}

//  Function to add item to list

let addItem = () =>{
  const newItem = itemInput.value.trim();
  if(newItem) {
    ShoppingList.push(newItem);
    itemInput.value = "" // this clears the input field
    displayList(); //this is a inbuilt function that updates the UI(user interface)
  }

}
// Function to remove an Item

let removeItem = (index)=> {
  ShoppingList.splice(index, 1) //Remove 1 item at the given index
  displayList(); //Refrest the display list

}
// splice(index, 1); removes 1 item from shoppingList at the given index.
// why use splice () this modifies the original array, while .fliter() creates a new array.

// Event Listener for the Buttion

addItemButton.addEventListener("click" , addItem)

itemInput.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    addItem();
  }
})