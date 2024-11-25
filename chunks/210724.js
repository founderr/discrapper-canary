n.d(t, {
    P: function () {
        return y;
    }
}),
    n(47120);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(752877),
    l = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(607070),
    p = n(819640),
    m = n(617136),
    x = n(113434),
    g = n(497505),
    f = n(302245),
    h = n(977156),
    C = n(5881),
    v = n(602667),
    j = n(78826),
    _ = n(667105),
    b = n(693900),
    E = n(617889),
    N = n(130653),
    T = n(46140),
    B = n(981631),
    S = n(604330);
function A(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? T.NH.EXPANDED : T.NH.COLLAPSED,
            questContent: g.jn.QUEST_BAR_V2,
            questId: n
        }),
        null
    );
}
function y(e) {
    var t, n;
    let { quest: s } = e,
        x = (0, C.T)({
            quest: s,
            location: T.dr.QUESTS_BAR
        }),
        y = (0, h.Zy)({ location: T.dr.QUESTS_BAR }),
        R = (0, _.qN)({
            quest: s,
            location: T.dr.QUESTS_BAR
        }),
        w = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        I = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        k = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        q = (0, d.Z)(k),
        P = (null === (n = s.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        M = (0, d.Z)(P),
        { hasError: O, isLoading: W } = (0, j.d7)(),
        L = r.useContext(N.T) || (y && R && !W),
        Q = r.useRef(L),
        Z = (0, E.B)(s, L && !O),
        D = (0, f.vI)(s, T.dr.QUESTS_BAR) ? f.WV : Z.collapsedHeight,
        H = r.useRef(-1),
        V = r.useRef(!1),
        [U, z] = r.useState(!1),
        [F, G] = r.useState(!1),
        [Y, K] = r.useState(!0),
        [X, J] = r.useState(!0),
        [$, ee] = r.useState(Z.preEnrollmentExpandedHeight),
        et = r.useRef(null),
        en = r.useCallback((e) => {
            K(!1), G(e);
        }, []),
        eo = r.useCallback(() => {
            var e, t;
            ee((null !== (t = null === (e = et.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * Z.paddingVertical);
        }, [Z.paddingVertical]),
        er = r.useCallback(() => {
            eo(), en(!0);
        }, [eo, en]),
        es = r.useCallback(() => {
            z(!0);
        }, []),
        ea = r.useCallback(() => {
            z(!1), !V.current && !P && en(!1);
        }, [P, en]),
        ei = r.useCallback(() => {
            z(!1), !P && en(!1), (V.current = !1);
        }, [P, en]),
        el = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (F) return;
                let { withDelay: t = !1 } = e;
                t ? (H.current = window.setTimeout(er, 75)) : er();
            },
            [er, F]
        ),
        ec = r.useCallback(() => {
            el();
        }, [el]),
        ed = r.useCallback(() => {
            if ((window.clearTimeout(H.current), !!Z.canCollapseOnBlur && !U)) !V.current && en(!1);
        }, [U, Z, en]),
        eu = r.useCallback(() => {
            (0, m.dA)({
                questId: s.id,
                event: B.rMx.QUEST_HOVER,
                properties: (0, m.mH)(g.jn.QUEST_BAR)
            }),
                (V.current = !0),
                el({ withDelay: !0 });
        }, [el, s]),
        ep = r.useCallback(() => {
            (0, m.dA)({
                questId: s.id,
                event: B.rMx.QUEST_HOVER_OFF,
                properties: (0, m.mH)(g.jn.QUEST_BAR)
            }),
                (V.current = !1),
                ed();
        }, [ed, s]);
    r.useLayoutEffect(() => {
        P && Z.shouldExpandOnQuestComplete && er();
    }, [er, P, Z.shouldExpandOnQuestComplete]),
        r.useLayoutEffect(() => {
            k && !q && V.current && er();
        }, [er, k, q]),
        r.useLayoutEffect(() => {
            !P && k && !q && !V.current && en(!1);
        }, [k, P, q, en]),
        r.useLayoutEffect(() => {
            L !== Q.current && J(!1), (Q.current = L);
        }, [L]);
    let em = k ? T.XZ : T.R4,
        [{ expansionSpring: ex }, eg] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: em,
            onRest: () => {
                K(!0);
            },
            onStart: () => {
                K(!1);
            }
        }));
    r.useEffect(() => {
        eg({
            expansionSpring: F ? 1 : 0,
            immediate: w
        });
    }, [F, eg, w]);
    let { visibilitySpring: ef } = (0, c.useSpring)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: L ? 1 : 0 },
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
    return (r.useLayoutEffect(() => {
        P && !M && Z.canCollapseOnBlur && eo();
    }, [P, er, Z.canCollapseOnBlur, eo, M]),
    r.useEffect(() => {
        O &&
            (0, m.dA)({
                questId: s.id,
                event: B.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(g.jn.QUEST_BAR),
                    reason: 'asset_loading_error'
                }
            }),
            !y &&
                (0, m.dA)({
                    questId: s.id,
                    event: B.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(g.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest'
                    }
                });
    }, [O, y, s.id]),
    y && (L || !X || W) && !O)
        ? (0, o.jsx)(v.A, {
              questOrQuests: s,
              questContent: Z.trackingCtx.content,
              overrideVisibility: !I && L,
              children: () => {
                  let e = Z.component;
                  return (0, o.jsxs)('div', {
                      className: S.mask,
                      children: [
                          L &&
                              (0, o.jsx)(A, {
                                  questId: s.id,
                                  isExpanded: F
                              }),
                          (0, o.jsx)(i.animated.div, {
                              'aria-hidden': !L,
                              onMouseLeave: ep,
                              onMouseEnter: eu,
                              onFocus: ec,
                              onBlur: ed,
                              className: a()(S.wrapper, {
                                  [S.wrapperInvisible]: !L,
                                  [S.wrapperVisible]: L && X
                              }),
                              style: {
                                  color: s.config.colors.secondary,
                                  height: ef.to({
                                      range: [0, 1],
                                      output: [0, !Z.canCollapseOnBlur && F ? $ : D]
                                  })
                              },
                              children: (0, o.jsx)(i.animated.div, {
                                  className: a()(S.contentWrapper, {
                                      [S.contentWrapperExpanded]: F,
                                      [S.contentWrapperAccepted]: k
                                  }),
                                  style: {
                                      backgroundColor: Z.preEnrollmentBackgroundColor,
                                      backgroundImage: k ? Z.postEnrollmentBackgroundImage : void 0
                                  },
                                  children: (0, o.jsx)(b.t, {
                                      springConfig: em,
                                      isExpanded: F,
                                      children: (0, o.jsx)(e, {
                                          expandedContentRef: et,
                                          expansionSpring: ex,
                                          isExpanded: F,
                                          isExpansionAnimationComplete: Y,
                                          onCtxMenuClosed: ea,
                                          onCtxMenuOpened: es,
                                          onCtxMenuSelection: ei,
                                          quest: s,
                                          useReducedMotion: w,
                                          collapsedHeight: D
                                      })
                                  })
                              })
                          })
                      ]
                  });
              }
          })
        : (O ? x.log('Not rendered due to asset error') : !y && x.log('Not rendered due to ineligibility'), null);
}
t.Z =
    12633 == n.j
        ? function () {
              let e = (0, _.DH)();
              return null == e
                  ? null
                  : (0, o.jsx)(
                        j.p,
                        {
                            source: T.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, o.jsx)(y, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
