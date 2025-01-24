// mon javascript
// My variables
const imcTableau = [
  {
    imc: [0, 18.5],
    remarque: "Maigreur",
    color: "midnightBlue",
  },
  {
    imc: [18.5, 25],
    remarque: "Bonne santé",
    color: "green",
  },
  {
    imc: [25, 30],
    remarque: "Surpoid",
    color: "lightCoral",
  },
  {
    imc: [30, 35],
    remarque: "Obésité modéré",
    color: "orange",
  },
  {
    imc: [35, 40],
    remarque: "Obésité sévère",
    color: "red",
  },
  {
    imc: [40, 100],
    remarque: "Obésité morbide",
    color: "purple",
  },
];
// At first i stop the submit action
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
  // fonction d'initialisation des paramètres
  function initialisation(poids, taille) {
    poids.value = 0;
    taille.value = 0;
  }
  // fonction pour calculer l'imc
  function calculIMC(poids, taille) {
    return (
      (parseInt(poids.value) / parseInt(taille.value) ** 2) *
      10000
    ).toFixed(1);
  }
});
