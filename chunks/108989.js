n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(887024);
let o = [n(123353)],
    s = ['#FFFFFF'],
    d = 1000 / 60,
    u = {
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
function c(e) {
    let { className: t, firing: n = !0, wind: c = 2, sprites: l = o, spriteColors: f = s, confettiConfig: _ } = e,
        [b, p] = i.useState(null),
        [h, m] = i.useState(null),
        g = (0, a.uR)(h, b),
        I = i.useMemo(() => new a.qA({ wind: c }), [c]),
        C = i.useCallback(() => {
            let e = null == h ? void 0 : h.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            g.createConfetti({
                ...u,
                ..._,
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
        }, [g, h, _]);
    return (
        i.useEffect(() => {
            let e = n ? setInterval(C, d) : null;
            return () => clearInterval(e);
        }, [n, C]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.O_, {
                    ref: m,
                    className: t,
                    environment: I
                }),
                (0, r.jsx)(a.Ji, {
                    ref: p,
                    colors: f,
                    sprites: l,
                    spriteWidth: 6,
                    spriteHeight: 6
                })
            ]
        })
    );
}
