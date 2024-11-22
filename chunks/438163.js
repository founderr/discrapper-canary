n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(100621),
    l = n(442837),
    u = n(846519),
    c = n(481060),
    d = n(788307),
    f = n(607070),
    _ = n(100527),
    p = n(906732),
    h = n(8454),
    m = n(314897),
    g = n(785717),
    E = n(481046),
    v = n(277085),
    b = n(228168),
    I = n(388032),
    T = n(393480);
let S = 'text-sm/medium',
    y = 36,
    A = 144;
function N(e) {
    var t;
    let { statusActivity: a, profileType: h, editEnabled: m, hasEntered: E = !0, animate: N = !0, onCloseProfile: C } = e,
        { analyticsLocations: R } = (0, p.ZP)(_.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: O } = (0, g.KZ)(),
        D = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        [L] = i.useState(() => new u.V7()),
        [x, w] = i.useState(!0),
        M = i.useRef(null),
        P = i.useRef(null),
        k = i.useRef(null),
        U = i.useRef(null),
        { emoji: B, state: G } = null != a ? a : {},
        Z = null != G && '' !== G ? G : null,
        F = null != Z && Z.length > 0,
        V = null != B,
        j = V && !F,
        H = V ? 1.25 : 0,
        Y = 18 + H,
        W = A + H,
        K = y + H,
        z = V || F,
        q = m && !z,
        Q = m && z,
        [X, J] = i.useState(j),
        [$, ee] = i.useState(!j),
        [et, en] = i.useState(!1),
        er = i.useRef(null);
    i.useLayoutEffect(() => {
        if (null == M.current || j) return;
        let e = M.current.getBoundingClientRect().height;
        if ((J(j || e <= Y), E)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = M.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : W,
                a = null !== (i = null === (n = k.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : K;
            ee(!j && e > a), (P.current = e), (U.current = a);
        }
    }, [E, j, Y, W, K]);
    let [ei, ea] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(K, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    if ((i.useEffect(() => () => L.stop(), [L]), !z && !q)) return null;
    let es = (e) => {
            var t, n;
            if (!!$) {
                if (e) {
                    let e = Math.min(null !== (t = P.current) && void 0 !== t ? t : W, W);
                    ea({
                        maxHeight: ''.concat(e, 'px'),
                        delay: D ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: D ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = U.current) && void 0 !== n ? n : K, K);
                    ea({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (D) {
                    w(!e);
                    return;
                }
                L.start(e ? 300 : 150, () => {
                    w(!e);
                });
            }
        },
        eo = () =>
            V
                ? (0, r.jsx)(d.Iv, {
                      className: F ? T.statusEmojiInline : T.statusEmojiOnly,
                      emoji: B,
                      animate: N,
                      hideTooltip: !1,
                      tooltipDelay: b.vB
                  })
                : null,
        el = () =>
            F
                ? (0, r.jsx)(c.Text, {
                      variant: S,
                      className: T.statusText,
                      children: Z
                  })
                : null,
        eu = () => {
            let e = s()(T.content, {
                [T.clamp]: x,
                [T.unclamp]: !x,
                [T.singleLineAlign]: X
            });
            return (0, r.jsxs)(o.animated.div, {
                style: ei,
                className: e,
                children: [eo(), el()]
            });
        },
        ec = () =>
            (0, r.jsxs)('div', {
                className: s()(T.content, T.clamp, T.placeholderWidth, { [T.panel]: h === b.y0.PANEL }),
                ref: k,
                children: [eo(), el()]
            }),
        ed = () =>
            (0, r.jsxs)('div', {
                className: s()(T.content, T.unclamp, T.placeholderWidth, T.incorporeal, { [T.panel]: h === b.y0.PANEL }),
                ref: M,
                children: [eo(), el()]
            }),
        ef = () => {
            O({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == C || C(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: R
                        });
                });
        },
        e_ = {
            [T.biteSize]: h === b.y0.BITE_SIZE,
            [T.fullSize]: h === b.y0.FULL_SIZE,
            [T.panel]: h === b.y0.PANEL
        },
        ep = s()(T.background, { [T.editable]: Q }),
        eh = s()({
            [T.statusBubbleShape]: (!F && V) || !X,
            [T.statusBubbleSingleLineWithTextShape]: (X && F) || q
        }),
        em = s()(T.statusBubbleOuter, e_, eh, { [T.statusBubbleOuterAddStatusCursor]: q }),
        eg = s()(T.statusBubble, eh, {
            [T.statusBubbleEmojiOnlyPadding]: j,
            [T.statusBubbleWithTextPadding]: F || q,
            [T.statusBubbleWithTextMinWidth]: F,
            [T.statusBubbleCopyStatusCursor]: z
        });
    return (0, r.jsx)(p.Gt, {
        value: R,
        children: (0, r.jsx)('div', {
            children: q
                ? (0, r.jsx)(c.Clickable, {
                      'aria-label': I.intl.string(I.t['zrpF/f']),
                      onClick: ef,
                      className: s()(T.addCustomStatusButtonBubble, e_, ep),
                      focusProps: { ringClassName: eh },
                      children: (0, r.jsx)('div', {
                          className: em,
                          children: (0, r.jsx)('span', {
                              className: eg,
                              children: (0, r.jsxs)('div', {
                                  className: T.content,
                                  children: [
                                      (0, r.jsx)(c.CirclePlusIcon, {
                                          className: T.addStatusIcon,
                                          colorClass: T.addStatusIconColor
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: S,
                                          className: T.addStatusPrompt,
                                          children: I.intl.string(I.t.evw0o6)
                                      })
                                  ]
                              })
                          })
                      })
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', {
                              className: s()(T.invisibleContainer, e_),
                              children: (0, r.jsx)('div', {
                                  className: em,
                                  children: (0, r.jsxs)('span', {
                                      className: eg,
                                      children: [ec(), ed()]
                                  })
                              })
                          }),
                          (0, r.jsx)(c.FocusRing, {
                              ringClassName: eh,
                              children: (0, r.jsxs)('div', {
                                  ref: er,
                                  className: s()(T.visibleContainer, e_, ep),
                                  role: 'tooltip',
                                  'aria-label': I.intl.formatToPlainString(I.t.UpF5QU, {
                                      emoji: null !== (t = null == B ? void 0 : B.name) && void 0 !== t ? t : '',
                                      status: G
                                  }),
                                  tabIndex: 0,
                                  onFocus: () => {
                                      en(!0), es(!0);
                                  },
                                  onBlur: (e) => {
                                      var t;
                                      !(null === (t = er.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && (en(!1), es(!1));
                                  },
                                  onMouseOver: () => {
                                      O({ action: 'HOVER_CUSTOM_STATUS' }), en(!0), es(!0);
                                  },
                                  onMouseLeave: () => {
                                      en(!1), es(!1);
                                  },
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: em,
                                          children: (0, r.jsx)('span', {
                                              className: eg,
                                              children: eu()
                                          })
                                      }),
                                      Q &&
                                          (0, r.jsx)(v.Z, {
                                              isVisible: et,
                                              isExpandable: $,
                                              onCloseProfile: C
                                          })
                                  ]
                              })
                          })
                      ]
                  })
        })
    });
}
function C(e) {
    let { user: t, ...n } = e,
        i = (0, l.e7)([m.default], () => m.default.getId() === t.id),
        a = (0, h.Z)(t.id),
        { customStatusBubbleEditEnabled: s } = (0, E.K)({ location: 'UserProfileCustomStatusBubble' });
    return (0, r.jsx)(N, {
        editEnabled: s && i,
        statusActivity: a,
        ...n
    });
}
