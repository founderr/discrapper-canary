var i = r(102074),
    a = r(251064),
    s = r(464880),
    o = r(803607),
    l = r(879893),
    u = r(82075),
    c = 200;
function d(e, n, r) {
    var d = -1,
        f = a,
        _ = e.length,
        h = !0,
        p = [],
        m = p;
    if (r) (h = !1), (f = s);
    else if (_ >= c) {
        var g = n ? null : l(e);
        if (g) return u(g);
        (h = !1), (f = o), (m = new i());
    } else m = n ? [] : p;
    t: for (; ++d < _; ) {
        var E = e[d],
            v = n ? n(E) : E;
        if (((E = r || 0 !== E ? E : 0), h && v == v)) {
            for (var I = m.length; I--; ) if (m[I] === v) continue t;
            n && m.push(v), p.push(E);
        } else !f(m, v, r) && (m !== p && m.push(v), p.push(E));
    }
    return p;
}
e.exports = d;
