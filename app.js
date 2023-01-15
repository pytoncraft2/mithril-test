import Video from "./components/Video.js";
import Questionnaire from "./models/Questionnaire.js";
import questionsParCategories from "./questionsParCategories.js";


var Login = {
    view: function() {
        return m(".login", [
            m("h2", Questionnaire.titre),
            m(Video, {url: "https://www.w3schools.com/tags/movie.mp4"}),
            m("p", Questionnaire.choix.map((e) => {})),
            m(".categories", Questionnaire.choix.map(function (categorie, i) {
                return m("button", {
                    onclick: function() {
                        Questionnaire.setCategorie(categorie[0])
                    }
                }, `${categorie}`)
            })),
            m("button", {
                onclick: Questionnaire.afficheQuiz
            }, "Login")
        ])
    }
}

// const Questionnaire = {
//     titre: "Bonsoir",
//     question: "question",
//     categorie: null,
//     setTitre: function(value) {
//         Questionnaire.titre = value
//     },
//     setQuestion: function(value) {
//         Questionnaire.question = value
//     },
//     reponseJuste: function() {
//         return Questionnaire.titre !== "" && Questionnaire.question !== ""
//     },
//     categorieChoisie: function () {
//         return Questionnaire.categorie === null;        
//     },
//     setCategorie: function (categorie) {
//         return Questionnaire.categorie = categorie;        
//     },
//     questionSuivante: function(vnode) {vnode.state.titre = "hey"},
//     view: function (vnode) {
//         return m("div",
//             m("p", "Test"),
//         )
//     }

// }

// export default Questionnaire

// PREFER
// var Counter = {
//     count: 0,
//     view: function(vnode) {
//         console.log(vnode);
//         return m("div",
//             m("p", "Count: " + vnode.state.count ),

//             m("button", {
//                 onclick: function() {
//                     vnode.state.count++
//                 }
//             }, "Increase count")
//         )
//     }
// }
// var Counter = {
//     count: 5,
//     test: 44,
//     categorie: null,
//     view: function (vnode) {
//         return m("div",
//             m("p", "Count: " + vnode.state.count),

//             m("button", {
//                 // onclick: function () {
//                 //     vnode.state.count++;
//                 // }
//                 // disabled: !Questionnaire.reponseJuste(),
//                 onclick: Questionnaire.setCategorie(1)
//             }, "Increase count")
//         )
//     }
// }

m.mount(document.body, {
    view: function (vnode) {
        return [
            m("h1", "Quiz"),
            m(".categories", Object.entries(questionsParCategories).map(function (categorie, i) {
                return m("button[class='button-15']", {
                    onclick: function() {
                        Questionnaire.setCategorie(categorie[0])
                    }
                }, `${categorie[0]} (${categorie[1].length})`)
            })),
            m(Login)
        ]
    }
})