var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(100621),
    s = n(481060),
    c = n(569379),
    u = n(642145),
    d = n(808326);
t.Z = o.forwardRef((e, t) => {
    let { quest: n, percentComplete: o, size: i = 42, strokeWidth: m = 3, glowBlur: p = 0.4, percentCompleteText: f, percentCompleteTextVariant: v = 'text-lg/medium', children: C } = e,
        x = (0, c.E)(n, o > 0),
        g = i / 2,
        h = i / 2 - m / 2,
        E = 2 * Math.PI * h,
        S = E - o * E,
        _ = {
            strokeDasharray: ''.concat(E, ' ').concat(E),
            strokeDashoffset: S
        },
        j = {
            strokeDasharray: ''.concat(E, ' ').concat(E),
            strokeDashoffset: -o * E
        },
        T = { boxShadow: '0 0 30px 0px '.concat(x.glow) },
        { progressTextAnimation: N } = (0, s.useSpring)({
            progressTextAnimation: null != f && 1 !== o ? 1 : 0,
            config: u.Y
        });
    return (0, r.jsxs)('div', {
        className: d.outer,
        ref: t,
        children: [
            (0, r.jsxs)('div', {
                className: d.inner,
                style: T,
                children: [
                    C,
                    (0, r.jsxs)(a.animated.div, {
                        style: { opacity: N },
                        className: l()(d.coverContent, d.progressTextWrapper),
                        children: [
                            (0, r.jsx)('div', { className: l()(d.coverContent, d.progressTextOverlay) }),
                            (0, r.jsx)(s.Text, {
                                variant: v,
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
                height: i,
                width: i,
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
                                        stopColor: x.backgroundTop
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '100%',
                                        stopColor: x.backgroundBottom
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)('circle', {
                        className: d.progress,
                        strokeWidth: m,
                        fill: 'transparent',
                        r: h,
                        cx: g,
                        cy: g,
                        stroke: 'url(#linear)',
                        style: j
                    }),
                    (0, r.jsx)('circle', {
                        className: d.progress,
                        strokeWidth: m,
                        fill: 'transparent',
                        r: h,
                        cx: g,
                        cy: g,
                        stroke: x.foreground,
                        style: _
                    })
                ]
            })
        ]
    });
});
