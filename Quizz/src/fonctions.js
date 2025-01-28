import { questions, results } from "./questions.js";

export const createQuestionnaire = () => {
  const question_group = document.querySelector(".question_group");
  questions.forEach((question, index) => {
    {
      const conteneur = document.createElement("div");
      conteneur.innerHTML = `
                <div class="bloc_question">
                    <div class="row bloc_question__question"> 
                        <span>${question.question}</span>
                    </div>
                    <div class="propositions">
                        <div class="row proposition">
                            <label for="${question.propositions[0]}" >${question.propositions[0]}</label>
                            <input type="radio" id="question${index}-${0}" name="${index}" value="${question.propositions[0]}">
                        </div>
                        <div class="row proposition">
                            <label for="${question.propositions[1]}" >${question.propositions[1]}</label>
                            <input type="radio" id="question${index}-${1}" name="${index}" value="${ question.propositions[1]}">
                        </div>
                        <div class="row proposition">   
                            <label for="${question.propositions[2]}">${question.propositions[2]}</label>
                            <input type="radio" id="question${index}-${2}" name="${index}" value="${question.propositions[2]}">
                        </div>
                    </div>
                </div>
            `;
      question_group.appendChild(conteneur);
    }
  });
};

export const calculResult = () => {
    let score = 0;
    const questionnaire = document.querySelectorAll(".bloc_question")
    questionnaire.forEach((question, index) => {
        const reponse = document.querySelector(`input[name="${index}"]:checked`)
        if (reponse){
            if (reponse.value === questions[index].reponse){
                goodAnswer(question)
            } else {
                badAnswer(question)
            }
        }
    })
    return score
}

export const afficheResult = (score) => {
    const results = document.querySelector("results")
    const encouragement = document.createElement("div").classList.add("row")
    const afficheScore = document.createElement("div").classListe.add("row")
    const advice = document.createElement("div").classListe("row")
    switch (score) {
        case 1:
            break
        case 2:
            break
        case 3:
            break
        case 4:
            break
        case 5:
            break
    }
}

function goodAnswer(question){
    score = score + 1
    question.style="background-color: green;"   
}

function badAnswer(question){
    question.style="background-color: red;"   
}