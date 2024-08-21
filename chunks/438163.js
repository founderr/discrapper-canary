n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(338545),
    l = n(442837),
    u = n(846519),
    c = n(481060),
    d = n(788307),
    _ = n(607070),
    E = n(100527),
    f = n(906732),
    h = n(676035),
    p = n(314897),
    I = n(158776),
    m = n(785717),
    T = n(481046),
    g = n(277085),
    S = n(228168),
    A = n(981631),
    N = n(689938),
    v = n(576062);
let O = 'text-sm/medium',
    R = 36,
    C = 144;
function y(e) {
    var t;
    let { statusActivity: a, profileType: h, editEnabled: p, hasEntered: I = !0, animate: T = !0, onClose: A } = e,
        { analyticsLocations: y } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: D } = (0, m.KZ)(),
        L = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        [b] = i.useState(() => new u.V7()),
        [M, P] = i.useState(!0),
        U = i.useRef(null),
        w = i.useRef(null),
        x = i.useRef(null),
        G = i.useRef(null),
        { emoji: k, state: B } = null != a ? a : {},
        F = null != B && '' !== B ? B : null,
        V = null != F && F.length > 0,
        H = null != k,
        Z = H && !V,
        Y = H ? 1.25 : 0,
        j = 18 + Y,
        W = C + Y,
        K = R + Y,
        z = H || V,
        q = p && !z,
        Q = p && z,
        [X, $] = i.useState(Z),
        [J, ee] = i.useState(!Z),
        [et, en] = i.useState(!1);
    i.useLayoutEffect(() => {
        if (null == U.current || Z) return;
        let e = U.current.getBoundingClientRect().height;
        if (($(Z || e <= j), I)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = U.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : W,
                a = null !== (i = null === (n = x.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : K;
            ee(!Z && e > a), (w.current = e), (G.current = a);
        }
    }, [I, Z, j, W, K]);
    let [er, ei] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(K, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    if ((i.useEffect(() => () => b.stop(), [b]), !z && !q)) return null;
    let ea = (e) => {
            var t, n;
            if (!!J) {
                if (e) {
                    let e = Math.min(null !== (t = w.current) && void 0 !== t ? t : W, W);
                    ei({
                        maxHeight: ''.concat(e, 'px'),
                        delay: L ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: L ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = G.current) && void 0 !== n ? n : K, K);
                    ei({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (L) {
                    P(!e);
                    return;
                }
                b.start(e ? 300 : 150, () => {
                    P(!e);
                });
            }
        },
        es = () =>
            H
                ? (0, r.jsx)(d.I, {
                      className: V ? v.statusEmojiInline : v.statusEmojiOnly,
                      emoji: k,
                      animate: T,
                      hideTooltip: !1,
                      tooltipDelay: S.vB
                  })
                : null,
        eo = () =>
            V
                ? (0, r.jsx)(c.Text, {
                      variant: O,
                      className: v.statusText,
                      children: F
                  })
                : null,
        el = () =>
            (0, r.jsxs)('div', {
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
            }),
        eu = {
            [v.biteSize]: h === S.y0.BITE_SIZE,
            [v.fullSize]: h === S.y0.FULL_SIZE,
            [v.panel]: h === S.y0.PANEL
        },
        ec = s()(v.background, { [v.editable]: Q }),
        ed = s()({
            [v.statusBubbleShape]: (!V && H) || !X,
            [v.statusBubbleSingleLineWithTextShape]: (X && V) || q
        }),
        e_ = s()(v.statusBubbleOuter, eu, ed, { [v.statusBubbleOuterAddStatusCursor]: q }),
        eE = s()(v.statusBubble, ed, {
            [v.statusBubbleEmojiOnlyPadding]: Z,
            [v.statusBubbleWithTextPadding]: V || q,
            [v.statusBubbleWithTextMinWidth]: V,
            [v.statusBubbleCopyStatusCursor]: z
        });
    return (0, r.jsx)(f.Gt, {
        value: y,
        children: (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)('div', {
                    className: s()(v.invisibleContainer, eu),
                    children: (0, r.jsx)('div', {
                        className: e_,
                        children: (0, r.jsxs)('span', {
                            className: eE,
                            children: [
                                q && el(),
                                z &&
                                    (0, r.jsxs)('div', {
                                        className: s()(v.content, v.clamp, v.placeholderWidth, { [v.panel]: h === S.y0.PANEL }),
                                        ref: x,
                                        children: [es(), eo()]
                                    }),
                                z &&
                                    (0, r.jsxs)('div', {
                                        className: s()(v.content, v.unclamp, v.placeholderWidth, v.incorporeal, { [v.panel]: h === S.y0.PANEL }),
                                        ref: U,
                                        children: [es(), eo()]
                                    })
                            ]
                        })
                    })
                }),
                (0, r.jsxs)(c.ClickableContainer, {
                    className: s()(v.visibleContainer, eu, ec),
                    'aria-label': q
                        ? N.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL
                        : N.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                              emoji: null !== (t = null == k ? void 0 : k.name) && void 0 !== t ? t : '',
                              status: B
                          }),
                    focusProps: { ringClassName: ed },
                    onClick: q
                        ? () => {
                              D({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                                  null == A || A(),
                                  (0, c.openModalLazy)(async () => {
                                      let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                                      return (t) =>
                                          (0, r.jsx)(e, {
                                              ...t,
                                              sourceAnalyticsLocations: y
                                          });
                                  });
                          }
                        : void 0,
                    onFocus: () => {
                        en(!0), ea(!0);
                    },
                    onBlur: (e) => {
                        !e.currentTarget.contains(e.relatedTarget) && (en(!1), ea(!1));
                    },
                    onMouseOver: () => {
                        D({ action: 'HOVER_CUSTOM_STATUS' }), en(!0), ea(!0);
                    },
                    onMouseLeave: () => {
                        en(!1), ea(!1);
                    },
                    children: [
                        (0, r.jsx)('div', {
                            className: e_,
                            children: (0, r.jsxs)('span', {
                                className: eE,
                                children: [
                                    z &&
                                        (() => {
                                            let e = s()(v.content, {
                                                [v.clamp]: M,
                                                [v.unclamp]: !M,
                                                [v.singleLineAlign]: X
                                            });
                                            return (0, r.jsxs)(o.animated.div, {
                                                style: er,
                                                className: e,
                                                children: [es(), eo()]
                                            });
                                        })(),
                                    q && el()
                                ]
                            })
                        }),
                        Q &&
                            (0, r.jsx)(g.Z, {
                                isVisible: et,
                                isExpandable: J,
                                onClose: A
                            })
                    ]
                })
            ]
        })
    });
}
function D(e) {
    let { user: t, ...n } = e,
        i = (0, l.e7)([p.default], () => p.default.getId() === t.id),
        a = (0, h.a)(),
        s = (0, l.e7)([I.Z], () =>
            I.Z.findActivity(t.id, (e) => {
                let { type: t } = e;
                return t === A.IIU.CUSTOM_STATUS;
            })
        ),
        { customStatusBubbleEditEnabled: o } = (0, T.K)({ location: 'UserProfileCustomStatusBubble' });
    return (0, r.jsx)(y, {
        editEnabled: o && i,
        statusActivity: i ? a : s,
        ...n
    });
}
