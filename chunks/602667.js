n.d(t, {
    A: function () {
        return E;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(434650),
    l = n(110924),
    u = n(451478),
    c = n(915750);
let d = (e) => {
        let [t, n] = a.useState(!1),
            r = null != e ? e : t,
            i = r !== (0, l.Z)(r);
        return {
            visible: r,
            visibleChanged: i,
            reference: (0, s.O)((e) => n(e), c.PI)
        };
    },
    _ = () => {
        let e = (0, o.e7)([u.Z], () => u.Z.isFocused()),
            t = e !== (0, l.Z)(e);
        return {
            focused: e,
            focusedChanged: t
        };
    };
function E(e) {
    let { focused: t, focusedChanged: n } = _(),
        { visible: r, visibleChanged: o, reference: s } = d(e.overrideVisibility),
        l = {
            ...e,
            focused: t,
            focusedChanged: n,
            visible: r,
            visibleChanged: o,
            reference: s,
            impression: a.useRef(null)
        };
    return (0, i.jsx)(c.ui, { ...l }, (0, c.B5)(e.questOrQuests, e.questContent));
}
