n.d(t, {
    V: function () {
        return a;
    }
}),
    n(47120);
var i = n(442837),
    s = n(375954);
function a(e, t) {
    return (0, i.e7)(
        [s.Z],
        () => {
            if (null == t) return;
            let n = s.Z.getMessages(e),
                i = n.findOldest((e) => e.author.id === t);
            if (null != i) {
                for (let e of n.toArray()) {
                    if (e.author.id !== t) break;
                    e.content.length > (null == i ? void 0 : i.content.length) && (i = e);
                }
                return i;
            }
        },
        [e, t]
    );
}
