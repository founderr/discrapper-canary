n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(703533);
let r = [n(123353)],
    s = ['#FFFFFF'],
    o = 1000 / 60,
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
            value: 830
        },
        opacity: {
            type: 'static',
            value: 0.3
        }
    };
function c(e) {
    let { className: t, firing: n = !0, wind: c = 2, sprites: d = r, spriteColors: _ = s, confettiConfig: f } = e,
        [C, L] = l.useState(null),
        [m, T] = l.useState(null),
        E = (0, a.uR)(m, C),
        S = l.useMemo(() => new a.qA({ wind: c }), [c]),
        p = l.useCallback(() => {
            let e = null == m ? void 0 : m.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            E.createConfetti({
                ...u,
                ...f,
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
        }, [E, m, f]);
    return (
        l.useEffect(() => {
            let e = n ? setInterval(p, o) : null;
            return () => clearInterval(e);
        }, [n, p]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.O_, {
                    ref: T,
                    className: t,
                    environment: S
                }),
                (0, i.jsx)(a.Ji, {
                    ref: L,
                    colors: _,
                    sprites: d,
                    spriteWidth: 6,
                    spriteHeight: 6
                })
            ]
        })
    );
}
