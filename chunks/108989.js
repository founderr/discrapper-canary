n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(887024);
let s = [n(123353)],
    l = ['#FFFFFF'],
    u = 6,
    c = 1000 / 60,
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
function _(e) {
    let { className: t, firing: n = !0, wind: r = 2, sprites: _ = s, spriteColors: E = l, confettiConfig: f } = e,
        [h, p] = a.useState(null),
        [m, I] = a.useState(null),
        T = (0, o.uR)(m, h),
        g = a.useMemo(() => new o.qA({ wind: r }), [r]),
        S = a.useCallback(() => {
            let e = null == m ? void 0 : m.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            T.createConfetti({
                ...d,
                ...f,
                position: {
                    type: 'static-random',
                    minValue: {
                        x: -t.width / 2,
                        y: -u
                    },
                    maxValue: {
                        x: t.width,
                        y: -u
                    }
                }
            });
        }, [T, m, f]);
    return (
        a.useEffect(() => {
            let e = n ? setInterval(S, c) : null;
            return () => clearInterval(e);
        }, [n, S]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.O_, {
                    ref: I,
                    className: t,
                    environment: g
                }),
                (0, i.jsx)(o.Ji, {
                    ref: p,
                    colors: E,
                    sprites: _,
                    spriteWidth: u,
                    spriteHeight: u
                })
            ]
        })
    );
}
