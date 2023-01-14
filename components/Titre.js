const Test = {
    view: function(vnode) {
        return m("div", vnode.attrs, ["Hello ", vnode.children])
    }
}

export default Test;
// consume it
// m(Test, {style: "color:red;"}, "world")