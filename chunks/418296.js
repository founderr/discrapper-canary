var i = r(425561),
    a = r(834598),
    s = r(460510),
    o = r(208529),
    l = r(833295),
    u = r(433005),
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
