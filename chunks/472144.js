var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(526629),
    i = n(481060),
    c = n(569379),
    d = n(642145),
    u = n(808326);
t.Z = o.forwardRef((e, t) => {
    let { quest: n, percentComplete: o, size: r = 42, strokeWidth: p = 3, glowBlur: m = 0.4, percentCompleteText: x, children: _ } = e,
        C = (0, c.EK)(n, o > 0),
        g = r / 2,
        f = r / 2 - p / 2,
        E = 2 * Math.PI * f,
        h = E - o * E,
        S = {
            strokeDasharray: ''.concat(E, ' ').concat(E),
            strokeDashoffset: h
        },
        T = {
            strokeDasharray: ''.concat(E, ' ').concat(E),
            strokeDashoffset: -o * E
        },
        N = { boxShadow: '0 0 30px 0px '.concat(C.glow) },
        { progressTextAnimation: v } = (0, i.useSpring)({
            progressTextAnimation: null != x && 1 !== o ? 1 : 0,
            config: d.Y
        });
    return (0, s.jsxs)('div', {
        className: u.outer,
        ref: t,
        children: [
            (0, s.jsxs)('div', {
                className: u.inner,
                style: N,
                children: [
                    _,
                    (0, s.jsxs)(l.animated.div, {
                        style: { opacity: v },
                        className: a()(u.coverContent, u.progressTextWrapper),
                        children: [
                            (0, s.jsx)('div', { className: a()(u.coverContent, u.progressTextOverlay) }),
                            (0, s.jsx)(i.Text, {
                                variant: 'text-lg/medium',
                                color: 'text-primary',
                                className: u.progressText,
                                children: x
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)('svg', {
                className: u.progressBar,
                height: r,
                width: r,
                children: [
                    (0, s.jsxs)('defs', {
                        children: [
                            (0, s.jsxs)('filter', {
                                id: 'glow',
                                children: [
                                    (0, s.jsx)('feGaussianBlur', {
                                        result: 'coloredBlur',
                                        stdDeviation: m
                                    }),
                                    (0, s.jsxs)('feMerge', {
                                        children: [(0, s.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, s.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, s.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, s.jsx)('feMergeNode', { in: 'SourceGraphic' })]
                                    })
                                ]
                            }),
                            (0, s.jsxs)('linearGradient', {
                                id: 'linear',
                                x1: '100%',
                                y1: '0%',
                                x2: '0%',
                                y2: '0%',
                                children: [
                                    (0, s.jsx)('stop', {
                                        offset: '0%',
                                        stopColor: C.backgroundTop
                                    }),
                                    (0, s.jsx)('stop', {
                                        offset: '100%',
                                        stopColor: C.backgroundBottom
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsx)('circle', {
                        className: u.progress,
                        strokeWidth: p,
                        fill: 'transparent',
                        r: f,
                        cx: g,
                        cy: g,
                        stroke: 'url(#linear)',
                        style: T
                    }),
                    (0, s.jsx)('circle', {
                        className: u.progress,
                        strokeWidth: p,
                        fill: 'transparent',
                        r: f,
                        cx: g,
                        cy: g,
                        stroke: C.foreground,
                        style: S
                    })
                ]
            })
        ]
    });
});
