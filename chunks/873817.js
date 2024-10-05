var r = n(717441),
    i = n(192291),
    a = n(536524),
    s = n(959318),
    o = n(165915),
    l = i.aTypedArray,
    u = i.getTypedArrayConstructor;
(0, i.exportTypedArrayMethod)(
    'with',
    {
        with: function (e, t) {
            var n = l(this),
                i = s(e),
                c = a(n) ? o(t) : +t;
            return r(n, u(n), i, c);
        }
    }.with,
    !(function () {
        try {
            new Int8Array(1).with(2, {
                valueOf: function () {
                    throw 8;
                }
            });
        } catch (e) {
            return 8 === e;
        }
    })()
);
