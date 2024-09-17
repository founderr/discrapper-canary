n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(56217),
    l = n(442837),
    u = n(846519),
    c = n(481060),
    d = n(788307),
    _ = n(607070),
    E = n(100527),
    f = n(906732),
    h = n(8454),
    p = n(633302),
    I = n(314897),
    m = n(785717),
    T = n(481046),
    S = n(277085),
    g = n(825801),
    A = n(215105),
    N = n(429974),
    O = n(228168),
    R = n(689938),
    v = n(249818);
let C = 'text-sm/medium',
    y = 36,
    L = 144;
function D(e) {
    let { statusActivity: t, user: a, displayProfile: h, guildId: I, channelId: T, profileType: D, hasEntered: b = !0, animate: M = !0, editEnabled: P, interactionType: U, interactionSource: w, onInteraction: x, setInteractionToastShown: G, setInteractionTypeSent: k, onClose: B } = e,
        { analyticsLocations: F } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: V } = (0, m.KZ)(),
        H = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        [Z] = i.useState(() => new u.V7()),
        [Y, j] = i.useState(!0),
        W = i.useRef(null),
        K = i.useRef(null),
        z = i.useRef(null),
        q = i.useRef(null),
        { emoji: Q, state: X } = null != t ? t : {},
        $ = null != X && '' !== X ? X : null,
        J = null != $ && $.length > 0,
        ee = null != Q,
        et = ee && !J,
        en = ee ? 1.25 : 0,
        er = 18 + en,
        ei = L + en,
        ea = y + en,
        es = ee || J,
        eo = P && !es,
        el = P && es,
        [eu, ec] = i.useState(et),
        [ed, e_] = i.useState(!et),
        [eE, ef] = i.useState(!1),
        eh = D === O.y0.FULL_SIZE ? (0, N.z)(a.id, null == h ? void 0 : h.guildId) : void 0,
        ep = U === O.P.REPLY && w === O.n_.STATUS;
    i.useLayoutEffect(() => {
        if (null == W.current || et) return;
        let e = W.current.getBoundingClientRect().height;
        if ((ec(et || e <= er), b)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = W.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : ei,
                a = null !== (i = null === (n = z.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : ea;
            e_(!et && e > a), (K.current = e), (q.current = a);
        }
    }, [b, et, er, ei, ea]);
    let [eI, em] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(ea, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    i.useEffect(() => () => Z.stop(), [Z]);
    let eT = i.useRef(t);
    if (
        (i.useEffect(() => {
            w === O.n_.STATUS &&
                (null == t || eT.current !== t) &&
                (null == x ||
                    x({
                        interactionType: null,
                        interactionSourceType: null
                    })),
                (eT.current = t);
        }, [t, x, w]),
        !es && !eo)
    )
        return null;
    let eS = (e) => {
            var t, n;
            if (!!ed) {
                if (e) {
                    let e = Math.min(null !== (t = K.current) && void 0 !== t ? t : ei, ei);
                    em({
                        maxHeight: ''.concat(e, 'px'),
                        delay: H ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: H ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = q.current) && void 0 !== n ? n : ea, ea);
                    em({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (H) {
                    j(!e);
                    return;
                }
                Z.start(e ? 300 : 150, () => {
                    j(!e);
                });
            }
        },
        eg = () =>
            ee
                ? (0, r.jsx)(d.I, {
                      className: J ? v.statusEmojiInline : v.statusEmojiOnly,
                      emoji: Q,
                      animate: M,
                      hideTooltip: !1,
                      tooltipDelay: O.vB
                  })
                : null,
        eA = () =>
            J
                ? (0, r.jsx)(c.Text, {
                      variant: C,
                      className: v.statusText,
                      children: $
                  })
                : null,
        eN = () => {
            let e = s()(v.content, {
                [v.clamp]: Y,
                [v.unclamp]: !Y,
                [v.singleLineAlign]: eu
            });
            return (0, r.jsxs)(o.animated.div, {
                style: eI,
                className: e,
                children: [eg(), eA()]
            });
        },
        eO = () =>
            (0, r.jsxs)('div', {
                className: s()(v.content, v.clamp, v.placeholderWidth, { [v.panel]: D === O.y0.PANEL }),
                ref: z,
                children: [eg(), eA()]
            }),
        eR = () =>
            (0, r.jsxs)('div', {
                className: s()(v.content, v.unclamp, v.placeholderWidth, v.incorporeal, { [v.panel]: D === O.y0.PANEL }),
                ref: W,
                children: [eg(), eA()]
            }),
        ev = () =>
            (0, r.jsxs)('div', {
                className: v.content,
                children: [
                    (0, r.jsx)(c.CirclePlusIcon, {
                        className: v.addStatusIcon,
                        colorClass: v.addStatusIconColor
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: C,
                        className: v.addStatusPrompt,
                        children: R.Z.Messages.USER_SETTINGS_ADD_STATUS
                    })
                ]
            }),
        eC = () => {
            var e;
            return eo
                ? R.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL
                : R.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                      emoji: null !== (e = null == Q ? void 0 : Q.name) && void 0 !== e ? e : '',
                      status: X
                  });
        },
        ey = () => {
            V({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == B || B(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: F
                        });
                });
        },
        eL = {
            [v.biteSize]: D === O.y0.BITE_SIZE,
            [v.fullSize]: D === O.y0.FULL_SIZE,
            [v.panel]: D === O.y0.PANEL
        },
        eD = s()(v.background, { [v.editable]: el }),
        eb = { [v.hoisted]: w === O.n_.STATUS },
        eM = s()({
            [v.statusBubbleShape]: (!J && ee) || !eu,
            [v.statusBubbleSingleLineWithTextShape]: (eu && J) || eo
        }),
        eP = s()(v.statusBubbleOuter, eL, eM, { [v.statusBubbleOuterAddStatusCursor]: eo }),
        eU = s()(v.statusBubble, eM, {
            [v.statusBubbleEmojiOnlyPadding]: et,
            [v.statusBubbleWithTextPadding]: J || eo,
            [v.statusBubbleWithTextMinWidth]: J,
            [v.statusBubbleCopyStatusCursor]: es
        }),
        ew = () => {
            if (ee) {
                let e = null != Q.id ? '`' + ':'.concat(Q.name, ':') + '`' : p.ZP.translateSurrogatesToInlineEmoji(Q.name);
                return et ? ''.concat(e) : ''.concat(e, ' ').concat(X);
            }
            if (!et) return ''.concat(X);
        },
        ex = () =>
            (0, r.jsxs)(c.ClickableContainer, {
                className: s()(v.visibleContainer, eL, eD, eb),
                'aria-label': eC(),
                focusProps: { ringClassName: eM },
                onClick: eo ? ey : void 0,
                onFocus: () => {
                    ef(!0), eS(!0);
                },
                onBlur: (e) => {
                    !e.currentTarget.contains(e.relatedTarget) && (ef(!1), eS(!1));
                },
                onMouseOver: () => {
                    V({ action: 'HOVER_CUSTOM_STATUS' }), ef(!0), eS(!0);
                },
                onMouseLeave: () => {
                    !ep && (ef(!1), eS(!1));
                },
                children: [
                    (0, r.jsx)('div', {
                        className: eP,
                        children: (0, r.jsxs)('span', {
                            className: eU,
                            children: [es && eN(), eo && ev()]
                        })
                    }),
                    (0, r.jsx)(g.ZP, {
                        user: a,
                        sourceDetails: ew(),
                        sourceType: O.n_.STATUS,
                        isVisible: eE && null == U && null == w,
                        isExpandable: ed,
                        onInteraction: x,
                        setInteractionToastShown: G,
                        setInteractionTypeSent: k,
                        onClose: () => {
                            ef(!1), eS(!1);
                        }
                    }),
                    el &&
                        (0, r.jsx)(S.Z, {
                            isVisible: eE,
                            isExpandable: ed,
                            onClose: B
                        })
                ]
            });
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)('div', {
                className: s()(v.invisibleContainer, eL),
                children: (0, r.jsx)('div', {
                    className: eP,
                    children: (0, r.jsxs)('span', {
                        className: eU,
                        children: [eo && ev(), es && eO(), es && eR()]
                    })
                })
            }),
            (0, r.jsx)(c.Popout, {
                renderPopout: (e) => {
                    let { setPopoutRef: t } = e;
                    return (0, r.jsx)(A.Z, {
                        user: a,
                        guildId: I,
                        channelId: T,
                        profileType: D,
                        sourceDetails: ew(),
                        sourceType: O.n_.STATUS,
                        setPopoutRef: t,
                        modalKey: eh,
                        onInteraction: x,
                        setInteractionToastShown: G,
                        setInteractionTypeSent: k,
                        onClose: () => {
                            ef(!1), eS(!1);
                        }
                    });
                },
                onRequestClose: () =>
                    null == x
                        ? void 0
                        : x({
                              interactionType: null,
                              interactionSourceType: null
                          }),
                animationPosition: 'top',
                position: 'bottom',
                align: D === O.y0.FULL_SIZE ? 'center' : 'left',
                spacing: 6,
                shouldShow: ep,
                children: () => ex()
            })
        ]
    });
}
function b(e) {
    let { user: t, ...n } = e,
        i = (0, l.e7)([I.default], () => I.default.getId() === t.id),
        a = (0, h.Z)(t.id),
        { analyticsLocations: s } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { customStatusBubbleEditEnabled: o } = (0, T.K)({ location: 'UserProfileCustomStatusBubbleWithReactReplyBar' });
    return (0, r.jsx)(f.Gt, {
        value: s,
        children: (0, r.jsx)(D, {
            user: t,
            editEnabled: o && i,
            statusActivity: a,
            ...n
        })
    });
}
