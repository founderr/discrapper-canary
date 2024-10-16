r.d(t, {
    X: function () {
        return u;
    }
});
var n = r(622916),
    a = r(899517),
    _ = r(910731),
    o = r(954211),
    E = r(394798),
    i = r(886115),
    c = r(263449),
    s = r(233517),
    l = r(151122);
let u = (0, l._I)((e = {}) => {
    let t = e.levels || n.RU;
    return {
        name: 'CaptureConsole',
        setup(e) {
            if ('console' in a.n)
                (0, _.e)(({ args: r, level: n }) => {
                    if ((0, c.s3)() === e && !!t.includes(n))
                        (function (e, t) {
                            let r = {
                                level: (0, o.V)(t),
                                extra: { arguments: e }
                            };
                            (0, c.$e)((n) => {
                                if (
                                    (n.addEventProcessor(
                                        (e) => (
                                            (e.logger = 'console'),
                                            (0, E.EG)(e, {
                                                handled: !1,
                                                type: 'console'
                                            }),
                                            e
                                        )
                                    ),
                                    'assert' === t)
                                ) {
                                    if (!e[0]) {
                                        let t = `Assertion failed: ${(0, i.nK)(e.slice(1), ' ') || 'console.assert'}`;
                                        n.setExtra('arguments', e.slice(1)), (0, s.uT)(t, r);
                                    }
                                    return;
                                }
                                let a = e.find((e) => e instanceof Error);
                                if (a) {
                                    (0, s.Tb)(a, r);
                                    return;
                                }
                                let _ = (0, i.nK)(e, ' ');
                                (0, s.uT)(_, r);
                            });
                        })(r, n);
                });
        }
    };
});
