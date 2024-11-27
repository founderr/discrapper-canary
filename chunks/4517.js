n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(752877),
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
    E = n(913002),
    v = n(228168),
    I = n(388032),
    T = n(759951);
let b = 'text-sm/medium',
    S = 36,
    y = 144;
function A(e) {
    var t;
    let { user: a, profileType: A, hasEntered: N = !0, animate: C = !0, onCloseProfile: R } = e,
        O = (0, l.e7)([m.default], () => m.default.getId() === a.id),
        D = (0, h.Z)(a.id),
        { analyticsLocations: L } = (0, p.ZP)(_.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: x } = (0, g.KZ)(),
        w = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        [P] = i.useState(() => new u.V7()),
        [M, k] = i.useState(!0),
        U = i.useRef(null),
        B = i.useRef(null),
        G = i.useRef(null),
        Z = i.useRef(null),
        { emoji: F, state: V } = null != D ? D : {},
        j = null != V && '' !== V ? V : null,
        H = null != j && j.length > 0,
        Y = null != F,
        W = Y && !H,
        K = Y ? 1.25 : 0,
        z = 18 + K,
        q = y + K,
        Q = S + K,
        X = Y || H,
        J = O && !X,
        $ = O && X,
        [ee, et] = i.useState(W),
        [en, er] = i.useState(!W),
        [ei, ea] = i.useState(!1),
        es = i.useRef(null);
    i.useLayoutEffect(() => {
        if (null == U.current || W) return;
        let e = U.current.getBoundingClientRect().height;
        if ((et(W || e <= z), N)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = U.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : q,
                a = null !== (i = null === (n = G.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : Q;
            er(!W && e > a), (B.current = e), (Z.current = a);
        }
    }, [N, W, z, q, Q]);
    let [eo, el] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(Q, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    if ((i.useEffect(() => () => P.stop(), [P]), !X && !J)) return null;
    let eu = (e) => {
            var t, n;
            if (!!en) {
                if (e) {
                    let e = Math.min(null !== (t = B.current) && void 0 !== t ? t : q, q);
                    el({
                        maxHeight: ''.concat(e, 'px'),
                        delay: w ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: w ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = Z.current) && void 0 !== n ? n : Q, Q);
                    el({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (w) {
                    k(!e);
                    return;
                }
                P.start(e ? 300 : 150, () => {
                    k(!e);
                });
            }
        },
        ec = () =>
            Y
                ? (0, r.jsx)(d.Iv, {
                      className: H ? T.statusEmojiInline : T.statusEmojiOnly,
                      emoji: F,
                      animate: C,
                      hideTooltip: !1,
                      tooltipDelay: v.vB
                  })
                : null,
        ed = () =>
            H
                ? (0, r.jsx)(c.Text, {
                      variant: b,
                      className: T.statusText,
                      children: j
                  })
                : null,
        ef = () => {
            let e = s()(T.content, {
                [T.clamp]: M,
                [T.unclamp]: !M,
                [T.singleLineAlign]: ee
            });
            return (0, r.jsxs)(o.animated.div, {
                style: eo,
                className: e,
                children: [ec(), ed()]
            });
        },
        e_ = () =>
            (0, r.jsxs)('div', {
                className: s()(T.content, T.clamp, T.placeholderWidth, { [T.panel]: A === v.y0.PANEL }),
                ref: G,
                children: [ec(), ed()]
            }),
        ep = () =>
            (0, r.jsxs)('div', {
                className: s()(T.content, T.unclamp, T.placeholderWidth, T.incorporeal, { [T.panel]: A === v.y0.PANEL }),
                ref: U,
                children: [ec(), ed()]
            }),
        eh = () => {
            x({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == R || R(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: L
                        });
                });
        },
        em = {
            [T.biteSize]: A === v.y0.BITE_SIZE,
            [T.fullSize]: A === v.y0.FULL_SIZE,
            [T.panel]: A === v.y0.PANEL
        },
        eg = s()(T.background, { [T.editable]: $ }),
        eE = s()({
            [T.statusBubbleShape]: (!H && Y) || !ee,
            [T.statusBubbleSingleLineWithTextShape]: (ee && H) || J
        }),
        ev = s()(T.statusBubbleOuter, em, eE, { [T.statusBubbleOuterAddStatusCursor]: J }),
        eI = s()(T.statusBubble, eE, {
            [T.statusBubbleEmojiOnlyPadding]: W,
            [T.statusBubbleWithTextPadding]: H || J,
            [T.statusBubbleWithTextMinWidth]: H,
            [T.statusBubbleCopyStatusCursor]: X
        });
    return (0, r.jsx)(p.Gt, {
        value: L,
        children: (0, r.jsx)('div', {
            children: J
                ? (0, r.jsx)(c.Clickable, {
                      'aria-label': I.intl.string(I.t['zrpF/f']),
                      onClick: eh,
                      className: s()(T.addCustomStatusButtonBubble, em, eg),
                      focusProps: { ringClassName: eE },
                      children: (0, r.jsx)('div', {
                          className: ev,
                          children: (0, r.jsx)('span', {
                              className: eI,
                              children: (0, r.jsxs)('div', {
                                  className: T.content,
                                  children: [
                                      (0, r.jsx)(c.CirclePlusIcon, {
                                          className: T.addStatusIcon,
                                          colorClass: T.addStatusIconColor
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: b,
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
                              className: s()(T.invisibleContainer, em),
                              children: (0, r.jsx)('div', {
                                  className: ev,
                                  children: (0, r.jsxs)('span', {
                                      className: eI,
                                      children: [e_(), ep()]
                                  })
                              })
                          }),
                          (0, r.jsx)(c.FocusRing, {
                              ringClassName: eE,
                              children: (0, r.jsxs)('div', {
                                  ref: es,
                                  className: s()(T.visibleContainer, em, eg),
                                  role: 'tooltip',
                                  'aria-label': I.intl.formatToPlainString(I.t.UpF5QU, {
                                      emoji: null !== (t = null == F ? void 0 : F.name) && void 0 !== t ? t : '',
                                      status: V
                                  }),
                                  tabIndex: 0,
                                  onFocus: () => {
                                      ea(!0), eu(!0);
                                  },
                                  onBlur: (e) => {
                                      var t;
                                      !(null === (t = es.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && (ea(!1), eu(!1));
                                  },
                                  onMouseOver: () => {
                                      x({ action: 'HOVER_CUSTOM_STATUS' }), ea(!0), eu(!0);
                                  },
                                  onMouseLeave: () => {
                                      ea(!1), eu(!1);
                                  },
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: ev,
                                          children: (0, r.jsx)('span', {
                                              className: eI,
                                              children: ef()
                                          })
                                      }),
                                      $ &&
                                          (0, r.jsx)(E.Z, {
                                              isVisible: ei,
                                              isExpandable: en,
                                              onCloseProfile: R
                                          })
                                  ]
                              })
                          })
                      ]
                  })
        })
    });
}
