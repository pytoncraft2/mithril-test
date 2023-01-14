import Accueil from "./pages/Accueil.js"
import Resultat from "./pages/Resultat.js"
import Question from "./pages/Question.js"

m.route(document.body, "/", {
    "/": Accueil,
    "/:categorie/:id": Question,
    "/resultat": Resultat,
})

function commencerQuestion(params) {
   console.log("COMMENCER QUESTION"); 
}