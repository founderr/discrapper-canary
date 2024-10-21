n.d(t, {
    r: function () {
        return I;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(100621),
    l = n(692547),
    u = n(186325),
    c = n(84735),
    d = n(180035),
    _ = n(481060),
    E = n(540059),
    f = n(980492);
let h = {
        mass: 1,
        tension: 250
    },
    p = {
        X: {
            TOP: 'M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z',
            BOTTOM: 'M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z'
        },
        BAR: {
            TOP: 'M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z',
            BOTTOM: 'M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z'
        },
        CHECK: {
            TOP: 'M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z',
            BOTTOM: 'M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z'
        }
    },
    I = function (e) {
        let { id: t, onChange: n, checked: a, disabled: I, className: m, focusProps: T, innerRef: S } = e,
            { reducedMotion: g } = i.useContext(u.S),
            A = i.useRef(null),
            [N, R] = i.useState(!1),
            O = (0, E.Q)('Switch'),
            v = (0, d.d)(O ? l.Z.colors.INTERACTIVE_MUTED : l.Z.unsafe_rawColors.PRIMARY_400).spring(),
            C = (0, d.d)(O ? l.Z.colors.REDESIGN_INPUT_CONTROL_SELECTED : l.Z.unsafe_rawColors.GREEN_360).spring(),
            { state: L, opacity: D } = (0, _.useSpring)(
                {
                    config: h,
                    opacity: I ? (O ? 0.5 : 0.3) : 1,
                    state: N ? (a ? 0.7 : 0.3) : a ? 1 : 0
                },
                'animate-always'
            );
        return (0, r.jsx)(c.t, {
            ...T,
            within: !0,
            offset: -2,
            children: (0, r.jsxs)(o.animated.div, {
                className: s()(f.container, m, {
                    [f.checked]: a,
                    [f.disabled]: I
                }),
                onMouseDown: () => !I && R(!0),
                onMouseUp: () => R(!1),
                onMouseLeave: () => R(!1),
                style: {
                    opacity: D,
                    backgroundColor: L.to({
                        output: [v, C]
                    })
                },
                children: [
                    (0, r.jsxs)(o.animated.svg, {
                        className: f.slider,
                        viewBox: '0 0 28 20',
                        preserveAspectRatio: 'xMinYMid meet',
                        style: {
                            left: L.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [O ? 0 : -3, 1, 8, 12]
                            })
                        },
                        'aria-hidden': !0,
                        children: [
                            (0, r.jsx)(o.animated.rect, {
                                fill: 'white',
                                x: L.to({
                                    range: [0, 0.3, 0.7, 1],
                                    output: [4, 0, 0, 4]
                                }),
                                y: L.to({
                                    range: [0, 0.3, 0.7, 1],
                                    output: [0, 1, 1, 0]
                                }),
                                height: L.to({
                                    range: [0, 0.3, 0.7, 1],
                                    output: [20, 18, 18, 20]
                                }),
                                width: L.to({
                                    range: [0, 0.3, 0.7, 1],
                                    output: [20, 28, 28, 20]
                                }),
                                rx: '10'
                            }),
                            (function (e, t, n, i) {
                                let a = e.to({
                                        output: [t, n]
                                    }),
                                    s = i ? [p.X.TOP, p.X.TOP, p.CHECK.TOP, p.CHECK.TOP] : [p.X.TOP, p.BAR.TOP, p.BAR.TOP, p.CHECK.TOP],
                                    l = i ? [p.X.BOTTOM, p.X.BOTTOM, p.CHECK.BOTTOM, p.CHECK.BOTTOM] : [p.X.BOTTOM, p.BAR.BOTTOM, p.BAR.BOTTOM, p.CHECK.BOTTOM];
                                return (0, r.jsxs)('svg', {
                                    viewBox: '0 0 20 20',
                                    fill: 'none',
                                    children: [
                                        (0, r.jsx)(o.animated.path, {
                                            fill: a,
                                            d: e.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: s
                                            })
                                        }),
                                        (0, r.jsx)(o.animated.path, {
                                            fill: a,
                                            d: e.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: l
                                            })
                                        })
                                    ]
                                });
                            })(L, v, C, g.enabled)
                        ]
                    }),
                    (0, r.jsx)('input', {
                        id: t,
                        type: 'checkbox',
                        ref: (e) => {
                            (A.current = e), null != S && (S.current = e);
                        },
                        className: f.input,
                        tabIndex: I ? -1 : 0,
                        onKeyDown: function (e) {
                            if (!I && !e.repeat) (' ' === e.key || 'Enter' === e.key) && R(!0);
                        },
                        onKeyUp: function (e) {
                            var t;
                            if (!I && !!N && !e.repeat) R(!1), 'Enter' === e.key && (null === (t = A.current) || void 0 === t || t.click());
                        },
                        onChange: function (e) {
                            R(!1), null == n || n(e.currentTarget.checked, e);
                        },
                        checked: a,
                        disabled: I
                    })
                ]
            })
        });
    };
