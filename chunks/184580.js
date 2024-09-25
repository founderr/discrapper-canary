var r = n(952256),
    i = n(474883),
    a = n(741674),
    o = n(476508),
    s = function (e, t, n, l, u, c, d, _) {
        for (var E, f, h = u, p = 0, m = !!d && o(d, _); p < l; ) p in n && ((E = m ? m(n[p], p, t) : n[p]), c > 0 && r(E) ? ((f = i(E)), (h = s(e, t, E, f, h, c - 1) - 1)) : (a(h + 1), (e[h] = E)), h++), p++;
        return h;
    };
e.exports = s;
