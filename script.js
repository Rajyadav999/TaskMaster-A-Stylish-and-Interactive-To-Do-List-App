let input=document.getElementById("input-box");
let buttons=document.getElementById("but");
let todo=document.getElementsByClassName("todo-app")
let tasks=document.getElementById("task");

buttons.addEventListener("click",() =>{
    if(input.value.trim()===""){
        alert("please Enter Task First");
        input.value="";
        input.focus();
        }
    else if(!input.value.match(/^[A-Za-z ]+$/))  //regular experssion make that only alphabets are given as input... 
        {
        alert("Task should contain only alphabets😔");
        input.value="";
        input.focus();
        return;
        }
        else{
        let list =document.createElement("li");
        list.innerHTML=input.value;
        tasks.appendChild(list);
        let span=document.createElement("span");
        span.innerHTML=  "\u00d7";
        list.appendChild(span);
        
            }
        input.value="";
        saveData();
})
tasks.addEventListener("click",function (e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
 // saveData() – stores task list even after refresh
 function saveData() {
     localStorage.setItem("data",tasks.innerHTML);
 }
 // showTask() – loads saved task list on page load
 function showTask(){
     tasks.innerHTML=localStorage.getItem("data");
 }
showTask();
