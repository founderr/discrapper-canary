r.d(n, {
    t: function () {
        return G;
    }
});
var i,
    a,
    s = r(653041);
var o = r(47120);
var l = r(200651),
    u = r(192379),
    c = r(703533),
    d = r(481060),
    f = r(40851),
    _ = r(745510),
    h = r(633302),
    p = r(549006),
    m = r(146128),
    g = r(981631),
    E = r(675654),
    v = r(75877);
let I = [],
    T = -5,
    b = -40,
    y = -40,
    S = -100,
    A = 11,
    N = 125,
    C = 20,
    R = 12,
    O = 48,
    D = 0.01;
function L(e) {
    let n = [];
    return (
        e.forEach((e) => {
            let r = h.ZP.getByName(e);
            if (null != r) {
                if (
                    (n.push({
                        src: r.url,
                        colorize: !1
                    }),
                    r.hasDiversity)
                )
                    for (let e in r.diversityChildren) {
                        let i = r.diversityChildren[e];
                        n.push({
                            src: i.url,
                            colorize: !1
                        });
                    }
            }
        }),
        n
    );
}
!(function (e) {
    (e.JACK_O_LANTERN = 'jack_o_lantern'), (e.NOSE = 'nose');
})(i || (i = {}));
let x = new Set(['jack_o_lantern', 'nose']),
    w = {
        jack_o_lantern: {
            sprites: L(['chocolate_bar', 'lollipop', 'candy'])
        },
        nose: { sprites: L(['foot']) }
    };
function P(e) {
    if (null == e) return null;
    for (let n of x) if (null != e.match(new RegExp(':'.concat(n, '(_tone[1-9])?')))) return n;
    return null;
}
!(function (e) {
    (e.ENTER = 'enter'), (e.CONFETTI = 'confetti'), (e.EXIT = 'exit');
})(a || (a = {}));
let M = {
    enter: {
        BEG: 0,
        END: 22
    },
    confetti: {
        BEG: 23,
        END: 119
    },
    exit: {
        BEG: 164,
        END: 200
    }
};
function k() {
    return r
        .e('60005')
        .then(r.t.bind(r, 931152, 19))
        .then((e) => {
            let { default: n } = e;
            return n;
        });
}
function U(e) {
    if (null == e) return 'enter';
    switch (e) {
        case 'enter':
            return 'confetti';
        case 'confetti':
            return 'exit';
        case 'exit':
            return 'enter';
    }
}
let B = u.forwardRef(function (e, n) {
    let { sprites: r } = e,
        [i, a] = u.useState(null),
        { confettiCanvas: s } = u.useContext(_.h),
        o = (0, c.uR)(s, i);
    return (
        u.useImperativeHandle(
            n,
            () => ({
                fireConfetti: (e, n) => {
                    o.createMultipleConfetti(
                        {
                            ...E.We,
                            position: {
                                type: 'static',
                                value: {
                                    x: e,
                                    y: n
                                }
                            },
                            velocity: {
                                type: 'static-random',
                                minValue: {
                                    x: T,
                                    y: y
                                },
                                maxValue: {
                                    x: b,
                                    y: S
                                }
                            },
                            size: {
                                type: 'static-random',
                                minValue: R,
                                maxValue: O
                            },
                            dragCoefficient: {
                                type: 'static',
                                value: D
                            }
                        },
                        C
                    );
                }
            }),
            [o]
        ),
        (0, l.jsx)(c.Ji, {
            ref: a,
            colors: I,
            sprites: r,
            spriteWidth: O,
            spriteHeight: O
        })
    );
});
function G(e) {
    let { children: n } = e,
        r = u.useRef({}),
        [i, a] = u.useState(null),
        s = U(i),
        o = u.useRef(null),
        [c, _] = u.useState(!1),
        h = u.useRef('jack_o_lantern'),
        E = (0, f.bp)(),
        I = u.useCallback(
            (e) => {
                if (!c) {
                    let n = P(e);
                    null != n && ((h.current = n), _(!0), a(null));
                }
            },
            [c]
        ),
        T = u.useMemo(() => ({ triggerAnimation: I }), [I]),
        b = u.useCallback((e) => {
            a(e);
        }, []),
        y = u.useCallback((e) => {
            'exit' === e && _(!1);
        }, []),
        S = u.useCallback((e) => {
            o.current = e;
        }, []);
    return (u.useEffect(() => {
        if ('confetti' === i) {
            if (null == o.current) return;
            let e = o.current.getBoundingClientRect(),
                n = e.left - A,
                i = e.top + N,
                a = r.current[h.current];
            null == a || a.fireConfetti(n, i);
        }
    }, [i]),
    E !== g.IlC.APP)
        ? (0, l.jsx)(l.Fragment, { children: n })
        : (0, l.jsxs)(m.Rm.Provider, {
              value: T,
              children: [
                  n,
                  Object.keys(w).map((e) => {
                      let n = w[e];
                      return (0, l.jsx)(
                          B,
                          {
                              ref: (n) => {
                                  null != n ? (r.current[e] = n) : delete r.current[e];
                              },
                              sprites: n.sprites
                          },
                          e
                      );
                  }),
                  c
                      ? (0, l.jsx)(p.ZP, {
                            children: (0, l.jsx)('div', {
                                className: v.animationWrapper,
                                children: (0, l.jsx)(d.SequencedLottieAnimation, {
                                    animationRef: S,
                                    className: v.lottieAnimation,
                                    nextScene: s,
                                    sceneSegments: M,
                                    onScenePlay: b,
                                    onSceneComplete: y,
                                    importData: k,
                                    pauseWhileUnfocused: !1
                                })
                            })
                        })
                      : null
              ]
          });
}
