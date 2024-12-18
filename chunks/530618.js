var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(119617),
    l = r(675654);
let u = 50,
    c = 10,
    d = 100;
function f(e, n) {
    return (
        (n = null != n ? n : 1),
        {
            ...l.We,
            position: {
                type: 'static-random',
                minValue: {
                    x: e.x,
                    y: e.y
                },
                maxValue: {
                    x: e.x + e.width,
                    y: e.y + e.height / 2
                }
            },
            velocity: {
                type: 'static-random',
                minValue: {
                    x: -100 * n,
                    y: -50 * n
                },
                maxValue: {
                    x: 100 * n,
                    y: -300 * n
                }
            },
            dragCoefficient: {
                type: 'static',
                value: 0.166
            }
        }
    );
}
function _(e) {
    let { confettiTarget: n, confettiCanvas: r, confettiVelocityMultiplier: i, sprites: _, colors: h } = e,
        [p, m] = s.useState(null),
        g = (0, o.uR)(r, p),
        [E, v] = s.useState(!1);
    return (
        s.useEffect(() => {
            let e = Array(c).fill(0);
            return (
                null != n &&
                    g.isReady &&
                    !E &&
                    (e = e.map((r, a) =>
                        setTimeout(() => {
                            a === e.length - 1 && v(!0), g.createMultipleConfetti(f(n.getBoundingClientRect(), i), u);
                        }, a * d)
                    )),
                () => {
                    for (let n of e) clearTimeout(n);
                }
            );
        }, [g, n, E, i]),
        (0, a.jsx)(o.Ji, {
            ref: m,
            sprites: null != _ ? _ : l.CA,
            colors: null != h ? h : l.Br,
            spriteWidth: l.Ko,
            spriteHeight: l.Ko
        })
    );
}
n.Z = _;
