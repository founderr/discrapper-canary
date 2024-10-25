t.d(n, {
    Yy: function () {
        return l;
    },
    xU: function () {
        return c;
    }
}),
    t(47120);
var r = t(192379),
    o = t(442837),
    a = t(434650),
    s = t(110924),
    i = t(451478);
function l() {
    let [e, n] = r.useState(!1),
        t = e !== (0, s.Z)(e);
    return {
        visible: e,
        visibleChanged: t,
        targetRef: (0, a.O)((e) => n(e), 0.6)
    };
}
function c() {
    let e = (0, o.e7)([i.Z], () => i.Z.isFocused()),
        n = e !== (0, s.Z)(e);
    return {
        focused: e,
        focusedChanged: n
    };
}
