n.d(t, {
    P: function () {
        return A;
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
    N = n(46140),
    v = n(981631),
    j = n(604330);
function A(e) {
    var t, n;
    let { quest: r } = e,
        A = (0, g.T)({
            quest: r,
            location: N.dr.QUESTS_BAR
        }),
        R = (0, C.Zy)({ location: N.dr.QUESTS_BAR }),
        b = (0, h.qN)({ location: N.dr.QUESTS_BAR }),
        B = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        I = (0, i.e7)([p.Z], () => p.Z.hasLayers()),
        M = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        O = (0, d.Z)(M),
        y = (null === (n = r.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        L = (0, d.Z)(y),
        { hasError: w, isLoading: k } = (0, E.d7)(),
        U = b && !k,
        Z = s.useRef(U),
        q = (0, T.B)(r, U && !w),
        P = (0, _.vI)(r, N.dr.QUESTS_BAR) ? _.WV : q.collapsedHeight,
        Q = s.useRef(-1),
        D = s.useRef(!1),
        [W, H] = s.useState(!1),
        [V, z] = s.useState(!1),
        [G, F] = s.useState(!0),
        [K, Y] = s.useState(!0),
        [X, J] = s.useState(q.preEnrollmentExpandedHeight),
        $ = s.useRef(null),
        ee = s.useCallback((e) => {
            F(!1), z(e);
        }, []),
        et = s.useCallback(() => {
            var e, t;
            J((null !== (t = null === (e = $.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * q.paddingVertical);
        }, [q.paddingVertical]),
        en = s.useCallback(() => {
            et(), ee(!0);
        }, [et, ee]),
        eo = s.useCallback(() => {
            H(!0);
        }, []),
        es = s.useCallback(() => {
            H(!1), !D.current && !y && ee(!1);
        }, [y, ee]),
        er = s.useCallback(() => {
            H(!1), !y && ee(!1), (D.current = !1);
        }, [y, ee]),
        ea = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (V) return;
                let { withDelay: t = !1 } = e;
                t ? (Q.current = window.setTimeout(en, 75)) : en();
            },
            [en, V]
        ),
        el = s.useCallback(() => {
            ea();
        }, [ea]),
        ei = s.useCallback(() => {
            if ((window.clearTimeout(Q.current), !!q.canCollapseOnBlur && !W)) !D.current && ee(!1);
        }, [W, q, ee]),
        ec = s.useCallback(() => {
            (0, m.dA)({
                questId: r.id,
                event: v.rMx.QUEST_HOVER,
                properties: (0, m.mH)(x.jn.QUEST_BAR)
            }),
                (D.current = !0),
                ea({ withDelay: !0 });
        }, [ea, r]),
        ed = s.useCallback(() => {
            (D.current = !1), ei();
        }, [ei]);
    s.useLayoutEffect(() => {
        y && q.shouldExpandOnQuestComplete && en();
    }, [en, y, q.shouldExpandOnQuestComplete]),
        s.useLayoutEffect(() => {
            M && !O && D.current && en();
        }, [en, M, O]),
        s.useLayoutEffect(() => {
            !y && M && !O && !D.current && ee(!1);
        }, [M, y, O, ee]),
        s.useLayoutEffect(() => {
            U !== Z.current && Y(!1), (Z.current = U);
        }, [U]);
    let eu = M ? N.XZ : N.R4,
        [{ expansionSpring: ep }, em] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: eu,
            onRest: () => {
                F(!0);
            },
            onStart: () => {
                F(!1);
            }
        }));
    s.useEffect(() => {
        em({
            expansionSpring: V ? 1 : 0,
            immediate: B
        });
    }, [V, em, B]);
    let { visibilitySpring: ex } = (0, c.useSpring)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: U ? 1 : 0 },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            Y(!0);
        },
        onStart: () => {
            Y(!1);
        }
    });
    return (s.useLayoutEffect(() => {
        y && !L && q.canCollapseOnBlur && et();
    }, [y, en, q.canCollapseOnBlur, et, L]),
    s.useEffect(() => {
        w &&
            (0, m.dA)({
                questId: r.id,
                event: v.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(x.jn.QUEST_BAR),
                    reason: 'asset_loading_error'
                }
            }),
            !R &&
                (0, m.dA)({
                    questId: r.id,
                    event: v.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(x.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest'
                    }
                });
    }, [w, R, r.id]),
    R && (U || !K || k) && !w)
        ? (0, o.jsx)(f.A, {
              questOrQuests: r,
              questContent: q.trackingCtx.content,
              overrideVisibility: !I && U,
              children: () => {
                  let e = q.component;
                  return (0, o.jsx)('div', {
                      className: j.mask,
                      children: (0, o.jsx)(l.animated.div, {
                          'aria-hidden': !U,
                          onMouseLeave: ed,
                          onMouseEnter: ec,
                          onFocus: el,
                          onBlur: ei,
                          className: a()(j.wrapper, {
                              [j.wrapperInvisible]: !U,
                              [j.wrapperVisible]: U && K
                          }),
                          style: {
                              color: r.config.colors.secondary,
                              height: ex.to({
                                  range: [0, 1],
                                  output: [0, !q.canCollapseOnBlur && V ? X : P]
                              })
                          },
                          children: (0, o.jsx)(l.animated.div, {
                              className: a()(j.contentWrapper, {
                                  [j.contentWrapperExpanded]: V,
                                  [j.contentWrapperAccepted]: M
                              }),
                              style: {
                                  backgroundColor: q.preEnrollmentBackgroundColor,
                                  backgroundImage: M ? q.postEnrollmentBackgroundImage : void 0
                              },
                              children: (0, o.jsx)(S.t, {
                                  springConfig: eu,
                                  isExpanded: V,
                                  children: (0, o.jsx)(e, {
                                      expandedContentRef: $,
                                      expansionSpring: ep,
                                      isExpanded: V,
                                      isExpansionAnimationComplete: G,
                                      onCtxMenuClosed: es,
                                      onCtxMenuOpened: eo,
                                      onCtxMenuSelection: er,
                                      quest: r,
                                      useReducedMotion: B,
                                      collapsedHeight: P
                                  })
                              })
                          })
                      })
                  });
              }
          })
        : (w ? A.log('Not rendered due to asset error') : !R && A.log('Not rendered due to ineligibility'), null);
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
                            source: N.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, o.jsx)(A, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
