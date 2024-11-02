n(47120), n(177593);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(100621),
    o = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(607070),
    h = n(44315),
    m = n(314897),
    p = n(111583),
    f = n(889901),
    g = n(64078),
    C = n(351780),
    x = n(843693),
    v = n(641033),
    _ = n(989830),
    I = n(388032),
    E = n(443528);
let b = l.memo(function (e) {
        let { channelId: t, width: n } = e,
            r = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
            a = (0, o.e7)([x.ZP], () => x.ZP.getMostRecentMessageCombo(t), [t]),
            [u, h] = l.useState(!1);
        l.useEffect(() => {
            if (null == a ? void 0 : a.displayed) return;
            h(!1),
                setImmediate(() => {
                    h((null != a ? (0, v.Eo)(a.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                h(!1), null != a && (0, g.ew)(a);
            }, 2000);
            return () => clearTimeout(e);
        }, [a]);
        let m = null != a ? '100%' : '200%',
            p = (0, c.useSpring)(
                {
                    opacity: u ? 1 : 0,
                    translateY: u ? '0' : m,
                    pointerEvents: 'none',
                    width: n,
                    config: r ? s.config.stiff : s.config.slow
                },
                'animate-always'
            );
        return (0, i.jsx)(i.Fragment, {
            children:
                null != a &&
                (0, i.jsx)(s.animated.div, {
                    className: E.messageComboScore,
                    style: p,
                    children: (0, i.jsx)(c.Text, {
                        className: E.comboScore,
                        variant: 'text-sm/bold',
                        children: (0, v.Eo)(a.combo)
                    })
                })
        });
    }),
    S = l.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: r, square: s, flair: o } = l.useMemo(() => (0, v.yz)(n), [n]),
            u = (0, h.Lq)(r);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Text, {
                    className: E.comboValue,
                    variant: 'text-sm/bold',
                    children: t
                }),
                (0, i.jsxs)('div', {
                    className: E.comboNameplate,
                    style: { color: u },
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: E.comboMultiplier,
                            style: { color: u },
                            variant: 'text-sm/bold',
                            children: I.intl.format(I.t['6bgVlp'], { multiplier: n })
                        }),
                        s &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: a()(E.comboSquare, E.left),
                                        style: { backgroundColor: u }
                                    }),
                                    (0, i.jsx)('div', {
                                        className: a()(E.comboSquare, E.right),
                                        style: { backgroundColor: u }
                                    })
                                ]
                            }),
                        o &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: a()(E.confettiIcon, E.left),
                                        children: (0, i.jsx)(f.Z, {
                                            width: 24,
                                            height: 24
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: a()(E.confettiIcon, E.right),
                                        children: (0, i.jsx)(f.Z, {
                                            width: 24,
                                            height: 24
                                        })
                                    })
                                ]
                            }),
                        1 === n &&
                            (0, i.jsx)(c.Text, {
                                className: E.tip,
                                variant: 'text-sm/bold',
                                children: I.intl.string(I.t.b5Cpoa)
                            })
                    ]
                })
            ]
        });
    });
t.Z = l.memo(function (e) {
    let { channelId: t } = e,
        n = (0, o.e7)([m.default], () => m.default.getId()),
        r = (0, o.e7)([p.Z], () => p.Z.isTyping(t, n), [t, n]),
        a = (0, o.e7)([C.Z], () => C.Z.isEnabled()),
        d = (0, o.e7)([x.ZP], () => x.ZP.isComboing(n, t), [t, n]),
        { ref: h, width: f = 0 } = (0, u.Z)(),
        [g, v] = l.useState(!1),
        I = (0, _.Z)(t),
        Z = a && d && r;
    l.useEffect(() => {
        Z && v(!0);
        let e = setTimeout(() => v(Z), 1000);
        return () => clearTimeout(e);
    }, [Z]);
    let T = (0, c.useSpring)({
            opacity: g ? 1 : 0,
            transform: g ? 'translateY(0)' : 'translateY(100%)',
            pointerEvents: 'none',
            config: s.config.stiff
        }),
        N = l.useMemo(
            () =>
                null != I
                    ? I
                    : {
                          value: 0,
                          multiplier: 1
                      },
            [I]
        ),
        j = l.useRef(N);
    l.useEffect(() => {
        (N.multiplier > 1 || N.value > 0) && (j.current = N);
    }, [N]);
    let { multiplier: A, value: y } = l.useMemo(
        () => ({
            value: Z ? N.value : j.current.value,
            multiplier: Z ? N.multiplier : j.current.multiplier
        }),
        [Z, N, j]
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b, {
                channelId: t,
                width: f
            }),
            (0, i.jsx)(s.animated.div, {
                ref: h,
                className: E.combo,
                style: T,
                children: (0, i.jsx)(S, {
                    value: y,
                    multiplier: A
                })
            })
        ]
    });
});
