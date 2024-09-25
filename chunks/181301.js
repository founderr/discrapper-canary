var r = n(447631),
    i = n(821819),
    a = n(96403),
    o = n(646948),
    s = n(302231),
    l = n(729605),
    u = a(n(790248).f),
    c = a([].push),
    d =
        r &&
        i(function () {
            var e = Object.create(null);
            return (e[2] = 2), !u(e, 2);
        }),
    _ = function (e) {
        return function (t) {
            for (var n, i = l(t), a = s(i), _ = d && null === o(i), E = a.length, f = 0, h = []; E > f; ) (n = a[f++]), (!r || (_ ? n in i : u(i, n))) && c(h, e ? [n, i[n]] : i[n]);
            return h;
        };
    };
e.exports = {
    entries: _(!0),
    values: _(!1)
};
