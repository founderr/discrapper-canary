n.d(t, {
    t: function () {
        return O;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(735250),
    l = n(470079),
    u = n(682963),
    c = n(481060),
    d = n(745510),
    _ = n(633302),
    E = n(549006),
    f = n(176354),
    h = n(146128),
    p = n(675654),
    I = n(10257);
let m = [];
function T(e) {
    return e.map((e) => ({
        src: f.ZP.getURL(_.ZP.convertNameToSurrogate(e)),
        colorize: !1
    }));
}
((a = r || (r = {})).JACK_O_LANTERN = ':jack_o_lantern:'), (a.NOSE = ':nose:');
let S = new Set([':jack_o_lantern:', ':nose:']),
    g = {
        ':jack_o_lantern:': {
            sprites: T(['chocolate_bar', 'lollipop', 'candy'])
        },
        ':nose:': { sprites: T(['foot']) }
    };
((s = i || (i = {})).ENTER = 'enter'), (s.CONFETTI = 'confetti'), (s.EXIT = 'exit');
let A = {
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
function N() {
    return n
        .e('60005')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let R = l.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [r, i] = l.useState(null),
        { confettiCanvas: a } = l.useContext(d.h),
        s = (0, u.uR)(a, r);
    return (
        l.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    s.createMultipleConfetti(
                        {
                            ...p.We,
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
            colors: m,
            sprites: n,
            spriteWidth: 48,
            spriteHeight: 48
        })
    );
});
function O(e) {
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
        [u, d] = l.useState(!1),
        _ = l.useRef(':jack_o_lantern:'),
        f = l.useCallback(
            (e) => {
                var t;
                if (!u && null != (t = e) && S.has(t)) (_.current = e), d(!0), i(null);
            },
            [u]
        ),
        p = l.useMemo(() => ({ triggerAnimation: f }), [f]),
        m = l.useCallback((e) => {
            i(e);
        }, []),
        T = l.useCallback((e) => {
            'exit' === e && d(!1);
        }, []),
        O = l.useCallback((e) => {
            s.current = e;
        }, []);
    return (
        l.useEffect(() => {
            if ('confetti' === r) {
                if (null == s.current) return;
                let e = s.current.getBoundingClientRect(),
                    t = e.left - 11,
                    r = e.top + 125,
                    i = n.current[_.current];
                null == i || i.fireConfetti(t, r);
            }
        }, [_, r]),
        (0, o.jsxs)(h.Rm.Provider, {
            value: p,
            children: [
                t,
                Object.keys(g).map((e) => {
                    let t = g[e];
                    return (0, o.jsx)(
                        R,
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
                    ? (0, o.jsx)(E.ZP, {
                          children: (0, o.jsx)('div', {
                              className: I.animationWrapper,
                              children: (0, o.jsx)(c.SequencedLottieAnimation, {
                                  animationRef: O,
                                  className: I.lottieAnimation,
                                  nextScene: a,
                                  sceneSegments: A,
                                  onScenePlay: m,
                                  onSceneComplete: T,
                                  importData: N,
                                  pauseWhileUnfocused: !1
                              })
                          })
                      })
                    : null
            ]
        })
    );
}
