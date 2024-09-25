var r = n(161581),
    i = n(173850),
    a = n(936940),
    o = n(526988),
    s = n(976418),
    l = n(192291),
    u = n(679622),
    c = n(310731),
    d = n(106295),
    _ = n(361270),
    E = l.aTypedArray,
    f = l.exportTypedArrayMethod,
    h = r.Uint16Array,
    p = h && i(h.prototype.sort),
    m =
        !!p &&
        !(
            a(function () {
                p(new h(2), null);
            }) &&
            a(function () {
                p(new h(2), {});
            })
        ),
    I =
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
        }),
    T = function (e) {
        return function (t, n) {
            return void 0 !== e ? +e(t, n) || 0 : n != n ? -1 : t != t ? 1 : 0 === t && 0 === n ? (1 / t > 0 && 1 / n < 0 ? 1 : -1) : t > n;
        };
    };
f(
    'sort',
    function (e) {
        return (void 0 !== e && o(e), I) ? p(this, e) : s(E(this), T(e));
    },
    !I || m
);
