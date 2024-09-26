n.d(t, {
    Z: function () {
        return k;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(526629),
    u = n(442837),
    c = n(846519),
    d = n(481060),
    _ = n(788307),
    E = n(607070),
    f = n(100527),
    h = n(906732),
    p = n(8454),
    m = n(633302),
    I = n(314897),
    T = n(785717),
    g = n(481046),
    S = n(510659),
    A = n(277085),
    v = n(287954),
    N = n(825801),
    O = n(64621),
    R = n(228168),
    C = n(689938),
    y = n(249818);
let L = 'text-sm/medium',
    b = 18,
    D = 1.25,
    M = 36,
    P = 144,
    U = 150,
    w = 150,
    x = 300;
function G(e) {
    let { statusActivity: t, user: r, guildId: o, channelId: p, profileType: I, hasEntered: g = !0, animate: G = !0, editEnabled: k, onCloseProfile: B } = e,
        { analyticsLocations: F } = (0, h.ZP)(f.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: Z } = (0, T.KZ)(),
        V = (0, u.e7)([E.Z], () => E.Z.useReducedMotion),
        [H] = a.useState(() => new c.V7()),
        [Y, j] = a.useState(!0),
        W = a.useRef(null),
        K = a.useRef(null),
        z = a.useRef(null),
        q = a.useRef(null),
        { emoji: Q, state: X } = null != t ? t : {},
        $ = null != X && '' !== X ? X : null,
        J = null != $ && $.length > 0,
        ee = null != Q,
        et = ee && !J,
        en = ee ? D : 0,
        er = b + en,
        ei = P + en,
        ea = M + en,
        eo = ee || J,
        { interactionType: es, interactionSource: el, resetInteraction: eu } = (0, S.Xo)(),
        ec = el === R.n_.STATUS && es === R.P.REACT,
        ed = el === R.n_.STATUS && es === R.P.REPLY,
        e_ = ec || ed,
        eE = k && !eo,
        ef = k && eo,
        [eh, ep] = a.useState(et),
        [em, eI] = a.useState(!et),
        [eT, eg] = a.useState(!1),
        eS = a.useRef(null);
    a.useLayoutEffect(() => {
        if (null == W.current || et) return;
        let e = W.current.getBoundingClientRect().height;
        if ((ep(et || e <= er), g)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = W.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : ei,
                a = null !== (i = null === (n = z.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : ea;
            eI(!et && e > a), (K.current = e), (q.current = a);
        }
    }, [g, et, er, ei, ea]);
    let [eA, ev] = (0, d.useSpring)(() => ({
        maxHeight: ''.concat(ea, 'px'),
        config: {
            clamp: !0,
            duration: U
        }
    }));
    a.useEffect(() => () => H.stop(), [H]);
    let eN = a.useRef(t);
    if (
        (a.useEffect(() => {
            el === R.n_.STATUS && (null == t || eN.current !== t) && eu(), (eN.current = t);
        }, [t, el, eu]),
        !eo && !eE)
    )
        return null;
    let eO = (e) => {
            var t, n;
            if (!em) return;
            if (e) {
                let e = Math.min(null !== (t = K.current) && void 0 !== t ? t : ei, ei);
                ev({
                    maxHeight: ''.concat(e, 'px'),
                    delay: V ? 0 : x,
                    config: {
                        clamp: !0,
                        duration: V ? 0 : U
                    }
                });
            } else {
                let e = Math.min(null !== (n = q.current) && void 0 !== n ? n : ea, ea);
                ev({
                    maxHeight: ''.concat(e, 'px'),
                    delay: 0
                });
            }
            if (V) {
                j(!e);
                return;
            }
            let r = e ? x : w;
            H.start(r, () => {
                j(!e);
            });
        },
        eR = () =>
            ee
                ? (0, i.jsx)(_.I, {
                      className: J ? y.statusEmojiInline : y.statusEmojiOnly,
                      emoji: Q,
                      animate: G,
                      hideTooltip: !1,
                      tooltipDelay: R.vB
                  })
                : null,
        eC = () =>
            J
                ? (0, i.jsx)(d.Text, {
                      variant: L,
                      className: y.statusText,
                      children: $
                  })
                : null,
        ey = () => {
            let e = s()(y.content, {
                [y.clamp]: Y,
                [y.unclamp]: !Y,
                [y.singleLineAlign]: eh
            });
            return (0, i.jsxs)(l.animated.div, {
                style: eA,
                className: e,
                children: [eR(), eC()]
            });
        },
        eL = () =>
            (0, i.jsxs)('div', {
                className: s()(y.content, y.clamp, y.placeholderWidth, { [y.panel]: I === R.y0.PANEL }),
                ref: z,
                children: [eR(), eC()]
            }),
        eb = () =>
            (0, i.jsxs)('div', {
                className: s()(y.content, y.unclamp, y.placeholderWidth, y.incorporeal, { [y.panel]: I === R.y0.PANEL }),
                ref: W,
                children: [eR(), eC()]
            }),
        eD = () => {
            Z({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == B || B(),
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: F
                        });
                });
        },
        eM = {
            [y.biteSize]: I === R.y0.BITE_SIZE,
            [y.fullSize]: I === R.y0.FULL_SIZE,
            [y.panel]: I === R.y0.PANEL
        },
        eP = s()(y.background, { [y.editable]: ef }),
        eU = { [y.hoisted]: e_ },
        ew = s()({
            [y.statusBubbleShape]: (!J && ee) || !eh,
            [y.statusBubbleSingleLineWithTextShape]: (eh && J) || eE
        }),
        ex = s()(y.statusBubbleOuter, eM, ew, { [y.statusBubbleOuterAddStatusCursor]: eE }),
        eG = s()(y.statusBubble, ew, {
            [y.statusBubbleEmojiOnlyPadding]: et,
            [y.statusBubbleWithTextPadding]: J || eE,
            [y.statusBubbleWithTextMinWidth]: J,
            [y.statusBubbleCopyStatusCursor]: eo
        }),
        ek = () => {
            if (ee) {
                let e = null != Q.id ? '`' + ':'.concat(Q.name, ':') + '`' : m.ZP.translateSurrogatesToInlineEmoji(Q.name);
                return et ? ''.concat(e) : ''.concat(e, ' ').concat(X);
            }
            if (!et) return ''.concat(X);
        },
        eB = () =>
            (0, i.jsx)(d.Clickable, {
                'aria-label': C.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL,
                onClick: eD,
                className: s()(y.visibleContainer, eM, eP),
                focusProps: { ringClassName: ew },
                children: (0, i.jsx)('div', {
                    className: ex,
                    children: (0, i.jsx)('span', {
                        className: eG,
                        children: (0, i.jsxs)('div', {
                            className: y.content,
                            children: [
                                (0, i.jsx)(d.CirclePlusIcon, {
                                    className: y.addStatusIcon,
                                    colorClass: y.addStatusIconColor
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: L,
                                    className: y.addStatusPrompt,
                                    children: C.Z.Messages.USER_SETTINGS_ADD_STATUS
                                })
                            ]
                        })
                    })
                })
            }),
        eF = () => {
            let e = (0, i.jsxs)('span', {
                className: eG,
                children: [eo && eL(), eo && eb()]
            });
            return (0, i.jsxs)('div', {
                className: s()(y.invisibleContainer, eM, ex),
                children: [
                    (0, i.jsx)(O.Z, {
                        sourceType: R.n_.STATUS,
                        user: r,
                        children: (0, i.jsx)('div', {
                            className: y.coachmarkAnchor,
                            children: e
                        })
                    }),
                    e
                ]
            });
        },
        eZ = () => {
            var e;
            return (0, i.jsx)(d.FocusRing, {
                ringClassName: ew,
                children: (0, i.jsxs)('div', {
                    ref: eS,
                    className: s()(y.visibleContainer, eM, eP, eU),
                    role: 'tooltip',
                    'aria-label': C.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                        emoji: null !== (e = null == Q ? void 0 : Q.name) && void 0 !== e ? e : '',
                        status: X
                    }),
                    tabIndex: 0,
                    onFocus: () => {
                        eg(!0), eO(!0);
                    },
                    onBlur: (e) => {
                        var t;
                        !(null === (t = eS.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && !e_ && (eg(!1), eO(!1));
                    },
                    onMouseOver: () => {
                        Z({ action: 'HOVER_CUSTOM_STATUS' }), eg(!0), eO(!0);
                    },
                    onMouseLeave: () => {
                        !e_ && (eg(!1), eO(!1));
                    },
                    children: [
                        (0, i.jsx)('div', {
                            className: ex,
                            children: (0, i.jsx)('span', {
                                className: eG,
                                children: eo && ey()
                            })
                        }),
                        ef
                            ? (0, i.jsx)(A.Z, {
                                  isVisible: eT,
                                  isExpandable: em,
                                  onCloseProfile: B
                              })
                            : (0, i.jsx)(N.ZP, {
                                  user: r,
                                  sourceType: R.n_.STATUS,
                                  isVisible: eT && !e_,
                                  isExpandable: em
                              })
                    ]
                })
            });
        };
    return (0, i.jsx)('div', {
        children: eE
            ? eB()
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      eF(),
                      (0, i.jsx)(v.Z, {
                          user: r,
                          guildId: o,
                          channelId: p,
                          profileType: I,
                          sourceDetails: ek(),
                          sourceType: R.n_.STATUS,
                          onClose: () => {
                              eg(!1), eO(!1);
                          },
                          children: () => eZ()
                      })
                  ]
              })
    });
}
function k(e) {
    let { user: t, ...n } = e,
        r = (0, u.e7)([I.default], () => I.default.getId() === t.id),
        a = (0, p.Z)(t.id),
        { analyticsLocations: o } = (0, h.ZP)(f.Z.PROFILE_CUSTOM_STATUS),
        { customStatusBubbleEditEnabled: s } = (0, g.K)({ location: 'UserProfileCustomStatusBubbleWithReactReplyBar' });
    return (0, i.jsx)(h.Gt, {
        value: o,
        children: (0, i.jsx)(G, {
            user: t,
            editEnabled: s && r,
            statusActivity: a,
            ...n
        })
    });
}
