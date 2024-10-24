n.d(t, {
    P: function () {
        return R;
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
    _ = n(302245),
    g = n(977156),
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
function B(e) {
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
function R(e) {
    var t, n;
    let { quest: r } = e,
        x = (0, f.T)({
            quest: r,
            location: j.dr.QUESTS_BAR
        }),
        R = (0, g.Zy)({ location: j.dr.QUESTS_BAR }),
        y = (0, S.qN)({
            quest: r,
            location: j.dr.QUESTS_BAR
        }),
        I = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        M = (0, i.e7)([p.Z], () => p.Z.hasLayers()),
        O = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        w = (0, d.Z)(O),
        k = (null === (n = r.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        P = (0, d.Z)(k),
        { hasError: L, isLoading: U } = (0, E.d7)(),
        q = s.useContext(N.T) || (R && y && !U),
        Z = s.useRef(q),
        Q = (0, v.B)(r, q && !L),
        D = (0, _.vI)(r, j.dr.QUESTS_BAR) ? _.WV : Q.collapsedHeight,
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
            z(!1), !H.current && !k && en(!1);
        }, [k, en]),
        el = s.useCallback(() => {
            z(!1), !k && en(!1), (H.current = !1);
        }, [k, en]),
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
        k && Q.shouldExpandOnQuestComplete && es();
    }, [es, k, Q.shouldExpandOnQuestComplete]),
        s.useLayoutEffect(() => {
            O && !w && H.current && es();
        }, [es, O, w]),
        s.useLayoutEffect(() => {
            !k && O && !w && !H.current && en(!1);
        }, [O, k, w, en]),
        s.useLayoutEffect(() => {
            q !== Z.current && J(!1), (Z.current = q);
        }, [q]);
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
            immediate: I
        });
    }, [G, eC, I]);
    let { visibilitySpring: e_ } = (0, c.useSpring)({
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
        k && !P && Q.canCollapseOnBlur && eo();
    }, [k, es, Q.canCollapseOnBlur, eo, P]),
    s.useEffect(() => {
        L &&
            (0, m.dA)({
                questId: r.id,
                event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(C.jn.QUEST_BAR),
                    reason: 'asset_loading_error'
                }
            }),
            !R &&
                (0, m.dA)({
                    questId: r.id,
                    event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(C.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest'
                    }
                });
    }, [L, R, r.id]),
    R && (q || !X || U) && !L)
        ? (0, o.jsx)(h.A, {
              questOrQuests: r,
              questContent: Q.trackingCtx.content,
              overrideVisibility: !M && q,
              children: () => {
                  let e = Q.component;
                  return (0, o.jsxs)('div', {
                      className: b.mask,
                      children: [
                          q &&
                              (0, o.jsx)(B, {
                                  questId: r.id,
                                  isExpanded: G
                              }),
                          (0, o.jsx)(l.animated.div, {
                              'aria-hidden': !q,
                              onMouseLeave: ep,
                              onMouseEnter: eu,
                              onFocus: ec,
                              onBlur: ed,
                              className: a()(b.wrapper, {
                                  [b.wrapperInvisible]: !q,
                                  [b.wrapperVisible]: q && X
                              }),
                              style: {
                                  color: r.config.colors.secondary,
                                  height: e_.to({
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
                                          useReducedMotion: I,
                                          collapsedHeight: D
                                      })
                                  })
                              })
                          })
                      ]
                  });
              }
          })
        : (L ? x.log('Not rendered due to asset error') : !R && x.log('Not rendered due to ineligibility'), null);
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
                            children: (0, o.jsx)(R, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
