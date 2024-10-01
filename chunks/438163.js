n.d(t, {
    Z: function () {
        return P;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(212433),
    u = n(442837),
    c = n(846519),
    d = n(481060),
    _ = n(788307),
    E = n(607070),
    f = n(100527),
    h = n(906732),
    p = n(8454),
    m = n(314897),
    I = n(785717),
    T = n(481046),
    g = n(277085),
    S = n(228168),
    A = n(689938),
    v = n(393480);
let N = 'text-sm/medium',
    O = 18,
    R = 1.25,
    C = 36,
    y = 144,
    L = 150,
    b = 150,
    D = 300;
function M(e) {
    let { statusActivity: t, profileType: r, editEnabled: o, hasEntered: p = !0, animate: m = !0, onCloseProfile: T } = e,
        { analyticsLocations: M } = (0, h.ZP)(f.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: P } = (0, I.KZ)(),
        U = (0, u.e7)([E.Z], () => E.Z.useReducedMotion),
        [w] = a.useState(() => new c.V7()),
        [x, G] = a.useState(!0),
        k = a.useRef(null),
        B = a.useRef(null),
        F = a.useRef(null),
        Z = a.useRef(null),
        { emoji: V, state: H } = null != t ? t : {},
        Y = null != H && '' !== H ? H : null,
        j = null != Y && Y.length > 0,
        W = null != V,
        K = W && !j,
        z = W ? R : 0,
        q = O + z,
        Q = y + z,
        X = C + z,
        $ = W || j,
        J = o && !$,
        ee = o && $,
        [et, en] = a.useState(K),
        [er, ei] = a.useState(!K),
        [ea, eo] = a.useState(!1),
        es = a.useRef(null);
    a.useLayoutEffect(() => {
        if (null == k.current || K) return;
        let e = k.current.getBoundingClientRect().height;
        if ((en(K || e <= q), p)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = k.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : Q,
                a = null !== (i = null === (n = F.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : X;
            ei(!K && e > a), (B.current = e), (Z.current = a);
        }
    }, [p, K, q, Q, X]);
    let [el, eu] = (0, d.useSpring)(() => ({
        maxHeight: ''.concat(X, 'px'),
        config: {
            clamp: !0,
            duration: L
        }
    }));
    if ((a.useEffect(() => () => w.stop(), [w]), !$ && !J)) return null;
    let ec = (e) => {
            var t, n;
            if (!er) return;
            if (e) {
                let e = Math.min(null !== (t = B.current) && void 0 !== t ? t : Q, Q);
                eu({
                    maxHeight: ''.concat(e, 'px'),
                    delay: U ? 0 : D,
                    config: {
                        clamp: !0,
                        duration: U ? 0 : L
                    }
                });
            } else {
                let e = Math.min(null !== (n = Z.current) && void 0 !== n ? n : X, X);
                eu({
                    maxHeight: ''.concat(e, 'px'),
                    delay: 0
                });
            }
            if (U) {
                G(!e);
                return;
            }
            let r = e ? D : b;
            w.start(r, () => {
                G(!e);
            });
        },
        ed = () =>
            W
                ? (0, i.jsx)(_.I, {
                      className: j ? v.statusEmojiInline : v.statusEmojiOnly,
                      emoji: V,
                      animate: m,
                      hideTooltip: !1,
                      tooltipDelay: S.vB
                  })
                : null,
        e_ = () =>
            j
                ? (0, i.jsx)(d.Text, {
                      variant: N,
                      className: v.statusText,
                      children: Y
                  })
                : null,
        eE = () => {
            let e = s()(v.content, {
                [v.clamp]: x,
                [v.unclamp]: !x,
                [v.singleLineAlign]: et
            });
            return (0, i.jsxs)(l.animated.div, {
                style: el,
                className: e,
                children: [ed(), e_()]
            });
        },
        ef = () =>
            (0, i.jsxs)('div', {
                className: s()(v.content, v.clamp, v.placeholderWidth, { [v.panel]: r === S.y0.PANEL }),
                ref: F,
                children: [ed(), e_()]
            }),
        eh = () =>
            (0, i.jsxs)('div', {
                className: s()(v.content, v.unclamp, v.placeholderWidth, v.incorporeal, { [v.panel]: r === S.y0.PANEL }),
                ref: k,
                children: [ed(), e_()]
            }),
        ep = () => {
            P({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == T || T(),
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: M
                        });
                });
        },
        em = {
            [v.biteSize]: r === S.y0.BITE_SIZE,
            [v.fullSize]: r === S.y0.FULL_SIZE,
            [v.panel]: r === S.y0.PANEL
        },
        eI = s()(v.background, { [v.editable]: ee }),
        eT = s()({
            [v.statusBubbleShape]: (!j && W) || !et,
            [v.statusBubbleSingleLineWithTextShape]: (et && j) || J
        }),
        eg = s()(v.statusBubbleOuter, em, eT, { [v.statusBubbleOuterAddStatusCursor]: J }),
        eS = s()(v.statusBubble, eT, {
            [v.statusBubbleEmojiOnlyPadding]: K,
            [v.statusBubbleWithTextPadding]: j || J,
            [v.statusBubbleWithTextMinWidth]: j,
            [v.statusBubbleCopyStatusCursor]: $
        }),
        eA = () =>
            (0, i.jsx)(d.Clickable, {
                'aria-label': A.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL,
                onClick: ep,
                className: s()(v.visibleContainer, em, eI),
                focusProps: { ringClassName: eT },
                children: (0, i.jsx)('div', {
                    className: eg,
                    children: (0, i.jsx)('span', {
                        className: eS,
                        children: (0, i.jsxs)('div', {
                            className: v.content,
                            children: [
                                (0, i.jsx)(d.CirclePlusIcon, {
                                    className: v.addStatusIcon,
                                    colorClass: v.addStatusIconColor
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: N,
                                    className: v.addStatusPrompt,
                                    children: A.Z.Messages.USER_SETTINGS_ADD_STATUS
                                })
                            ]
                        })
                    })
                })
            }),
        ev = () =>
            (0, i.jsx)('div', {
                className: s()(v.invisibleContainer, em),
                children: (0, i.jsx)('div', {
                    className: eg,
                    children: (0, i.jsxs)('span', {
                        className: eS,
                        children: [ef(), eh()]
                    })
                })
            }),
        eN = () => {
            var e;
            return (0, i.jsx)(d.FocusRing, {
                ringClassName: eT,
                children: (0, i.jsxs)('div', {
                    ref: es,
                    className: s()(v.visibleContainer, em, eI),
                    role: 'tooltip',
                    'aria-label': A.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                        emoji: null !== (e = null == V ? void 0 : V.name) && void 0 !== e ? e : '',
                        status: H
                    }),
                    tabIndex: 0,
                    onFocus: () => {
                        eo(!0), ec(!0);
                    },
                    onBlur: (e) => {
                        var t;
                        !(null === (t = es.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && (eo(!1), ec(!1));
                    },
                    onMouseOver: () => {
                        P({ action: 'HOVER_CUSTOM_STATUS' }), eo(!0), ec(!0);
                    },
                    onMouseLeave: () => {
                        eo(!1), ec(!1);
                    },
                    children: [
                        (0, i.jsx)('div', {
                            className: eg,
                            children: (0, i.jsx)('span', {
                                className: eS,
                                children: eE()
                            })
                        }),
                        ee &&
                            (0, i.jsx)(g.Z, {
                                isVisible: ea,
                                isExpandable: er,
                                onCloseProfile: T
                            })
                    ]
                })
            });
        };
    return (0, i.jsx)(h.Gt, {
        value: M,
        children: (0, i.jsx)('div', {
            children: J
                ? eA()
                : (0, i.jsxs)(i.Fragment, {
                      children: [ev(), eN()]
                  })
        })
    });
}
function P(e) {
    let { user: t, ...n } = e,
        r = (0, u.e7)([m.default], () => m.default.getId() === t.id),
        a = (0, p.Z)(t.id),
        { customStatusBubbleEditEnabled: o } = (0, T.K)({ location: 'UserProfileCustomStatusBubble' });
    return (0, i.jsx)(M, {
        editEnabled: o && r,
        statusActivity: a,
        ...n
    });
}
