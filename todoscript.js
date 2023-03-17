//récupérer la valeur de l'input
let taskInput = ""; //déclarer la variable
let i = 0
let text_task = ""
let id_tasklist = document.getElementById("tasklist")
let id_input = document.getElementById("input")

//ajouter une tâche
const getTask = () => {
taskInput = id_input.value; //garde en mémoire le texte input

id_tasklist.innerHTML +=  
`<div class="removestep">
<p class="newinput"> ${taskInput}</p> 
<input type="checkbox" onClick="checkTask(event)" class="checkbox">
<input type="button" class="remove" onClick="removeTask(event)" value="Supprimer">
<input type="button" class="edit" onClick="editInput(event)" value="Editer"></div>`

id_input.value = "";   //suppression du texte input après ajout  
return text_task = taskInput 
}

//insertion tâche en appuyant sur Entrée
id_input.addEventListener("keypress",(event) => { 
    if (event.key === "Enter"){
        getTask()
    }
})

//éditer une tâche
const editInput = (event) => {
    let class_newinput = document.querySelectorAll(".newinput")
    let class_edit = document.querySelectorAll(".edit")
    const buttonedit = event.target
    let askNewInput = prompt("Editer votre tâche ci-dessous");
    const indexEdit = Array.from(class_edit).indexOf(buttonedit);
    class_newinput[indexEdit].innerText = askNewInput
    }

//supprimer une tâche
const removeTask = (event) => {
let class_remove = document.querySelectorAll(".remove")
let class_removeStep = document.querySelectorAll(".removestep")
const buttonremove = event.target //l'event du click cible
const index = Array.from(class_remove).indexOf(buttonremove); //On cherche dans le tableau de (Array.from) de la class "remove" l'index de l'event.target
class_removeStep[index].remove()
}

//rayez une tâche
const checkTask = (event) => {
    let class_newinput = document.querySelectorAll(".newinput")
    let class_checkbox = document.querySelectorAll(".checkbox")
    const task_target = event.target
    const index = Array.from(class_checkbox).indexOf(task_target)
    if (class_checkbox[index].checked == true)
    {
        class_newinput[index].innerHTML = `<strike>${class_newinput[index].innerText}</strike>`
    }
    else if (class_checkbox[index].checked == false)
    {
        class_newinput[index].innerText = class_newinput[index].innerText
    }
}