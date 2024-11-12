n(47120);
var i = n(200651),
    r = n(192379),
    a = n(703533),
    s = n(745510),
    l = n(675654);
let o = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70
    },
    c = (e, t, n) => (null == n ? t : (e * n) / 100),
    d = r.memo(function (e) {
        let { confettiTarget: t, colors: n, emojiURL: d, numBursts: u, particlesPerBurst: g, offsetXPercentageMax: m, offsetXPercentageMin: f, offsetYPercentageMax: p, offsetYPercentageMin: _, customConfettiCanvas: h, speedValues: E = o, dragCoefficientValue: b = 1.66, onAnimationEnd: x } = e,
            [C, v] = r.useState(null),
            { confettiCanvas: T } = r.useContext(s.h),
            N = (0, a.uR)(null != h ? h : T, C),
            [I, S] = r.useState(!1);
        r.useEffect(() => {
            I && (null == x || x());
        });
        let R = r.useMemo(() => {
            if (null != d)
                return [
                    {
                        src: d,
                        colorize: !1
                    }
                ];
        }, [d]);
        return (
            r.useEffect(() => {
                if (null == t) return;
                let e = Array(null != u ? u : 4).fill(0);
                return (
                    (e = e.map((n, i) =>
                        setTimeout(() => {
                            N.createMultipleConfetti(
                                (function (e, t, n, i, r) {
                                    let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        d = c(e.width, 100, n),
                                        u = c(e.height, 75, r),
                                        g = c(e.width, 350, t),
                                        m = c(e.height, 75, i),
                                        { xMin: f, xMax: p, yMin: _, yMax: h } = a;
                                    return {
                                        ...l.We,
                                        position: {
                                            type: 'static-random',
                                            minValue: {
                                                x: e.left + d,
                                                y: e.top + u
                                            },
                                            maxValue: {
                                                x: e.left + g,
                                                y: e.top + m
                                            }
                                        },
                                        velocity: {
                                            type: 'static-random',
                                            minValue: {
                                                x: f,
                                                y: _
                                            },
                                            maxValue: {
                                                x: p,
                                                y: h
                                            }
                                        },
                                        size: {
                                            type: 'static-random',
                                            minValue: l.Ko,
                                            maxValue: l.Ko
                                        },
                                        dragCoefficient: {
                                            type: 'static',
                                            value: s
                                        }
                                    };
                                })(t.getBoundingClientRect(), m, f, p, _, E, b),
                                null != g ? g : 50
                            ),
                                i === e.length - 1 && null != x && S(!0);
                        }, 60 * i)
                    )),
                    () => {
                        for (let t of e) clearTimeout(t);
                    }
                );
            }, [N, t, u, g, m, f, p, _, E, b, x]),
            (0, i.jsx)(a.Ji, {
                ref: v,
                sprites: null != R ? R : l.CA,
                colors: null != n ? n : l.Br,
                spriteWidth: l.Ko,
                spriteHeight: l.Ko
            })
        );
    });
t.Z = d;
