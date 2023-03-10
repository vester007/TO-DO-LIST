const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

//ADDING AND DEconstING PROPERTY//

const form = document.querySelector("form");
const deleteBut = document.querySelector(".delete__all__button");
//Adding current date to copyright
const newdaate = new Date();
document.querySelector(".copyright__year").innerText = newdaate.getFullYear();
//
//
//ADD EVENT LISTENER FUNCTION
form.addEventListener("submit", addItem);
//
function addItem(e) {
  //This to prevent the FORM from behaving like a normal form
  e.preventDefault();
  //If statement to make sure BLANK SPACES are not allowed into the program.
  let input = document.querySelector(".container__input").value;
  if (input.indexOf("    ") >= 0) {
    alert("Too many blank spaces");
    //
  } else if (ul.childElementCount === 15) {
    alert(
      `Sorry you have reached your maximum event count, you cannot add another until you delete some.`
    );
    //
  } else {
    //To get the value of Input, when submit is triggered.
    //Create new li element
    let newli = document.createElement("li");
    //Add textnode with input value
    newli.classList.add("ul__list__item");
    //create NEW P
    let newPara = document.createElement("p");
    //add input to PARA
    newPara.innerText = input;
    //adding Para to new li
    newli.append(newPara);
    //append to UL
    ul.append(newli);
    //add class list to newpara
    newPara.classList.add("ul__list__para");
    //CREATE ICON ELEMENT
    let iconFile = document.createElement("i");
    let iconFile2 = document.createElement("i");
    let iconFile3 = document.createElement("i");
    iconFile.classList.add("fa-solid", "fa-xmark");
    iconFile2.classList.add("fa-sharp", "fa-regular", "fa-pen-to-square");
    iconFile3.classList.add("fa-solid", "fa-floppy-disk");
    //add to the newly created text
    newli.append(iconFile);
    newli.append(iconFile2);
    newli.append(iconFile3);
    //reset input field
    form.reset();
    //Add date P
    let newP = document.createElement("p");
    //add class to new P
    newP.classList.add("ul__date");
    //getting todays date
    //newdaate.getFullYear().getDate().getMonth() + 1;
    let todaysDate = Intl.DateTimeFormat("en-us", {
      dateStyle: "long",
      timeStyle: "short",
    });
    //Add text to new P
    newP.innerText = todaysDate.format(newdaate);
    //Append New that has innerText and Date inside it to the LI
    newli.append(newP);
    //DISPLAY BLOCK BECAUSE ORIGINAL DISPLAY WAS TURNED OFF.
    newli.style.display = "block";
    //Creating new input for CHECKBOX
    checkboxInput = document.createElement("input");
    //SETTIMNG ATTRIBUTES
    checkboxInput.setAttribute("id", "completed__input");
    checkboxInput.setAttribute("name", "completed__input");
    checkboxInput.setAttribute("type", "checkbox");
    //appending input to LI
    newli.append(checkboxInput);
  }
}
//
//
//
form.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete__all__button")) {
    if (confirm("?????? This Action will delete all events in your To-do list")) {
      ul.innerText = "";
      newH3.style.display = "none";
      deleteBut.style.display = "none";
    }
  }
});
//
//
//
//deleteitem
ul.addEventListener("click", removeItemoredit);

//deconste
function removeItemoredit(e) {
  if (e.target.classList.contains("fa-xmark")) {
    if (confirm("?????? This event will be deleted")) {
      const li = e.target.parentElement;
      ul.removeChild(li);
      if (ul.childElementCount === 1) {
        newH3.style.display = "none";
        deleteBut.style.display = "none";
      }
    }
  }
  if (e.target.classList.contains("fa-pen-to-square")) {
    const gettingsibbling =
      e.target.previousElementSibling.previousElementSibling;
    gettingsibbling.setAttribute("contenteditable", "true");
    gettingsibbling.style.backgroundColor = "#E0E0E0";
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "block";
  }
  if (e.target.classList.contains("fa-floppy-disk")) {
    e.target.previousElementSibling.previousElementSibling.previousElementSibling.setAttribute(
      "contenteditable",
      "false"
    );
    e.target.style.display = "none";
    e.target.previousElementSibling.style.display = "block";
    e.target.previousElementSibling.previousElementSibling.previousElementSibling.style.backgroundColor =
      "inherit";
  }
}

//ANother event listener
form.addEventListener("submit", dItem);
const newH3 = document.querySelector(".ul__header");

function dItem(e) {
  //Get Item heading to appear once i add the first event
  if (newH3) {
    if (ul.childElementCount > 0) {
      newH3.style.display = "block";
      deleteBut.style.display = "block";
    }
  }
}

//Listening for click event for completed activities
const dispCont = document.querySelector(".display__container");

dispCont.addEventListener("click", checkboxCLicking);
///the function
function checkboxCLicking(e) {
  if (e.target.checked === true) {
    //getting the text to dash
    const dashP = e.target.parentElement;
    dashP.style.textDecoration = "line-through 3.5px solid #FF8040";
    dashP.style.opacity = "0.2";
  } else {
    //To undo it
    const dashP = e.target.parentElement;
    dashP.style.textDecoration = "none";
    dashP.style.opacity = "1";
  }
}
//
//
//
//TO DELETE THE BLACK BAR THAT APPEARS BEFORE WHAT I ADDED
form.addEventListener("click", function (e) {
  setTimeout(function () {
    if (e.target.checked === true) {
      //getting the text to dash
      const parentdashP = e.target.parentElement.parentElement;
      console.log(parentdashP);
      const dashP = e.target.parentElement;
      console.log(dashP.classList);
      //To delete the child
      parentdashP.removeChild(dashP);
      if (ul.childElementCount === 1) {
        newH3.style.display = "none";
        deleteBut.style.display = "none";
      }
    }
  }, 2000);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
