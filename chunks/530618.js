n(47120);
var r = n(200651),
    i = n(192379),
    a = n(703533),
    s = n(675654);
t.Z = function (e) {
    let { confettiTarget: t, confettiCanvas: n, confettiVelocityMultiplier: o, sprites: l, colors: u } = e,
        [c, d] = i.useState(null),
        f = (0, a.uR)(n, c),
        [_, p] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = Array(10).fill(0);
            return (
                null != t &&
                    f.isReady &&
                    !_ &&
                    (e = e.map((n, r) =>
                        setTimeout(() => {
                            var n, i;
                            r === e.length - 1 && p(!0),
                                f.createMultipleConfetti(
                                    ((n = t.getBoundingClientRect()),
                                    (i = null != (i = o) ? i : 1),
                                    {
                                        ...s.We,
                                        position: {
                                            type: 'static-random',
                                            minValue: {
                                                x: n.x,
                                                y: n.y
                                            },
                                            maxValue: {
                                                x: n.x + n.width,
                                                y: n.y + n.height / 2
                                            }
                                        },
                                        velocity: {
                                            type: 'static-random',
                                            minValue: {
                                                x: -100 * i,
                                                y: -50 * i
                                            },
                                            maxValue: {
                                                x: 100 * i,
                                                y: -300 * i
                                            }
                                        },
                                        dragCoefficient: {
                                            type: 'static',
                                            value: 0.166
                                        }
                                    }),
                                    50
                                );
                        }, 100 * r)
                    )),
                () => {
                    for (let t of e) clearTimeout(t);
                }
            );
        }, [f, t, _, o]),
        (0, r.jsx)(a.Ji, {
            ref: d,
            sprites: null != l ? l : s.CA,
            colors: null != u ? u : s.Br,
            spriteWidth: s.Ko,
            spriteHeight: s.Ko
        })
    );
};
