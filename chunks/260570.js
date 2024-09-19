n.d(t, {
    Z: function () {
        return P;
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
    S = n(214135),
    g = n(277085),
    A = n(511341),
    N = n(825801),
    O = n(215105),
    R = n(429974),
    v = n(228168),
    C = n(689938),
    y = n(249818);
let L = 'text-sm/medium',
    D = 36,
    b = 144;
function M(e) {
    let { statusActivity: t, user: a, displayProfile: h, guildId: I, channelId: T, profileType: M, hasEntered: P = !0, animate: U = !0, editEnabled: w, interactionType: x, interactionSource: G, onInteraction: k, setInteractionToastShown: B, setInteractionTypeSent: F, onClose: V } = e,
        { analyticsLocations: H } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: Z } = (0, m.KZ)(),
        Y = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        [j] = i.useState(() => new u.V7()),
        [W, K] = i.useState(!0),
        z = i.useRef(null),
        q = i.useRef(null),
        Q = i.useRef(null),
        X = i.useRef(null),
        { emoji: $, state: J } = null != t ? t : {},
        ee = null != J && '' !== J ? J : null,
        et = null != ee && ee.length > 0,
        en = null != $,
        er = en && !et,
        ei = en ? 1.25 : 0,
        ea = 18 + ei,
        es = b + ei,
        eo = D + ei,
        el = en || et,
        eu = G === v.n_.STATUS && x === v.P.REACT,
        ec = G === v.n_.STATUS && x === v.P.REPLY,
        ed = eu || ec,
        e_ = w && !el,
        eE = w && el,
        [ef, eh] = i.useState(er),
        [ep, eI] = i.useState(!er),
        [em, eT] = i.useState(!1),
        eS = M === v.y0.FULL_SIZE ? (0, R.z)(a.id, null == h ? void 0 : h.guildId) : void 0;
    i.useLayoutEffect(() => {
        if (null == z.current || er) return;
        let e = z.current.getBoundingClientRect().height;
        if ((eh(er || e <= ea), P)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = z.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : es,
                a = null !== (i = null === (n = Q.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : eo;
            eI(!er && e > a), (q.current = e), (X.current = a);
        }
    }, [P, er, ea, es, eo]);
    let [eg, eA] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(eo, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    i.useEffect(() => () => j.stop(), [j]);
    let eN = i.useRef(t);
    if (
        (i.useEffect(() => {
            G === v.n_.STATUS &&
                (null == t || eN.current !== t) &&
                (null == k ||
                    k({
                        interactionType: null,
                        interactionSourceType: null
                    })),
                (eN.current = t);
        }, [t, k, G]),
        !el && !e_)
    )
        return null;
    let eO = (e) => {
            var t, n;
            if (!!ep) {
                if (e) {
                    let e = Math.min(null !== (t = q.current) && void 0 !== t ? t : es, es);
                    eA({
                        maxHeight: ''.concat(e, 'px'),
                        delay: Y ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: Y ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = X.current) && void 0 !== n ? n : eo, eo);
                    eA({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (Y) {
                    K(!e);
                    return;
                }
                j.start(e ? 300 : 150, () => {
                    K(!e);
                });
            }
        },
        eR = () =>
            en
                ? (0, r.jsx)(d.I, {
                      className: et ? y.statusEmojiInline : y.statusEmojiOnly,
                      emoji: $,
                      animate: U,
                      hideTooltip: !1,
                      tooltipDelay: v.vB
                  })
                : null,
        ev = () =>
            et
                ? (0, r.jsx)(c.Text, {
                      variant: L,
                      className: y.statusText,
                      children: ee
                  })
                : null,
        eC = () => {
            let e = s()(y.content, {
                [y.clamp]: W,
                [y.unclamp]: !W,
                [y.singleLineAlign]: ef
            });
            return (0, r.jsxs)(o.animated.div, {
                style: eg,
                className: e,
                children: [eR(), ev()]
            });
        },
        ey = () =>
            (0, r.jsxs)('div', {
                className: s()(y.content, y.clamp, y.placeholderWidth, { [y.panel]: M === v.y0.PANEL }),
                ref: Q,
                children: [eR(), ev()]
            }),
        eL = () =>
            (0, r.jsxs)('div', {
                className: s()(y.content, y.unclamp, y.placeholderWidth, y.incorporeal, { [y.panel]: M === v.y0.PANEL }),
                ref: z,
                children: [eR(), ev()]
            }),
        eD = () =>
            (0, r.jsxs)('div', {
                className: y.content,
                children: [
                    (0, r.jsx)(c.CirclePlusIcon, {
                        className: y.addStatusIcon,
                        colorClass: y.addStatusIconColor
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: L,
                        className: y.addStatusPrompt,
                        children: C.Z.Messages.USER_SETTINGS_ADD_STATUS
                    })
                ]
            }),
        eb = () => {
            var e;
            return e_
                ? C.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL
                : C.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                      emoji: null !== (e = null == $ ? void 0 : $.name) && void 0 !== e ? e : '',
                      status: J
                  });
        },
        eM = () => {
            Z({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == V || V(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: H
                        });
                });
        },
        eP = {
            [y.biteSize]: M === v.y0.BITE_SIZE,
            [y.fullSize]: M === v.y0.FULL_SIZE,
            [y.panel]: M === v.y0.PANEL
        },
        eU = s()(y.background, { [y.editable]: eE }),
        ew = { [y.hoisted]: ed },
        ex = s()({
            [y.statusBubbleShape]: (!et && en) || !ef,
            [y.statusBubbleSingleLineWithTextShape]: (ef && et) || e_
        }),
        eG = s()(y.statusBubbleOuter, eP, ex, { [y.statusBubbleOuterAddStatusCursor]: e_ }),
        ek = s()(y.statusBubble, ex, {
            [y.statusBubbleEmojiOnlyPadding]: er,
            [y.statusBubbleWithTextPadding]: et || e_,
            [y.statusBubbleWithTextMinWidth]: et,
            [y.statusBubbleCopyStatusCursor]: el
        }),
        eB = () => {
            if (en) {
                let e = null != $.id ? '`' + ':'.concat($.name, ':') + '`' : p.ZP.translateSurrogatesToInlineEmoji($.name);
                return er ? ''.concat(e) : ''.concat(e, ' ').concat(J);
            }
            if (!er) return ''.concat(J);
        },
        eF = () =>
            (0, r.jsxs)(c.ClickableContainer, {
                className: s()(y.visibleContainer, eP, eU, ew),
                'aria-label': eb(),
                focusProps: { ringClassName: ex },
                onClick: e_ ? eM : void 0,
                onFocus: () => {
                    eT(!0), eO(!0);
                },
                onBlur: (e) => {
                    !e.currentTarget.contains(e.relatedTarget) && (eT(!1), eO(!1));
                },
                onMouseOver: () => {
                    Z({ action: 'HOVER_CUSTOM_STATUS' }), eT(!0), eO(!0);
                },
                onMouseLeave: () => {
                    !ec && (eT(!1), eO(!1));
                },
                children: [
                    (0, r.jsx)('div', {
                        className: eG,
                        children: (0, r.jsxs)('span', {
                            className: ek,
                            children: [el && eC(), e_ && eD()]
                        })
                    }),
                    el &&
                        (0, r.jsx)(N.ZP, {
                            user: a,
                            sourceType: v.n_.STATUS,
                            isVisible: em && !ed,
                            isExpandable: ep,
                            onInteraction: k
                        }),
                    eE &&
                        (0, r.jsx)(g.Z, {
                            isVisible: em,
                            isExpandable: ep,
                            onClose: V
                        })
                ]
            });
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)('div', {
                className: s()(y.invisibleContainer, eP),
                children: (0, r.jsx)('div', {
                    className: eG,
                    children: (0, r.jsxs)('span', {
                        className: ek,
                        children: [e_ && eD(), el && ey(), el && eL()]
                    })
                })
            }),
            (0, r.jsx)(c.Popout, {
                renderPopout: (e) => {
                    let { setPopoutRef: t } = e,
                        n = eu ? A.Z : O.Z;
                    return (0, r.jsx)(n, {
                        user: a,
                        guildId: I,
                        channelId: T,
                        profileType: M,
                        sourceDetails: eB(),
                        sourceType: v.n_.STATUS,
                        setPopoutRef: t,
                        modalKey: eS,
                        onInteraction: k,
                        setInteractionToastShown: B,
                        setInteractionTypeSent: F,
                        onClose: () => {
                            eT(!1), eO(!1);
                        }
                    });
                },
                onRequestClose: () =>
                    null == k
                        ? void 0
                        : k({
                              interactionType: null,
                              interactionSourceType: null
                          }),
                ...(0, S.Z)(x, M),
                shouldShow: ed,
                children: () => eF()
            })
        ]
    });
}
function P(e) {
    let { user: t, ...n } = e,
        i = (0, l.e7)([I.default], () => I.default.getId() === t.id),
        a = (0, h.Z)(t.id),
        { analyticsLocations: s } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { customStatusBubbleEditEnabled: o } = (0, T.K)({ location: 'UserProfileCustomStatusBubbleWithReactReplyBar' });
    return (0, r.jsx)(f.Gt, {
        value: s,
        children: (0, r.jsx)(M, {
            user: t,
            editEnabled: o && i,
            statusActivity: a,
            ...n
        })
    });
}
