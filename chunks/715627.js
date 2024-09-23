n(47120);
var s = n(735250),
    a = n(470079),
    r = n(887024),
    i = n(745510),
    o = n(675654);
let l = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70
    },
    c = (e, t, n) => (null == n ? t : (e * n) / 100),
    d = a.memo(function (e) {
        let { confettiTarget: t, colors: n, emojiURL: d, numBursts: _, particlesPerBurst: u, offsetXPercentageMax: E, offsetXPercentageMin: T, offsetYPercentageMax: I, offsetYPercentageMin: R, customConfettiCanvas: m, speedValues: g = l, dragCoefficientValue: N = 0.001, onAnimationEnd: C } = e,
            [p, f] = a.useState(null),
            { confettiCanvas: A } = a.useContext(i.h),
            S = (0, r.uR)(null != m ? m : A, p),
            [h, M] = a.useState(!1);
        a.useEffect(() => {
            h && (null == C || C());
        });
        let x = a.useMemo(() => {
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
                            S.createMultipleConfetti(
                                (function (e, t, n, s, a) {
                                    let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : l,
                                        i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0.001,
                                        d = c(e.width, 100, n),
                                        _ = c(e.height, 75, a),
                                        u = c(e.width, 350, t),
                                        E = c(e.height, 75, s),
                                        { xMin: T, xMax: I, yMin: R, yMax: m } = r;
                                    return {
                                        ...o.We,
                                        position: {
                                            type: 'static-random',
                                            minValue: {
                                                x: e.left + d,
                                                y: e.top + _
                                            },
                                            maxValue: {
                                                x: e.left + u,
                                                y: e.top + E
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
                                                y: m
                                            }
                                        },
                                        size: {
                                            type: 'static-random',
                                            minValue: o.Ko,
                                            maxValue: o.Ko
                                        },
                                        dragCoefficient: {
                                            type: 'static',
                                            value: i
                                        }
                                    };
                                })(t.getBoundingClientRect(), E, T, I, R, g, N),
                                null != u ? u : 50
                            ),
                                s === e.length - 1 && null != C && M(!0);
                        }, 60 * s)
                    )),
                    () => {
                        for (let t of e) clearTimeout(t);
                    }
                );
            }, [S, t, _, u, E, T, I, R, g, N, C]),
            (0, s.jsx)(r.Ji, {
                ref: f,
                sprites: null != x ? x : o.CA,
                colors: null != n ? n : o.Br,
                spriteWidth: o.Ko,
                spriteHeight: o.Ko
            })
        );
    });
t.Z = d;
