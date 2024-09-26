n.d(t, {
    ZP: function () {
        return ee;
    }
});
var r,
    i,
    a = n(47120);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(887024),
    d = n(772848),
    _ = n(468194),
    E = n(477690),
    f = n(481060),
    h = n(230711),
    p = n(745510),
    m = n(549006),
    I = n(64078),
    T = n(29270),
    g = n(709586),
    S = n(267642),
    A = n(739566),
    v = n(834129),
    N = n(981631),
    O = n(689938),
    R = n(172421);
let C = 50;
!(function (e) {
    (e.ENTER = 'enter'), (e.CONFETTI = 'confetti'), (e.LEAF_PEEL = 'leaf_peel'), (e.LEAF_FALL = 'leaf_fall'), (e.EXIT = 'exit');
})(r || (r = {}));
let y = {
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
!(function (e) {
    (e.TOP_LEFT = 'TOP_LEFT'), (e.TOP_RIGHT = 'TOP_RIGHT'), (e.BOTTOM_LEFT = 'BOTTOM_LEFT'), (e.BOTTOM_RIGHT = 'BOTTOM_RIGHT');
})(i || (i = {}));
let L = ['TOP_LEFT', 'TOP_RIGHT'],
    b = (0, _.Mg)(E.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    D = 11,
    M = 125,
    P = {
        leafPosition: {
            x: 85,
            y: 125
        },
        leafRotationDirection: 1
    },
    U = 10,
    w = 80,
    x = 80,
    G = 180,
    k = 8,
    B = 12,
    F = Object.freeze({
        TOP_LEFT: {
            getConfettiPosition: (e) => ({
                x: e - D,
                y: e - M
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
                x: D,
                y: e - M
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
                x: e - D,
                y: M
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1
            }
        },
        BOTTOM_RIGHT: {
            ...P,
            getConfettiPosition: (e) => ({
                x: D,
                y: M
            }),
            confettiVelocityDirection: {
                x: -1,
                y: -1
            }
        }
    }),
    Z = 'falling-leaf';
function V(e) {
    switch (e.type) {
        case N.uaV.GUILD_BOOST_TIER_1:
            return N.Eu4.TIER_1;
        case N.uaV.GUILD_BOOST_TIER_2:
            return N.Eu4.TIER_2;
        case N.uaV.GUILD_BOOST_TIER_3:
            return N.Eu4.TIER_3;
    }
    return null;
}
function H() {
    switch (Math.floor(Math.random() * Object.keys(i).length)) {
        case 0:
            return 'TOP_LEFT';
        case 2:
            return 'TOP_RIGHT';
        case 3:
            return 'BOTTOM_LEFT';
        default:
            return 'BOTTOM_RIGHT';
    }
}
let Y = 45,
    j = ['#61D5B2'],
    W = n(303893),
    K = n(313226),
    z = [W, K];
function q() {
    return n
        .e('60005')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function Q(e, t) {
    if (null == e) return 'enter';
    switch (e) {
        case 'enter':
            return 'confetti';
        case 'confetti':
            if (L.includes(t)) return 'leaf_peel';
            return 'exit';
        case 'leaf_peel':
            return 'leaf_fall';
        case 'leaf_fall':
            return 'exit';
        case 'exit':
            return 'enter';
    }
}
function X(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b,
        r = null == e ? void 0 : e.getBoundingClientRect();
    if (null == r)
        return {
            x: 0,
            y: 0
        };
    let i = F[t].getConfettiPosition(n);
    return {
        x: r.left + i.x,
        y: r.top + i.y
    };
}
function $(e, t) {
    let n = null == e ? void 0 : e.getBoundingClientRect();
    if (null == n)
        return {
            x: 0,
            y: 0
        };
    let r = F[t];
    return {
        x: n.left + r.leafPosition.x,
        y: n.top + r.leafPosition.y
    };
}
function J(e) {
    let { onAnimationComplete: t, onClick: n, position: r, size: i } = e,
        a = s.useRef(null),
        [l, _] = s.useState(null),
        [E] = s.useState(null != r ? r : H()),
        { createMultipleConfettiAt: h, confettiCanvas: m } = s.useContext(p.h),
        [I, T] = s.useState(null),
        g = (0, c.uR)(m, I),
        S = Q(l, E),
        A = L.includes(E),
        v = A && 'exit' === l,
        N = s.useCallback((e) => {
            _(e);
        }, []),
        O = s.useCallback(() => {
            'exit' === l && (null == t || t());
        }, [t, l]),
        C = s.useCallback((e) => {
            a.current = e;
        }, []);
    return (
        s.useEffect(() => {
            if ('confetti' === l) {
                let { confettiVelocityDirection: e } = F[E],
                    t = X(a.current, E, i);
                h(t.x, t.y, {
                    velocity: {
                        type: 'static-random',
                        minValue: {
                            x: U * e.x,
                            y: x * e.y
                        },
                        maxValue: {
                            x: w * e.x,
                            y: G * e.y
                        }
                    }
                });
            }
        }, [h, E, l, i]),
        s.useEffect(() => {
            if (A && 'leaf_fall' === l) {
                let e = F[E].leafRotationDirection;
                g.createConfetti(
                    {
                        id: ''.concat(Z, '-').concat((0, d.Z)()),
                        position: {
                            type: 'static',
                            value: $(a.current, E)
                        },
                        size: {
                            type: 'static',
                            value: Y
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
                                z: k * e
                            },
                            maxAddValue: {
                                x: 0,
                                y: 0,
                                z: B * e
                            }
                        }
                    },
                    { sprite: 'TOP_LEFT' === E ? W : K }
                );
            }
        }, [A, g, E, l]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(c.Ji, {
                    ref: T,
                    sprites: z,
                    colors: j,
                    spriteWidth: Y,
                    spriteHeight: Y
                }),
                (0, o.jsx)(f.Clickable, {
                    onClick: n,
                    className: u()(R.easterEggAnimationClickTarget, {
                        [R.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === E,
                        [R.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === E,
                        [R.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === E,
                        [R.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === E
                    }),
                    children: (0, o.jsx)(f.SequencedLottieAnimation, {
                        animationRef: C,
                        className: u()(R.easterEggAnimation, { [R.easterEggAnimationHideLeaf]: v }),
                        nextScene: S,
                        sceneSegments: y,
                        onScenePlay: N,
                        onSceneComplete: O,
                        importData: q,
                        pauseWhileUnfocused: !1
                    })
                })
            ]
        })
    );
}
function ee(e) {
    let t,
        { message: n, compact: r, guild: i, usernameHook: a, onClickMessage: l } = e,
        u = V(n),
        c = (0, T.Z)(n),
        { createMultipleConfettiAt: d, addClickListener: _ } = s.useContext(p.h),
        [E, y] = s.useState(!1),
        L = s.useRef(null),
        { reducedMotion: b } = s.useContext(f.AccessibilityPreferencesContext),
        D = (0, A.ZH)(n),
        M = D.nick,
        P = a(D);
    t =
        null == u || null == i
            ? c > 1
                ? O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_HOOK.format({
                      username: M,
                      usernameHook: P,
                      numSubscriptions: c
                  })
                : O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_HOOK.format({
                      username: M,
                      usernameHook: P
                  })
            : c > 1
              ? O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_ACHIEVED_TIER_HOOK.format({
                    username: M,
                    usernameHook: P,
                    numSubscriptions: c,
                    guildName: i.name,
                    newTierName: (0, S.nW)(u)
                })
              : O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_ACHIEVED_TIER_HOOK.format({
                    username: M,
                    usernameHook: P,
                    guildName: i.name,
                    newTierName: (0, S.nW)(u)
                });
    let U = s.useCallback(() => {
            if (!b.enabled)
                if (E || 0 !== Math.floor(Math.random() * C)) {
                    var e;
                    let t = null === (e = L.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    d(t.left + t.width / 2, t.top + t.height / 2);
                } else y(!0);
        }, [d, b, E]),
        w = s.useCallback(() => {
            y(!1);
        }, []),
        x = s.useCallback(() => {
            (0, I.AI)({ settingsVisible: !0 }), h.Z.open(N.oAB.POGGERMODE), y(!1);
        }, []),
        G = s.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(Z)) && x();
            },
            [x]
        );
    s.useEffect(() => _(G));
    let k = (0, o.jsx)(f.Clickable, {
        className: R.iconWrapper,
        innerRef: L,
        onClick: l,
        children: (0, o.jsx)(g.Z, {
            className: R.icon,
            onMouseEnter: U
        })
    });
    return (0, o.jsxs)(v.Z, {
        iconNode: k,
        timestamp: n.timestamp,
        compact: r,
        children: [
            (0, o.jsx)('div', {
                onClick: l,
                className: R.message,
                children: t
            }),
            E
                ? (0, o.jsx)(m.ZP, {
                      children: (0, o.jsx)('div', {
                          className: R.cannonWrapper,
                          children: (0, o.jsx)(J, {
                              onAnimationComplete: w,
                              onClick: x
                          })
                      })
                  })
                : null
        ]
    });
}
