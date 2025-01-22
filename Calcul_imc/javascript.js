// mon javascript
// At first i stop the submit action
let form = document.getElementById("formulaire");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // On va récupérer et contrôler l'input pour le poid
  const poids = document.getElementById("poids");
  const taille = document.getElementById("taille");
  // controle des inputs
  if (
    poids.value <= 0 ||
    !Number.isInteger(parseInt(poids.value)) ||
    taille.value <= 0 ||
    !Number.isInteger(parseInt(taille.value))
  ) {
    alert("Erreur d'entrées");
    initialisation(poids, taille);
  }
  // fonction d'initialisation des paramètres
  function initialisation(poids, taille) {
    poids.value = 0;
    taille.value = 0;
  }
});
