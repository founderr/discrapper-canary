n.d(t, {
    Z: function () {
        return D;
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
    m = n(633302),
    g = n(314897),
    E = n(785717),
    v = n(510659),
    I = n(287954),
    T = n(810097),
    b = n(64621),
    S = n(913002),
    y = n(228168),
    A = n(388032),
    N = n(387984);
let C = 'text-sm/medium',
    R = 36,
    O = 144;
function D(e) {
    let { user: t, guildId: a, channelId: D, profileType: L, hasEntered: x = !0, animate: w = !0, onCloseProfile: P } = e,
        M = (0, l.e7)([g.default], () => g.default.getId() === t.id),
        k = (0, h.Z)(t.id),
        { analyticsLocations: U } = (0, p.ZP)(_.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: B } = (0, E.KZ)(),
        G = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        [Z] = i.useState(() => new u.V7()),
        [F, V] = i.useState(!0),
        j = i.useRef(null),
        H = i.useRef(null),
        Y = i.useRef(null),
        W = i.useRef(null),
        { emoji: K, state: z } = null != k ? k : {},
        q = null != z && '' !== z ? z : null,
        Q = null != q && q.length > 0,
        X = null != K,
        J = X && !Q,
        $ = X ? 1.25 : 0,
        ee = 18 + $,
        et = O + $,
        en = R + $,
        er = X || Q,
        { interactionType: ei, interactionSource: ea, resetInteraction: es } = (0, v.Xo)(),
        eo = ea === y.n_.STATUS && ei === y.P.REACT,
        el = ea === y.n_.STATUS && ei === y.P.REPLY,
        eu = eo || el,
        ec = M && !er,
        ed = M && er,
        [ef, e_] = i.useState(J),
        [ep, eh] = i.useState(!J),
        [em, eg] = i.useState(!1),
        eE = i.useRef(null);
    i.useLayoutEffect(() => {
        if (null == j.current || J) return;
        let e = j.current.getBoundingClientRect().height;
        if ((e_(J || e <= ee), x)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = j.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : et,
                a = null !== (i = null === (n = Y.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : en;
            eh(!J && e > a), (H.current = e), (W.current = a);
        }
    }, [x, J, ee, et, en]);
    let [ev, eI] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(en, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    i.useEffect(() => () => Z.stop(), [Z]);
    let eT = i.useRef(k);
    if (
        (i.useEffect(() => {
            ea === y.n_.STATUS && (null == k || eT.current !== k) && es(), (eT.current = k);
        }, [k, ea, es]),
        !er && !ec)
    )
        return null;
    let eb = (e) => {
            var t, n;
            if (!!ep) {
                if (e) {
                    let e = Math.min(null !== (t = H.current) && void 0 !== t ? t : et, et);
                    eI({
                        maxHeight: ''.concat(e, 'px'),
                        delay: G ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: G ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = W.current) && void 0 !== n ? n : en, en);
                    eI({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (G) {
                    V(!e);
                    return;
                }
                Z.start(e ? 300 : 150, () => {
                    V(!e);
                });
            }
        },
        eS = () =>
            X
                ? (0, r.jsx)(d.Iv, {
                      className: Q ? N.statusEmojiInline : N.statusEmojiOnly,
                      emoji: K,
                      animate: w,
                      hideTooltip: !1,
                      tooltipDelay: y.vB
                  })
                : null,
        ey = () =>
            Q
                ? (0, r.jsx)(c.Text, {
                      variant: C,
                      className: N.statusText,
                      children: q
                  })
                : null,
        eA = () => {
            let e = s()(N.content, {
                [N.clamp]: F,
                [N.unclamp]: !F,
                [N.singleLineAlign]: ef
            });
            return (0, r.jsxs)(o.animated.div, {
                style: ev,
                className: e,
                children: [eS(), ey()]
            });
        },
        eN = () =>
            (0, r.jsxs)('div', {
                className: s()(N.content, N.clamp, N.placeholderWidth, { [N.panel]: L === y.y0.PANEL }),
                ref: Y,
                children: [eS(), ey()]
            }),
        eC = () =>
            (0, r.jsxs)('div', {
                className: s()(N.content, N.unclamp, N.placeholderWidth, N.incorporeal, { [N.panel]: L === y.y0.PANEL }),
                ref: j,
                children: [eS(), ey()]
            }),
        eR = () => {
            B({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == P || P(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: U
                        });
                });
        },
        eO = {
            [N.biteSize]: L === y.y0.BITE_SIZE,
            [N.fullSize]: L === y.y0.FULL_SIZE,
            [N.panel]: L === y.y0.PANEL
        },
        eD = s()(N.background, { [N.editable]: ed }),
        eL = { [N.hoisted]: eu },
        ex = s()({
            [N.statusBubbleShape]: (!Q && X) || !ef,
            [N.statusBubbleSingleLineWithTextShape]: (ef && Q) || ec
        }),
        ew = s()(N.statusBubbleOuter, eO, ex, { [N.statusBubbleOuterAddStatusCursor]: ec }),
        eP = s()(N.statusBubble, ex, {
            [N.statusBubbleEmojiOnlyPadding]: J,
            [N.statusBubbleWithTextPadding]: Q || ec,
            [N.statusBubbleWithTextMinWidth]: Q,
            [N.statusBubbleCopyStatusCursor]: er
        }),
        eM = () => {
            var e;
            return (0, r.jsx)(c.FocusRing, {
                ringClassName: ex,
                children: (0, r.jsxs)('div', {
                    ref: eE,
                    className: s()(N.visibleContainer, eO, eD, eL),
                    role: 'tooltip',
                    'aria-label': A.intl.formatToPlainString(A.t.UpF5QU, {
                        emoji: null !== (e = null == K ? void 0 : K.name) && void 0 !== e ? e : '',
                        status: z
                    }),
                    tabIndex: 0,
                    onFocus: () => {
                        eg(!0), eb(!0);
                    },
                    onBlur: (e) => {
                        var t;
                        !(null === (t = eE.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && !eu && (eg(!1), eb(!1));
                    },
                    onMouseOver: () => {
                        B({ action: 'HOVER_CUSTOM_STATUS' }), eg(!0), eb(!0);
                    },
                    onMouseLeave: () => {
                        !eu && (eg(!1), eb(!1));
                    },
                    children: [
                        (0, r.jsx)('div', {
                            className: ew,
                            children: (0, r.jsx)('span', {
                                className: eP,
                                children: er && eA()
                            })
                        }),
                        ed
                            ? (0, r.jsx)(S.Z, {
                                  isVisible: em,
                                  isExpandable: ep,
                                  onCloseProfile: P
                              })
                            : (0, r.jsx)(T.ZP, {
                                  user: t,
                                  sourceType: y.n_.STATUS,
                                  isVisible: em && !eu,
                                  isExpandable: ep
                              })
                    ]
                })
            });
        };
    return (0, r.jsx)(p.Gt, {
        value: U,
        children: ec
            ? (0, r.jsx)(c.Clickable, {
                  'aria-label': A.intl.string(A.t['zrpF/f']),
                  onClick: eR,
                  className: s()(N.addCustomStatusButtonBubble, eO, eD),
                  focusProps: { ringClassName: ex },
                  children: (0, r.jsx)('div', {
                      className: ew,
                      children: (0, r.jsx)('span', {
                          className: eP,
                          children: (0, r.jsxs)('div', {
                              className: N.content,
                              children: [
                                  (0, r.jsx)(c.CirclePlusIcon, {
                                      className: N.addStatusIcon,
                                      colorClass: N.addStatusIconColor
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: C,
                                      className: N.addStatusPrompt,
                                      children: A.intl.string(A.t.evw0o6)
                                  })
                              ]
                          })
                      })
                  })
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (() => {
                          let e = (0, r.jsxs)('span', {
                              className: eP,
                              children: [er && eN(), er && eC()]
                          });
                          return (0, r.jsxs)('div', {
                              className: s()(N.invisibleContainer, eO, ew),
                              children: [
                                  (0, r.jsx)(b.Z, {
                                      sourceType: y.n_.STATUS,
                                      user: t,
                                      children: (0, r.jsx)('div', {
                                          className: N.coachmarkAnchor,
                                          children: e
                                      })
                                  }),
                                  e
                              ]
                          });
                      })(),
                      (0, r.jsx)(I.Z, {
                          user: t,
                          guildId: a,
                          channelId: D,
                          profileType: L,
                          sourceDetails: (() => {
                              if (X) {
                                  let e = null != K.id ? '`' + ':'.concat(K.name, ':') + '`' : m.ZP.translateSurrogatesToInlineEmoji(K.name);
                                  return J ? ''.concat(e) : ''.concat(e, ' ').concat(z);
                              }
                              if (!J) return ''.concat(z);
                          })(),
                          sourceType: y.n_.STATUS,
                          onClose: () => {
                              eg(!1), eb(!1);
                          },
                          children: () => eM()
                      })
                  ]
              })
    });
}
