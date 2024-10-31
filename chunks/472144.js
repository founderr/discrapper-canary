var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(100621),
    l = n(481060),
    c = n(569379),
    u = n(642145),
    d = n(808326);
t.Z = o.forwardRef((e, t) => {
    let { quest: n, percentComplete: o, size: a = 42, strokeWidth: m = 3, glowBlur: p = 0.4, percentCompleteText: f, percentCompleteTextVariant: C = 'text-lg/medium', children: _ } = e,
        v = (0, c.E)(n, o > 0),
        E = a / 2,
        S = a / 2 - m / 2,
        T = 2 * Math.PI * S,
        g = T - o * T,
        x = {
            strokeDasharray: ''.concat(T, ' ').concat(T),
            strokeDashoffset: g
        },
        N = {
            strokeDasharray: ''.concat(T, ' ').concat(T),
            strokeDashoffset: -o * T
        },
        h = { boxShadow: '0 0 30px 0px '.concat(v.glow) },
        { progressTextAnimation: I } = (0, l.useSpring)({
            progressTextAnimation: null != f && 1 !== o ? 1 : 0,
            config: u.Y
        });
    return (0, r.jsxs)('div', {
        className: d.outer,
        ref: t,
        children: [
            (0, r.jsxs)('div', {
                className: d.inner,
                style: h,
                children: [
                    _,
                    (0, r.jsxs)(s.animated.div, {
                        style: { opacity: I },
                        className: i()(d.coverContent, d.progressTextWrapper),
                        children: [
                            (0, r.jsx)('div', { className: i()(d.coverContent, d.progressTextOverlay) }),
                            (0, r.jsx)(l.Text, {
                                variant: C,
                                color: 'text-primary',
                                className: d.progressText,
                                children: f
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('svg', {
                className: d.progressBar,
                height: a,
                width: a,
                children: [
                    (0, r.jsxs)('defs', {
                        children: [
                            (0, r.jsxs)('filter', {
                                id: 'glow',
                                children: [
                                    (0, r.jsx)('feGaussianBlur', {
                                        result: 'coloredBlur',
                                        stdDeviation: p
                                    }),
                                    (0, r.jsxs)('feMerge', {
                                        children: [(0, r.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, r.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, r.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, r.jsx)('feMergeNode', { in: 'SourceGraphic' })]
                                    })
                                ]
                            }),
                            (0, r.jsxs)('linearGradient', {
                                id: 'linear',
                                x1: '100%',
                                y1: '0%',
                                x2: '0%',
                                y2: '0%',
                                children: [
                                    (0, r.jsx)('stop', {
                                        offset: '0%',
                                        stopColor: v.backgroundTop
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '100%',
                                        stopColor: v.backgroundBottom
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)('circle', {
                        className: d.progress,
                        strokeWidth: m,
                        fill: 'transparent',
                        r: S,
                        cx: E,
                        cy: E,
                        stroke: 'url(#linear)',
                        style: N
                    }),
                    (0, r.jsx)('circle', {
                        className: d.progress,
                        strokeWidth: m,
                        fill: 'transparent',
                        r: S,
                        cx: E,
                        cy: E,
                        stroke: v.foreground,
                        style: x
                    })
                ]
            })
        ]
    });
});
