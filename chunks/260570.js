n.d(t, {
    Z: function () {
        return U;
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
    g = n(510659),
    A = n(277085),
    N = n(511341),
    O = n(825801),
    R = n(215105),
    v = n(429974),
    C = n(228168),
    y = n(689938),
    L = n(249818);
let D = 'text-sm/medium',
    b = 36,
    M = 144;
function P(e) {
    let { statusActivity: t, user: a, displayProfile: h, guildId: I, channelId: T, profileType: P, hasEntered: U = !0, animate: w = !0, editEnabled: x, onClose: G } = e,
        { analyticsLocations: k } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: B } = (0, m.KZ)(),
        F = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        [V] = i.useState(() => new u.V7()),
        [H, Z] = i.useState(!0),
        Y = i.useRef(null),
        j = i.useRef(null),
        W = i.useRef(null),
        K = i.useRef(null),
        { emoji: z, state: q } = null != t ? t : {},
        Q = null != q && '' !== q ? q : null,
        X = null != Q && Q.length > 0,
        $ = null != z,
        J = $ && !X,
        ee = $ ? 1.25 : 0,
        et = 18 + ee,
        en = M + ee,
        er = b + ee,
        ei = $ || X,
        { interactionType: ea, interactionSourceType: es, resetInteraction: eo } = (0, g.X)(),
        el = es === C.n_.STATUS && ea === C.P.REACT,
        eu = es === C.n_.STATUS && ea === C.P.REPLY,
        ec = el || eu,
        ed = x && !ei,
        e_ = x && ei,
        [eE, ef] = i.useState(J),
        [eh, ep] = i.useState(!J),
        [eI, em] = i.useState(!1),
        eT = P === C.y0.FULL_SIZE ? (0, v.z)(a.id, null == h ? void 0 : h.guildId) : void 0;
    i.useLayoutEffect(() => {
        if (null == Y.current || J) return;
        let e = Y.current.getBoundingClientRect().height;
        if ((ef(J || e <= et), U)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = Y.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : en,
                a = null !== (i = null === (n = W.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : er;
            ep(!J && e > a), (j.current = e), (K.current = a);
        }
    }, [U, J, et, en, er]);
    let [eS, eg] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(er, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    i.useEffect(() => () => V.stop(), [V]);
    let eA = i.useRef(t);
    if (
        (i.useEffect(() => {
            es === C.n_.STATUS && (null == t || eA.current !== t) && eo(), (eA.current = t);
        }, [t, es, eo]),
        !ei && !ed)
    )
        return null;
    let eN = (e) => {
            var t, n;
            if (!!eh) {
                if (e) {
                    let e = Math.min(null !== (t = j.current) && void 0 !== t ? t : en, en);
                    eg({
                        maxHeight: ''.concat(e, 'px'),
                        delay: F ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: F ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = K.current) && void 0 !== n ? n : er, er);
                    eg({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (F) {
                    Z(!e);
                    return;
                }
                V.start(e ? 300 : 150, () => {
                    Z(!e);
                });
            }
        },
        eO = () =>
            $
                ? (0, r.jsx)(d.I, {
                      className: X ? L.statusEmojiInline : L.statusEmojiOnly,
                      emoji: z,
                      animate: w,
                      hideTooltip: !1,
                      tooltipDelay: C.vB
                  })
                : null,
        eR = () =>
            X
                ? (0, r.jsx)(c.Text, {
                      variant: D,
                      className: L.statusText,
                      children: Q
                  })
                : null,
        ev = () => {
            let e = s()(L.content, {
                [L.clamp]: H,
                [L.unclamp]: !H,
                [L.singleLineAlign]: eE
            });
            return (0, r.jsxs)(o.animated.div, {
                style: eS,
                className: e,
                children: [eO(), eR()]
            });
        },
        eC = () =>
            (0, r.jsxs)('div', {
                className: s()(L.content, L.clamp, L.placeholderWidth, { [L.panel]: P === C.y0.PANEL }),
                ref: W,
                children: [eO(), eR()]
            }),
        ey = () =>
            (0, r.jsxs)('div', {
                className: s()(L.content, L.unclamp, L.placeholderWidth, L.incorporeal, { [L.panel]: P === C.y0.PANEL }),
                ref: Y,
                children: [eO(), eR()]
            }),
        eL = () =>
            (0, r.jsxs)('div', {
                className: L.content,
                children: [
                    (0, r.jsx)(c.CirclePlusIcon, {
                        className: L.addStatusIcon,
                        colorClass: L.addStatusIconColor
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: D,
                        className: L.addStatusPrompt,
                        children: y.Z.Messages.USER_SETTINGS_ADD_STATUS
                    })
                ]
            }),
        eD = () => {
            var e;
            return ed
                ? y.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL
                : y.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                      emoji: null !== (e = null == z ? void 0 : z.name) && void 0 !== e ? e : '',
                      status: q
                  });
        },
        eb = () => {
            B({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == G || G(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: k
                        });
                });
        },
        eM = {
            [L.biteSize]: P === C.y0.BITE_SIZE,
            [L.fullSize]: P === C.y0.FULL_SIZE,
            [L.panel]: P === C.y0.PANEL
        },
        eP = s()(L.background, { [L.editable]: e_ }),
        eU = { [L.hoisted]: ec },
        ew = s()({
            [L.statusBubbleShape]: (!X && $) || !eE,
            [L.statusBubbleSingleLineWithTextShape]: (eE && X) || ed
        }),
        ex = s()(L.statusBubbleOuter, eM, ew, { [L.statusBubbleOuterAddStatusCursor]: ed }),
        eG = s()(L.statusBubble, ew, {
            [L.statusBubbleEmojiOnlyPadding]: J,
            [L.statusBubbleWithTextPadding]: X || ed,
            [L.statusBubbleWithTextMinWidth]: X,
            [L.statusBubbleCopyStatusCursor]: ei
        }),
        ek = () => {
            if ($) {
                let e = null != z.id ? '`' + ':'.concat(z.name, ':') + '`' : p.ZP.translateSurrogatesToInlineEmoji(z.name);
                return J ? ''.concat(e) : ''.concat(e, ' ').concat(q);
            }
            if (!J) return ''.concat(q);
        },
        eB = () =>
            (0, r.jsxs)(c.ClickableContainer, {
                className: s()(L.visibleContainer, eM, eP, eU),
                'aria-label': eD(),
                focusProps: { ringClassName: ew },
                onClick: ed ? eb : void 0,
                onFocus: () => {
                    em(!0), eN(!0);
                },
                onBlur: (e) => {
                    !e.currentTarget.contains(e.relatedTarget) && (em(!1), eN(!1));
                },
                onMouseOver: () => {
                    B({ action: 'HOVER_CUSTOM_STATUS' }), em(!0), eN(!0);
                },
                onMouseLeave: () => {
                    !eu && (em(!1), eN(!1));
                },
                children: [
                    (0, r.jsx)('div', {
                        className: ex,
                        children: (0, r.jsxs)('span', {
                            className: eG,
                            children: [ei && ev(), ed && eL()]
                        })
                    }),
                    ei &&
                        (0, r.jsx)(O.ZP, {
                            user: a,
                            sourceType: C.n_.STATUS,
                            isVisible: eI && !ec,
                            isExpandable: eh
                        }),
                    e_ &&
                        (0, r.jsx)(A.Z, {
                            isVisible: eI,
                            isExpandable: eh,
                            onClose: G
                        })
                ]
            });
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)('div', {
                className: s()(L.invisibleContainer, eM),
                children: (0, r.jsx)('div', {
                    className: ex,
                    children: (0, r.jsxs)('span', {
                        className: eG,
                        children: [ed && eL(), ei && eC(), ei && ey()]
                    })
                })
            }),
            (0, r.jsx)(c.Popout, {
                renderPopout: (e) => {
                    let { setPopoutRef: t } = e,
                        n = el ? N.Z : R.Z;
                    return (0, r.jsx)(n, {
                        user: a,
                        guildId: I,
                        channelId: T,
                        profileType: P,
                        sourceDetails: ek(),
                        sourceType: C.n_.STATUS,
                        setPopoutRef: t,
                        modalKey: eT,
                        onClose: () => {
                            em(!1), eN(!1);
                        }
                    });
                },
                onRequestClose: eo,
                ...(0, S.Z)(ea, P),
                shouldShow: ec,
                children: () => eB()
            })
        ]
    });
}
function U(e) {
    let { user: t, ...n } = e,
        i = (0, l.e7)([I.default], () => I.default.getId() === t.id),
        a = (0, h.Z)(t.id),
        { analyticsLocations: s } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { customStatusBubbleEditEnabled: o } = (0, T.K)({ location: 'UserProfileCustomStatusBubbleWithReactReplyBar' });
    return (0, r.jsx)(f.Gt, {
        value: s,
        children: (0, r.jsx)(P, {
            user: t,
            editEnabled: o && i,
            statusActivity: a,
            ...n
        })
    });
}
