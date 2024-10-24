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
    _ = n(435616),
    g = n(197857);
let f = ['#51BC9D'];
t.Z = (e) => {
    var t;
    let { expansionSpring: n, overlayRef: r, quest: h, progressBarRef: E, isExpanded: S } = e,
        { completionSpring: T, startCompletionAnimation: v } = (0, x.G)(),
        N = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        j = s.useRef(!1),
        A = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        b = s.useRef(null),
        B = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
        R = (0, u.Z)(B),
        [y, I] = s.useState(null),
        [M, O] = s.useState(null),
        w = s.useRef(
            new l.qA({
                gravity: 0,
                wind: 0
            })
        ),
        k = (0, l.uR)(y, M),
        P = s.useCallback(() => {
            if (A) return;
            let e = E.current,
                t = b.current;
            if (null != t && null != e && k.isReady) {
                var n, o, s, r;
                let { x: a, y: l } = e.getBoundingClientRect(),
                    { x: i, y: c } = t.getBoundingClientRect();
                k.createMultipleConfetti(
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
        }, [E, b, k, A]),
        L = (0, u.Z)(S);
    return (s.useEffect(() => {
        N && S && !L && (v(), P());
    }, [S, N, v, P, L]),
    s.useEffect(() => {
        N &&
            !B &&
            R &&
            setTimeout(() => {
                v(), P();
            }, 200);
    }, [N, R, B, v, P]),
    s.useEffect(() => {
        if (!!k.isReady) !j.current && N && (v(), P()), (j.current = N);
    }, [N, j, P, v, k]),
    A)
        ? null
        : (0, o.jsxs)('div', {
              className: _.wrapper,
              'aria-hidden': 'true',
              ref: b,
              children: [
                  (0, o.jsx)(c.animated.div, {
                      className: _.background,
                      style: { opacity: T }
                  }),
                  (0, o.jsx)(c.animated.div, {
                      className: a()(_.borders, _.bordersTopLeft),
                      style: { opacity: T }
                  }),
                  (0, o.jsxs)(c.animated.div, {
                      className: _.confettiWrapper,
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
                              ref: I,
                              className: _.confetti,
                              environment: w.current
                          }),
                          (0, o.jsx)(l.Ji, {
                              ref: O,
                              sprites: [g],
                              colors: f,
                              spriteWidth: C.Ko,
                              spriteHeight: C.Ko
                          }),
                          null != r.current &&
                              (0, i.createPortal)(
                                  (0, o.jsx)(c.animated.div, {
                                      className: a()(_.borders, _.bordersBottom),
                                      style: { opacity: T }
                                  }),
                                  r.current
                              )
                      ]
                  })
              ]
          });
};
