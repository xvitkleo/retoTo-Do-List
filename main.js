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
    let imgCheck = document.createElement('i');
    imgCheck.classList.add("far");
    imgCheck.classList.add("fa-check-circle");
    imgCheck.classList.add('check');
    contenido.appendChild(imgCheck);
    let p = document.createElement("input");
    p.value = taskName;
    contenido.appendChild(p);
    let imgTrash = document.createElement('i');
    imgTrash.classList.add("fas");
    imgTrash.classList.add("fa-trash-alt");
    imgTrash.classList.add('trash');
    contenido.appendChild(imgTrash);
    container.appendChild(contenido);

    let barra2 = document.createElement("div");
    barra2.classList.add("barra");
    container.appendChild(barra2); 

    container.classList.add("trasladar")
    task.appendChild(container);

    if(task==incompleteT) {
        imgCheck.addEventListener('click', function() {
            createTask(p.value, completeT);
            container.classList.add("retirar");
            if(container.style.opacity == 0) {
                setTimeout(function() {
                    container.remove(); 
                }, 500);        
            }            
        });
    }
    

    imgTrash.addEventListener('click', function() {    
        container.classList.add("retirar");
        if(container.style.opacity == 0) {
            setTimeout(function() {
                container.remove(); 
              }, 500);
                   
        }
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