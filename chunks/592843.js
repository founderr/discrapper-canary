var r = n(447631),
    i = n(96403),
    a = n(570596),
    o = n(821819),
    s = n(302231),
    l = n(502640),
    u = n(790248),
    c = n(611345),
    d = n(186973),
    _ = Object.assign,
    E = Object.defineProperty,
    f = i([].concat);
e.exports =
    !_ ||
    o(function () {
        if (
            r &&
            1 !==
                _(
                    { b: 1 },
                    _(
                        E({}, 'a', {
                            enumerable: !0,
                            get: function () {
                                E(this, 'b', {
                                    value: 3,
                                    enumerable: !1
                                });
                            }
                        }),
                        { b: 2 }
                    )
                ).b
        )
            return !0;
        var e = {},
            t = {},
            n = Symbol('assign detection'),
            i = 'abcdefghijklmnopqrst';
        return (
            (e[n] = 7),
            i.split('').forEach(function (e) {
                t[e] = e;
            }),
            7 !== _({}, e)[n] || s(_({}, t)).join('') !== i
        );
    })
        ? function (e, t) {
              for (var n = c(e), i = arguments.length, o = 1, _ = l.f, E = u.f; i > o; ) {
                  for (var h, p = d(arguments[o++]), m = _ ? f(s(p), _(p)) : s(p), I = m.length, T = 0; I > T; ) (h = m[T++]), (!r || a(E, p, h)) && (n[h] = p[h]);
              }
              return n;
          }
        : _;
