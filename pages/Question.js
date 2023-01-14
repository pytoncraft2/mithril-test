import Test from "../components/Titre.js";
const Question = {
    oninit: function (vnode) { console.log(vnode.attrs) },
    view: function(vnode) {
        console.log(vnode);
        return [
            m(Test, { style: "color:red;" }, "world"),
            m(".question page", vnode.attrs.categorie)
        ]
        // return m(".user-list", User.list.map(function(user) {
        //     return m(m.route.Link, {
        //         class: "user-list-item",
        //         href: "/edit/" + user.id,
        //     }, user.firstName + " " + user.lastName)
        // }))
    }
}

export default Question