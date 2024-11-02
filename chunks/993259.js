n.d(t, {
    E$: function () {
        return o;
    },
    KV: function () {
        return s;
    }
});
var a = n(149765),
    i = n(605436),
    r = n(700785);
let l = (e, t, n) => {
    if (null == e.id) return !1;
    let i = r.I0({
        forceRoles: { [e.id]: e },
        context: n
    });
    return a.e$(i, t);
};
function s(e, t) {
    return Object.values(t)
        .sort(i.W)
        .map((e) => (0, i.X0)(e));
}
function o(e, t, n, a) {
    return Object.values(t).filter((e) => (0, i.GJ)(e) || l(e, a, n));
}
