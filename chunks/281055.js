n.d(t, {
    Yy: function () {
        return u;
    },
    xU: function () {
        return c;
    },
    zw: function () {
        return a;
    }
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    l = n(434650),
    o = n(110924),
    s = n(451478);
let a = 2;
function u() {
    let [e, t] = r.useState(!1),
        n = e !== (0, o.Z)(e);
    return {
        visible: e,
        visibleChanged: n,
        targetRef: (0, l.O)((e) => t(e), 0.6)
    };
}
function c() {
    let e = (0, i.e7)([s.Z], () => s.Z.isFocused()),
        t = e !== (0, o.Z)(e);
    return {
        focused: e,
        focusedChanged: t
    };
}
