n(47120), n(177593);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(100621),
    o = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(607070),
    h = n(44315),
    p = n(314897),
    m = n(111583),
    _ = n(889901),
    f = n(64078),
    E = n(351780),
    g = n(843693),
    C = n(641033),
    I = n(989830),
    T = n(689938),
    x = n(443528);
let S = s.memo(function (e) {
        let { channelId: t, width: n } = e,
            a = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
            l = (0, o.e7)([g.ZP], () => g.ZP.getMostRecentMessageCombo(t), [t]),
            [u, h] = s.useState(!1);
        s.useEffect(() => {
            if (null == l ? void 0 : l.displayed) return;
            h(!1),
                setImmediate(() => {
                    h((null != l ? (0, C.Eo)(l.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                h(!1), null != l && (0, f.ew)(l);
            }, 2000);
            return () => clearTimeout(e);
        }, [l]);
        let p = null != l ? '100%' : '200%',
            m = (0, c.useSpring)(
                {
                    opacity: u ? 1 : 0,
                    translateY: u ? '0' : p,
                    pointerEvents: 'none',
                    width: n,
                    config: a ? r.config.stiff : r.config.slow
                },
                'animate-always'
            );
        return (0, i.jsx)(i.Fragment, {
            children:
                null != l &&
                (0, i.jsx)(r.animated.div, {
                    className: x.messageComboScore,
                    style: m,
                    children: (0, i.jsx)(c.Text, {
                        className: x.comboScore,
                        variant: 'text-sm/bold',
                        children: (0, C.Eo)(l.combo)
                    })
                })
        });
    }),
    v = s.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: a, square: r, flair: o } = s.useMemo(() => (0, C.yz)(n), [n]),
            u = (0, h.Lq)(a);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Text, {
                    className: x.comboValue,
                    variant: 'text-sm/bold',
                    children: t
                }),
                (0, i.jsxs)('div', {
                    className: x.comboNameplate,
                    style: { color: u },
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: x.comboMultiplier,
                            style: { color: u },
                            variant: 'text-sm/bold',
                            children: T.Z.Messages.POGGERMODE_COMBO.format({ multiplier: n })
                        }),
                        r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: l()(x.comboSquare, x.left),
                                        style: { backgroundColor: u }
                                    }),
                                    (0, i.jsx)('div', {
                                        className: l()(x.comboSquare, x.right),
                                        style: { backgroundColor: u }
                                    })
                                ]
                            }),
                        o &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: l()(x.confettiIcon, x.left),
                                        children: (0, i.jsx)(_.Z, {
                                            width: 24,
                                            height: 24
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: l()(x.confettiIcon, x.right),
                                        children: (0, i.jsx)(_.Z, {
                                            width: 24,
                                            height: 24
                                        })
                                    })
                                ]
                            }),
                        1 === n &&
                            (0, i.jsx)(c.Text, {
                                className: x.tip,
                                variant: 'text-sm/bold',
                                children: T.Z.Messages.POGGERMODE_COMBO_TIP
                            })
                    ]
                })
            ]
        });
    });
t.Z = s.memo(function (e) {
    let { channelId: t } = e,
        n = (0, o.e7)([p.default], () => p.default.getId()),
        a = (0, o.e7)([m.Z], () => m.Z.isTyping(t, n), [t, n]),
        l = (0, o.e7)([E.Z], () => E.Z.isEnabled()),
        d = (0, o.e7)([g.ZP], () => g.ZP.isComboing(n, t), [t, n]),
        { ref: h, width: _ = 0 } = (0, u.Z)(),
        [f, C] = s.useState(!1),
        T = (0, I.Z)(t),
        N = l && d && a;
    s.useEffect(() => {
        N && C(!0);
        let e = setTimeout(() => C(N), 1000);
        return () => clearTimeout(e);
    }, [N]);
    let A = (0, c.useSpring)({
            opacity: f ? 1 : 0,
            transform: f ? 'translateY(0)' : 'translateY(100%)',
            pointerEvents: 'none',
            config: r.config.stiff
        }),
        Z = s.useMemo(
            () =>
                null != T
                    ? T
                    : {
                          value: 0,
                          multiplier: 1
                      },
            [T]
        ),
        M = s.useRef(Z);
    s.useEffect(() => {
        (Z.multiplier > 1 || Z.value > 0) && (M.current = Z);
    }, [Z]);
    let { multiplier: b, value: R } = s.useMemo(
        () => ({
            value: N ? Z.value : M.current.value,
            multiplier: N ? Z.multiplier : M.current.multiplier
        }),
        [N, Z, M]
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S, {
                channelId: t,
                width: _
            }),
            (0, i.jsx)(r.animated.div, {
                ref: h,
                className: x.combo,
                style: A,
                children: (0, i.jsx)(v, {
                    value: R,
                    multiplier: b
                })
            })
        ]
    });
});
