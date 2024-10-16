n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var a = n(735250),
    r = n(470079),
    l = n(887024);
let i = [n(123353)],
    s = ['#FFFFFF'],
    o = 1000 / 60,
    d = {
        velocity: {
            type: 'static-random',
            minValue: {
                x: 0,
                y: 1
            },
            maxValue: {
                x: 3,
                y: 3
            }
        },
        rotation: {
            type: 'linear-random',
            minValue: {
                x: 0,
                y: 0,
                z: 0
            },
            maxValue: {
                x: 0,
                y: 0,
                z: 360
            },
            minAddValue: {
                x: 0,
                y: 0,
                z: -5
            },
            maxAddValue: {
                x: 0,
                y: 0,
                z: 5
            }
        },
        size: {
            type: 'static-random',
            minValue: 2,
            maxValue: 6
        },
        dragCoefficient: {
            type: 'static',
            value: {
                x: 0.05,
                y: 0.05
            }
        },
        opacity: {
            type: 'static',
            value: 0.3
        }
    };
function u(e) {
    let { className: t, firing: n = !0, wind: u = 2, sprites: c = i, spriteColors: f = s, confettiConfig: h } = e,
        [b, _] = r.useState(null),
        [m, E] = r.useState(null),
        N = (0, l.uR)(m, b),
        S = r.useMemo(() => new l.qA({ wind: u }), [u]),
        g = r.useCallback(() => {
            let e = null == m ? void 0 : m.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            N.createConfetti({
                ...d,
                ...h,
                position: {
                    type: 'static-random',
                    minValue: {
                        x: -t.width / 2,
                        y: -6
                    },
                    maxValue: {
                        x: t.width,
                        y: -6
                    }
                }
            });
        }, [N, m, h]);
    return (
        r.useEffect(() => {
            let e = n ? setInterval(g, o) : null;
            return () => clearInterval(e);
        }, [n, g]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(l.O_, {
                    ref: E,
                    className: t,
                    environment: S
                }),
                (0, a.jsx)(l.Ji, {
                    ref: _,
                    colors: f,
                    sprites: c,
                    spriteWidth: 6,
                    spriteHeight: 6
                })
            ]
        })
    );
}
