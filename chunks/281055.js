n.d(t, {
    Yy: function () {
        return l;
    },
    xU: function () {
        return c;
    }
}),
    n(47120);
var r = n(192379),
    o = n(442837),
    a = n(434650),
    i = n(110924),
    s = n(451478);
function l() {
    let [e, t] = r.useState(!1),
        n = e !== (0, i.Z)(e);
    return {
        visible: e,
        visibleChanged: n,
        targetRef: (0, a.O)((e) => t(e), 0.6)
    };
}
function c() {
    let e = (0, o.e7)([s.Z], () => s.Z.isFocused()),
        t = e !== (0, i.Z)(e);
    return {
        focused: e,
        focusedChanged: t
    };
}
