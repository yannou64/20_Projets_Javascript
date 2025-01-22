// mon javascript
// At first i stop the submit action
let form = document.getElementById("formulaire");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // On va récupérer et contrôler l'input pour le poid
  const poids = document.getElementById("poids").value;
  const taille = document.getElementById("taille").value;
  console.log(`ma taille ${taille} et mon poids ${poids}`);
});
