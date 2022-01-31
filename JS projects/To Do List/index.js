//localstorage ver

var ul = document.getElementById("ul")
var myArray = []
var i = 0;

function addTask() {

  
  let textToInput = document.getElementById("input").value
  myArray.push(textToInput)

  while (i < myArray.length){

    if (textToInput !== "") {

      let li = document.createElement("li")
      li.className = "liClass"
  
      let input = document.createElement("button")
      input.innerText = "x"
      input.className ="checkbox"
      
      li.innerText = myArray[i]
      console.log(myArray[i])
    
      li.appendChild(input)
      ul.appendChild(li)
      i++
    }
} }


// Add a "checked" symbol when clicking on a list item - copied from https://www.w3schools.com/howto/howto_js_todolist.asp
var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
   
  }
}, false);


//close button for tasks

list.addEventListener('click', function(ev) {
  
  console.log()

  if (ev.target.className === 'checkbox') {
   console.log("test")   
   
  }
}, false);
