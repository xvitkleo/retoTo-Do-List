let incomplete = document.querySelector(".incomplete");
let complete = document.querySelector(".complete");
let incompleteT = document.querySelector(".incompleteTasks");
let completeT = document.querySelector(".completeTasks")

incomplete.addEventListener('click', function() {
    incompleteT.style.display = "block";;
    completeT.style.display = "none";;

    incomplete.style.color = "white";
    complete.style.color = "gray";
    complete.style.opacity = "50%";
    incomplete.style.opacity = "100%";
});

complete.addEventListener('click', function() {
    incompleteT.style.display = "none";;
    completeT.style.display = "block";;

    complete.style.color = "white";
    incomplete.style.color = "gray";
    incomplete.style.opacity = "50%";
    complete.style.opacity = "100%";
});

let button = document.querySelector(".boton")

createTask = function(taskName, task) {    
    let container = document.createElement("div");

    let barra = document.createElement("div");
    barra.classList.add("barra");
    container.appendChild(barra); 

    let contenido = document.createElement("div");
    let imgCheck = document.createElement("img");
    imgCheck.src = "./images/check.png";
    imgCheck.classList.add('check');
    contenido.appendChild(imgCheck);
    let p = document.createElement("p");
    p.textContent = taskName;
    contenido.appendChild(p);
    let imgTrash = document.createElement("img");
    imgTrash.src = "./images/trash.png";
    imgTrash.classList.add('trash');
    contenido.appendChild(imgTrash);
    container.appendChild(contenido);

    let barra2 = document.createElement("div");
    barra2.classList.add("barra");
    container.appendChild(barra2); 

    task.appendChild(container);

    if(task==incompleteT) {
        imgCheck.addEventListener('click', function() {
            createTask(taskName, completeT);
            task.removeChild(container);
        });
    }
    

    imgTrash.addEventListener('click', function() {    
        task.removeChild(container);
    });
}

button.addEventListener('click', function() {
    createTask(document.querySelector(".input").value, incompleteT);
    document.querySelector(".input").value=""; 
});



//Estructura de una task html
/*
<div>
<div class="barra"></div>
<div>      
    <img src="./images/check.png" alt="">
    <p>Client meeting</p>
    <img src="./images/trash.png" alt="">                           
</div>            
<div class="barra"></div>
</div>*/