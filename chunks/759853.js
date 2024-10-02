n(47120);
var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(887024),
    i = n(699581),
    c = n(212433),
    d = n(442837),
    u = n(110924),
    p = n(607070),
    m = n(819640),
    x = n(569379),
    _ = n(675654),
    C = n(435616),
    g = n(197857);
let f = ['#51BC9D'];
t.Z = (e) => {
    var t;
    let { expansionSpring: n, overlayRef: r, quest: E, progressBarRef: h, isExpanded: S } = e,
        { completionSpring: T, startCompletionAnimation: v } = (0, x.GX)(),
        N = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        j = o.useRef(!1),
        A = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        R = o.useRef(null),
        b = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
        B = (0, u.Z)(b),
        [I, M] = o.useState(null),
        [O, y] = o.useState(null),
        L = o.useRef(
            new l.qA({
                gravity: 0,
                wind: 0
            })
        ),
        w = (0, l.uR)(I, O),
        k = o.useCallback(() => {
            if (A) return;
            let e = h.current,
                t = R.current;
            if (null != t && null != e && w.isReady) {
                var n, s, o, r;
                let { x: a, y: l } = e.getBoundingClientRect(),
                    { x: i, y: c } = t.getBoundingClientRect();
                w.createMultipleConfetti(
                    ((n = a - i),
                    (s = l - c),
                    (o = e.clientHeight),
                    (r = e.clientWidth),
                    {
                        ..._.We,
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
                    }),
                    100
                );
            }
        }, [h, R, w, A]),
        U = (0, u.Z)(S);
    return (o.useEffect(() => {
        N && S && !U && (v(), k());
    }, [S, N, v, k, U]),
    o.useEffect(() => {
        N &&
            !b &&
            B &&
            setTimeout(() => {
                v(), k();
            }, 200);
    }, [N, B, b, v, k]),
    o.useEffect(() => {
        if (!!w.isReady) !j.current && N && (v(), k()), (j.current = N);
    }, [N, j, k, v, w]),
    A)
        ? null
        : (0, s.jsxs)('div', {
              className: C.wrapper,
              'aria-hidden': 'true',
              ref: R,
              children: [
                  (0, s.jsx)(c.animated.div, {
                      className: C.background,
                      style: { opacity: T }
                  }),
                  (0, s.jsx)(c.animated.div, {
                      className: a()(C.borders, C.bordersTopLeft),
                      style: { opacity: T }
                  }),
                  (0, s.jsxs)(c.animated.div, {
                      className: C.confettiWrapper,
                      style: {
                          transform: n
                              .to({
                                  range: [0, 1],
                                  output: [-35, 0]
                              })
                              .to((e) => 'translateY('.concat(e, 'px)'))
                      },
                      children: [
                          (0, s.jsx)(l.O_, {
                              ref: M,
                              className: C.confetti,
                              environment: L.current
                          }),
                          (0, s.jsx)(l.Ji, {
                              ref: y,
                              sprites: [g],
                              colors: f,
                              spriteWidth: _.Ko,
                              spriteHeight: _.Ko
                          }),
                          null != r.current &&
                              (0, i.createPortal)(
                                  (0, s.jsx)(c.animated.div, {
                                      className: a()(C.borders, C.bordersBottom),
                                      style: { opacity: T }
                                  }),
                                  r.current
                              )
                      ]
                  })
              ]
          });
};
