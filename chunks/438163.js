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
    I = n(228168),
    b = n(388032),
    S = n(393480);
let T = 'text-sm/medium',
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
                      className: F ? S.statusEmojiInline : S.statusEmojiOnly,
                      emoji: B,
                      animate: N,
                      hideTooltip: !1,
                      tooltipDelay: I.vB
                  })
                : null,
        el = () =>
            F
                ? (0, r.jsx)(c.Text, {
                      variant: T,
                      className: S.statusText,
                      children: Z
                  })
                : null,
        eu = () => {
            let e = s()(S.content, {
                [S.clamp]: x,
                [S.unclamp]: !x,
                [S.singleLineAlign]: X
            });
            return (0, r.jsxs)(o.animated.div, {
                style: ei,
                className: e,
                children: [eo(), el()]
            });
        },
        ec = () =>
            (0, r.jsxs)('div', {
                className: s()(S.content, S.clamp, S.placeholderWidth, { [S.panel]: h === I.y0.PANEL }),
                ref: k,
                children: [eo(), el()]
            }),
        ed = () =>
            (0, r.jsxs)('div', {
                className: s()(S.content, S.unclamp, S.placeholderWidth, S.incorporeal, { [S.panel]: h === I.y0.PANEL }),
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
            [S.biteSize]: h === I.y0.BITE_SIZE,
            [S.fullSize]: h === I.y0.FULL_SIZE,
            [S.panel]: h === I.y0.PANEL
        },
        ep = s()(S.background, { [S.editable]: Q }),
        eh = s()({
            [S.statusBubbleShape]: (!F && V) || !X,
            [S.statusBubbleSingleLineWithTextShape]: (X && F) || q
        }),
        em = s()(S.statusBubbleOuter, e_, eh, { [S.statusBubbleOuterAddStatusCursor]: q }),
        eg = s()(S.statusBubble, eh, {
            [S.statusBubbleEmojiOnlyPadding]: j,
            [S.statusBubbleWithTextPadding]: F || q,
            [S.statusBubbleWithTextMinWidth]: F,
            [S.statusBubbleCopyStatusCursor]: z
        });
    return (0, r.jsx)(p.Gt, {
        value: R,
        children: (0, r.jsx)('div', {
            children: q
                ? (0, r.jsx)(c.Clickable, {
                      'aria-label': b.intl.string(b.t['zrpF/f']),
                      onClick: ef,
                      className: s()(S.addCustomStatusButtonBubble, e_, ep),
                      focusProps: { ringClassName: eh },
                      children: (0, r.jsx)('div', {
                          className: em,
                          children: (0, r.jsx)('span', {
                              className: eg,
                              children: (0, r.jsxs)('div', {
                                  className: S.content,
                                  children: [
                                      (0, r.jsx)(c.CirclePlusIcon, {
                                          className: S.addStatusIcon,
                                          colorClass: S.addStatusIconColor
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: T,
                                          className: S.addStatusPrompt,
                                          children: b.intl.string(b.t.evw0o6)
                                      })
                                  ]
                              })
                          })
                      })
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', {
                              className: s()(S.invisibleContainer, e_),
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
                                  className: s()(S.visibleContainer, e_, ep),
                                  role: 'tooltip',
                                  'aria-label': b.intl.formatToPlainString(b.t.UpF5QU, {
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
