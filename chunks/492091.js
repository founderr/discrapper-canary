var r = n(96403),
    i = n(952256),
    a = n(735471),
    o = n(726433),
    s = n(342545),
    l = r([].push);
e.exports = function (e) {
    if (a(e)) return e;
    if (i(e)) {
        for (var t = e.length, n = [], r = 0; r < t; r++) {
            var u = e[r];
            'string' == typeof u ? l(n, u) : ('number' == typeof u || 'Number' === o(u) || 'String' === o(u)) && l(n, s(u));
        }
        var c = n.length,
            d = !0;
        return function (e, t) {
            if (d) return (d = !1), t;
            if (i(this)) return t;
            for (var r = 0; r < c; r++) if (n[r] === e) return t;
        };
    }
};
