import { questions, results } from "./questions.js";

export const createQuestionnaire = () => {
  const questionnaire__group = document.querySelector(".questionnaire__group");
  questions.forEach((question, index) => {
    {
      const conteneur = document.createElement("div");
      conteneur.classList.add("questionnaire__group__bloc");
      conteneur.innerHTML = `
        <div class="question"> 
            <span>${question.question}</span>
        </div>
        <div class="propositions">
            <div class="proposition">
                <input type="radio" id="question${index}-${0}" name="${index}" value="${question.propositions[0]}">
                <label for="${question.propositions[0]}" >${question.propositions[0]}</label>    
            </div>
            <div class="proposition">
                <input type="radio" id="question${index}-${1}" name="${index}" value="${question.propositions[1]}">
                <label for="${question.propositions[1]}" >${question.propositions[1]}</label>    
            </div>
            <div class="proposition">   
                <input type="radio" id="question${index}-${2}" name="${index}" value="${question.propositions[2]}">
                <label for="${question.propositions[2]}">${question.propositions[2]}</label>
            </div>
        </div>
            `;
      questionnaire__group.appendChild(conteneur);
    }
  });
};

export const calculResult = () => {
  let score = 0;
  const questionnaire = document.querySelectorAll(
    ".questionnaire__group__bloc"
  );
  questionnaire.forEach((question, index) => {
    const reponse = document.querySelector(`input[name="${index}"]:checked`);
    if (reponse) {
      if (reponse.value === questions[index].reponse) {
        score = score + 1;
        question.classList.add("questionnaire__group__bloc--good");
      } else {
        question.classList.add("questionnaire__group__bloc--bad");
      }
    } else {
      question.classList.add("questionnaire__group__bloc--bad");
    }
  });
  return score;
};

export const afficheResult = (score) => {
  const encouragement = document.querySelector(".results__encouragement");
  encouragement.innerHTML = `${results[score].encouragement}`;

  const afficheScore = document.querySelector(".results__score");
  afficheScore.innerHTML = `Score : ${score}/${questions.length}`;

  const advice = document.querySelector(".results__advice");
  advice.innerHTML = `${results[score].advice}`;
};
