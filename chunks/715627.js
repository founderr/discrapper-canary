n(47120);
var s = n(735250),
    a = n(470079),
    r = n(887024),
    i = n(745510),
    l = n(675654);
let o = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70
    },
    c = (e, t, n) => (null == n ? t : (e * n) / 100),
    d = a.memo(function (e) {
        let { confettiTarget: t, colors: n, emojiURL: d, numBursts: _, particlesPerBurst: E, offsetXPercentageMax: u, offsetXPercentageMin: T, offsetYPercentageMax: I, offsetYPercentageMin: R, customConfettiCanvas: g, speedValues: N = o, dragCoefficientValue: C = 0.001, onAnimationEnd: m } = e,
            [f, A] = a.useState(null),
            { confettiCanvas: p } = a.useContext(i.h),
            M = (0, r.uR)(null != g ? g : p, f),
            [S, h] = a.useState(!1);
        a.useEffect(() => {
            S && (null == m || m());
        });
        let b = a.useMemo(() => {
            if (null != d)
                return [
                    {
                        src: d,
                        colorize: !1
                    }
                ];
        }, [d]);
        return (
            a.useEffect(() => {
                if (null == t) return;
                let e = Array(null != _ ? _ : 4).fill(0);
                return (
                    (e = e.map((n, s) =>
                        setTimeout(() => {
                            M.createMultipleConfetti(
                                (function (e, t, n, s, a) {
                                    let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                        i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0.001,
                                        d = c(e.width, 100, n),
                                        _ = c(e.height, 75, a),
                                        E = c(e.width, 350, t),
                                        u = c(e.height, 75, s),
                                        { xMin: T, xMax: I, yMin: R, yMax: g } = r;
                                    return {
                                        ...l.We,
                                        position: {
                                            type: 'static-random',
                                            minValue: {
                                                x: e.left + d,
                                                y: e.top + _
                                            },
                                            maxValue: {
                                                x: e.left + E,
                                                y: e.top + u
                                            }
                                        },
                                        velocity: {
                                            type: 'static-random',
                                            minValue: {
                                                x: T,
                                                y: R
                                            },
                                            maxValue: {
                                                x: I,
                                                y: g
                                            }
                                        },
                                        size: {
                                            type: 'static-random',
                                            minValue: l.Ko,
                                            maxValue: l.Ko
                                        },
                                        dragCoefficient: {
                                            type: 'static',
                                            value: i
                                        }
                                    };
                                })(t.getBoundingClientRect(), u, T, I, R, N, C),
                                null != E ? E : 50
                            ),
                                s === e.length - 1 && null != m && h(!0);
                        }, 60 * s)
                    )),
                    () => {
                        for (let t of e) clearTimeout(t);
                    }
                );
            }, [M, t, _, E, u, T, I, R, N, C, m]),
            (0, s.jsx)(r.Ji, {
                ref: A,
                sprites: null != b ? b : l.CA,
                colors: null != n ? n : l.Br,
                spriteWidth: l.Ko,
                spriteHeight: l.Ko
            })
        );
    });
t.Z = d;
