n(47120);
var s = n(735250),
    a = n(470079),
    r = n(780384),
    i = n(410030),
    o = n(119269),
    l = n(315566);
let c = 'url(#gradient)',
    d = (e, t) => {
        switch (e) {
            case o.Q.NITRO_LOGO:
                return t ? '0.3' : '0.2';
            case o.Q.NITRO_GEM:
            default:
                return;
        }
    },
    _ = (e) => {
        switch (e) {
            case o.Q.NITRO_GEM:
                return 'var(--background-primary)';
            case o.Q.NITRO_LOGO:
                return 'var(--premium-tier-2-purple)';
            default:
                return;
        }
    },
    u = (e, t) => {
        switch (t) {
            case o.Q.NITRO_GEM:
                return c;
            case o.Q.NITRO_LOGO:
                return e ? 'url(#gradient_nitro_logo)' : c;
            default:
                return;
        }
    };
t.Z = (e) => {
    let { percentage: t = 0, children: n, animationClassName: c, initialPercentage: E = 0, progressCircleStrokeSize: T = 2, progressCircleVariation: I, progressCircleStroke: R } = e,
        m = 43 + T / 2,
        g = 2 * Math.PI * m,
        [N, C] = a.useState(E);
    a.useEffect(() => {
        let e = setTimeout(() => {
            C(t);
        }, 200);
        return () => clearTimeout(e);
    }, [t]);
    let p = (0, i.ZP)(),
        f = (0, r.ap)(p),
        A = _(I),
        S = d(I, f),
        h = null != R ? R : u(f, I);
    return (0, s.jsxs)('div', {
        className: l.circleContainer,
        children: [
            (0, s.jsxs)('svg', {
                viewBox: '0 0 100 100',
                className: l.circleSVG,
                children: [
                    (0, s.jsx)('circle', {
                        className: I === o.Q.NITRO_GEM ? l.baseProgressCircle : void 0,
                        fill: 'transparent',
                        strokeWidth: T,
                        r: ''.concat(m),
                        cx: '50%',
                        cy: '50%',
                        stroke: A,
                        strokeOpacity: S
                    }),
                    (0, s.jsx)('circle', {
                        stroke: h,
                        strokeWidth: T,
                        strokeLinecap: 'round',
                        strokeDasharray: ''.concat(g, ' ').concat(g),
                        className: c,
                        style: { strokeDashoffset: (1 - N / 100) * g },
                        r: ''.concat(m),
                        cx: '50%',
                        cy: '50%'
                    })
                ]
            }),
            (0, s.jsxs)('svg', {
                width: '0',
                height: '0',
                children: [
                    (0, s.jsxs)('linearGradient', {
                        id: 'gradient',
                        x1: '0%',
                        y1: '0%',
                        x2: '100%',
                        y2: '100%',
                        children: [
                            (0, s.jsx)('stop', {
                                offset: '0%',
                                style: { stopColor: '#FFBDF2' }
                            }),
                            (0, s.jsx)('stop', {
                                offset: '100%',
                                style: { stopColor: '#E742E1' }
                            })
                        ]
                    }),
                    (0, s.jsxs)('linearGradient', {
                        id: 'gradient_nitro_logo',
                        x1: '2.99995',
                        y1: '67.6298',
                        x2: '132.55',
                        y2: '67.6298',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, s.jsx)('stop', { stopColor: '#F9A0E8' }),
                            (0, s.jsx)('stop', {
                                offset: '1',
                                stopColor: '#E742E1'
                            })
                        ]
                    }),
                    (0, s.jsxs)('linearGradient', {
                        id: 'dark-purple-gradient',
                        x1: '0%',
                        y1: '0%',
                        x2: '100%',
                        y2: '0%',
                        children: [
                            (0, s.jsx)('stop', {
                                offset: '0%',
                                style: {
                                    stopColor: '#241731',
                                    stopOpacity: 1
                                }
                            }),
                            (0, s.jsx)('stop', {
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
            (0, s.jsx)('div', {
                className: l.childrenContainer,
                children: n
            })
        ]
    });
};
