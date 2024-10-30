n.d(t, {
    ZP: function () {
        return G;
    }
}),
    n(47120);
var i,
    a,
    s,
    r,
    l = n(200651),
    o = n(192379),
    c = n(120356),
    u = n.n(c),
    d = n(703533),
    _ = n(772848),
    E = n(468194),
    I = n(477690),
    m = n(481060),
    f = n(230711),
    h = n(745510),
    T = n(549006),
    N = n(64078),
    p = n(29270),
    C = n(709586),
    g = n(267642),
    S = n(739566),
    A = n(834129),
    x = n(981631),
    R = n(689938),
    v = n(172421);
((s = i || (i = {})).ENTER = 'enter'), (s.CONFETTI = 'confetti'), (s.LEAF_PEEL = 'leaf_peel'), (s.LEAF_FALL = 'leaf_fall'), (s.EXIT = 'exit');
let M = {
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
((r = a || (a = {})).TOP_LEFT = 'TOP_LEFT'), (r.TOP_RIGHT = 'TOP_RIGHT'), (r.BOTTOM_LEFT = 'BOTTOM_LEFT'), (r.BOTTOM_RIGHT = 'BOTTOM_RIGHT');
let O = ['TOP_LEFT', 'TOP_RIGHT'],
    L = (0, E.Mg)(I.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    Z = {
        leafPosition: {
            x: 85,
            y: 125
        },
        leafRotationDirection: 1
    },
    b = Object.freeze({
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
    P = 'falling-leaf',
    D = ['#61D5B2'],
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
        r = o.useRef(null),
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
        { createMultipleConfettiAt: f, confettiCanvas: T } = o.useContext(h.h),
        [N, p] = o.useState(null),
        C = (0, d.uR)(T, N),
        g = (function (e, t) {
            if (null == e) return 'enter';
            switch (e) {
                case 'enter':
                    return 'confetti';
                case 'confetti':
                    if (O.includes(t)) return 'leaf_peel';
                    return 'exit';
                case 'leaf_peel':
                    return 'leaf_fall';
                case 'leaf_fall':
                    return 'exit';
                case 'exit':
                    return 'enter';
            }
        })(c, I),
        S = O.includes(I),
        A = S && 'exit' === c,
        x = o.useCallback((e) => {
            E(e);
        }, []),
        R = o.useCallback(() => {
            'exit' === c && (null == t || t());
        }, [t, c]),
        Z = o.useCallback((e) => {
            r.current = e;
        }, []);
    return (
        o.useEffect(() => {
            if ('confetti' === c) {
                let { confettiVelocityDirection: e } = b[I],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L,
                            i = null == e ? void 0 : e.getBoundingClientRect();
                        if (null == i)
                            return {
                                x: 0,
                                y: 0
                            };
                        let a = b[t].getConfettiPosition(n);
                        return {
                            x: i.left + a.x,
                            y: i.top + a.y
                        };
                    })(r.current, I, s);
                f(t.x, t.y, {
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
        }, [f, I, c, s]),
        o.useEffect(() => {
            if (S && 'leaf_fall' === c) {
                let e = b[I].leafRotationDirection;
                C.createConfetti(
                    {
                        id: ''.concat(P, '-').concat((0, _.Z)()),
                        position: {
                            type: 'static',
                            value: (function (e, t) {
                                let n = null == e ? void 0 : e.getBoundingClientRect();
                                if (null == n)
                                    return {
                                        x: 0,
                                        y: 0
                                    };
                                let i = b[t];
                                return {
                                    x: n.left + i.leafPosition.x,
                                    y: n.top + i.leafPosition.y
                                };
                            })(r.current, I)
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
        }, [S, C, I, c]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.Ji, {
                    ref: p,
                    sprites: y,
                    colors: D,
                    spriteWidth: 45,
                    spriteHeight: 45
                }),
                (0, l.jsx)(m.Clickable, {
                    onClick: n,
                    className: u()(v.easterEggAnimationClickTarget, {
                        [v.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === I,
                        [v.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === I,
                        [v.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === I,
                        [v.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === I
                    }),
                    children: (0, l.jsx)(m.SequencedLottieAnimation, {
                        animationRef: Z,
                        className: u()(v.easterEggAnimation, { [v.easterEggAnimationHideLeaf]: A }),
                        nextScene: g,
                        sceneSegments: M,
                        onScenePlay: x,
                        onSceneComplete: R,
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
        { message: n, compact: i, guild: a, usernameHook: s, onClickMessage: r } = e,
        c = (function (e) {
            switch (e.type) {
                case x.uaV.GUILD_BOOST_TIER_1:
                    return x.Eu4.TIER_1;
                case x.uaV.GUILD_BOOST_TIER_2:
                    return x.Eu4.TIER_2;
                case x.uaV.GUILD_BOOST_TIER_3:
                    return x.Eu4.TIER_3;
            }
            return null;
        })(n),
        u = (0, p.Z)(n),
        { createMultipleConfettiAt: d, addClickListener: _ } = o.useContext(h.h),
        [E, I] = o.useState(!1),
        M = o.useRef(null),
        { reducedMotion: O } = o.useContext(m.AccessibilityPreferencesContext),
        L = (0, S.ZH)(n),
        Z = L.nick,
        b = s(L);
    t =
        null == c || null == a
            ? u > 1
                ? R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_HOOK.format({
                      username: Z,
                      usernameHook: b,
                      numSubscriptions: u
                  })
                : R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_HOOK.format({
                      username: Z,
                      usernameHook: b
                  })
            : u > 1
              ? R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_ACHIEVED_TIER_HOOK.format({
                    username: Z,
                    usernameHook: b,
                    numSubscriptions: u,
                    guildName: a.name,
                    newTierName: (0, g.nW)(c)
                })
              : R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_ACHIEVED_TIER_HOOK.format({
                    username: Z,
                    usernameHook: b,
                    guildName: a.name,
                    newTierName: (0, g.nW)(c)
                });
    let D = o.useCallback(() => {
            if (!O.enabled)
                if (E || 0 !== Math.floor(50 * Math.random())) {
                    var e;
                    let t = null === (e = M.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    d(t.left + t.width / 2, t.top + t.height / 2);
                } else I(!0);
        }, [d, O, E]),
        j = o.useCallback(() => {
            I(!1);
        }, []),
        U = o.useCallback(() => {
            (0, N.AI)({ settingsVisible: !0 }), f.Z.open(x.oAB.POGGERMODE), I(!1);
        }, []),
        y = o.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(P)) && U();
            },
            [U]
        );
    o.useEffect(() => _(y));
    let B = (0, l.jsx)(m.Clickable, {
        className: v.iconWrapper,
        innerRef: M,
        onClick: r,
        children: (0, l.jsx)(C.Z, {
            className: v.icon,
            onMouseEnter: D
        })
    });
    return (0, l.jsxs)(A.Z, {
        iconNode: B,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, l.jsx)('div', {
                onClick: r,
                className: v.message,
                children: t
            }),
            E
                ? (0, l.jsx)(T.ZP, {
                      children: (0, l.jsx)('div', {
                          className: v.cannonWrapper,
                          children: (0, l.jsx)(k, {
                              onAnimationComplete: j,
                              onClick: U
                          })
                      })
                  })
                : null
        ]
    });
}
