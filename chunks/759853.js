n(47120);
var s = n(735250), o = n(470079), r = n(887024), a = n(920906), l = n(442837), i = n(110924), c = n(607070), d = n(819640), u = n(569379), p = n(675654), x = n(267925), m = n(197857);
let g = ['#51BC9D'];
t.Z = e => {
    var t;
    let {
            quest: n,
            progressBarRef: C,
            isExpanded: f
        } = e, {
            completionSpring: _,
            startCompletionAnimation: h
        } = (0, u.GX)(), E = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, S = o.useRef(!1), T = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), N = o.useRef(null), v = (0, l.e7)([d.Z], () => d.Z.hasLayers()), A = (0, i.Z)(v), [j, B] = o.useState(null), [b, O] = o.useState(null), R = o.useRef(new r.qA({
            gravity: 0,
            wind: 0
        })), I = (0, r.uR)(j, b), y = o.useCallback(() => {
            if (T)
                return;
            let e = C.current, t = N.current;
            if (null != t && null != e && I.isReady) {
                var n, s, o, r;
                let {
                        x: a,
                        y: l
                    } = e.getBoundingClientRect(), {
                        x: i,
                        y: c
                    } = t.getBoundingClientRect();
                I.createMultipleConfetti((n = a - i, s = l - c, o = e.clientHeight, r = e.clientWidth, {
                    ...p.We,
                    position: {
                        type: 'static-random',
                        minValue: {
                            x: n,
                            y: s
                        },
                        maxValue: {
                            x: n + o,
                            y: s + r
                        }
                    },
                    velocity: {
                        type: 'static-random',
                        minValue: {
                            x: -20,
                            y: -20
                        },
                        maxValue: {
                            x: 20,
                            y: 20
                        }
                    },
                    opacity: {
                        type: 'linear',
                        value: 2,
                        addValue: -0.1
                    },
                    dragCoefficient: {
                        type: 'static',
                        value: 0.0001
                    },
                    size: {
                        type: 'static-random',
                        minValue: 2,
                        maxValue: 3
                    }
                }), 100);
            }
        }, [
            C,
            N,
            I,
            T
        ]), M = (0, i.Z)(f);
    return (o.useEffect(() => {
        E && f && !M && (h(), y());
    }, [
        f,
        E,
        h,
        y,
        M
    ]), o.useEffect(() => {
        E && !v && A && setTimeout(() => {
            h(), y();
        }, 200);
    }, [
        E,
        A,
        v,
        h,
        y
    ]), o.useEffect(() => {
        if (!!I.isReady)
            !S.current && E && (h(), y()), S.current = E;
    }, [
        E,
        S,
        y,
        h,
        I
    ]), T) ? null : (0, s.jsxs)('div', {
        className: x.wrapper,
        'aria-hidden': 'true',
        ref: N,
        children: [
            (0, s.jsx)(a.animated.div, {
                className: x.background,
                style: { opacity: _ }
            }),
            (0, s.jsx)(r.O_, {
                ref: B,
                className: x.confetti,
                environment: R.current
            }),
            (0, s.jsx)(r.Ji, {
                ref: O,
                sprites: [m],
                colors: g,
                spriteWidth: p.Ko,
                spriteHeight: p.Ko
            })
        ]
    });
};
