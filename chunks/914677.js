n(47120);
var s = n(735250),
    a = n(470079),
    r = n(780384),
    i = n(410030),
    l = n(119269),
    o = n(315566);
let c = 'url(#gradient)',
    _ = (e, t) => {
        switch (e) {
            case l.Q.NITRO_LOGO:
                return t ? '0.3' : '0.2';
            case l.Q.NITRO_GEM:
            default:
                return;
        }
    },
    d = (e) => {
        switch (e) {
            case l.Q.NITRO_GEM:
                return 'var(--background-primary)';
            case l.Q.NITRO_LOGO:
                return 'var(--premium-tier-2-purple)';
            default:
                return;
        }
    },
    E = (e, t) => {
        switch (t) {
            case l.Q.NITRO_GEM:
                return c;
            case l.Q.NITRO_LOGO:
                return e ? 'url(#gradient_nitro_logo)' : c;
            default:
                return;
        }
    };
t.Z = (e) => {
    let { percentage: t = 0, children: n, animationClassName: c, initialPercentage: u = 0, progressCircleStrokeSize: T = 2, progressCircleVariation: I, progressCircleStroke: R } = e,
        g = 43 + T / 2,
        N = 2 * Math.PI * g,
        [m, C] = a.useState(u);
    a.useEffect(() => {
        let e = setTimeout(() => {
            C(t);
        }, 200);
        return () => clearTimeout(e);
    }, [t]);
    let A = (0, i.ZP)(),
        f = (0, r.ap)(A),
        p = d(I),
        M = _(I, f),
        S = null != R ? R : E(f, I);
    return (0, s.jsxs)('div', {
        className: o.circleContainer,
        children: [
            (0, s.jsxs)('svg', {
                viewBox: '0 0 100 100',
                className: o.circleSVG,
                children: [
                    (0, s.jsx)('circle', {
                        className: I === l.Q.NITRO_GEM ? o.baseProgressCircle : void 0,
                        fill: 'transparent',
                        strokeWidth: T,
                        r: ''.concat(g),
                        cx: '50%',
                        cy: '50%',
                        stroke: p,
                        strokeOpacity: M
                    }),
                    (0, s.jsx)('circle', {
                        stroke: S,
                        strokeWidth: T,
                        strokeLinecap: 'round',
                        strokeDasharray: ''.concat(N, ' ').concat(N),
                        className: c,
                        style: { strokeDashoffset: (1 - m / 100) * N },
                        r: ''.concat(g),
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
                className: o.childrenContainer,
                children: n
            })
        ]
    });
};
