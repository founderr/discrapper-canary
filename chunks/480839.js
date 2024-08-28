var r = n(161581),
    i = n(173850),
    a = n(936940),
    s = n(526988),
    o = n(976418),
    l = n(192291),
    u = n(679622),
    c = n(310731),
    d = n(106295),
    _ = n(361270),
    E = l.aTypedArray,
    f = l.exportTypedArrayMethod,
    h = r.Uint16Array,
    p = h && i(h.prototype.sort),
    I =
        !!p &&
        !(
            a(function () {
                p(new h(2), null);
            }) &&
            a(function () {
                p(new h(2), {});
            })
        ),
    m =
        !!p &&
        !a(function () {
            if (d) return d < 74;
            if (u) return u < 67;
            if (c) return !0;
            if (_) return _ < 602;
            var e,
                t,
                n = new h(516),
                r = Array(516);
            for (e = 0; e < 516; e++) (t = e % 4), (n[e] = 515 - e), (r[e] = e - 2 * t + 3);
            for (
                p(n, function (e, t) {
                    return ((e / 4) | 0) - ((t / 4) | 0);
                }),
                    e = 0;
                e < 516;
                e++
            )
                if (n[e] !== r[e]) return !0;
        });
f(
    'sort',
    function (e) {
        var t;
        if ((void 0 !== e && s(e), m)) return p(this, e);
        return o(
            E(this),
            ((t = e),
            function (e, n) {
                return void 0 !== t ? +t(e, n) || 0 : n != n ? -1 : e != e ? 1 : 0 === e && 0 === n ? (1 / e > 0 && 1 / n < 0 ? 1 : -1) : e > n;
            })
        );
    },
    !m || I
);
