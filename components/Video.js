const Video = {
    view: function (vnode) {
        return [
            m("video", {
                src: vnode.attrs.url,
                controls: true,
                autoplay: true
            })
        ]
    }
}

export default Video