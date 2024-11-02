n.d(t, {
    A: function () {
        return f;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(434650),
    o = n(110924),
    l = n(451478),
    u = n(915750);
let c = (e) => {
        let [t, n] = i.useState(!1),
            r = null != e ? e : t,
            a = r !== (0, o.Z)(r);
        return {
            visible: r,
            visibleChanged: a,
            reference: (0, s.O)((e) => n(e), u.PI)
        };
    },
    d = () => {
        let e = (0, a.e7)([l.Z], () => l.Z.isFocused()),
            t = e !== (0, o.Z)(e);
        return {
            focused: e,
            focusedChanged: t
        };
    };
function f(e) {
    let { focused: t, focusedChanged: n } = d(),
        { visible: a, visibleChanged: s, reference: o } = c(e.overrideVisibility),
        l = {
            ...e,
            focused: t,
            focusedChanged: n,
            visible: a,
            visibleChanged: s,
            reference: o,
            impression: i.useRef(null)
        };
    return (0, r.jsx)(u.ui, { ...l }, (0, u.B5)(e.questOrQuests, e.questContent));
}
