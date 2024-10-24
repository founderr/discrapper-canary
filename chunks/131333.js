n.d(t, {
    t: function () {
        return C;
    }
}),
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
    h = n(176354),
    p = n(146128),
    I = n(981631),
    m = n(675654),
    T = n(10257);
let S = [];
function g(e) {
    return e.map((e) => ({
        src: h.ZP.getURL(E.ZP.convertNameToSurrogate(e)),
        colorize: !1
    }));
}
((a = r || (r = {})).JACK_O_LANTERN = ':jack_o_lantern:'), (a.NOSE = ':nose:'), (a.NOSE_1 = ':nose_tone1:'), (a.NOSE_2 = ':nose_tone2:'), (a.NOSE_3 = ':nose_tone3:'), (a.NOSE_4 = ':nose_tone4:'), (a.NOSE_5 = ':nose_tone5:');
let A = new Set([':jack_o_lantern:', ':nose:', ':nose_tone1:', ':nose_tone2:', ':nose_tone3:', ':nose_tone4:', ':nose_tone5:']),
    N = {
        ':jack_o_lantern:': {
            sprites: g(['chocolate_bar', 'lollipop', 'candy'])
        },
        ':nose:': { sprites: g(['foot']) },
        ':nose_tone1:': { sprites: g(['foot_tone1']) },
        ':nose_tone2:': { sprites: g(['foot_tone2']) },
        ':nose_tone3:': { sprites: g(['foot_tone3']) },
        ':nose_tone4:': { sprites: g(['foot_tone4']) },
        ':nose_tone5:': { sprites: g(['foot_tone5']) }
    };
((s = i || (i = {})).ENTER = 'enter'), (s.CONFETTI = 'confetti'), (s.EXIT = 'exit');
let R = {
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
function O() {
    return n
        .e('60005')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let v = l.forwardRef(function (e, t) {
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
                            ...m.We,
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
            colors: S,
            sprites: n,
            spriteWidth: 48,
            spriteHeight: 48
        })
    );
});
function C(e) {
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
        E = l.useRef(':jack_o_lantern:'),
        h = (0, d.bp)(),
        m = l.useCallback(
            (e) => {
                var t;
                if (!u && null != (t = e) && A.has(t)) (E.current = e), _(!0), i(null);
            },
            [u]
        ),
        S = l.useMemo(() => ({ triggerAnimation: m }), [m]),
        g = l.useCallback((e) => {
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
    }, [E, r]),
    h !== I.IlC.APP)
        ? (0, o.jsx)(o.Fragment, { children: t })
        : (0, o.jsxs)(p.Rm.Provider, {
              value: S,
              children: [
                  t,
                  Object.keys(N).map((e) => {
                      let t = N[e];
                      return (0, o.jsx)(
                          v,
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
                                className: T.animationWrapper,
                                children: (0, o.jsx)(c.SequencedLottieAnimation, {
                                    animationRef: L,
                                    className: T.lottieAnimation,
                                    nextScene: a,
                                    sceneSegments: R,
                                    onScenePlay: g,
                                    onSceneComplete: C,
                                    importData: O,
                                    pauseWhileUnfocused: !1
                                })
                            })
                        })
                      : null
              ]
          });
}
