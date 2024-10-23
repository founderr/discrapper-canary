var o = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(100621),
    i = n(481060),
    c = n(569379),
    d = n(642145),
    u = n(808326);
t.Z = s.forwardRef((e, t) => {
    let { quest: n, percentComplete: s, size: r = 42, strokeWidth: p = 3, glowBlur: m = 0.4, percentCompleteText: x, children: C } = e,
        g = (0, c.E)(n, s > 0),
        _ = r / 2,
        f = r / 2 - p / 2,
        h = 2 * Math.PI * f,
        E = h - s * h,
        S = {
            strokeDasharray: ''.concat(h, ' ').concat(h),
            strokeDashoffset: E
        },
        T = {
            strokeDasharray: ''.concat(h, ' ').concat(h),
            strokeDashoffset: -s * h
        },
        v = { boxShadow: '0 0 30px 0px '.concat(g.glow) },
        { progressTextAnimation: N } = (0, i.useSpring)({
            progressTextAnimation: null != x && 1 !== s ? 1 : 0,
            config: d.Y
        });
    return (0, o.jsxs)('div', {
        className: u.outer,
        ref: t,
        children: [
            (0, o.jsxs)('div', {
                className: u.inner,
                style: v,
                children: [
                    C,
                    (0, o.jsxs)(l.animated.div, {
                        style: { opacity: N },
                        className: a()(u.coverContent, u.progressTextWrapper),
                        children: [
                            (0, o.jsx)('div', { className: a()(u.coverContent, u.progressTextOverlay) }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-lg/medium',
                                color: 'text-primary',
                                className: u.progressText,
                                children: x
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsxs)('svg', {
                className: u.progressBar,
                height: r,
                width: r,
                children: [
                    (0, o.jsxs)('defs', {
                        children: [
                            (0, o.jsxs)('filter', {
                                id: 'glow',
                                children: [
                                    (0, o.jsx)('feGaussianBlur', {
                                        result: 'coloredBlur',
                                        stdDeviation: m
                                    }),
                                    (0, o.jsxs)('feMerge', {
                                        children: [(0, o.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, o.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, o.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, o.jsx)('feMergeNode', { in: 'SourceGraphic' })]
                                    })
                                ]
                            }),
                            (0, o.jsxs)('linearGradient', {
                                id: 'linear',
                                x1: '100%',
                                y1: '0%',
                                x2: '0%',
                                y2: '0%',
                                children: [
                                    (0, o.jsx)('stop', {
                                        offset: '0%',
                                        stopColor: g.backgroundTop
                                    }),
                                    (0, o.jsx)('stop', {
                                        offset: '100%',
                                        stopColor: g.backgroundBottom
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsx)('circle', {
                        className: u.progress,
                        strokeWidth: p,
                        fill: 'transparent',
                        r: f,
                        cx: _,
                        cy: _,
                        stroke: 'url(#linear)',
                        style: T
                    }),
                    (0, o.jsx)('circle', {
                        className: u.progress,
                        strokeWidth: p,
                        fill: 'transparent',
                        r: f,
                        cx: _,
                        cy: _,
                        stroke: g.foreground,
                        style: S
                    })
                ]
            })
        ]
    });
});
