import Test from "../components/Titre.js";
import questions from "../questionsParCategorie.js";

const quizParCategorie = questions.reduce((acc, obj) => {
    return { ...acc, [obj.categorie]: [...acc[obj.categorie] || [], obj] }
}, {});

const Accueil = {
    view: function() {
        return [
            m("h1", { class: ".fancy" }, "Quiz"),
            m(".categories", Object.entries(quizParCategorie).map(function (categorie, i) {
                console.log(categorie);
                return m(m.route.Link, {
                    class: "button-71",
                    href: categorie[0] + "/" + i,
                }, `${categorie[0]} (${categorie[1].length})`)
            }))
        ]
    }
}

export default Accueil;