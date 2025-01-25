// fonction d'initialisation des paramètres
const initialisation = (poids, taille) => {
  poids.value = 0;
  taille.value = 0;
}
// fonction pour calculer l'imc
const calculIMC = (poids, taille) => {
  return (
    (parseInt(poids.value) / parseInt(taille.value) ** 2) *
    10000
  ).toFixed(1);
}

export {initialisation, calculIMC}