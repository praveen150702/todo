const inputbox=document.querySelector("#input-box");
const listcontainer=document.querySelector("#list-container");
function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function show(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
show();