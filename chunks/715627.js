i(47120);
var o = i(200651),
    n = i(192379),
    a = i(703533),
    l = i(745510),
    u = i(675654);
let c = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70
    },
    r = (t, e, i) => (null == i ? e : (t * i) / 100),
    s = n.memo(function (t) {
        let { confettiTarget: e, colors: i, emojiURL: s, numBursts: f, particlesPerBurst: d, offsetXPercentageMax: m, offsetXPercentageMin: p, offsetYPercentageMax: h, offsetYPercentageMin: x, customConfettiCanvas: y, speedValues: _ = c, dragCoefficientValue: g = 1.66, onAnimationEnd: v } = t,
            [b, w] = n.useState(null),
            { confettiCanvas: C } = n.useContext(l.h),
            M = (0, a.uR)(null != y ? y : C, b),
            [G, k] = n.useState(!1);
        n.useEffect(() => {
            G && (null == v || v());
        });
        let V = n.useMemo(() => {
            if (null != s)
                return [
                    {
                        src: s,
                        colorize: !1
                    }
                ];
        }, [s]);
        return (
            n.useEffect(() => {
                if (null == e) return;
                let t = Array(null != f ? f : 4).fill(0);
                return (
                    (t = t.map((i, o) =>
                        setTimeout(() => {
                            M.createMultipleConfetti(
                                (function (t, e, i, o, n) {
                                    let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : c,
                                        l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        s = r(t.width, 100, i),
                                        f = r(t.height, 75, n),
                                        d = r(t.width, 350, e),
                                        m = r(t.height, 75, o),
                                        { xMin: p, xMax: h, yMin: x, yMax: y } = a;
                                    return {
                                        ...u.We,
                                        position: {
                                            type: 'static-random',
                                            minValue: {
                                                x: t.left + s,
                                                y: t.top + f
                                            },
                                            maxValue: {
                                                x: t.left + d,
                                                y: t.top + m
                                            }
                                        },
                                        velocity: {
                                            type: 'static-random',
                                            minValue: {
                                                x: p,
                                                y: x
                                            },
                                            maxValue: {
                                                x: h,
                                                y: y
                                            }
                                        },
                                        size: {
                                            type: 'static-random',
                                            minValue: u.Ko,
                                            maxValue: u.Ko
                                        },
                                        dragCoefficient: {
                                            type: 'static',
                                            value: l
                                        }
                                    };
                                })(e.getBoundingClientRect(), m, p, h, x, _, g),
                                null != d ? d : 50
                            ),
                                o === t.length - 1 && null != v && k(!0);
                        }, 60 * o)
                    )),
                    () => {
                        for (let e of t) clearTimeout(e);
                    }
                );
            }, [M, e, f, d, m, p, h, x, _, g, v]),
            (0, o.jsx)(a.Ji, {
                ref: w,
                sprites: null != V ? V : u.CA,
                colors: null != i ? i : u.Br,
                spriteWidth: u.Ko,
                spriteHeight: u.Ko
            })
        );
    });
e.Z = s;
