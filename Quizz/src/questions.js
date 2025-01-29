const questions = [
  {
    question: "Qui est sacré empereur de france le 02 décembre 1804 ?",
    propositions: ["Clovis", "Abraham Lincoln", "Napoléon Bonaparte"],
    reponse: "Napoléon Bonaparte",
  },
  {
    question: "Quand la déclaration d'indépendance des Etats-Unis a-t-elle été votée ?",
    propositions: ["4 juillet 1776", "18 avril 1856", "30 juin 1925"],
    reponse: "4 juillet 1776",
  },
  {
    question: "Quand a eu lieu la chute de l'empire romain d'occident ?",
    propositions: ["15 ap J-C", "476 ap J-C", "740 av J-C"],
    reponse: "476 ap J-C",
  },
  {
    question: "Quelle est la capitale de la Slovénie",
    propositions: ["Ljubjana", "Belgrade", "Bratislava"],
    reponse: "Ljubjana",
  },
  {
    question: "Combien d'habitants compte l'Irlande en 2020 ?",
    propositions: ["1,365 Million", "21 Millions", "4,9 Millions"],
    reponse: "4,9 Millions",
  }
];

const emojis = ["✔️", "✨", "👀", "😭", "👎", "☑"];

const results = [
  {
    score: 0,
    encouragement: "👎 Peut mieux faire 👎",
    advice: "Retentez une autre réponse dans la case rouge, puis revalidez !"
  },
  {
    score: 1,
    encouragement: "😭 Peut mieux faire 😭",
    advice: "Retentez une autre réponse dans la case rouge, puis revalidez !"
  },
  {
    score: 2,
    encouragement: "👀 Il reste quelques erreurs 😭",
    advice: "Retentez une autre réponse dans la case rouge, puis revalidez !"
  },
  {
    score: 3,
    encouragement: "✨ Encore un effort 👀",
    advice: "Retentez une autre réponse dans la case rouge, puis revalidez !"
  },
  {
    score: 4,
    encouragement: "✨ Vous y êtes presque ✨",
    advice: "Retentez une autre réponse dans la case rouge, puis revalidez !"
  },
  {
    score: 5,
    encouragement: "Quelle culture !",
    advice: "✔️ Bravo c'est un sans faute ✔️"
  },
]

export { questions, results};
