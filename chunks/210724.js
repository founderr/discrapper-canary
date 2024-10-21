n.d(t, {
    P: function () {
        return R;
    }
}),
    n(47120);
var o = n(735250),
    s = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(212433),
    i = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(607070),
    p = n(819640),
    m = n(617136),
    x = n(497505),
    _ = n(302245),
    C = n(977156),
    g = n(5881),
    f = n(602667),
    E = n(78826),
    h = n(667105),
    S = n(693900),
    T = n(617889),
    N = n(130653),
    v = n(46140),
    j = n(981631),
    A = n(604330);
function R(e) {
    var t, n;
    let { quest: r } = e,
        R = (0, g.T)({
            quest: r,
            location: v.dr.QUESTS_BAR
        }),
        b = (0, C.Zy)({ location: v.dr.QUESTS_BAR }),
        B = (0, h.qN)({
            quest: r,
            location: v.dr.QUESTS_BAR
        }),
        I = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        M = (0, i.e7)([p.Z], () => p.Z.hasLayers()),
        O = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        y = (0, d.Z)(O),
        L = (null === (n = r.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        w = (0, d.Z)(L),
        { hasError: U, isLoading: k } = (0, E.d7)(),
        Z = s.useContext(N.T) || (b && B && !k),
        q = s.useRef(Z),
        P = (0, T.B)(r, Z && !U),
        Q = (0, _.vI)(r, v.dr.QUESTS_BAR) ? _.WV : P.collapsedHeight,
        D = s.useRef(-1),
        W = s.useRef(!1),
        [H, V] = s.useState(!1),
        [z, G] = s.useState(!1),
        [F, K] = s.useState(!0),
        [Y, X] = s.useState(!0),
        [J, $] = s.useState(P.preEnrollmentExpandedHeight),
        ee = s.useRef(null),
        et = s.useCallback((e) => {
            K(!1), G(e);
        }, []),
        en = s.useCallback(() => {
            var e, t;
            $((null !== (t = null === (e = ee.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * P.paddingVertical);
        }, [P.paddingVertical]),
        eo = s.useCallback(() => {
            en(), et(!0);
        }, [en, et]),
        es = s.useCallback(() => {
            V(!0);
        }, []),
        er = s.useCallback(() => {
            V(!1), !W.current && !L && et(!1);
        }, [L, et]),
        ea = s.useCallback(() => {
            V(!1), !L && et(!1), (W.current = !1);
        }, [L, et]),
        el = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (z) return;
                let { withDelay: t = !1 } = e;
                t ? (D.current = window.setTimeout(eo, 75)) : eo();
            },
            [eo, z]
        ),
        ei = s.useCallback(() => {
            el();
        }, [el]),
        ec = s.useCallback(() => {
            if ((window.clearTimeout(D.current), !!P.canCollapseOnBlur && !H)) !W.current && et(!1);
        }, [H, P, et]),
        ed = s.useCallback(() => {
            (0, m.dA)({
                questId: r.id,
                event: j.rMx.QUEST_HOVER,
                properties: (0, m.mH)(x.jn.QUEST_BAR)
            }),
                (W.current = !0),
                el({ withDelay: !0 });
        }, [el, r]),
        eu = s.useCallback(() => {
            (W.current = !1), ec();
        }, [ec]);
    s.useLayoutEffect(() => {
        L && P.shouldExpandOnQuestComplete && eo();
    }, [eo, L, P.shouldExpandOnQuestComplete]),
        s.useLayoutEffect(() => {
            O && !y && W.current && eo();
        }, [eo, O, y]),
        s.useLayoutEffect(() => {
            !L && O && !y && !W.current && et(!1);
        }, [O, L, y, et]),
        s.useLayoutEffect(() => {
            Z !== q.current && X(!1), (q.current = Z);
        }, [Z]);
    let ep = O ? v.XZ : v.R4,
        [{ expansionSpring: em }, ex] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: ep,
            onRest: () => {
                K(!0);
            },
            onStart: () => {
                K(!1);
            }
        }));
    s.useEffect(() => {
        ex({
            expansionSpring: z ? 1 : 0,
            immediate: I
        });
    }, [z, ex, I]);
    let { visibilitySpring: e_ } = (0, c.useSpring)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: Z ? 1 : 0 },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            X(!0);
        },
        onStart: () => {
            X(!1);
        }
    });
    return (s.useLayoutEffect(() => {
        L && !w && P.canCollapseOnBlur && en();
    }, [L, eo, P.canCollapseOnBlur, en, w]),
    s.useEffect(() => {
        U &&
            (0, m.dA)({
                questId: r.id,
                event: j.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(x.jn.QUEST_BAR),
                    reason: 'asset_loading_error'
                }
            }),
            !b &&
                (0, m.dA)({
                    questId: r.id,
                    event: j.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(x.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest'
                    }
                });
    }, [U, b, r.id]),
    b && (Z || !Y || k) && !U)
        ? (0, o.jsx)(f.A, {
              questOrQuests: r,
              questContent: P.trackingCtx.content,
              overrideVisibility: !M && Z,
              children: () => {
                  let e = P.component;
                  return (0, o.jsx)('div', {
                      className: A.mask,
                      children: (0, o.jsx)(l.animated.div, {
                          'aria-hidden': !Z,
                          onMouseLeave: eu,
                          onMouseEnter: ed,
                          onFocus: ei,
                          onBlur: ec,
                          className: a()(A.wrapper, {
                              [A.wrapperInvisible]: !Z,
                              [A.wrapperVisible]: Z && Y
                          }),
                          style: {
                              color: r.config.colors.secondary,
                              height: e_.to({
                                  range: [0, 1],
                                  output: [0, !P.canCollapseOnBlur && z ? J : Q]
                              })
                          },
                          children: (0, o.jsx)(l.animated.div, {
                              className: a()(A.contentWrapper, {
                                  [A.contentWrapperExpanded]: z,
                                  [A.contentWrapperAccepted]: O
                              }),
                              style: {
                                  backgroundColor: P.preEnrollmentBackgroundColor,
                                  backgroundImage: O ? P.postEnrollmentBackgroundImage : void 0
                              },
                              children: (0, o.jsx)(S.t, {
                                  springConfig: ep,
                                  isExpanded: z,
                                  children: (0, o.jsx)(e, {
                                      expandedContentRef: ee,
                                      expansionSpring: em,
                                      isExpanded: z,
                                      isExpansionAnimationComplete: F,
                                      onCtxMenuClosed: er,
                                      onCtxMenuOpened: es,
                                      onCtxMenuSelection: ea,
                                      quest: r,
                                      useReducedMotion: I,
                                      collapsedHeight: Q
                                  })
                              })
                          })
                      })
                  });
              }
          })
        : (U ? R.log('Not rendered due to asset error') : !b && R.log('Not rendered due to ineligibility'), null);
}
t.Z =
    12633 == n.j
        ? function () {
              let e = (0, h.DH)();
              return null == e
                  ? null
                  : (0, o.jsx)(
                        E.p,
                        {
                            source: v.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, o.jsx)(R, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
