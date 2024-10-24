n.d(t, {
    Yy: function () {
        return i;
    },
    xU: function () {
        return c;
    }
}),
    n(47120);
var r = n(192379),
    o = n(442837),
    a = n(434650),
    s = n(110924),
    l = n(451478);
function i() {
    let [e, t] = r.useState(!1),
        n = e !== (0, s.Z)(e);
    return {
        visible: e,
        visibleChanged: n,
        targetRef: (0, a.O)((e) => t(e), 0.6)
    };
}
function c() {
    let e = (0, o.e7)([l.Z], () => l.Z.isFocused()),
        t = e !== (0, s.Z)(e);
    return {
        focused: e,
        focusedChanged: t
    };
}
