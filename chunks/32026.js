var r = n(161581),
    i = n(926515),
    a = n(192291),
    s = n(49693),
    o = n(18316),
    l = n(339718),
    u = n(936940),
    c = r.RangeError,
    d = r.Int8Array,
    _ = d && d.prototype,
    E = _ && _.set,
    f = a.aTypedArray,
    h = a.exportTypedArrayMethod,
    p = !u(function () {
        var e = new Uint8ClampedArray(2);
        return (
            i(
                E,
                e,
                {
                    length: 1,
                    0: 3
                },
                1
            ),
            3 !== e[1]
        );
    }),
    I =
        p &&
        a.NATIVE_ARRAY_BUFFER_VIEWS &&
        u(function () {
            var e = new d(2);
            return e.set(1), e.set('2', 1), 0 !== e[0] || 2 !== e[1];
        });
h(
    'set',
    function (e) {
        f(this);
        var t = o(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = l(e);
        if (p) return i(E, this, n, t);
        var r = this.length,
            a = s(n),
            u = 0;
        if (a + t > r) throw c('Wrong length');
        for (; u < a; ) this[t + u] = n[u++];
    },
    !p || I
);
