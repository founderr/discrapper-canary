n.d(t, {
    Z: function () {
        return L;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(920906), l = n(442837), u = n(846519), c = n(481060), d = n(788307), _ = n(607070), E = n(100527), f = n(906732), h = n(676035), p = n(314897), m = n(158776), I = n(751009), T = n(785717), g = n(277085), S = n(825801), A = n(228168), N = n(981631), v = n(689938), O = n(230891);
let R = 'text-sm/medium', C = 36, y = 144;
function D(e) {
    var t;
    let {
            statusActivity: a,
            profileType: h,
            canModifyStatus: p = !1,
            hasEntered: m = !0,
            animate: I = !0,
            onClose: N
        } = e, {analyticsLocations: D} = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS), {trackUserProfileAction: L} = (0, T.KZ)(), b = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), [M] = i.useState(() => new u.V7()), [P, U] = i.useState(!0), w = i.useRef(null), x = i.useRef(null), G = i.useRef(null), k = i.useRef(null), {
            emoji: B,
            state: F
        } = null != a ? a : {}, V = null != F && '' !== F ? F : null, H = null != V && V.length > 0, Z = null != B, Y = Z && !H, j = Z ? 1.25 : 0, W = 18 + j, K = y + j, z = C + j, q = Z || H, Q = p && !q, X = p && q, [$, J] = i.useState(Y), [ee, et] = i.useState(!Y), [en, er] = i.useState(!1);
    i.useLayoutEffect(() => {
        if (null == w.current || Y)
            return;
        let e = w.current.getBoundingClientRect().height;
        if (J(Y || e <= W), m) {
            var t, n, r, i;
            let e = null !== (r = null === (t = w.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : K, a = null !== (i = null === (n = G.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : z;
            et(!Y && e > a), x.current = e, k.current = a;
        }
    }, [
        m,
        Y,
        W,
        K,
        z
    ]);
    let [ei, ea] = (0, s.useSpring)(() => ({
        maxHeight: ''.concat(z, 'px'),
        config: {
            clamp: !0,
            duration: b ? 0 : 150
        }
    }));
    if (i.useEffect(() => () => M.stop(), [M]), !q && !Q)
        return null;
    let eo = e => {
            var t, n;
            if (!!ee) {
                if (e) {
                    let e = Math.min(null !== (t = x.current) && void 0 !== t ? t : K, K);
                    ea({
                        maxHeight: ''.concat(e, 'px'),
                        delay: b ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: b ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = k.current) && void 0 !== n ? n : z, z);
                    ea({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (b) {
                    U(!e);
                    return;
                }
                M.start(e ? 300 : 150, () => {
                    U(!e);
                });
            }
        }, es = () => Z ? (0, r.jsx)(d.I, {
            className: H ? O.statusEmojiInline : O.statusEmojiOnly,
            emoji: B,
            animate: I,
            hideTooltip: !1,
            tooltipDelay: A.vB
        }) : null, el = () => H ? (0, r.jsx)(c.Text, {
            variant: R,
            className: O.statusText,
            children: V
        }) : null, eu = () => (0, r.jsxs)('div', {
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
        }), ec = {
            [O.biteSize]: h === A.y0.BITE_SIZE,
            [O.fullSize]: h === A.y0.FULL_SIZE,
            [O.panel]: h === A.y0.PANEL
        }, ed = o()(O.background, { [O.editable]: X }), e_ = o()(O.statusBubbleOuter, ec, {
            [O.statusBubbleShape]: !H && Z || !$,
            [O.statusBubbleSingleLineWithTextShape]: $ && H || Q,
            [O.statusBubbleOuterAddStatusCursor]: Q
        }), eE = o()(O.statusBubble, {
            [O.statusBubbleShape]: !H && Z || !$,
            [O.statusBubbleSingleLineWithTextShape]: $ && H || Q,
            [O.statusBubbleEmojiOnlyPadding]: Y,
            [O.statusBubbleWithTextPadding]: H || Q,
            [O.statusBubbleWithTextMinWidth]: H,
            [O.statusBubbleCopyStatusCursor]: q
        });
    return (0, r.jsx)(f.Gt, {
        value: D,
        children: (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)('div', {
                    className: o()(O.invisibleContainer, ec),
                    children: (0, r.jsx)('div', {
                        className: e_,
                        children: (0, r.jsxs)('span', {
                            className: eE,
                            children: [
                                Q && eu(),
                                q && (0, r.jsxs)('div', {
                                    className: o()(O.content, O.clamp, O.placeholderWidth, { [O.panel]: h === A.y0.PANEL }),
                                    ref: G,
                                    children: [
                                        es(),
                                        el()
                                    ]
                                }),
                                q && (0, r.jsxs)('div', {
                                    className: o()(O.content, O.unclamp, O.placeholderWidth, O.incorporeal, { [O.panel]: h === A.y0.PANEL }),
                                    ref: w,
                                    children: [
                                        es(),
                                        el()
                                    ]
                                })
                            ]
                        })
                    })
                }),
                (0, r.jsxs)('div', {
                    className: o()(O.visibleContainer, ec, ed),
                    onFocus: () => {
                        er(!0), eo(!0);
                    },
                    onBlur: e => {
                        !e.currentTarget.contains(e.relatedTarget) && (er(!1), eo(!1));
                    },
                    onMouseEnter: () => {
                        L({ action: 'HOVER_CUSTOM_STATUS' }), er(!0), eo(!0);
                    },
                    onMouseLeave: () => {
                        er(!1), eo(!1);
                    },
                    children: [
                        (0, r.jsx)(c.Clickable, {
                            className: e_,
                            onClick: Q ? () => {
                                L({ action: 'PRESS_ADD_CUSTOM_STATUS' }), null == N || N(), (0, c.openModalLazy)(async () => {
                                    let {default: e} = await n.e('51714').then(n.bind(n, 211065));
                                    return t => (0, r.jsx)(e, {
                                        ...t,
                                        sourceAnalyticsLocations: D
                                    });
                                });
                            } : void 0,
                            'aria-label': Q ? v.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL : v.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                                emoji: null !== (t = null == B ? void 0 : B.name) && void 0 !== t ? t : '',
                                status: F
                            }),
                            children: (0, r.jsxs)('span', {
                                className: eE,
                                children: [
                                    Q && eu(),
                                    q && (() => {
                                        let e = o()(O.content, {
                                            [O.clamp]: P,
                                            [O.unclamp]: !P,
                                            [O.singleLineAlign]: $
                                        });
                                        return (0, r.jsxs)(s.animated.div, {
                                            style: ei,
                                            className: e,
                                            children: [
                                                es(),
                                                el()
                                            ]
                                        });
                                    })()
                                ]
                            })
                        }),
                        (0, r.jsx)(S.Z, {
                            isHovering: en,
                            location: 'UserProfileCustomStatusBubble',
                            className: O.reactReplyBar
                        }),
                        X && (0, r.jsx)(g.Z, {
                            isVisible: en,
                            isExpandable: ee,
                            onClose: N
                        })
                    ]
                })
            ]
        })
    });
}
function L(e) {
    let {
            user: t,
            ...n
        } = e, i = (0, l.e7)([p.default], () => p.default.getId() === t.id), a = (0, h.a)(), o = (0, l.e7)([m.Z], () => m.Z.findActivity(t.id, e => {
            let {type: t} = e;
            return t === N.IIU.CUSTOM_STATUS;
        })), {modifyStatusEnabled: s} = (0, I.K)({ location: 'UserProfileCustomStatusBubble' }), u = i && s;
    return (0, r.jsx)(D, {
        canModifyStatus: u,
        statusActivity: u ? a : o,
        ...n
    });
}
