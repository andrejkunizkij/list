'use strict';
var myNodelist = document.getElementsByTagName('li');
var i;
for(i=0;i<myNodelist.length;i++){
  var span = document.createElement("span");
  var txt =document.createTextNode("\u00D7");
  span.className="close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var taskInput = document.getElementById('input'),
    list = document.getElementById('todolist'),
    addButton = document.getElementById('button'),
    clearButton = document.getElementById('remove');

function addTask() {
  var taskText = taskInput.value;
  if(taskText){
    var newli = document.createElement('li');
    newli.innerText = taskText;
    list.appendChild(newli);
    taskInput.value = '';
  }
	
}

function clear() {
 var elem = document.getElementById('todolist');
 elem.innerHTML = '';
};

addButton.addEventListener('click', addTask);
clearButton.addEventListener('click', clear); 


taskList.addEventListener('click', function(event){
    	var action = event.target.getAttribute('data-action');

    	if(action === 'remove'){
    		var task = event.target.closest('LI');
            taskList.removeChild(task);
		} else if(action === 'check'){
            event.target.classList.toggle('checked');
		}
	}, false);



















