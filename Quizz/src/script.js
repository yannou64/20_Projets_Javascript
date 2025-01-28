import { createQuestionnaire, calculResult, afficheResult } from "./fonctions"

// Création du questionnaire
createQuestionnaire();

// validation des résultat
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const score = calculResult()
    afficheResult(score)
})
