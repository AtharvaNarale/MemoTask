const taskEntry =document.getElementById("taskEntry");
const tasklist =document.getElementById("task-list");

function addTask()
{
    if(taskEntry.value=="")
{
    alert("enter the Task0");

}
else
{
    let li =document.createElement("li");
    li.innerHTML =taskEntry.value;
    tasklist.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML = "&#10060;";
    liappendchild(span);    
    saveData();
}
taskEntry.value="";
}
tasklist.addEventListener(
    "click",
    function(event)
    {
        if(event.target.tagname ==="Li")
        {
            event.target.classlist.toggle("checked");
            saveData();
        }
        else if(event.target.tagname ==="SPAN")
        {
            event.target.parentElement.remove();
            saveData();

        }
        console.log(event);
    },
    false
    );
function saveData()
{
    localStrorage.setItem("myTask",tasklist.innerHTML);
}
function displayData()
{
    tasklist.innerHTML = localStorage.getItem("myTask");
}
displayData();
