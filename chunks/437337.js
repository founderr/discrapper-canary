n.d(t, {
    r: function () {
        return I;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(526629),
    u = n(692547),
    c = n(186325),
    d = n(84735),
    _ = n(180035),
    E = n(481060),
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
    };
function m(e, t, n, r) {
    let a = e.to({
            output: [t, n]
        }),
        o = r ? [p.X.TOP, p.X.TOP, p.CHECK.TOP, p.CHECK.TOP] : [p.X.TOP, p.BAR.TOP, p.BAR.TOP, p.CHECK.TOP],
        s = r ? [p.X.BOTTOM, p.X.BOTTOM, p.CHECK.BOTTOM, p.CHECK.BOTTOM] : [p.X.BOTTOM, p.BAR.BOTTOM, p.BAR.BOTTOM, p.CHECK.BOTTOM];
    return (0, i.jsxs)('svg', {
        viewBox: '0 0 20 20',
        fill: 'none',
        children: [
            (0, i.jsx)(l.animated.path, {
                fill: a,
                d: e.to({
                    range: [0, 0.3, 0.7, 1],
                    output: o
                })
            }),
            (0, i.jsx)(l.animated.path, {
                fill: a,
                d: e.to({
                    range: [0, 0.3, 0.7, 1],
                    output: s
                })
            })
        ]
    });
}
let I = function e(e) {
    let { id: t, onChange: n, checked: r, disabled: o, className: p, focusProps: I, innerRef: T } = e,
        { reducedMotion: g } = a.useContext(c.S),
        S = a.useRef(null),
        [A, v] = a.useState(!1),
        N = (0, _.d)(u.Z.unsafe_rawColors.PRIMARY_400).spring(),
        O = (0, _.d)(u.Z.unsafe_rawColors.GREEN_360).spring(),
        { state: R, opacity: C } = (0, E.useSpring)(
            {
                config: h,
                opacity: o ? 0.3 : 1,
                state: A ? (r ? 0.7 : 0.3) : r ? 1 : 0
            },
            'animate-always'
        );
    function y(e) {
        v(!1), null == n || n(e.currentTarget.checked, e);
    }
    function b(e) {
        if (!o && !e.repeat) (' ' === e.key || 'Enter' === e.key) && v(!0);
    }
    function L(e) {
        var t;
        if (!o && !!A && !e.repeat) v(!1), 'Enter' === e.key && (null === (t = S.current) || void 0 === t || t.click());
    }
    return (0, i.jsx)(d.t, {
        ...I,
        within: !0,
        offset: -2,
        children: (0, i.jsxs)(l.animated.div, {
            className: s()(f.container, p, {
                [f.checked]: r,
                [f.disabled]: o
            }),
            onMouseDown: () => !o && v(!0),
            onMouseUp: () => v(!1),
            onMouseLeave: () => v(!1),
            style: {
                opacity: C,
                backgroundColor: R.to({
                    output: [N, O]
                })
            },
            children: [
                (0, i.jsxs)(l.animated.svg, {
                    className: f.slider,
                    viewBox: '0 0 28 20',
                    preserveAspectRatio: 'xMinYMid meet',
                    style: {
                        left: R.to({
                            range: [0, 0.3, 0.7, 1],
                            output: [-3, 1, 8, 12]
                        })
                    },
                    'aria-hidden': !0,
                    children: [
                        (0, i.jsx)(l.animated.rect, {
                            fill: 'white',
                            x: R.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [4, 0, 0, 4]
                            }),
                            y: R.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [0, 1, 1, 0]
                            }),
                            height: R.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [20, 18, 18, 20]
                            }),
                            width: R.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [20, 28, 28, 20]
                            }),
                            rx: '10'
                        }),
                        m(R, N, O, g.enabled)
                    ]
                }),
                (0, i.jsx)('input', {
                    id: t,
                    type: 'checkbox',
                    ref: (e) => {
                        (S.current = e), null != T && (T.current = e);
                    },
                    className: f.input,
                    tabIndex: o ? -1 : 0,
                    onKeyDown: b,
                    onKeyUp: L,
                    onChange: y,
                    checked: r,
                    disabled: o
                })
            ]
        })
    });
};
