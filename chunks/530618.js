var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(887024),
    s = n(675654);
let l = 50,
    u = 10,
    c = 100;
function d(e, t) {
    return (
        (t = null != t ? t : 1),
        {
            ...s.We,
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
                    x: -100 * t,
                    y: -50 * t
                },
                maxValue: {
                    x: 100 * t,
                    y: -300 * t
                }
            },
            dragCoefficient: {
                type: 'static',
                value: 0.0001
            }
        }
    );
}
function _(e) {
    let { confettiTarget: t, confettiCanvas: n, confettiVelocityMultiplier: r, sprites: _, colors: E } = e,
        [f, h] = a.useState(null),
        p = (0, o.uR)(n, f),
        [m, I] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = Array(u).fill(0);
            return (
                null != t &&
                    p.isReady &&
                    !m &&
                    (e = e.map((n, i) =>
                        setTimeout(() => {
                            i === e.length - 1 && I(!0), p.createMultipleConfetti(d(t.getBoundingClientRect(), r), l);
                        }, i * c)
                    )),
                () => {
                    for (let t of e) clearTimeout(t);
                }
            );
        }, [p, t, m, r]),
        (0, i.jsx)(o.Ji, {
            ref: h,
            sprites: null != _ ? _ : s.CA,
            colors: null != E ? E : s.Br,
            spriteWidth: s.Ko,
            spriteHeight: s.Ko
        })
    );
}
t.Z = _;
