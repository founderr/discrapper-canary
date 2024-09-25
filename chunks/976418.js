var r = n(175440),
    i = Math.floor,
    a = function (e, t) {
        var n = e.length,
            l = i(n / 2);
        return n < 8 ? o(e, t) : s(e, a(r(e, 0, l), t), a(r(e, l), t), t);
    },
    o = function (e, t) {
        for (var n, r, i = e.length, a = 1; a < i; ) {
            for (r = a, n = e[a]; r && t(e[r - 1], n) > 0; ) e[r] = e[--r];
            r !== a++ && (e[r] = n);
        }
        return e;
    },
    s = function (e, t, n, r) {
        for (var i = t.length, a = n.length, o = 0, s = 0; o < i || s < a; ) e[o + s] = o < i && s < a ? (0 >= r(t[o], n[s]) ? t[o++] : n[s++]) : o < i ? t[o++] : n[s++];
        return e;
    };
e.exports = a;
