//récupérer la valeur de l'input
let taskInput = "" //déclarer la variable
function getInput(){
taskInput = document.getElementById("input").value; //garde en mémoire le texte input
document.getElementById("tasklist").innerHTML +=  
`<div>
<p> ${taskInput}</p> 
<input type="checkbox" id="scales">
<input type="button" value="Supprimer"> </div>`     //ajout du code HTML pour l'ajout des taches à la suite
document.getElementById("input").value = ""   //suppression du texte input après ajout 
}

