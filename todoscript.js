//récupérer la valeur de l'input
let taskInput = ""; //déclarer la variable
let array = ["mission", "mission1"]
let i = 0

function getInput(){
taskInput = document.getElementById("input").value; //garde en mémoire le texte input
localStorage.setItem(array[i],taskInput)
console.log(localStorage.getItem(array[i]))
i += 1
document.getElementById("tasklist").innerHTML +=  
`<div>
<p> ${taskInput}</p> 
<input type="checkbox" id="scales">
<input type="button" value="Supprimer"> </div>`     //ajout du code HTML pour l'ajout des taches à la suite
document.getElementById("input").value = "";   //suppression du texte input après ajout 
}

let taskSave = localStorage.getItem("mission")
if (taskSave !== undefined || taskSave !== null){
document.getElementById("tasklist").innerHTML +=  
`<div>
<p> ${taskSave}</p> 
<input type="checkbox" id="scales">
<input type="button" value="Supprimer"> </div>`
}
let taskSave1 = localStorage.getItem("mission1")
if (taskSave1 !== undefined || taskSave1 !== null){
document.getElementById("tasklist").innerHTML +=  
`<div>
<p> ${taskSave1}</p> 
<input type="checkbox" id="scales">
<input type="button" value="Supprimer"> </div>`
}