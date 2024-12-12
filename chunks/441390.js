var i = r(325008),
    a = r(581031),
    s = r(926515),
    o = r(936940),
    l = r(835884),
    u = r(279129),
    c = r(610067),
    d = r(339718),
    f = r(470592),
    _ = Object.assign,
    h = Object.defineProperty,
    p = a([].concat);
e.exports =
    !_ ||
    o(function () {
        if (
            i &&
            1 !==
                _(
                    { b: 1 },
                    _(
                        h({}, 'a', {
                            enumerable: !0,
                            get: function () {
                                h(this, 'b', {
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
            n = {},
            r = Symbol('assign detection'),
            a = 'abcdefghijklmnopqrst';
        return (
            (e[r] = 7),
            a.split('').forEach(function (e) {
                n[e] = e;
            }),
            7 !== _({}, e)[r] || l(_({}, n)).join('') !== a
        );
    })
        ? function (e, n) {
              for (var r = d(e), a = arguments.length, o = 1, _ = u.f, h = c.f; a > o; ) {
                  for (var m, g = f(arguments[o++]), E = _ ? p(l(g), _(g)) : l(g), v = E.length, I = 0; v > I; ) (m = E[I++]), (!i || s(h, g, m)) && (r[m] = g[m]);
              }
              return r;
          }
        : _;
