var r = Array.prototype.slice,
    i = n(775569),
    a = n(35262),
    o = (e.exports = function (e, t, n) {
        if ((!n && (n = {}), e === t)) return !0;
        if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
        if (!e || !t || ('object' != typeof e && 'object' != typeof t)) return n.strict ? e === t : e == t;
        else return u(e, t, n);
    });
function s(e) {
    return null == e;
}
function l(e) {
    return !!e && 'object' == typeof e && 'number' == typeof e.length && 'function' == typeof e.copy && 'function' == typeof e.slice && (!(e.length > 0) || 'number' == typeof e[0]) && !0;
}
function u(e, t, n) {
    var u, c;
    if (s(e) || s(t) || e.prototype !== t.prototype) return !1;
    if (a(e)) return !!a(t) && ((e = r.call(e)), o(e, (t = r.call(t)), n));
    if (l(e)) {
        if (!l(t) || e.length !== t.length) return !1;
        for (u = 0; u < e.length; u++) if (e[u] !== t[u]) return !1;
        return !0;
    }
    try {
        var d = i(e),
            _ = i(t);
    } catch (e) {
        return !1;
    }
    if (d.length != _.length) return !1;
    for (d.sort(), _.sort(), u = d.length - 1; u >= 0; u--) if (d[u] != _[u]) return !1;
    for (u = d.length - 1; u >= 0; u--) if (!o(e[(c = d[u])], t[c], n)) return !1;
    return typeof e == typeof t;
}
