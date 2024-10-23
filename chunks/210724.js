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
    C = n(497505),
    g = n(302245),
    _ = n(977156),
    f = n(5881),
    h = n(602667),
    E = n(78826),
    S = n(667105),
    T = n(693900),
    v = n(617889),
    N = n(130653),
    j = n(46140),
    A = n(981631),
    b = n(604330);
function R(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? j.NH.EXPANDED : j.NH.COLLAPSED,
            questContent: C.jn.QUEST_BAR_V2,
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
        B = (0, _.Zy)({ location: j.dr.QUESTS_BAR }),
        I = (0, S.qN)({
            quest: r,
            location: j.dr.QUESTS_BAR
        }),
        y = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        M = (0, i.e7)([p.Z], () => p.Z.hasLayers()),
        O = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        k = (0, d.Z)(O),
        w = (null === (n = r.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        L = (0, d.Z)(w),
        { hasError: U, isLoading: q } = (0, E.d7)(),
        Z = s.useContext(N.T) || (B && I && !q),
        P = s.useRef(Z),
        Q = (0, v.B)(r, Z && !U),
        D = (0, g.vI)(r, j.dr.QUESTS_BAR) ? g.WV : Q.collapsedHeight,
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
                properties: (0, m.mH)(C.jn.QUEST_BAR)
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
            O && !k && H.current && es();
        }, [es, O, k]),
        s.useLayoutEffect(() => {
            !w && O && !k && !H.current && en(!1);
        }, [O, w, k, en]),
        s.useLayoutEffect(() => {
            Z !== P.current && J(!1), (P.current = Z);
        }, [Z]);
    let em = O ? j.XZ : j.R4,
        [{ expansionSpring: ex }, eC] = (0, c.useSpring)(() => ({
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
        eC({
            expansionSpring: G ? 1 : 0,
            immediate: y
        });
    }, [G, eC, y]);
    let { visibilitySpring: eg } = (0, c.useSpring)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: Z ? 1 : 0 },
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
        w && !L && Q.canCollapseOnBlur && eo();
    }, [w, es, Q.canCollapseOnBlur, eo, L]),
    s.useEffect(() => {
        U &&
            (0, m.dA)({
                questId: r.id,
                event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(C.jn.QUEST_BAR),
                    reason: 'asset_loading_error'
                }
            }),
            !B &&
                (0, m.dA)({
                    questId: r.id,
                    event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(C.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest'
                    }
                });
    }, [U, B, r.id]),
    B && (Z || !X || q) && !U)
        ? (0, o.jsx)(h.A, {
              questOrQuests: r,
              questContent: Q.trackingCtx.content,
              overrideVisibility: !M && Z,
              children: () => {
                  let e = Q.component;
                  return (0, o.jsxs)('div', {
                      className: b.mask,
                      children: [
                          Z &&
                              (0, o.jsx)(R, {
                                  questId: r.id,
                                  isExpanded: G
                              }),
                          (0, o.jsx)(l.animated.div, {
                              'aria-hidden': !Z,
                              onMouseLeave: ep,
                              onMouseEnter: eu,
                              onFocus: ec,
                              onBlur: ed,
                              className: a()(b.wrapper, {
                                  [b.wrapperInvisible]: !Z,
                                  [b.wrapperVisible]: Z && X
                              }),
                              style: {
                                  color: r.config.colors.secondary,
                                  height: eg.to({
                                      range: [0, 1],
                                      output: [0, !Q.canCollapseOnBlur && G ? $ : D]
                                  })
                              },
                              children: (0, o.jsx)(l.animated.div, {
                                  className: a()(b.contentWrapper, {
                                      [b.contentWrapperExpanded]: G,
                                      [b.contentWrapperAccepted]: O
                                  }),
                                  style: {
                                      backgroundColor: Q.preEnrollmentBackgroundColor,
                                      backgroundImage: O ? Q.postEnrollmentBackgroundImage : void 0
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
                                          useReducedMotion: y,
                                          collapsedHeight: D
                                      })
                                  })
                              })
                          })
                      ]
                  });
              }
          })
        : (U ? x.log('Not rendered due to asset error') : !B && x.log('Not rendered due to ineligibility'), null);
}
t.Z =
    12633 == n.j
        ? function () {
              let e = (0, S.DH)();
              return null == e
                  ? null
                  : (0, o.jsx)(
                        E.p,
                        {
                            source: j.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, o.jsx)(B, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
