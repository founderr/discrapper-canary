n.d(t, {
    ZP: function () {
        return G;
    }
}),
    n(47120);
var i,
    a,
    s,
    l,
    r = n(735250),
    o = n(470079),
    c = n(120356),
    d = n.n(c),
    u = n(887024),
    _ = n(772848),
    E = n(468194),
    I = n(477690),
    m = n(481060),
    T = n(230711),
    N = n(745510),
    h = n(549006),
    C = n(64078),
    p = n(29270),
    f = n(709586),
    A = n(267642),
    g = n(739566),
    S = n(834129),
    M = n(981631),
    O = n(689938),
    x = n(172421);
((s = i || (i = {})).ENTER = 'enter'), (s.CONFETTI = 'confetti'), (s.LEAF_PEEL = 'leaf_peel'), (s.LEAF_FALL = 'leaf_fall'), (s.EXIT = 'exit');
let R = {
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
((l = a || (a = {})).TOP_LEFT = 'TOP_LEFT'), (l.TOP_RIGHT = 'TOP_RIGHT'), (l.BOTTOM_LEFT = 'BOTTOM_LEFT'), (l.BOTTOM_RIGHT = 'BOTTOM_RIGHT');
let v = ['TOP_LEFT', 'TOP_RIGHT'],
    L = (0, E.Mg)(I.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    Z = {
        leafPosition: {
            x: 85,
            y: 125
        },
        leafRotationDirection: 1
    },
    P = Object.freeze({
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
            ...Z,
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
            ...Z,
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
    D = 'falling-leaf',
    b = ['#61D5B2'],
    j = n(303893),
    U = n(313226),
    y = [j, U];
function B() {
    return n
        .e('60005')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function k(e) {
    let { onAnimationComplete: t, onClick: n, position: i, size: s } = e,
        l = o.useRef(null),
        [c, E] = o.useState(null),
        [I] = o.useState(
            null != i
                ? i
                : (function () {
                      switch (Math.floor(Math.random() * Object.keys(a).length)) {
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
        { createMultipleConfettiAt: T, confettiCanvas: h } = o.useContext(N.h),
        [C, p] = o.useState(null),
        f = (0, u.uR)(h, C),
        A = (function (e, t) {
            if (null == e) return 'enter';
            switch (e) {
                case 'enter':
                    return 'confetti';
                case 'confetti':
                    if (v.includes(t)) return 'leaf_peel';
                    return 'exit';
                case 'leaf_peel':
                    return 'leaf_fall';
                case 'leaf_fall':
                    return 'exit';
                case 'exit':
                    return 'enter';
            }
        })(c, I),
        g = v.includes(I),
        S = g && 'exit' === c,
        M = o.useCallback((e) => {
            E(e);
        }, []),
        O = o.useCallback(() => {
            'exit' === c && (null == t || t());
        }, [t, c]),
        Z = o.useCallback((e) => {
            l.current = e;
        }, []);
    return (
        o.useEffect(() => {
            if ('confetti' === c) {
                let { confettiVelocityDirection: e } = P[I],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L,
                            i = null == e ? void 0 : e.getBoundingClientRect();
                        if (null == i)
                            return {
                                x: 0,
                                y: 0
                            };
                        let a = P[t].getConfettiPosition(n);
                        return {
                            x: i.left + a.x,
                            y: i.top + a.y
                        };
                    })(l.current, I, s);
                T(t.x, t.y, {
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
        }, [T, I, c, s]),
        o.useEffect(() => {
            if (g && 'leaf_fall' === c) {
                let e = P[I].leafRotationDirection;
                f.createConfetti(
                    {
                        id: ''.concat(D, '-').concat((0, _.Z)()),
                        position: {
                            type: 'static',
                            value: (function (e, t) {
                                let n = null == e ? void 0 : e.getBoundingClientRect();
                                if (null == n)
                                    return {
                                        x: 0,
                                        y: 0
                                    };
                                let i = P[t];
                                return {
                                    x: n.left + i.leafPosition.x,
                                    y: n.top + i.leafPosition.y
                                };
                            })(l.current, I)
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
                    { sprite: 'TOP_LEFT' === I ? j : U }
                );
            }
        }, [g, f, I, c]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.Ji, {
                    ref: p,
                    sprites: y,
                    colors: b,
                    spriteWidth: 45,
                    spriteHeight: 45
                }),
                (0, r.jsx)(m.Clickable, {
                    onClick: n,
                    className: d()(x.easterEggAnimationClickTarget, {
                        [x.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === I,
                        [x.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === I,
                        [x.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === I,
                        [x.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === I
                    }),
                    children: (0, r.jsx)(m.SequencedLottieAnimation, {
                        animationRef: Z,
                        className: d()(x.easterEggAnimation, { [x.easterEggAnimationHideLeaf]: S }),
                        nextScene: A,
                        sceneSegments: R,
                        onScenePlay: M,
                        onSceneComplete: O,
                        importData: B,
                        pauseWhileUnfocused: !1
                    })
                })
            ]
        })
    );
}
function G(e) {
    let t,
        { message: n, compact: i, guild: a, usernameHook: s, onClickMessage: l } = e,
        c = (function (e) {
            switch (e.type) {
                case M.uaV.GUILD_BOOST_TIER_1:
                    return M.Eu4.TIER_1;
                case M.uaV.GUILD_BOOST_TIER_2:
                    return M.Eu4.TIER_2;
                case M.uaV.GUILD_BOOST_TIER_3:
                    return M.Eu4.TIER_3;
            }
            return null;
        })(n),
        d = (0, p.Z)(n),
        { createMultipleConfettiAt: u, addClickListener: _ } = o.useContext(N.h),
        [E, I] = o.useState(!1),
        R = o.useRef(null),
        { reducedMotion: v } = o.useContext(m.AccessibilityPreferencesContext),
        L = (0, g.ZH)(n),
        Z = L.nick,
        P = s(L);
    t =
        null == c || null == a
            ? d > 1
                ? O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_HOOK.format({
                      username: Z,
                      usernameHook: P,
                      numSubscriptions: d
                  })
                : O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_HOOK.format({
                      username: Z,
                      usernameHook: P
                  })
            : d > 1
              ? O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_ACHIEVED_TIER_HOOK.format({
                    username: Z,
                    usernameHook: P,
                    numSubscriptions: d,
                    guildName: a.name,
                    newTierName: (0, A.nW)(c)
                })
              : O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_ACHIEVED_TIER_HOOK.format({
                    username: Z,
                    usernameHook: P,
                    guildName: a.name,
                    newTierName: (0, A.nW)(c)
                });
    let b = o.useCallback(() => {
            if (!v.enabled)
                if (E || 0 !== Math.floor(50 * Math.random())) {
                    var e;
                    let t = null === (e = R.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    u(t.left + t.width / 2, t.top + t.height / 2);
                } else I(!0);
        }, [u, v, E]),
        j = o.useCallback(() => {
            I(!1);
        }, []),
        U = o.useCallback(() => {
            (0, C.AI)({ settingsVisible: !0 }), T.Z.open(M.oAB.POGGERMODE), I(!1);
        }, []),
        y = o.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(D)) && U();
            },
            [U]
        );
    o.useEffect(() => _(y));
    let B = (0, r.jsx)(m.Clickable, {
        className: x.iconWrapper,
        innerRef: R,
        onClick: l,
        children: (0, r.jsx)(f.Z, {
            className: x.icon,
            onMouseEnter: b
        })
    });
    return (0, r.jsxs)(S.Z, {
        iconNode: B,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, r.jsx)('div', {
                onClick: l,
                className: x.message,
                children: t
            }),
            E
                ? (0, r.jsx)(h.ZP, {
                      children: (0, r.jsx)('div', {
                          className: x.cannonWrapper,
                          children: (0, r.jsx)(k, {
                              onAnimationComplete: j,
                              onClick: U
                          })
                      })
                  })
                : null
        ]
    });
}
