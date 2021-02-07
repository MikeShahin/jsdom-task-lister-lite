document.addEventListener("DOMContentLoaded", () => {
  
  const submit = document.getElementById("submit")
  
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const taskList = document.getElementById("tasks")
    let task = document.getElementById("new-task-description").value
    let li = document.createElement("li")
    li.innerText = task
    taskList.appendChild(li)
    console.log(li)
  })

});
