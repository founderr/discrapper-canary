n(47120);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(703533),
    l = n(995295),
    c = n(100621),
    d = n(442837),
    u = n(110924),
    p = n(607070),
    m = n(819640),
    x = n(569379),
    f = n(675654),
    g = n(435616),
    h = n(197857);
let C = ['#51BC9D'];
t.Z = (e) => {
    var t;
    let { expansionSpring: n, overlayRef: s, quest: v, progressBarRef: j, isExpanded: _ } = e,
        { completionSpring: E, startCompletionAnimation: b } = (0, x.G)(),
        N = (null === (t = v.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        B = r.useRef(!1),
        S = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        T = r.useRef(null),
        A = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
        y = (0, u.Z)(A),
        [R, w] = r.useState(null),
        [I, k] = r.useState(null),
        q = r.useRef(
            new i.qA({
                gravity: 0,
                wind: 0
            })
        ),
        P = (0, i.uR)(R, I),
        M = r.useCallback(() => {
            if (S) return;
            let e = j.current,
                t = T.current;
            if (null != t && null != e && P.isReady) {
                var n, o, r, s;
                let { x: a, y: i } = e.getBoundingClientRect(),
                    { x: l, y: c } = t.getBoundingClientRect();
                P.createMultipleConfetti(
                    ((n = a - l),
                    (o = i - c),
                    (r = e.clientHeight),
                    (s = e.clientWidth),
                    {
                        ...f.We,
                        position: {
                            type: 'static-random',
                            minValue: {
                                x: n,
                                y: o
                            },
                            maxValue: {
                                x: n + r,
                                y: o + s
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
        }, [j, T, P, S]),
        O = (0, u.Z)(_);
    return (r.useEffect(() => {
        N && _ && !O && (b(), M());
    }, [_, N, b, M, O]),
    r.useEffect(() => {
        N &&
            !A &&
            y &&
            setTimeout(() => {
                b(), M();
            }, 200);
    }, [N, y, A, b, M]),
    r.useEffect(() => {
        if (!!P.isReady) !B.current && N && (b(), M()), (B.current = N);
    }, [N, B, M, b, P]),
    S)
        ? null
        : (0, o.jsxs)('div', {
              className: g.wrapper,
              'aria-hidden': 'true',
              ref: T,
              children: [
                  (0, o.jsx)(c.animated.div, {
                      className: g.background,
                      style: { opacity: E }
                  }),
                  (0, o.jsx)(c.animated.div, {
                      className: a()(g.borders, g.bordersTopLeft),
                      style: { opacity: E }
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
                          (0, o.jsx)(i.O_, {
                              ref: w,
                              className: g.confetti,
                              environment: q.current
                          }),
                          (0, o.jsx)(i.Ji, {
                              ref: k,
                              sprites: [h],
                              colors: C,
                              spriteWidth: f.Ko,
                              spriteHeight: f.Ko
                          }),
                          null != s.current &&
                              (0, l.createPortal)(
                                  (0, o.jsx)(c.animated.div, {
                                      className: a()(g.borders, g.bordersBottom),
                                      style: { opacity: E }
                                  }),
                                  s.current
                              )
                      ]
                  })
              ]
          });
};
