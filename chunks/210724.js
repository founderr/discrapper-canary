n.d(t, {
    P: function () {
        return B;
    }
}),
    n(47120);
var o = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(100621),
    i = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(607070),
    p = n(819640),
    m = n(617136),
    x = n(113434),
    _ = n(497505),
    C = n(302245),
    g = n(977156),
    f = n(5881),
    E = n(602667),
    h = n(78826),
    S = n(667105),
    T = n(693900),
    N = n(617889),
    v = n(130653),
    j = n(46140),
    A = n(981631),
    R = n(604330);
function b(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? j.NH.EXPANDED : j.NH.COLLAPSED,
            questContent: _.jn.QUEST_BAR_V2,
            questId: n
        }),
        null
    );
}
function B(e) {
    var t, n;
    let { quest: r } = e,
        x = (0, f.T)({
            quest: r,
            location: j.dr.QUESTS_BAR
        }),
        B = (0, g.Zy)({ location: j.dr.QUESTS_BAR }),
        I = (0, S.qN)({
            quest: r,
            location: j.dr.QUESTS_BAR
        }),
        M = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        O = (0, i.e7)([p.Z], () => p.Z.hasLayers()),
        y = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        L = (0, d.Z)(y),
        w = (null === (n = r.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        U = (0, d.Z)(w),
        { hasError: k, isLoading: Z } = (0, h.d7)(),
        q = s.useContext(v.T) || (B && I && !Z),
        P = s.useRef(q),
        Q = (0, N.B)(r, q && !k),
        D = (0, C.vI)(r, j.dr.QUESTS_BAR) ? C.WV : Q.collapsedHeight,
        W = s.useRef(-1),
        H = s.useRef(!1),
        [V, z] = s.useState(!1),
        [G, F] = s.useState(!1),
        [K, Y] = s.useState(!0),
        [X, J] = s.useState(!0),
        [$, ee] = s.useState(Q.preEnrollmentExpandedHeight),
        et = s.useRef(null),
        en = s.useCallback((e) => {
            Y(!1), F(e);
        }, []),
        eo = s.useCallback(() => {
            var e, t;
            ee((null !== (t = null === (e = et.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * Q.paddingVertical);
        }, [Q.paddingVertical]),
        es = s.useCallback(() => {
            eo(), en(!0);
        }, [eo, en]),
        er = s.useCallback(() => {
            z(!0);
        }, []),
        ea = s.useCallback(() => {
            z(!1), !H.current && !w && en(!1);
        }, [w, en]),
        el = s.useCallback(() => {
            z(!1), !w && en(!1), (H.current = !1);
        }, [w, en]),
        ei = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (G) return;
                let { withDelay: t = !1 } = e;
                t ? (W.current = window.setTimeout(es, 75)) : es();
            },
            [es, G]
        ),
        ec = s.useCallback(() => {
            ei();
        }, [ei]),
        ed = s.useCallback(() => {
            if ((window.clearTimeout(W.current), !!Q.canCollapseOnBlur && !V)) !H.current && en(!1);
        }, [V, Q, en]),
        eu = s.useCallback(() => {
            (0, m.dA)({
                questId: r.id,
                event: A.rMx.QUEST_HOVER,
                properties: (0, m.mH)(_.jn.QUEST_BAR)
            }),
                (H.current = !0),
                ei({ withDelay: !0 });
        }, [ei, r]),
        ep = s.useCallback(() => {
            (H.current = !1), ed();
        }, [ed]);
    s.useLayoutEffect(() => {
        w && Q.shouldExpandOnQuestComplete && es();
    }, [es, w, Q.shouldExpandOnQuestComplete]),
        s.useLayoutEffect(() => {
            y && !L && H.current && es();
        }, [es, y, L]),
        s.useLayoutEffect(() => {
            !w && y && !L && !H.current && en(!1);
        }, [y, w, L, en]),
        s.useLayoutEffect(() => {
            q !== P.current && J(!1), (P.current = q);
        }, [q]);
    let em = y ? j.XZ : j.R4,
        [{ expansionSpring: ex }, e_] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: em,
            onRest: () => {
                Y(!0);
            },
            onStart: () => {
                Y(!1);
            }
        }));
    s.useEffect(() => {
        e_({
            expansionSpring: G ? 1 : 0,
            immediate: M
        });
    }, [G, e_, M]);
    let { visibilitySpring: eC } = (0, c.useSpring)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: q ? 1 : 0 },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            J(!0);
        },
        onStart: () => {
            J(!1);
        }
    });
    return (s.useLayoutEffect(() => {
        w && !U && Q.canCollapseOnBlur && eo();
    }, [w, es, Q.canCollapseOnBlur, eo, U]),
    s.useEffect(() => {
        k &&
            (0, m.dA)({
                questId: r.id,
                event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(_.jn.QUEST_BAR),
                    reason: 'asset_loading_error'
                }
            }),
            !B &&
                (0, m.dA)({
                    questId: r.id,
                    event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(_.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest'
                    }
                });
    }, [k, B, r.id]),
    B && (q || !X || Z) && !k)
        ? (0, o.jsx)(E.A, {
              questOrQuests: r,
              questContent: Q.trackingCtx.content,
              overrideVisibility: !O && q,
              children: () => {
                  let e = Q.component;
                  return (0, o.jsxs)('div', {
                      className: R.mask,
                      children: [
                          q &&
                              (0, o.jsx)(b, {
                                  questId: r.id,
                                  isExpanded: G
                              }),
                          (0, o.jsx)(l.animated.div, {
                              'aria-hidden': !q,
                              onMouseLeave: ep,
                              onMouseEnter: eu,
                              onFocus: ec,
                              onBlur: ed,
                              className: a()(R.wrapper, {
                                  [R.wrapperInvisible]: !q,
                                  [R.wrapperVisible]: q && X
                              }),
                              style: {
                                  color: r.config.colors.secondary,
                                  height: eC.to({
                                      range: [0, 1],
                                      output: [0, !Q.canCollapseOnBlur && G ? $ : D]
                                  })
                              },
                              children: (0, o.jsx)(l.animated.div, {
                                  className: a()(R.contentWrapper, {
                                      [R.contentWrapperExpanded]: G,
                                      [R.contentWrapperAccepted]: y
                                  }),
                                  style: {
                                      backgroundColor: Q.preEnrollmentBackgroundColor,
                                      backgroundImage: y ? Q.postEnrollmentBackgroundImage : void 0
                                  },
                                  children: (0, o.jsx)(T.t, {
                                      springConfig: em,
                                      isExpanded: G,
                                      children: (0, o.jsx)(e, {
                                          expandedContentRef: et,
                                          expansionSpring: ex,
                                          isExpanded: G,
                                          isExpansionAnimationComplete: K,
                                          onCtxMenuClosed: ea,
                                          onCtxMenuOpened: er,
                                          onCtxMenuSelection: el,
                                          quest: r,
                                          useReducedMotion: M,
                                          collapsedHeight: D
                                      })
                                  })
                              })
                          })
                      ]
                  });
              }
          })
        : (k ? x.log('Not rendered due to asset error') : !B && x.log('Not rendered due to ineligibility'), null);
}
t.Z =
    12633 == n.j
        ? function () {
              let e = (0, S.DH)();
              return null == e
                  ? null
                  : (0, o.jsx)(
                        h.p,
                        {
                            source: j.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, o.jsx)(B, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
