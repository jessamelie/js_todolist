//récupérer la valeur de l'input
let taskInput = ""; //déclarer la variable
let array = ["mission", "mission1"]
let i = 0
let text_task = ""

function getInput(){
taskInput = document.getElementById("input").value; //garde en mémoire le texte input
// localStorage.setItem(array[i],taskInput)
// console.log(localStorage.getItem(array[i]))
// i += 1
document.getElementById("tasklist").innerHTML +=  
`<div id="removeinput">
<p id="newinput"> ${taskInput}</p> 
<input type="checkbox" onClick="checkTask()" id="checkbox">
<input type="button" id="remove" onClick="removeTask()" value="Supprimer">
<input type="button" id="edit" onClick="editInput()" value="Editer"></div>` 
return text_task = taskInput 

//ajout du code HTML pour l'ajout des taches à la suite
document.getElementById("input").value = "";   //suppression du texte input après ajout 
}

//éditer une tâche
const editInput = () => {
    let askNewInput = prompt("Editer votre tâche ci-dessous");
    
    if (askNewInput!=""){
        document.getElementById("newinput").innerText = askNewInput
    }
}

//supprimer une tâche
const removeTask = () => {
    document.getElementById("removeinput").innerText = ""
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

// let taskSave = localStorage.getItem("mission")
// if (taskSave !== undefined || taskSave !== null){
// document.getElementById("tasklist").innerHTML +=  
// `<div>
// <p> ${taskSave}</p> 
// <input type="checkbox" id="scales">
// <input type="button" value="Supprimer"> </div>`
// }
// let taskSave1 = localStorage.getItem("mission1")
// if (taskSave1 !== undefined || taskSave1 !== null){
// document.getElementById("tasklist").innerHTML +=  
// `<div>
// <p> ${taskSave1}</p> 
// <input type="checkbox" id="scales">
// <input type="button" value="Supprimer"> </div>`
// }
 