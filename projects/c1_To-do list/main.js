// Declarations
var taskInput = document.getElementById("new-task");
var addButton = document.getElementById("ok-button");
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");
var flag = "true";
var editInput,label;

//Create newTaskItems
var createNewTaskItems = function(taskInputValue) {
  //Create new list element
  var listElement = document.createElement("li");
  //create checkbox
  var checkBox = document.createElement("input");
  //Create Text label
  var label = document.createElement("label");
  //create edit
  var editButton = document.createElement("button");
  var editSpan = document.createElement("span");
  //create delete
  var deleteButton = document.createElement("button");
  var deleteSpan = document.createElement("span");

  checkBox.type = "checkbox";
  editButton.className = "edit";
  editSpan.className = "glyphicon glyphicon-edit";
  editSpan.ariaHidden = "true";
  deleteButton.className = "delete";
  deleteSpan.className = "glyphicon glyphicon-remove";
  deleteSpan.ariaHidden = "true";
  label.innerText = taskInputValue;

  //Appending all the elements
  listElement.appendChild(checkBox);
  listElement.appendChild(label);
  // listElement.appendChild(editInput);
  listElement.appendChild(editButton);
  editButton.appendChild(editSpan);
  listElement.appendChild(deleteButton);
  deleteButton.appendChild(deleteSpan);

  return listElement;

}

var addTask = function() {
  console.log("Add task");
  //Create a new row with all elements like checkbox, edit , delete and text from user
  document.getElementById('errorMessage').style.visibility = "hidden";

  var listElement = createNewTaskItems(taskInput.value);
  if(taskInput.value !== "") {
    incompleteTasksHolder.appendChild(listElement);
    bindTaskItems(listElement, "incompleteTask");
    taskInput.value = "";
  }
  else {
      document.getElementById('errorMessage').style.visibility = "visible";
  }
}

 var editTask = function() {
   console.log("Edit task");

   var listElement = this.parentNode;
    if(flag == "true") {
       label = listElement.querySelector("label");
      //Input text
      editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = label.innerText;
      listElement.replaceChild(editInput,listElement.children[1]);
       flag = "false";
      // listElement.replaceChild(label,listElement.children[1]);
  //   label.innerText = editInput.value;
  } else {
      label = document.createElement("label");
      label.innerText = editInput.value;
      listElement.replaceChild(label,listElement.children[1]);
      flag = "true";
 }
 }

 var deleteTask = function() {
  console.log("Delete task");
  var listElement = this.parentNode;
  var ul = listElement.parentNode;
  ul.removeChild(listElement);
 }
 var completeTask = function() {
   console.log("complete task");
   //Append the taskListItem to the completed-tasks
  var listElement = this.parentNode;
  var checkBox = listElement.children[0];
  var editButton = listElement.children[2];
  listElement.removeChild(checkBox);
  listElement.removeChild(editButton);
  completedTasksHolder.appendChild(listElement);
 }

 //Appending task to the list items
var bindTaskItems = function(taskListItem, taskEventHandler) {
  console.log("Bind task items");

  if(taskEventHandler == "incompleteTask")
  {
    // console.log("BindIncomplete task");
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

  //Binding edit button to edit function
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = completeTask;
 }
 else {
    // console.log("Bindcomplete task");
    var deleteButton = taskListItem.querySelector("button.delete");
    deleteButton.onclick = deleteTask;
 }

 }
 //Adding event handlers to trigger the functions
 addButton.addEventListener("click", addTask);

//Cycle over the incomplete task ul - list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  bindTaskItems(incompleteTasksHolder.children[i], "incompleteTask");

}
//Cycle over the complete task ul - list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskItems(completedTasksHolder.children[i], "completeTask");
}
