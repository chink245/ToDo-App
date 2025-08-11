let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let item = document.createElement("li");


    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("input");

    
    let taskText = document.createElement("span");
    taskText.innerText = input.value;

    
    item.appendChild(checkbox);
    item.appendChild(taskText);

    
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
   
    item.appendChild(delBtn);
    
    ul.appendChild(item);

   
    input.value = "";

    
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none";
        }
    });
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});





