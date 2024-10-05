var r = n(175440),
    i = Math.floor,
    a = function (e, t) {
        var n = e.length,
            l = i(n / 2);
        return n < 8 ? s(e, t) : o(e, a(r(e, 0, l), t), a(r(e, l), t), t);
    },
    s = function (e, t) {
        for (var n, r, i = e.length, a = 1; a < i; ) {
            for (r = a, n = e[a]; r && t(e[r - 1], n) > 0; ) e[r] = e[--r];
            r !== a++ && (e[r] = n);
        }
        return e;
    },
    o = function (e, t, n, r) {
        for (var i = t.length, a = n.length, s = 0, o = 0; s < i || o < a; ) e[s + o] = s < i && o < a ? (0 >= r(t[s], n[o]) ? t[s++] : n[o++]) : s < i ? t[s++] : n[o++];
        return e;
    };
e.exports = a;
