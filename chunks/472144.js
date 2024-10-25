var r = t(200651),
    o = t(192379),
    a = t(120356),
    s = t.n(a),
    i = t(100621),
    l = t(481060),
    c = t(569379),
    u = t(642145),
    d = t(808326);
n.Z = o.forwardRef((e, n) => {
    let { quest: t, percentComplete: o, size: a = 42, strokeWidth: m = 3, glowBlur: p = 0.4, percentCompleteText: f, percentCompleteTextVariant: _ = 'text-lg/medium', children: C } = e,
        E = (0, c.E)(t, o > 0),
        v = a / 2,
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
        h = { boxShadow: '0 0 30px 0px '.concat(E.glow) },
        { progressTextAnimation: I } = (0, l.useSpring)({
            progressTextAnimation: null != f && 1 !== o ? 1 : 0,
            config: u.Y
        });
    return (0, r.jsxs)('div', {
        className: d.outer,
        ref: n,
        children: [
            (0, r.jsxs)('div', {
                className: d.inner,
                style: h,
                children: [
                    C,
                    (0, r.jsxs)(i.animated.div, {
                        style: { opacity: I },
                        className: s()(d.coverContent, d.progressTextWrapper),
                        children: [
                            (0, r.jsx)('div', { className: s()(d.coverContent, d.progressTextOverlay) }),
                            (0, r.jsx)(l.Text, {
                                variant: _,
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
                                        stopColor: E.backgroundTop
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '100%',
                                        stopColor: E.backgroundBottom
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
                        cx: v,
                        cy: v,
                        stroke: 'url(#linear)',
                        style: N
                    }),
                    (0, r.jsx)('circle', {
                        className: d.progress,
                        strokeWidth: m,
                        fill: 'transparent',
                        r: S,
                        cx: v,
                        cy: v,
                        stroke: E.foreground,
                        style: x
                    })
                ]
            })
        ]
    });
});
