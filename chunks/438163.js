n.d(t, {
    Z: function () {
        return L;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(920906), l = n(442837), u = n(846519), c = n(481060), d = n(788307), _ = n(727637), E = n(607070), f = n(100527), h = n(906732), p = n(676035), m = n(314897), I = n(158776), T = n(751009), g = n(785717), S = n(825801), A = n(228168), N = n(981631), v = n(689938), O = n(230891);
let R = 'text-sm/medium', C = 36, y = 144;
function D(e) {
    let {
            statusActivity: t,
            profileType: a,
            canModifyStatus: p = !1,
            hasEntered: m = !0,
            animate: I = !0,
            onClose: T
        } = e, {analyticsLocations: N} = (0, h.ZP)(f.Z.PROFILE_CUSTOM_STATUS), {trackUserProfileAction: D} = (0, g.KZ)(), L = (0, l.e7)([E.Z], () => E.Z.useReducedMotion), [b] = i.useState(() => new u.V7()), [M, P] = i.useState(!0), U = i.useRef(null), w = i.useRef(null), x = i.useRef(null), G = i.useRef(null), k = i.useRef(null), B = (0, _.Z)(k), {
            emoji: F,
            state: V
        } = null != t ? t : {}, H = null != V && '' !== V ? V : null, Z = null != H && H.length > 0, Y = null != F, j = Y && !Z, W = Y ? 1.25 : 0, K = 18 + W, z = y + W, q = C + W, Q = Y || Z, X = p && !Q, [$, J] = i.useState(j), [ee, et] = i.useState(j);
    i.useLayoutEffect(() => {
        if (null == U.current || j)
            return;
        let e = U.current.getBoundingClientRect().height;
        if (J(j || e <= K), m) {
            var t, n, r, i;
            let e = null !== (r = null === (t = U.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : z, a = null !== (i = null === (n = x.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : q;
            et(e > a), w.current = e, G.current = a;
        }
    }, [
        m,
        j,
        K,
        z,
        q
    ]);
    let [en, er] = (0, s.useSpring)(() => ({
        maxHeight: ''.concat(q, 'px'),
        config: {
            clamp: !0,
            immediate: L,
            duration: 150
        }
    }));
    if (i.useEffect(() => () => b.stop(), [b]), !Q && !X)
        return null;
    let ei = e => {
            var t, n;
            if (!!ee) {
                if (e) {
                    let e = Math.min(null !== (t = w.current) && void 0 !== t ? t : z, z);
                    er({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 300
                    });
                } else {
                    let e = Math.min(null !== (n = G.current) && void 0 !== n ? n : q, q);
                    er({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                b.start(e ? 300 : 150, () => {
                    P(!e);
                });
            }
        }, ea = () => Y ? (0, r.jsx)(d.I, {
            className: Z ? O.statusEmojiInline : O.statusEmojiOnly,
            emoji: F,
            animate: I,
            hideTooltip: !1,
            tooltipDelay: A.vB
        }) : null, eo = () => Z ? (0, r.jsx)(c.Text, {
            variant: R,
            className: O.statusText,
            children: H
        }) : null, es = () => (0, r.jsxs)('div', {
            className: O.content,
            children: [
                (0, r.jsx)(c.CirclePlusIcon, {
                    className: O.addStatusIcon,
                    colorClass: O.addStatusIconColor
                }),
                (0, r.jsx)(c.Text, {
                    variant: R,
                    className: O.addStatusPrompt,
                    children: v.Z.Messages.USER_SETTINGS_ADD_STATUS
                })
            ]
        }), el = {
            [O.biteSize]: a === A.y0.BITE_SIZE,
            [O.fullSize]: a === A.y0.FULL_SIZE,
            [O.panel]: a === A.y0.PANEL
        }, eu = o()(O.statusBubbleOuter, el, {
            [O.statusBubbleShape]: !Z && Y || !$,
            [O.statusBubbleSingleLineWithTextShape]: $ && Z || X,
            [O.statusBubbleOuterAddStatusCursor]: X
        }), ec = o()(O.statusBubble, {
            [O.statusBubbleShape]: !Z && Y || !$,
            [O.statusBubbleSingleLineWithTextShape]: $ && Z || X,
            [O.statusBubbleEmojiOnlyPadding]: j,
            [O.statusBubbleWithTextPadding]: Z || X,
            [O.statusBubbleWithTextMinWidth]: Z,
            [O.statusBubbleCopyStatusCursor]: Q
        });
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)('div', {
                className: o()(O.invisibleContainer, el),
                children: (0, r.jsx)('div', {
                    className: eu,
                    children: (0, r.jsxs)('span', {
                        className: ec,
                        children: [
                            X && es(),
                            Q && (0, r.jsxs)('div', {
                                className: o()(O.content, O.clamp, O.placeholderWidth, { [O.panel]: a === A.y0.PANEL }),
                                ref: x,
                                children: [
                                    ea(),
                                    eo()
                                ]
                            }),
                            Q && (0, r.jsxs)('div', {
                                className: o()(O.content, O.unclamp, O.placeholderWidth, O.incorporeal, { [O.panel]: a === A.y0.PANEL }),
                                ref: U,
                                children: [
                                    ea(),
                                    eo()
                                ]
                            })
                        ]
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: o()(O.visibleContainer, el),
                ref: k,
                children: [
                    (0, r.jsx)(S.Z, {
                        isHovering: B,
                        location: 'UserProfileCustomStatusBubble',
                        className: O.reactReplyBar
                    }),
                    (0, r.jsx)(c.Clickable, {
                        tabIndex: 0,
                        className: eu,
                        onFocus: () => ei(!0),
                        onBlur: e => {
                            !e.currentTarget.contains(e.relatedTarget) && ei(!1);
                        },
                        onMouseEnter: () => ei(!0),
                        onMouseLeave: () => ei(!1),
                        onClick: X ? () => {
                            D({ action: 'PRESS_SET_CUSTOM_STATUS' }), null == T || T(), (0, c.openModalLazy)(async () => {
                                let {default: e} = await n.e('51714').then(n.bind(n, 211065));
                                return t => (0, r.jsx)(e, {
                                    ...t,
                                    sourceAnalyticsLocations: N
                                });
                            });
                        } : void 0,
                        children: (0, r.jsxs)('span', {
                            className: ec,
                            children: [
                                X && es(),
                                Q && (() => {
                                    let e = o()(O.content, {
                                        [O.clamp]: M,
                                        [O.unclamp]: !M,
                                        [O.singleLineAlign]: $
                                    });
                                    return (0, r.jsxs)(s.animated.div, {
                                        style: en,
                                        className: e,
                                        children: [
                                            ea(),
                                            eo()
                                        ]
                                    });
                                })()
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function L(e) {
    let {
            user: t,
            ...n
        } = e, i = (0, l.e7)([m.default], () => m.default.getId() === t.id), a = (0, p.a)(), o = (0, l.e7)([I.Z], () => I.Z.findActivity(t.id, e => {
            let {type: t} = e;
            return t === N.IIU.CUSTOM_STATUS;
        })), {modifyStatusEnabled: s} = (0, T.K)({ location: 'UserProfileCustomStatusBubble' }), u = i && s;
    return (0, r.jsx)(D, {
        canModifyStatus: u,
        statusActivity: u ? a : o,
        ...n
    });
}
