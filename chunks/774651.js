n.d(t, {
    q: function () {
        return l;
    }
});
var r = n(685832),
    i = n(560024),
    a = n(194491),
    s = n(192379);
let o = new WeakMap();
function l(e, t) {
    var n, l, u;
    let c,
        { locale: d } = (0, r.j)();
    let f = ((n = e), ((l = t) && (0, i.J).getGlobalDictionaryForPackage(l)) || ((u = n), !(c = o.get(u)) && ((c = new i.J(u)), o.set(u, c)), c));
    return (0, s.useMemo)(() => new a.E(d, f), [d, f]);
}
