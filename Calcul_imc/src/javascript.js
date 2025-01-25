import { imcTableau } from "./variables"
import { calculIMC, initialisation } from "./fonctions";

let form = document.getElementById("formulaire");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("test")
  // On récupère nos éléments à consulter et modifier dans le dom
  const poids = document.getElementById("poids");
  const taille = document.getElementById("taille");
  const imcIntitule = document.getElementById("imcIntitule");
  const afficheImc = document.getElementById("imc");
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
  // Calcul de l'imc
  let imc = calculIMC(poids, taille);
  // Comparaison avec tableau imc
  for (let indicateur of imcTableau) {
    if (imc > indicateur.imc[0] && imc < indicateur.imc[1]) {
      // Afficher l'imc
      afficheImc.textContent = imc;
      // Afficher la remarque
      imcIntitule.textContent = indicateur.remarque;
      imcIntitule.style.color = indicateur.color;
    }
  }
});
