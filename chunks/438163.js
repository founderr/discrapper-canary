n.d(t, {
    Z: function () {
        return D;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(338545), l = n(442837), u = n(846519), c = n(481060), d = n(788307), _ = n(607070), E = n(100527), f = n(906732), h = n(676035), p = n(314897), m = n(158776), I = n(785717), T = n(277085), g = n(825801), S = n(228168), A = n(981631), N = n(689938), v = n(230891);
let O = 'text-sm/medium', R = 36, C = 144;
function y(e) {
    var t;
    let {
            statusActivity: a,
            profileType: h,
            editEnabled: p,
            hasEntered: m = !0,
            animate: A = !0,
            onClose: y
        } = e, {analyticsLocations: D} = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS), {trackUserProfileAction: L} = (0, I.KZ)(), b = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), [M] = i.useState(() => new u.V7()), [P, U] = i.useState(!0), w = i.useRef(null), x = i.useRef(null), G = i.useRef(null), k = i.useRef(null), {
            emoji: B,
            state: F
        } = null != a ? a : {}, V = null != F && '' !== F ? F : null, H = null != V && V.length > 0, Z = null != B, Y = Z && !H, j = Z ? 1.25 : 0, W = 18 + j, K = C + j, z = R + j, q = Z || H, Q = p && !q, X = p && q, [$, J] = i.useState(Y), [ee, et] = i.useState(!Y), [en, er] = i.useState(!1);
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
            className: H ? v.statusEmojiInline : v.statusEmojiOnly,
            emoji: B,
            animate: A,
            hideTooltip: !1,
            tooltipDelay: S.vB
        }) : null, el = () => H ? (0, r.jsx)(c.Text, {
            variant: O,
            className: v.statusText,
            children: V
        }) : null, eu = () => (0, r.jsxs)('div', {
            className: v.content,
            children: [
                (0, r.jsx)(c.CirclePlusIcon, {
                    className: v.addStatusIcon,
                    colorClass: v.addStatusIconColor
                }),
                (0, r.jsx)(c.Text, {
                    variant: O,
                    className: v.addStatusPrompt,
                    children: N.Z.Messages.USER_SETTINGS_ADD_STATUS
                })
            ]
        }), ec = {
            [v.biteSize]: h === S.y0.BITE_SIZE,
            [v.fullSize]: h === S.y0.FULL_SIZE,
            [v.panel]: h === S.y0.PANEL
        }, ed = o()(v.background, { [v.editable]: X }), e_ = o()({
            [v.statusBubbleShape]: !H && Z || !$,
            [v.statusBubbleSingleLineWithTextShape]: $ && H || Q
        }), eE = o()(v.statusBubbleOuter, ec, e_, { [v.statusBubbleOuterAddStatusCursor]: Q }), ef = o()(v.statusBubble, e_, {
            [v.statusBubbleEmojiOnlyPadding]: Y,
            [v.statusBubbleWithTextPadding]: H || Q,
            [v.statusBubbleWithTextMinWidth]: H,
            [v.statusBubbleCopyStatusCursor]: q
        });
    return (0, r.jsx)(f.Gt, {
        value: D,
        children: (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)('div', {
                    className: o()(v.invisibleContainer, ec),
                    children: (0, r.jsx)('div', {
                        className: eE,
                        children: (0, r.jsxs)('span', {
                            className: ef,
                            children: [
                                Q && eu(),
                                q && (0, r.jsxs)('div', {
                                    className: o()(v.content, v.clamp, v.placeholderWidth, { [v.panel]: h === S.y0.PANEL }),
                                    ref: G,
                                    children: [
                                        es(),
                                        el()
                                    ]
                                }),
                                q && (0, r.jsxs)('div', {
                                    className: o()(v.content, v.unclamp, v.placeholderWidth, v.incorporeal, { [v.panel]: h === S.y0.PANEL }),
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
                (0, r.jsxs)(c.ClickableContainer, {
                    className: o()(v.visibleContainer, ec, ed),
                    'aria-label': Q ? N.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL : N.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                        emoji: null !== (t = null == B ? void 0 : B.name) && void 0 !== t ? t : '',
                        status: F
                    }),
                    focusProps: { ringClassName: e_ },
                    onClick: Q ? () => {
                        L({ action: 'PRESS_ADD_CUSTOM_STATUS' }), null == y || y(), (0, c.openModalLazy)(async () => {
                            let {default: e} = await n.e('51714').then(n.bind(n, 211065));
                            return t => (0, r.jsx)(e, {
                                ...t,
                                sourceAnalyticsLocations: D
                            });
                        });
                    } : void 0,
                    onFocus: () => {
                        er(!0), eo(!0);
                    },
                    onBlur: e => {
                        !e.currentTarget.contains(e.relatedTarget) && (er(!1), eo(!1));
                    },
                    onMouseOver: () => {
                        L({ action: 'HOVER_CUSTOM_STATUS' }), er(!0), eo(!0);
                    },
                    onMouseLeave: () => {
                        er(!1), eo(!1);
                    },
                    children: [
                        (0, r.jsx)('div', {
                            className: eE,
                            children: (0, r.jsxs)('span', {
                                className: ef,
                                children: [
                                    q && (() => {
                                        let e = o()(v.content, {
                                            [v.clamp]: P,
                                            [v.unclamp]: !P,
                                            [v.singleLineAlign]: $
                                        });
                                        return (0, r.jsxs)(s.animated.div, {
                                            style: ei,
                                            className: e,
                                            children: [
                                                es(),
                                                el()
                                            ]
                                        });
                                    })(),
                                    Q && eu()
                                ]
                            })
                        }),
                        (0, r.jsx)(g.Z, {
                            isHovering: en,
                            location: 'UserProfileCustomStatusBubble',
                            className: v.reactReplyBar
                        }),
                        X && (0, r.jsx)(T.Z, {
                            isVisible: en,
                            isExpandable: ee,
                            onClose: y
                        })
                    ]
                })
            ]
        })
    });
}
function D(e) {
    let {
            user: t,
            editEnabled: n,
            ...i
        } = e, a = (0, l.e7)([p.default], () => p.default.getId() === t.id), o = (0, h.a)(), s = (0, l.e7)([m.Z], () => m.Z.findActivity(t.id, e => {
            let {type: t} = e;
            return t === A.IIU.CUSTOM_STATUS;
        }));
    return (0, r.jsx)(y, {
        editEnabled: n && a,
        statusActivity: n && a ? o : s,
        ...i
    });
}
