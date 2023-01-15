import Accueil from "./pages/Accueil.js"
import Resultat from "./pages/Resultat.js"
import Question from "./pages/Question.js"
import questions from "./questions.js"
import Questionnaire from "./models/Questionnaire.js";

// m.route(document.body, "/", {
//     "/": Accueil,
//     "/:categorie/:id": Question,
//     "/resultat": Resultat,
// })

// function commencerQuestion(params) {
//    console.log("COMMENCER QUESTION"); 
// }

const quizParCategorie = questions.reduce((acc, obj) => {
    return { ...acc, [obj.categorie]: [...acc[obj.categorie] || [], obj] }
}, {});

console.log(quizParCategorie);

// PREFER
var Counter = {
    count: 5,
    test: 44,
    categorie: null,
    view: function (vnode) {
        return m("div",
            m("p", "Count: " + vnode.state.count),

            m("button", {
                // onclick: function () {
                //     vnode.state.count++;
                // }
                // disabled: !Questionnaire.reponseJuste(),
                onclick: Questionnaire.setCategorie(1)
            }, "Increase count")
        )
    }
}

m.mount(document.body, {
    view: function (vnode) {
        return [
            m("h1", "Quiz"),
            m(".categories", Object.entries(quizParCategorie).map(function (categorie, i) {
                return m("button[class='button-15']", {
                    onclick: Questionnaire.setCategorie(categorie[0])
                },
                    `${categorie[0]} (${categorie[1].length})`
                )
            })),
            m(Counter)
        ]
    }
})