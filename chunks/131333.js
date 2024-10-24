n.d(t, {
    t: function () {
        return v;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(200651),
    l = n(192379),
    u = n(703533),
    c = n(481060),
    d = n(40851),
    _ = n(745510),
    E = n(633302),
    f = n(549006),
    h = n(146128),
    p = n(981631),
    I = n(675654),
    m = n(10257);
let T = [];
function S(e) {
    let t = [];
    return (
        e.forEach((e) => {
            let n = E.ZP.getByName(e);
            if (null != n) {
                if (
                    (t.push({
                        src: n.url,
                        colorize: !1
                    }),
                    n.hasDiversity)
                )
                    for (let e in n.diversityChildren) {
                        let r = n.diversityChildren[e];
                        t.push({
                            src: r.url,
                            colorize: !1
                        });
                    }
            }
        }),
        t
    );
}
((a = r || (r = {})).JACK_O_LANTERN = 'jack_o_lantern'), (a.NOSE = 'nose');
let g = new Set(['jack_o_lantern', 'nose']),
    A = {
        jack_o_lantern: {
            sprites: S(['chocolate_bar', 'lollipop', 'candy'])
        },
        nose: { sprites: S(['foot']) }
    };
((s = i || (i = {})).ENTER = 'enter'), (s.CONFETTI = 'confetti'), (s.EXIT = 'exit');
let N = {
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
function R() {
    return n
        .e('60005')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let O = l.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [r, i] = l.useState(null),
        { confettiCanvas: a } = l.useContext(_.h),
        s = (0, u.uR)(a, r);
    return (
        l.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    s.createMultipleConfetti(
                        {
                            ...I.We,
                            position: {
                                type: 'static',
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            velocity: {
                                type: 'static-random',
                                minValue: {
                                    x: -5,
                                    y: -40
                                },
                                maxValue: {
                                    x: -40,
                                    y: -100
                                }
                            },
                            size: {
                                type: 'static-random',
                                minValue: 12,
                                maxValue: 48
                            },
                            dragCoefficient: {
                                type: 'static',
                                value: 0.01
                            }
                        },
                        20
                    );
                }
            }),
            [s]
        ),
        (0, o.jsx)(u.Ji, {
            ref: i,
            colors: T,
            sprites: n,
            spriteWidth: 48,
            spriteHeight: 48
        })
    );
});
function v(e) {
    let { children: t } = e,
        n = l.useRef({}),
        [r, i] = l.useState(null),
        a = (function (e) {
            if (null == e) return 'enter';
            switch (e) {
                case 'enter':
                    return 'confetti';
                case 'confetti':
                    return 'exit';
                case 'exit':
                    return 'enter';
            }
        })(r),
        s = l.useRef(null),
        [u, _] = l.useState(!1),
        E = l.useRef('jack_o_lantern'),
        I = (0, d.bp)(),
        T = l.useCallback(
            (e) => {
                if (!u) {
                    let t = (function (e) {
                        if (null == e) return null;
                        for (let t of g) if (null != e.match(new RegExp(':'.concat(t, '(_tone[1-9])?')))) return t;
                        return null;
                    })(e);
                    null != t && ((E.current = t), _(!0), i(null));
                }
            },
            [u]
        ),
        S = l.useMemo(() => ({ triggerAnimation: T }), [T]),
        v = l.useCallback((e) => {
            i(e);
        }, []),
        C = l.useCallback((e) => {
            'exit' === e && _(!1);
        }, []),
        L = l.useCallback((e) => {
            s.current = e;
        }, []);
    return (l.useEffect(() => {
        if ('confetti' === r) {
            if (null == s.current) return;
            let e = s.current.getBoundingClientRect(),
                t = e.left - 11,
                r = e.top + 125,
                i = n.current[E.current];
            null == i || i.fireConfetti(t, r);
        }
    }, [r]),
    I !== p.IlC.APP)
        ? (0, o.jsx)(o.Fragment, { children: t })
        : (0, o.jsxs)(h.Rm.Provider, {
              value: S,
              children: [
                  t,
                  Object.keys(A).map((e) => {
                      let t = A[e];
                      return (0, o.jsx)(
                          O,
                          {
                              ref: (t) => {
                                  null != t ? (n.current[e] = t) : delete n.current[e];
                              },
                              sprites: t.sprites
                          },
                          e
                      );
                  }),
                  u
                      ? (0, o.jsx)(f.ZP, {
                            children: (0, o.jsx)('div', {
                                className: m.animationWrapper,
                                children: (0, o.jsx)(c.SequencedLottieAnimation, {
                                    animationRef: L,
                                    className: m.lottieAnimation,
                                    nextScene: a,
                                    sceneSegments: N,
                                    onScenePlay: v,
                                    onSceneComplete: C,
                                    importData: R,
                                    pauseWhileUnfocused: !1
                                })
                            })
                        })
                      : null
              ]
          });
}
