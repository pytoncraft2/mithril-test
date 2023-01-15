const TrashQuestionnaire = {
    titre: "",
    question: "",
    categorie: null,
    setTitre: function(value) {
        Questionnaire.titre = value
    },
    setQuestion: function(value) {
        Questionnaire.question = value
    },
    reponseJuste: function() {
        return Questionnaire.titre !== "" && Questionnaire.question !== ""
    },
    categorieChoisie: function () {
        return Questionnaire.categorie === null;        
    },
    setCategorie: function (categorie) {
        return Questionnaire.categorie = categorie;        
    },
    questionSuivante: function(vnode) {vnode.state.titre = "hey"},
}

export default TrashQuestionnaire