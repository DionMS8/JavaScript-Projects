// var btns = document.querySelectorAll("#book-list .delete");

// NOTE: SOMETIMES WHEN MULTIPLE ELEMENTS ARE SELECTED FROM THE DOM, IT IS NECESSARY TO CONVERT THEM INTO AN ARRAY SO THAT DOM MANIPULATION METHODS CAN BE APPLIED

/*Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
    
        const li = e.target.parentElement;

        li.parentNode.removeChild(li);


    })
})*/

//-----[PREVENT DEFAULT BEHAVIOUR]------------------------------------------------------------------------------------------

/*const link = document.querySelector("#page-banner a");

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("Navigation to", e.target.textContent, "was prevented");
});*/



//-----[EVENT BUBBLING]----------------------------------------------------------------------------------------------------------------------

const list = document.querySelector("#book-list ul");

// DELETING THE VACCINES 
list.addEventListener("click", (e) => {
  if(e.target.className == "delete") {
      const li = e.target.parentElement;
      //li.parentNode.removeChild(li);
      //SINCE THE PARENT NODE OF LI IS UL
      list.removeChild(li);
  }
});


//-----[FORMS]-------------------------------------------------------------------------------------------------------------------------

// element = document.forms["id"]

// ADD VACCINES
const addForm = document.forms["add-vaccine"];

addForm.addEventListener("submit", (e) => {
  // THE DEFAULT BEHAVIOUR OF A BUTTON IS TO RELOAD THE PAGE SO WE MUST REMOVE THAT 
  e.preventDefault(); 
  
  // GRABBING THE USER INPUT FROM THE FORM
  const value = addForm.querySelector('input[type="text"]').value; 

  // CREATING THE DOM ELEMENTS
  const li = document.createElement("li");
  const vaxName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // ADDING TEXT CONTENT TO THE DOM ELEMENTS
  vaxName.textContent = value;
  deleteBtn.textContent = "delete";

  // ADDING CLASSES SO THAT THE CORRECT CSS STYLING IS APPLIED 
  vaxName.classList.add("name");
  deleteBtn.classList.add("delete");
  // OR element.classList.remove("classname")

  // APPENDING THE ELEMENTS TO THE DOM
  li.appendChild(vaxName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

})


//-----[CAPTURING ATTRIBUTES]-----------------------------------------------------------------------------------------------------------------------------------------------
/*
element.getAtrribute("id")
element.getAtrribute("class")
element.getAtrribute("href")

element.setAtrribute("id", "newid")
element.setAtrribute("class", "newclass")
element.setAtrribute("href", "newhref")

// CHECKING IF AN HTML ELEMENT HAS A PARTICULAR ATTRIBUTE
// THIS WILL RETURN A TRUE/FALSE
element.hasAtrribute("id")
element.hasAtrribute("class")
element.hasAtrribute("href")

// REMOVING AN TRRIBUTE FROM AN HTML ELEMENT
element.removeAtrribute("id")
element.removeAtrribute("class")
element.removeAtrribute("href")

*/

//-----[CSS STYLING]--------------------------------------------------------------------

// element.style.cssproperty = "value"
// element.style.marginTop = "20px"

// .className => THIS IS USED TO ADD AN ELEMENT TO A CLASS

 

//-----[CHECKBOXES AND CHANGE EVENTS]---------------------------------------------------------------------------------

// HIDING THE VACCINE LIST
// THIS WORKS BASED ON THE CSS DISPLAY PROPERTY 

// GRABBING A REFERENCE FOR THE CHECKBOX
const hideBox = document.querySelector('#hide');

// ADDING AN EVENT LISTENER TO THE CHECKBOX
hideBox.addEventListener("change", (e) => {
  if(hideBox.checked){
    list.style.display = "none"; // LIST IS HIDDEN
  } else {
    list.style.display = "initial"; // LIST IS VISIBLE
  }
});



