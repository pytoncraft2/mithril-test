import questionsParCategories from "../questionsParCategories.js"

const Questionnaire = {
    titre: "",
    categorie: null,
    indexQuestion: 0,
    choix: [],
    setCategorie: function(valeur) {
        Questionnaire.categorie = valeur
    },
    setTitre: function(valeur) {
        Questionnaire.titre = valeur
    },
    setChoix: function (valeur) {
        const MixArray = questionsParCategories[`${Questionnaire.categorie}`][Questionnaire.indexQuestion].choix
        const string = MixArray.toString();
        const listeChoix = string.split(',  ');
        Questionnaire.choix = listeChoix
    },
    afficheQuiz: function(params) {
        Questionnaire.setTitre(questionsParCategories[`${Questionnaire.categorie}`][Questionnaire.indexQuestion].question);
        Questionnaire.setChoix(questionsParCategories[`${Questionnaire.categorie}`][Questionnaire.indexQuestion].choix);
        Questionnaire.indexQuestion++
    }
}

export default Questionnaire