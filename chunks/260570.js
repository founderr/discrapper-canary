n.d(t, {
    Z: function () {
        return G;
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
    O = n(228168),
    R = n(689938),
    C = n(249818);
let y = 'text-sm/medium',
    b = 18,
    L = 1.25,
    D = 36,
    M = 144,
    P = 150,
    U = 150,
    w = 300;
function x(e) {
    let { statusActivity: t, user: r, guildId: o, channelId: p, profileType: I, hasEntered: g = !0, animate: x = !0, editEnabled: G, onCloseProfile: k } = e,
        { analyticsLocations: B } = (0, h.ZP)(f.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: F } = (0, T.KZ)(),
        Z = (0, u.e7)([E.Z], () => E.Z.useReducedMotion),
        [V] = a.useState(() => new c.V7()),
        [H, Y] = a.useState(!0),
        j = a.useRef(null),
        W = a.useRef(null),
        K = a.useRef(null),
        z = a.useRef(null),
        { emoji: q, state: Q } = null != t ? t : {},
        X = null != Q && '' !== Q ? Q : null,
        $ = null != X && X.length > 0,
        J = null != q,
        ee = J && !$,
        et = J ? L : 0,
        en = b + et,
        er = M + et,
        ei = D + et,
        ea = J || $,
        { interactionType: eo, interactionSource: es, resetInteraction: el } = (0, S.Xo)(),
        eu = es === O.n_.STATUS && eo === O.P.REACT,
        ec = es === O.n_.STATUS && eo === O.P.REPLY,
        ed = eu || ec,
        e_ = G && !ea,
        eE = G && ea,
        [ef, eh] = a.useState(ee),
        [ep, em] = a.useState(!ee),
        [eI, eT] = a.useState(!1),
        eg = a.useRef(null);
    a.useLayoutEffect(() => {
        if (null == j.current || ee) return;
        let e = j.current.getBoundingClientRect().height;
        if ((eh(ee || e <= en), g)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = j.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : er,
                a = null !== (i = null === (n = K.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : ei;
            em(!ee && e > a), (W.current = e), (z.current = a);
        }
    }, [g, ee, en, er, ei]);
    let [eS, eA] = (0, d.useSpring)(() => ({
        maxHeight: ''.concat(ei, 'px'),
        config: {
            clamp: !0,
            duration: P
        }
    }));
    a.useEffect(() => () => V.stop(), [V]);
    let ev = a.useRef(t);
    if (
        (a.useEffect(() => {
            es === O.n_.STATUS && (null == t || ev.current !== t) && el(), (ev.current = t);
        }, [t, es, el]),
        !ea && !e_)
    )
        return null;
    let eN = (e) => {
            var t, n;
            if (!ep) return;
            if (e) {
                let e = Math.min(null !== (t = W.current) && void 0 !== t ? t : er, er);
                eA({
                    maxHeight: ''.concat(e, 'px'),
                    delay: Z ? 0 : w,
                    config: {
                        clamp: !0,
                        duration: Z ? 0 : P
                    }
                });
            } else {
                let e = Math.min(null !== (n = z.current) && void 0 !== n ? n : ei, ei);
                eA({
                    maxHeight: ''.concat(e, 'px'),
                    delay: 0
                });
            }
            if (Z) {
                Y(!e);
                return;
            }
            let r = e ? w : U;
            V.start(r, () => {
                Y(!e);
            });
        },
        eO = () =>
            J
                ? (0, i.jsx)(_.I, {
                      className: $ ? C.statusEmojiInline : C.statusEmojiOnly,
                      emoji: q,
                      animate: x,
                      hideTooltip: !1,
                      tooltipDelay: O.vB
                  })
                : null,
        eR = () =>
            $
                ? (0, i.jsx)(d.Text, {
                      variant: y,
                      className: C.statusText,
                      children: X
                  })
                : null,
        eC = () => {
            let e = s()(C.content, {
                [C.clamp]: H,
                [C.unclamp]: !H,
                [C.singleLineAlign]: ef
            });
            return (0, i.jsxs)(l.animated.div, {
                style: eS,
                className: e,
                children: [eO(), eR()]
            });
        },
        ey = () =>
            (0, i.jsxs)('div', {
                className: s()(C.content, C.clamp, C.placeholderWidth, { [C.panel]: I === O.y0.PANEL }),
                ref: K,
                children: [eO(), eR()]
            }),
        eb = () =>
            (0, i.jsxs)('div', {
                className: s()(C.content, C.unclamp, C.placeholderWidth, C.incorporeal, { [C.panel]: I === O.y0.PANEL }),
                ref: j,
                children: [eO(), eR()]
            }),
        eL = () => {
            F({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == k || k(),
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: B
                        });
                });
        },
        eD = {
            [C.biteSize]: I === O.y0.BITE_SIZE,
            [C.fullSize]: I === O.y0.FULL_SIZE,
            [C.panel]: I === O.y0.PANEL
        },
        eM = s()(C.background, { [C.editable]: eE }),
        eP = { [C.hoisted]: ed },
        eU = s()({
            [C.statusBubbleShape]: (!$ && J) || !ef,
            [C.statusBubbleSingleLineWithTextShape]: (ef && $) || e_
        }),
        ew = s()(C.statusBubbleOuter, eD, eU, { [C.statusBubbleOuterAddStatusCursor]: e_ }),
        ex = s()(C.statusBubble, eU, {
            [C.statusBubbleEmojiOnlyPadding]: ee,
            [C.statusBubbleWithTextPadding]: $ || e_,
            [C.statusBubbleWithTextMinWidth]: $,
            [C.statusBubbleCopyStatusCursor]: ea
        }),
        eG = () => {
            if (J) {
                let e = null != q.id ? '`' + ':'.concat(q.name, ':') + '`' : m.ZP.translateSurrogatesToInlineEmoji(q.name);
                return ee ? ''.concat(e) : ''.concat(e, ' ').concat(Q);
            }
            if (!ee) return ''.concat(Q);
        },
        ek = () =>
            (0, i.jsx)(d.Clickable, {
                'aria-label': R.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL,
                onClick: eL,
                className: s()(C.visibleContainer, eD, eM),
                focusProps: { ringClassName: eU },
                children: (0, i.jsx)('div', {
                    className: ew,
                    children: (0, i.jsx)('span', {
                        className: ex,
                        children: (0, i.jsxs)('div', {
                            className: C.content,
                            children: [
                                (0, i.jsx)(d.CirclePlusIcon, {
                                    className: C.addStatusIcon,
                                    colorClass: C.addStatusIconColor
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: y,
                                    className: C.addStatusPrompt,
                                    children: R.Z.Messages.USER_SETTINGS_ADD_STATUS
                                })
                            ]
                        })
                    })
                })
            }),
        eB = () =>
            (0, i.jsx)('div', {
                className: s()(C.invisibleContainer, eD),
                children: (0, i.jsx)('div', {
                    className: ew,
                    children: (0, i.jsxs)('span', {
                        className: ex,
                        children: [ea && ey(), ea && eb()]
                    })
                })
            }),
        eF = () => {
            var e;
            return (0, i.jsx)(d.FocusRing, {
                ringClassName: eU,
                children: (0, i.jsxs)('div', {
                    ref: eg,
                    className: s()(C.visibleContainer, eD, eM, eP),
                    role: 'tooltip',
                    'aria-label': R.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                        emoji: null !== (e = null == q ? void 0 : q.name) && void 0 !== e ? e : '',
                        status: Q
                    }),
                    tabIndex: 0,
                    onFocus: () => {
                        eT(!0), eN(!0);
                    },
                    onBlur: (e) => {
                        var t;
                        !(null === (t = eg.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && !ed && (eT(!1), eN(!1));
                    },
                    onMouseOver: () => {
                        F({ action: 'HOVER_CUSTOM_STATUS' }), eT(!0), eN(!0);
                    },
                    onMouseLeave: () => {
                        !ed && (eT(!1), eN(!1));
                    },
                    children: [
                        (0, i.jsx)('div', {
                            className: ew,
                            children: (0, i.jsx)('span', {
                                className: ex,
                                children: ea && eC()
                            })
                        }),
                        eE
                            ? (0, i.jsx)(A.Z, {
                                  isVisible: eI,
                                  isExpandable: ep,
                                  onCloseProfile: k
                              })
                            : (0, i.jsx)(N.ZP, {
                                  user: r,
                                  sourceType: O.n_.STATUS,
                                  isVisible: eI && !ed,
                                  isExpandable: ep
                              })
                    ]
                })
            });
        };
    return (0, i.jsx)('div', {
        children: e_
            ? ek()
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      eB(),
                      (0, i.jsx)(v.Z, {
                          user: r,
                          guildId: o,
                          channelId: p,
                          profileType: I,
                          sourceDetails: eG(),
                          sourceType: O.n_.STATUS,
                          onClose: () => {
                              eT(!1), eN(!1);
                          },
                          children: () => eF()
                      })
                  ]
              })
    });
}
function G(e) {
    let { user: t, ...n } = e,
        r = (0, u.e7)([I.default], () => I.default.getId() === t.id),
        a = (0, p.Z)(t.id),
        { analyticsLocations: o } = (0, h.ZP)(f.Z.PROFILE_CUSTOM_STATUS),
        { customStatusBubbleEditEnabled: s } = (0, g.K)({ location: 'UserProfileCustomStatusBubbleWithReactReplyBar' });
    return (0, i.jsx)(h.Gt, {
        value: o,
        children: (0, i.jsx)(x, {
            user: t,
            editEnabled: s && r,
            statusActivity: a,
            ...n
        })
    });
}
