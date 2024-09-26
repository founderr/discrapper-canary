n.d(t, {
    P: function () {
        return b;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    o = n(526629),
    l = n(442837),
    c = n(481060),
    d = n(110924),
    _ = n(607070),
    u = n(819640),
    E = n(617136),
    T = n(113434),
    I = n(569984),
    R = n(497505),
    m = n(918701),
    g = n(302245),
    N = n(977156),
    C = n(5881),
    p = n(602667),
    f = n(78826),
    A = n(693900),
    S = n(617889),
    M = n(46140),
    h = n(981631),
    x = n(604330);
function b(e) {
    var t, n, r;
    let { quest: I } = e,
        b = (0, C.T)({
            quest: I,
            location: M.dr.QUESTS_BAR
        }),
        O = (0, N.Zy)({ location: M.dr.QUESTS_BAR }),
        P = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        v = (0, l.e7)([u.Z], () => u.Z.hasLayers()),
        L = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        Z = (0, d.Z)(L),
        D = (null === (n = I.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        B = (0, d.Z)(D),
        U = (null === (r = I.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        j = null != I.userStatus && (0, m.zE)(I.userStatus, R.jn.QUEST_BAR),
        G = (0, T.tP)(I),
        { hasError: w, isLoading: y } = (0, f.d7)(),
        k = O && !j && !U && !G && !y,
        H = a.useRef(k),
        F = (0, S.B)(I, k && !w),
        V = (0, g.vI)(I, M.dr.QUESTS_BAR) ? g.WV : F.collapsedHeight,
        W = a.useRef(-1),
        K = a.useRef(!1),
        [Y, z] = a.useState(!1),
        [Q, q] = a.useState(!1),
        [X, J] = a.useState(!0),
        [$, ee] = a.useState(!0),
        [et, en] = a.useState(F.preEnrollmentExpandedHeight),
        es = a.useRef(null),
        ea = a.useCallback((e) => {
            J(!1), q(e);
        }, []),
        er = a.useCallback(() => {
            var e, t;
            en((null !== (t = null === (e = es.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * F.paddingVertical);
        }, [F.paddingVertical]),
        ei = a.useCallback(() => {
            er(), ea(!0);
        }, [er, ea]),
        eo = a.useCallback(() => {
            z(!0);
        }, []),
        el = a.useCallback(() => {
            z(!1), !K.current && !D && ea(!1);
        }, [D, ea]),
        ec = a.useCallback(() => {
            z(!1), !D && ea(!1), (K.current = !1);
        }, [D, ea]),
        ed = a.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (Q) return;
                let { withDelay: t = !1 } = e;
                t ? (W.current = window.setTimeout(ei, 75)) : ei();
            },
            [ei, Q]
        ),
        e_ = a.useCallback(() => {
            ed();
        }, [ed]),
        eu = a.useCallback(() => {
            if ((window.clearTimeout(W.current), !!F.canCollapseOnBlur && !Y)) !K.current && ea(!1);
        }, [Y, F, ea]),
        eE = a.useCallback(() => {
            (0, E.dA)({
                questId: I.id,
                event: h.rMx.QUEST_HOVER,
                properties: (0, E.mH)(R.jn.QUEST_BAR)
            }),
                (K.current = !0),
                ed({ withDelay: !0 });
        }, [ed, I]),
        eT = a.useCallback(() => {
            (K.current = !1), eu();
        }, [eu]);
    a.useLayoutEffect(() => {
        D && F.shouldExpandOnQuestComplete && ei();
    }, [ei, D, F.shouldExpandOnQuestComplete]),
        a.useLayoutEffect(() => {
            L && !Z && K.current && ei();
        }, [ei, L, Z]),
        a.useLayoutEffect(() => {
            !D && L && !Z && !K.current && ea(!1);
        }, [L, D, Z, ea]),
        a.useLayoutEffect(() => {
            k !== H.current && ee(!1), (H.current = k);
        }, [k]);
    let eI = L ? M.XZ : M.R4,
        [{ expansionSpring: eR }, em] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: eI,
            onRest: () => {
                J(!0);
            },
            onStart: () => {
                J(!1);
            }
        }));
    a.useEffect(() => {
        em({
            expansionSpring: Q ? 1 : 0,
            immediate: P
        });
    }, [Q, em, P]);
    let { visibilitySpring: eg } = (0, c.useSpring)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: k ? 1 : 0 },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            ee(!0);
        },
        onStart: () => {
            ee(!1);
        }
    });
    return (a.useLayoutEffect(() => {
        D && !B && F.canCollapseOnBlur && er();
    }, [D, ei, F.canCollapseOnBlur, er, B]),
    a.useEffect(() => {
        w &&
            (0, E.dA)({
                questId: I.id,
                event: h.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, E.mH)(R.jn.QUEST_BAR),
                    reason: 'asset_loading_error'
                }
            }),
            !O &&
                (0, E.dA)({
                    questId: I.id,
                    event: h.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, E.mH)(R.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest'
                    }
                });
    }, [w, O, I.id]),
    O && (k || !$ || y) && !w)
        ? (0, s.jsx)(p.A, {
              questOrQuests: I,
              questContent: F.trackingCtx.content,
              overrideVisibility: !v && k,
              children: () => {
                  let e = F.component;
                  return (0, s.jsx)('div', {
                      className: x.mask,
                      children: (0, s.jsx)(o.animated.div, {
                          'aria-hidden': !k,
                          onMouseLeave: eT,
                          onMouseEnter: eE,
                          onFocus: e_,
                          onBlur: eu,
                          className: i()(x.wrapper, {
                              [x.wrapperInvisible]: !k,
                              [x.wrapperVisible]: k && $
                          }),
                          style: {
                              color: I.config.colors.secondary,
                              height: eg.to({
                                  range: [0, 1],
                                  output: [0, !F.canCollapseOnBlur && Q ? et : V]
                              })
                          },
                          children: (0, s.jsx)(o.animated.div, {
                              className: i()(x.contentWrapper, {
                                  [x.contentWrapperExpanded]: Q,
                                  [x.contentWrapperAccepted]: L
                              }),
                              style: {
                                  backgroundColor: F.preEnrollmentBackgroundColor,
                                  backgroundImage: L ? F.postEnrollmentBackgroundImage : void 0
                              },
                              children: (0, s.jsx)(A.t, {
                                  springConfig: eI,
                                  isExpanded: Q,
                                  children: (0, s.jsx)(e, {
                                      expandedContentRef: es,
                                      expansionSpring: eR,
                                      isExpanded: Q,
                                      isExpansionAnimationComplete: X,
                                      onCtxMenuClosed: el,
                                      onCtxMenuOpened: eo,
                                      onCtxMenuSelection: ec,
                                      quest: I,
                                      useReducedMotion: P,
                                      collapsedHeight: V
                                  })
                              })
                          })
                      })
                  });
              }
          })
        : (w ? b.log('Not rendered due to asset error') : !O && b.log('Not rendered due to ineligibility'), null);
}
t.Z =
    12633 == n.j
        ? function () {
              let e = (0, l.e7)([I.Z], () => {
                  var e, t;
                  return null !== (t = null !== (e = I.Z.questDeliveryOverride) && void 0 !== e ? e : (0, m.PM)(I.Z.quests, I.Z.questToDeliverForPlacement, R.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== t ? t : (0, m._)(I.Z.quests, R.jn.QUEST_BAR);
              });
              return null == e
                  ? null
                  : (0, s.jsx)(
                        f.p,
                        {
                            source: M.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, s.jsx)(b, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
