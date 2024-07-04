n(47120), n(177593);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(920906), o = n(442837), c = n(481060), d = n(393238), u = n(607070), h = n(44315), p = n(314897), m = n(111583), _ = n(889901), f = n(64078), E = n(351780), C = n(843693), g = n(641033), I = n(989830), x = n(689938), T = n(934376);
let v = a.memo(function (e) {
        let {
                channelId: t,
                width: n
            } = e, s = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), l = (0, o.e7)([C.ZP], () => C.ZP.getMostRecentMessageCombo(t), [t]), [d, h] = a.useState(!1);
        a.useEffect(() => {
            if (null == l ? void 0 : l.displayed)
                return;
            h(!1), setImmediate(() => {
                h((null != l ? (0, g.Eo)(l.combo) : 0) > 0);
            });
            let e = setTimeout(() => {
                h(!1), null != l && (0, f.ew)(l);
            }, 2000);
            return () => clearTimeout(e);
        }, [l]);
        let p = null != l ? '100%' : '200%', m = (0, r.useSpring)({
                opacity: d ? 1 : 0,
                translateY: d ? '0' : p,
                pointerEvents: 'none',
                width: n,
                config: s ? r.config.stiff : r.config.slow
            });
        return (0, i.jsx)(i.Fragment, {
            children: null != l && (0, i.jsx)(r.animated.div, {
                className: T.messageComboScore,
                style: m,
                children: (0, i.jsx)(c.Text, {
                    className: T.comboScore,
                    variant: 'text-sm/bold',
                    children: (0, g.Eo)(l.combo)
                })
            })
        });
    }), N = a.memo(function (e) {
        let {
                value: t,
                multiplier: n
            } = e, {
                color: s,
                square: r,
                flair: o
            } = a.useMemo(() => (0, g.yz)(n), [n]), d = (0, h.Lq)(s);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Text, {
                    className: T.comboValue,
                    variant: 'text-sm/bold',
                    children: t
                }),
                (0, i.jsxs)('div', {
                    className: T.comboNameplate,
                    style: { color: d },
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: T.comboMultiplier,
                            style: { color: d },
                            variant: 'text-sm/bold',
                            children: x.Z.Messages.POGGERMODE_COMBO.format({ multiplier: n })
                        }),
                        r && (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    className: l()(T.comboSquare, T.left),
                                    style: { backgroundColor: d }
                                }),
                                (0, i.jsx)('div', {
                                    className: l()(T.comboSquare, T.right),
                                    style: { backgroundColor: d }
                                })
                            ]
                        }),
                        o && (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)('div', {
                                    className: l()(T.confettiIcon, T.left),
                                    children: (0, i.jsx)(_.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: l()(T.confettiIcon, T.right),
                                    children: (0, i.jsx)(_.Z, {
                                        width: 24,
                                        height: 24
                                    })
                                })
                            ]
                        }),
                        1 === n && (0, i.jsx)(c.Text, {
                            className: T.tip,
                            variant: 'text-sm/bold',
                            children: x.Z.Messages.POGGERMODE_COMBO_TIP
                        })
                    ]
                })
            ]
        });
    });
t.Z = a.memo(function (e) {
    let {channelId: t} = e, n = (0, o.e7)([p.default], () => p.default.getId()), s = (0, o.e7)([m.Z], () => m.Z.isTyping(t, n), [
            t,
            n
        ]), l = (0, o.e7)([E.Z], () => E.Z.isEnabled()), c = (0, o.e7)([C.ZP], () => C.ZP.isComboing(n, t), [
            t,
            n
        ]), {
            ref: h,
            width: _ = 0
        } = (0, d.Z)(), f = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), [g, x] = a.useState(!1), S = (0, I.Z)(t), Z = l && c && s;
    a.useEffect(() => {
        Z && x(!0);
        let e = setTimeout(() => x(Z), 1000);
        return () => clearTimeout(e);
    }, [Z]);
    let A = (0, r.useSpring)({
            opacity: g ? 1 : 0,
            transform: g ? 'translateY(0)' : 'translateY(100%)',
            pointerEvents: 'none',
            config: r.config.stiff,
            immediate: f
        }), M = a.useMemo(() => null != S ? S : {
            value: 0,
            multiplier: 1
        }, [S]), b = a.useRef(M);
    a.useEffect(() => {
        (M.multiplier > 1 || M.value > 0) && (b.current = M);
    }, [M]);
    let {
        multiplier: R,
        value: j
    } = a.useMemo(() => ({
        value: Z ? M.value : b.current.value,
        multiplier: Z ? M.multiplier : b.current.multiplier
    }), [
        Z,
        M,
        b
    ]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v, {
                channelId: t,
                width: _
            }),
            (0, i.jsx)(r.animated.div, {
                ref: h,
                className: T.combo,
                style: A,
                children: (0, i.jsx)(N, {
                    value: j,
                    multiplier: R
                })
            })
        ]
    });
});
