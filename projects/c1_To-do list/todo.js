//Function to add new task to the lis of items
function addFunction(list, taskTxt) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  
  var span = document.createElement("span");
  span.innerText = taskTxt;

  listItem.appendChild(checkBox);
  listItem.appendChild(span);

  list.appendChild(listItem);
}
//Getting the input text of new task
var innewText = document.getElementById("newtaskText");
innewText.focus();
//Onclick button event for "Add" button
var btnNew = document.getElementById("btnAdd");
btnNew.addEventListener("click", function() {
  //Checking for empty textbox
  var newText = innewText.value;
  if(newText == "" || newText == " ") {
    alert("Please add a new task before you click add");
    return false;
  }
  addFunction(document.getElementById("todoList"), newText);
  innewText.focus();
  });
