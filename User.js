// import m from "mithril"
import questions from "./questions.js"

var User = {
    list: questions,
    loadList: function() {

        // return m.request({
        //     method: "GET",
        //     url: "https://rem-rest-api.herokuapp.com/api/users",
        //     withCredentials: true,
        // })
        // .then(function(result) {
            User.list = questions
        // })
    },
}

export default User