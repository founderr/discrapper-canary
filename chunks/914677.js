s(47120);
var n = s(200651),
    r = s(192379),
    i = s(780384),
    o = s(410030),
    a = s(119269),
    l = s(77368);
let c = 'url(#gradient)',
    d = (e, t) => {
        switch (e) {
            case a.Q.NITRO_LOGO:
                return t ? '0.3' : '0.2';
            case a.Q.NITRO_GEM:
            default:
                return;
        }
    },
    u = (e) => {
        switch (e) {
            case a.Q.NITRO_GEM:
                return 'var(--background-primary)';
            case a.Q.NITRO_LOGO:
                return 'var(--premium-tier-2-purple)';
            default:
                return;
        }
    },
    p = (e, t) => {
        switch (t) {
            case a.Q.NITRO_GEM:
                return c;
            case a.Q.NITRO_LOGO:
                return e ? 'url(#gradient_nitro_logo)' : c;
            default:
                return;
        }
    };
t.Z = (e) => {
    let { percentage: t = 0, children: s, animationClassName: c, initialPercentage: f = 0, progressCircleStrokeSize: x = 2, progressCircleVariation: C, progressCircleStroke: g } = e,
        h = 43 + x / 2,
        _ = 2 * Math.PI * h,
        [m, L] = r.useState(f);
    r.useEffect(() => {
        let e = setTimeout(() => {
            L(t);
        }, 200);
        return () => clearTimeout(e);
    }, [t]);
    let v = (0, o.ZP)(),
        j = (0, i.ap)(v),
        E = u(C),
        A = d(C, j),
        O = null != g ? g : p(j, C);
    return (0, n.jsxs)('div', {
        className: l.circleContainer,
        children: [
            (0, n.jsxs)('svg', {
                viewBox: '0 0 100 100',
                className: l.circleSVG,
                children: [
                    (0, n.jsx)('circle', {
                        className: C === a.Q.NITRO_GEM ? l.baseProgressCircle : void 0,
                        fill: 'transparent',
                        strokeWidth: x,
                        r: ''.concat(h),
                        cx: '50%',
                        cy: '50%',
                        stroke: E,
                        strokeOpacity: A
                    }),
                    (0, n.jsx)('circle', {
                        stroke: O,
                        strokeWidth: x,
                        strokeLinecap: 'round',
                        strokeDasharray: ''.concat(_, ' ').concat(_),
                        className: c,
                        style: { strokeDashoffset: (1 - m / 100) * _ },
                        r: ''.concat(h),
                        cx: '50%',
                        cy: '50%'
                    })
                ]
            }),
            (0, n.jsxs)('svg', {
                width: '0',
                height: '0',
                children: [
                    (0, n.jsxs)('linearGradient', {
                        id: 'gradient',
                        x1: '0%',
                        y1: '0%',
                        x2: '100%',
                        y2: '100%',
                        children: [
                            (0, n.jsx)('stop', {
                                offset: '0%',
                                style: { stopColor: '#FFBDF2' }
                            }),
                            (0, n.jsx)('stop', {
                                offset: '100%',
                                style: { stopColor: '#E742E1' }
                            })
                        ]
                    }),
                    (0, n.jsxs)('linearGradient', {
                        id: 'gradient_nitro_logo',
                        x1: '2.99995',
                        y1: '67.6298',
                        x2: '132.55',
                        y2: '67.6298',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, n.jsx)('stop', { stopColor: '#F9A0E8' }),
                            (0, n.jsx)('stop', {
                                offset: '1',
                                stopColor: '#E742E1'
                            })
                        ]
                    }),
                    (0, n.jsxs)('linearGradient', {
                        id: 'dark-purple-gradient',
                        x1: '0%',
                        y1: '0%',
                        x2: '100%',
                        y2: '0%',
                        children: [
                            (0, n.jsx)('stop', {
                                offset: '0%',
                                style: {
                                    stopColor: '#241731',
                                    stopOpacity: 1
                                }
                            }),
                            (0, n.jsx)('stop', {
                                offset: '100%',
                                style: {
                                    stopColor: '#241731',
                                    stopOpacity: 1
                                }
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: l.childrenContainer,
                children: s
            })
        ]
    });
};
