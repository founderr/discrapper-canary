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
    g = n(675654),
    f = n(435616),
    h = n(197857);
let C = ['#51BC9D'];
t.Z = (e) => {
    var t;
    let { expansionSpring: n, overlayRef: s, quest: v, progressBarRef: j, isExpanded: _ } = e,
        { completionSpring: E, startCompletionAnimation: b } = (0, x.G)(),
        N = (null === (t = v.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        S = r.useRef(!1),
        T = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        B = r.useRef(null),
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
        O = r.useCallback(() => {
            if (T) return;
            let e = j.current,
                t = B.current;
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
                        ...g.We,
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
        }, [j, B, P, T]),
        M = (0, u.Z)(_);
    return (r.useEffect(() => {
        N && _ && !M && (b(), O());
    }, [_, N, b, O, M]),
    r.useEffect(() => {
        N &&
            !A &&
            y &&
            setTimeout(() => {
                b(), O();
            }, 200);
    }, [N, y, A, b, O]),
    r.useEffect(() => {
        if (!!P.isReady) !S.current && N && (b(), O()), (S.current = N);
    }, [N, S, O, b, P]),
    T)
        ? null
        : (0, o.jsxs)('div', {
              className: f.wrapper,
              'aria-hidden': 'true',
              ref: B,
              children: [
                  (0, o.jsx)(c.animated.div, {
                      className: f.background,
                      style: { opacity: E }
                  }),
                  (0, o.jsx)(c.animated.div, {
                      className: a()(f.borders, f.bordersTopLeft),
                      style: { opacity: E }
                  }),
                  (0, o.jsxs)(c.animated.div, {
                      className: f.confettiWrapper,
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
                              className: f.confetti,
                              environment: q.current
                          }),
                          (0, o.jsx)(i.Ji, {
                              ref: k,
                              sprites: [h],
                              colors: C,
                              spriteWidth: g.Ko,
                              spriteHeight: g.Ko
                          }),
                          null != s.current &&
                              (0, l.createPortal)(
                                  (0, o.jsx)(c.animated.div, {
                                      className: a()(f.borders, f.bordersBottom),
                                      style: { opacity: E }
                                  }),
                                  s.current
                              )
                      ]
                  })
              ]
          });
};
