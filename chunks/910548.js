n.d(t, {
    ZP: function () {
        return U;
    }
}),
    n(47120);
var i,
    r,
    l,
    a,
    o = n(200651),
    s = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(703533),
    m = n(772848),
    h = n(468194),
    f = n(477690),
    p = n(481060),
    g = n(230711),
    _ = n(745510),
    C = n(549006),
    E = n(64078),
    I = n(29270),
    x = n(709586),
    v = n(267642),
    N = n(739566),
    T = n(834129),
    S = n(981631),
    b = n(388032),
    A = n(172421);
((l = i || (i = {})).ENTER = 'enter'), (l.CONFETTI = 'confetti'), (l.LEAF_PEEL = 'leaf_peel'), (l.LEAF_FALL = 'leaf_fall'), (l.EXIT = 'exit');
let j = {
    enter: {
        BEG: 0,
        END: 22
    },
    confetti: {
        BEG: 23,
        END: 119
    },
    leaf_peel: {
        BEG: 120,
        END: 160
    },
    leaf_fall: {
        BEG: 161,
        END: 163
    },
    exit: {
        BEG: 164,
        END: 200
    }
};
((a = r || (r = {})).TOP_LEFT = 'TOP_LEFT'), (a.TOP_RIGHT = 'TOP_RIGHT'), (a.BOTTOM_LEFT = 'BOTTOM_LEFT'), (a.BOTTOM_RIGHT = 'BOTTOM_RIGHT');
let Z = ['TOP_LEFT', 'TOP_RIGHT'],
    R = (0, h.Mg)(f.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    P = {
        leafPosition: {
            x: 85,
            y: 125
        },
        leafRotationDirection: 1
    },
    y = Object.freeze({
        TOP_LEFT: {
            getConfettiPosition: (e) => ({
                x: e - 11,
                y: e - 125
            }),
            confettiVelocityDirection: {
                x: 1,
                y: 1
            },
            leafPosition: {
                x: 100,
                y: 144
            },
            leafRotationDirection: 1
        },
        TOP_RIGHT: {
            getConfettiPosition: (e) => ({
                x: 11,
                y: e - 125
            }),
            confettiVelocityDirection: {
                x: -1,
                y: 1
            },
            leafPosition: {
                x: 90,
                y: 144
            },
            leafRotationDirection: -1
        },
        BOTTOM_LEFT: {
            ...P,
            getConfettiPosition: (e) => ({
                x: e - 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1
            }
        },
        BOTTOM_RIGHT: {
            ...P,
            getConfettiPosition: (e) => ({
                x: 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: -1,
                y: -1
            }
        }
    }),
    L = 'falling-leaf',
    O = ['#61D5B2'],
    M = n(303893),
    k = n(313226),
    D = [M, k];
function B() {
    return n
        .e('60005')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function w(e) {
    let { onAnimationComplete: t, onClick: n, position: i, size: l } = e,
        a = s.useRef(null),
        [c, h] = s.useState(null),
        [f] = s.useState(
            null != i
                ? i
                : (function () {
                      switch (Math.floor(Math.random() * Object.keys(r).length)) {
                          case 0:
                              return 'TOP_LEFT';
                          case 2:
                              return 'TOP_RIGHT';
                          case 3:
                              return 'BOTTOM_LEFT';
                          default:
                              return 'BOTTOM_RIGHT';
                      }
                  })()
        ),
        { createMultipleConfettiAt: g, confettiCanvas: C } = s.useContext(_.h),
        [E, I] = s.useState(null),
        x = (0, u.uR)(C, E),
        v = (function (e, t) {
            if (null == e) return 'enter';
            switch (e) {
                case 'enter':
                    return 'confetti';
                case 'confetti':
                    if (Z.includes(t)) return 'leaf_peel';
                    return 'exit';
                case 'leaf_peel':
                    return 'leaf_fall';
                case 'leaf_fall':
                    return 'exit';
                case 'exit':
                    return 'enter';
            }
        })(c, f),
        N = Z.includes(f),
        T = N && 'exit' === c,
        S = s.useCallback((e) => {
            h(e);
        }, []),
        b = s.useCallback(() => {
            'exit' === c && (null == t || t());
        }, [t, c]),
        P = s.useCallback((e) => {
            a.current = e;
        }, []);
    return (
        s.useEffect(() => {
            if ('confetti' === c) {
                let { confettiVelocityDirection: e } = y[f],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : R,
                            i = null == e ? void 0 : e.getBoundingClientRect();
                        if (null == i)
                            return {
                                x: 0,
                                y: 0
                            };
                        let r = y[t].getConfettiPosition(n);
                        return {
                            x: i.left + r.x,
                            y: i.top + r.y
                        };
                    })(a.current, f, l);
                g(t.x, t.y, {
                    velocity: {
                        type: 'static-random',
                        minValue: {
                            x: 10 * e.x,
                            y: 80 * e.y
                        },
                        maxValue: {
                            x: 80 * e.x,
                            y: 180 * e.y
                        }
                    }
                });
            }
        }, [g, f, c, l]),
        s.useEffect(() => {
            if (N && 'leaf_fall' === c) {
                let e = y[f].leafRotationDirection;
                x.createConfetti(
                    {
                        id: ''.concat(L, '-').concat((0, m.Z)()),
                        position: {
                            type: 'static',
                            value: (function (e, t) {
                                let n = null == e ? void 0 : e.getBoundingClientRect();
                                if (null == n)
                                    return {
                                        x: 0,
                                        y: 0
                                    };
                                let i = y[t];
                                return {
                                    x: n.left + i.leafPosition.x,
                                    y: n.top + i.leafPosition.y
                                };
                            })(a.current, f)
                        },
                        size: {
                            type: 'static',
                            value: 45
                        },
                        rotation: {
                            type: 'linear-random',
                            minValue: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            maxValue: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            minAddValue: {
                                x: 0,
                                y: 0,
                                z: 8 * e
                            },
                            maxAddValue: {
                                x: 0,
                                y: 0,
                                z: 12 * e
                            }
                        }
                    },
                    { sprite: 'TOP_LEFT' === f ? M : k }
                );
            }
        }, [N, x, f, c]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(u.Ji, {
                    ref: I,
                    sprites: D,
                    colors: O,
                    spriteWidth: 45,
                    spriteHeight: 45
                }),
                (0, o.jsx)(p.Clickable, {
                    onClick: n,
                    className: d()(A.easterEggAnimationClickTarget, {
                        [A.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === f,
                        [A.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === f,
                        [A.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === f,
                        [A.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === f
                    }),
                    children: (0, o.jsx)(p.SequencedLottieAnimation, {
                        animationRef: P,
                        className: d()(A.easterEggAnimation, { [A.easterEggAnimationHideLeaf]: T }),
                        nextScene: v,
                        sceneSegments: j,
                        onScenePlay: S,
                        onSceneComplete: b,
                        importData: B,
                        pauseWhileUnfocused: !1
                    })
                })
            ]
        })
    );
}
function U(e) {
    let t,
        { message: n, compact: i, guild: r, usernameHook: l, onClickMessage: a } = e,
        c = (function (e) {
            switch (e.type) {
                case S.uaV.GUILD_BOOST_TIER_1:
                    return S.Eu4.TIER_1;
                case S.uaV.GUILD_BOOST_TIER_2:
                    return S.Eu4.TIER_2;
                case S.uaV.GUILD_BOOST_TIER_3:
                    return S.Eu4.TIER_3;
            }
            return null;
        })(n),
        d = (0, I.Z)(n),
        { createMultipleConfettiAt: u, addClickListener: m } = s.useContext(_.h),
        [h, f] = s.useState(!1),
        j = s.useRef(null),
        { reducedMotion: Z } = s.useContext(p.AccessibilityPreferencesContext),
        R = (0, N.ZH)(n),
        P = R.nick,
        y = l(R);
    t =
        null == c || null == r
            ? d > 1
                ? b.intl.format(b.t.yfC9dn, {
                      username: P,
                      usernameHook: y,
                      numSubscriptions: d
                  })
                : b.intl.format(b.t['57St//'], {
                      username: P,
                      usernameHook: y
                  })
            : d > 1
              ? b.intl.format(b.t.PO9uJC, {
                    username: P,
                    usernameHook: y,
                    numSubscriptions: d,
                    guildName: r.name,
                    newTierName: (0, v.nW)(c)
                })
              : b.intl.format(b.t.cUfTTE, {
                    username: P,
                    usernameHook: y,
                    guildName: r.name,
                    newTierName: (0, v.nW)(c)
                });
    let O = s.useCallback(() => {
            if (!Z.enabled)
                if (h || 0 !== Math.floor(50 * Math.random())) {
                    var e;
                    let t = null === (e = j.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    u(t.left + t.width / 2, t.top + t.height / 2);
                } else f(!0);
        }, [u, Z, h]),
        M = s.useCallback(() => {
            f(!1);
        }, []),
        k = s.useCallback(() => {
            (0, E.AI)({ settingsVisible: !0 }), g.Z.open(S.oAB.POGGERMODE), f(!1);
        }, []),
        D = s.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(L)) && k();
            },
            [k]
        );
    s.useEffect(() => m(D));
    let B = (0, o.jsx)(p.Clickable, {
        className: A.iconWrapper,
        innerRef: j,
        onClick: a,
        children: (0, o.jsx)(x.Z, {
            className: A.icon,
            onMouseEnter: O
        })
    });
    return (0, o.jsxs)(T.Z, {
        iconNode: B,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, o.jsx)('div', {
                onClick: a,
                className: A.message,
                children: t
            }),
            h
                ? (0, o.jsx)(C.ZP, {
                      children: (0, o.jsx)('div', {
                          className: A.cannonWrapper,
                          children: (0, o.jsx)(w, {
                              onAnimationComplete: M,
                              onClick: k
                          })
                      })
                  })
                : null
        ]
    });
}
