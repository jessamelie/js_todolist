//récupérer la valeur de l'input
let taskInput = ""; //déclarer la variable
let i = 0
let text_task = ""

function getInput(){
taskInput = document.getElementById("input").value; //garde en mémoire le texte input
document.getElementById("tasklist").innerHTML +=  
`<div class="removestep">
<p class="newinput"> ${taskInput}</p> 
<input type="checkbox" onClick="checkTask()" id="checkbox">
<input type="button" class="remove" onClick="removeTask(event)" value="Supprimer">
<input type="button" class="edit" onClick="editInput(event)" value="Editer"></div>`
document.getElementById("input").value = "";   //suppression du texte input après ajout  
return text_task = taskInput 
}

//éditer une tâche
const editInput = (event) => {
    const buttonedit = event.target
    let askNewInput = prompt("Editer votre tâche ci-dessous");
    const indexEdit = Array.from(document.querySelectorAll(".edit")).indexOf(buttonedit);
    document.querySelectorAll(".newinput")[indexEdit].innerText = askNewInput

    // if (askNewInput!=""){
    //     document.getElementById("newinput").innerText = askNewInput
    // }
    
    }

//insertion tâche en appuyant sur Entrée
document.getElementById("input").addEventListener("keypress",(event) => { 
    if (event.key === "Enter"){
        getInput()
    }
})

//supprimer une tâche
const removeTask = (event) => {
const buttonremove = event.target //l'event du click cible
const index = Array.from(document.querySelectorAll(".remove")).indexOf(buttonremove); //On cherche dans le tableau de (Array.from) de la class "remove" l'index de l'event.target
document.querySelectorAll(".removestep")[index].remove()
}

//afficher une tache finie
const checkTask = () => {
    if (document.getElementById("checkbox").checked == true)
    {
        document.getElementById("newinput").innerHTML = `<strike>${text_task}</strike>`
    }
    else if (document.getElementById("checkbox").checked == false)
    {
        document.getElementById("newinput").innerText = text_task
    }
}