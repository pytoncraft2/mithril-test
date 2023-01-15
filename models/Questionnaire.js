import questionsParCategories from "../questionsParCategories.js"

var Questionnaire = {
    username: "",
    password: "",
    titre: "Pas de titre",
    categorie: null,
    indexQuestion: 0,
    setUsername: function(value) {
        Questionnaire.username = value
    },
    setPassword: function(value) {
        Questionnaire.password = value
    },
    setTitre: function(value) {
        Questionnaire.titre = value
    },
    setCategorie: function(value) {
        Questionnaire.categorie = value
    },
    canSubmit: function() {
        return Questionnaire.username !== "" && Questionnaire.password !== ""
    },
    afficheQuiz: function(params) {
        Questionnaire.setTitre(questionsParCategories[`${Questionnaire.categorie}`][Questionnaire.indexQuestion].question);
        console.log(questionsParCategories[`${Questionnaire.categorie}`]);
        Questionnaire.indexQuestion++
    }
}

export default Questionnaire