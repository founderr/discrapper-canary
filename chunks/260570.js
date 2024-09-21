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
    o = n(526629),
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
    S = n(510659),
    g = n(277085),
    A = n(287954),
    N = n(825801),
    O = n(228168),
    R = n(689938),
    v = n(249818);
let C = 'text-sm/medium',
    y = 36,
    L = 144;
function D(e) {
    let { statusActivity: t, user: a, guildId: h, channelId: I, profileType: T, hasEntered: D = !0, animate: b = !0, editEnabled: M, onClose: P } = e,
        { analyticsLocations: U } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: w } = (0, m.KZ)(),
        x = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        [G] = i.useState(() => new u.V7()),
        [k, B] = i.useState(!0),
        F = i.useRef(null),
        V = i.useRef(null),
        H = i.useRef(null),
        Z = i.useRef(null),
        { emoji: Y, state: j } = null != t ? t : {},
        W = null != j && '' !== j ? j : null,
        K = null != W && W.length > 0,
        z = null != Y,
        q = z && !K,
        Q = z ? 1.25 : 0,
        X = 18 + Q,
        $ = L + Q,
        J = y + Q,
        ee = z || K,
        { interactionType: et, interactionSource: en, resetInteraction: er } = (0, S.Xo)(),
        ei = en === O.n_.STATUS && et === O.P.REACT,
        ea = en === O.n_.STATUS && et === O.P.REPLY,
        es = ei || ea,
        eo = M && !ee,
        el = M && ee,
        [eu, ec] = i.useState(q),
        [ed, e_] = i.useState(!q),
        [eE, ef] = i.useState(!1);
    i.useLayoutEffect(() => {
        if (null == F.current || q) return;
        let e = F.current.getBoundingClientRect().height;
        if ((ec(q || e <= X), D)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = F.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : $,
                a = null !== (i = null === (n = H.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : J;
            e_(!q && e > a), (V.current = e), (Z.current = a);
        }
    }, [D, q, X, $, J]);
    let [eh, ep] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(J, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    i.useEffect(() => () => G.stop(), [G]);
    let eI = i.useRef(t);
    if (
        (i.useEffect(() => {
            en === O.n_.STATUS && (null == t || eI.current !== t) && er(), (eI.current = t);
        }, [t, en, er]),
        !ee && !eo)
    )
        return null;
    let em = (e) => {
            var t, n;
            if (!!ed) {
                if (e) {
                    let e = Math.min(null !== (t = V.current) && void 0 !== t ? t : $, $);
                    ep({
                        maxHeight: ''.concat(e, 'px'),
                        delay: x ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: x ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = Z.current) && void 0 !== n ? n : J, J);
                    ep({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (x) {
                    B(!e);
                    return;
                }
                G.start(e ? 300 : 150, () => {
                    B(!e);
                });
            }
        },
        eT = () =>
            z
                ? (0, r.jsx)(d.I, {
                      className: K ? v.statusEmojiInline : v.statusEmojiOnly,
                      emoji: Y,
                      animate: b,
                      hideTooltip: !1,
                      tooltipDelay: O.vB
                  })
                : null,
        eS = () =>
            K
                ? (0, r.jsx)(c.Text, {
                      variant: C,
                      className: v.statusText,
                      children: W
                  })
                : null,
        eg = () => {
            let e = s()(v.content, {
                [v.clamp]: k,
                [v.unclamp]: !k,
                [v.singleLineAlign]: eu
            });
            return (0, r.jsxs)(o.animated.div, {
                style: eh,
                className: e,
                children: [eT(), eS()]
            });
        },
        eA = () =>
            (0, r.jsxs)('div', {
                className: s()(v.content, v.clamp, v.placeholderWidth, { [v.panel]: T === O.y0.PANEL }),
                ref: H,
                children: [eT(), eS()]
            }),
        eN = () =>
            (0, r.jsxs)('div', {
                className: s()(v.content, v.unclamp, v.placeholderWidth, v.incorporeal, { [v.panel]: T === O.y0.PANEL }),
                ref: F,
                children: [eT(), eS()]
            }),
        eO = () =>
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
        eR = () => {
            var e;
            return eo
                ? R.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL
                : R.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                      emoji: null !== (e = null == Y ? void 0 : Y.name) && void 0 !== e ? e : '',
                      status: j
                  });
        },
        ev = () => {
            w({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == P || P(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: U
                        });
                });
        },
        eC = {
            [v.biteSize]: T === O.y0.BITE_SIZE,
            [v.fullSize]: T === O.y0.FULL_SIZE,
            [v.panel]: T === O.y0.PANEL
        },
        ey = s()(v.background, { [v.editable]: el }),
        eL = { [v.hoisted]: es },
        eD = s()({
            [v.statusBubbleShape]: (!K && z) || !eu,
            [v.statusBubbleSingleLineWithTextShape]: (eu && K) || eo
        }),
        eb = s()(v.statusBubbleOuter, eC, eD, { [v.statusBubbleOuterAddStatusCursor]: eo }),
        eM = s()(v.statusBubble, eD, {
            [v.statusBubbleEmojiOnlyPadding]: q,
            [v.statusBubbleWithTextPadding]: K || eo,
            [v.statusBubbleWithTextMinWidth]: K,
            [v.statusBubbleCopyStatusCursor]: ee
        }),
        eP = () =>
            (0, r.jsxs)(c.ClickableContainer, {
                className: s()(v.visibleContainer, eC, ey, eL),
                'aria-label': eR(),
                focusProps: { ringClassName: eD },
                onClick: eo ? ev : void 0,
                onFocus: () => {
                    ef(!0), em(!0);
                },
                onBlur: (e) => {
                    !e.currentTarget.contains(e.relatedTarget) && (ef(!1), em(!1));
                },
                onMouseOver: () => {
                    w({ action: 'HOVER_CUSTOM_STATUS' }), ef(!0), em(!0);
                },
                onMouseLeave: () => {
                    !ea && (ef(!1), em(!1));
                },
                children: [
                    (0, r.jsx)('div', {
                        className: eb,
                        children: (0, r.jsxs)('span', {
                            className: eM,
                            children: [ee && eg(), eo && eO()]
                        })
                    }),
                    ee &&
                        (0, r.jsx)(N.ZP, {
                            user: a,
                            sourceType: O.n_.STATUS,
                            isVisible: eE && !es,
                            isExpandable: ed
                        }),
                    el &&
                        (0, r.jsx)(g.Z, {
                            isVisible: eE,
                            isExpandable: ed,
                            onClose: P
                        })
                ]
            });
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)('div', {
                className: s()(v.invisibleContainer, eC),
                children: (0, r.jsx)('div', {
                    className: eb,
                    children: (0, r.jsxs)('span', {
                        className: eM,
                        children: [eo && eO(), ee && eA(), ee && eN()]
                    })
                })
            }),
            (0, r.jsx)(A.Z, {
                user: a,
                guildId: h,
                channelId: I,
                profileType: T,
                sourceDetails: (() => {
                    if (z) {
                        let e = null != Y.id ? '`' + ':'.concat(Y.name, ':') + '`' : p.ZP.translateSurrogatesToInlineEmoji(Y.name);
                        return q ? ''.concat(e) : ''.concat(e, ' ').concat(j);
                    }
                    if (!q) return ''.concat(j);
                })(),
                sourceType: O.n_.STATUS,
                onClose: () => {
                    ef(!1), em(!1);
                },
                children: () => eP()
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
