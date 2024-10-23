n(47120);
var o = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(703533),
    i = n(995295),
    c = n(100621),
    d = n(442837),
    u = n(110924),
    p = n(607070),
    m = n(819640),
    x = n(569379),
    C = n(675654),
    g = n(435616),
    _ = n(197857);
let f = ['#51BC9D'];
t.Z = (e) => {
    var t;
    let { expansionSpring: n, overlayRef: r, quest: h, progressBarRef: E, isExpanded: S } = e,
        { completionSpring: T, startCompletionAnimation: v } = (0, x.G)(),
        N = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        j = s.useRef(!1),
        A = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        b = s.useRef(null),
        R = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
        B = (0, u.Z)(R),
        [I, y] = s.useState(null),
        [M, O] = s.useState(null),
        k = s.useRef(
            new l.qA({
                gravity: 0,
                wind: 0
            })
        ),
        w = (0, l.uR)(I, M),
        L = s.useCallback(() => {
            if (A) return;
            let e = E.current,
                t = b.current;
            if (null != t && null != e && w.isReady) {
                var n, o, s, r;
                let { x: a, y: l } = e.getBoundingClientRect(),
                    { x: i, y: c } = t.getBoundingClientRect();
                w.createMultipleConfetti(
                    ((n = a - i),
                    (o = l - c),
                    (s = e.clientHeight),
                    (r = e.clientWidth),
                    {
                        ...C.We,
                        position: {
                            type: 'static-random',
                            minValue: {
                                x: n,
                                y: o
                            },
                            maxValue: {
                                x: n + s,
                                y: o + r
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
                            value: 0.166
                        },
                        size: {
                            type: 'static-random',
                            minValue: 2,
                            maxValue: 3
                        }
                    }),
                    100
                );
            }
        }, [E, b, w, A]),
        U = (0, u.Z)(S);
    return (s.useEffect(() => {
        N && S && !U && (v(), L());
    }, [S, N, v, L, U]),
    s.useEffect(() => {
        N &&
            !R &&
            B &&
            setTimeout(() => {
                v(), L();
            }, 200);
    }, [N, B, R, v, L]),
    s.useEffect(() => {
        if (!!w.isReady) !j.current && N && (v(), L()), (j.current = N);
    }, [N, j, L, v, w]),
    A)
        ? null
        : (0, o.jsxs)('div', {
              className: g.wrapper,
              'aria-hidden': 'true',
              ref: b,
              children: [
                  (0, o.jsx)(c.animated.div, {
                      className: g.background,
                      style: { opacity: T }
                  }),
                  (0, o.jsx)(c.animated.div, {
                      className: a()(g.borders, g.bordersTopLeft),
                      style: { opacity: T }
                  }),
                  (0, o.jsxs)(c.animated.div, {
                      className: g.confettiWrapper,
                      style: {
                          transform: n
                              .to({
                                  range: [0, 1],
                                  output: [-35, 0]
                              })
                              .to((e) => 'translateY('.concat(e, 'px)'))
                      },
                      children: [
                          (0, o.jsx)(l.O_, {
                              ref: y,
                              className: g.confetti,
                              environment: k.current
                          }),
                          (0, o.jsx)(l.Ji, {
                              ref: O,
                              sprites: [_],
                              colors: f,
                              spriteWidth: C.Ko,
                              spriteHeight: C.Ko
                          }),
                          null != r.current &&
                              (0, i.createPortal)(
                                  (0, o.jsx)(c.animated.div, {
                                      className: a()(g.borders, g.bordersBottom),
                                      style: { opacity: T }
                                  }),
                                  r.current
                              )
                      ]
                  })
              ]
          });
};
