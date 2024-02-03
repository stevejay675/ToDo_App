const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("ListContainer");

function addtask(){
    if(inputBox.value == ""){
        alert("No task Entered!!!!")
    }
    else{
        let listEl = document.createElement("li");
        listEl.innerText = inputBox.value;
        ListContainer.appendChild(listEl);

        let spanEl = document.createElement("span");
        spanEl.innerHTML = "\u00d7";
        listEl.appendChild(spanEl);

        
        inputBox.value = "";

        savedata();
    }

    

    
}

ListContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }

}, false);

function savedata(){
    localStorage.setItem("data", ListContainer.innerHTML);
}

function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask()