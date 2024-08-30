var n;
(t.stringSimilarity = void 0),
    (t.stringSimilarity = function (e, t, n, l) {
        if ((void 0 === n && (n = 2), void 0 === l && (l = !1), !l && ((e = e.toLowerCase()), (t = t.toLowerCase())), e.length < n || t.length < n)) return 0;
        for (var s = new Map(), i = 0; i < e.length - (n - 1); i++) {
            var r = e.substr(i, n);
            s.set(r, s.has(r) ? s.get(r) + 1 : 1);
        }
        for (var a = 0, o = 0; o < t.length - (n - 1); o++) {
            var c = t.substr(o, n),
                d = s.has(c) ? s.get(c) : 0;
            d > 0 && (s.set(c, d - 1), a++);
        }
        return (2 * a) / (e.length + t.length - (n - 1) * 2);
    }),
    t.stringSimilarity;
