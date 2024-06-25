n.d(t, {
  P: function() {
    return M
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(920906),
  o = n(442837),
  c = n(110924),
  d = n(607070),
  _ = n(819640),
  E = n(617136),
  u = n(113434),
  T = n(569984),
  I = n(497505),
  R = n(918701),
  C = n(977156),
  g = n(5881),
  p = n(602667),
  A = n(78826),
  N = n(693900),
  m = n(617889),
  S = n(46140),
  f = n(981631),
  h = n(323044);

function M(e) {
  var t, n, r;
  let {
    quest: T
  } = e, M = (0, g.T)({
    quest: T,
    location: S.dr.QUESTS_BAR
  }), x = (0, C.Zy)({
    location: S.dr.QUESTS_BAR
  }), b = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), O = (0, o.e7)([_.Z], () => _.Z.hasLayers()), P = (null === (t = T.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, L = (0, c.Z)(P), v = (null === (n = T.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, Z = (0, c.Z)(v), D = (null === (r = T.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null, B = null != T.userStatus && (0, R.zE)(T.userStatus, I.jn.QUEST_BAR), U = (0, u.tP)(T), {
    hasError: j,
    isLoading: G
  } = (0, A.d7)(), H = x && !B && !D && !U && !G, y = a.useRef(H), k = (0, m.B)(T, H && !j), w = a.useRef(-1), F = a.useRef(!1), [V, W] = a.useState(!1), [K, Y] = a.useState(!1), [z, Q] = a.useState(!0), [X, J] = a.useState(!0), [q, $] = a.useState(k.preEnrollmentExpandedHeight), ee = a.useRef(null), et = a.useCallback(() => {
    var e, t;
    $((null !== (t = null === (e = ee.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * k.paddingVertical)
  }, [k.paddingVertical]), en = a.useCallback(() => {
    et(), Y(!0)
  }, [et]), es = a.useCallback(() => {
    W(!0)
  }, []), ea = a.useCallback(() => {
    W(!1), !F.current && !v && Y(!1)
  }, [v]), er = a.useCallback(() => {
    W(!1), !v && Y(!1), F.current = !1
  }, [v]), ei = a.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (K) return;
    let {
      withDelay: t = !1
    } = e;
    t ? w.current = window.setTimeout(en, 75) : en()
  }, [en, K]), el = a.useCallback(() => {
    ei()
  }, [ei]), eo = a.useCallback(() => {
    if (window.clearTimeout(w.current), !!k.canCollapseOnBlur && !V) !F.current && Y(!1)
  }, [V, k]), ec = a.useCallback(() => {
    (0, E.dA)({
      questId: T.id,
      event: f.rMx.QUEST_HOVER
    }), F.current = !0, ei({
      withDelay: !0
    })
  }, [ei, T]), ed = a.useCallback(() => {
    F.current = !1, eo()
  }, [eo]), e_ = a.useCallback(e => {
    K && $(t => t + e)
  }, [K]);
  a.useLayoutEffect(() => {
    v && k.shouldExpandOnQuestComplete && en()
  }, [en, v, k.shouldExpandOnQuestComplete]), a.useLayoutEffect(() => {
    P && !L && F.current && en()
  }, [en, P, L]), a.useLayoutEffect(() => {
    !v && P && !L && !F.current && Y(!1)
  }, [P, v, L]), a.useLayoutEffect(() => {
    H !== y.current && J(!1), y.current = H
  }, [H]);
  let eE = P ? S.XZ : S.R4,
    [{
      expansionSpring: eu
    }, eT] = (0, l.useSpring)(() => ({
      from: {
        expansionSpring: 0
      },
      config: eE,
      immediate: b,
      onRest: () => {
        Q(!0)
      },
      onStart: () => {
        Q(!1)
      }
    })),
    [{
      height: eI
    }, eR] = (0, l.useSpring)(() => ({
      from: {
        height: k.collapsedHeight
      },
      config: eE,
      immediate: b
    }));
  a.useLayoutEffect(() => {
    eT({
      expansionSpring: K ? 1 : 0
    }), eR({
      height: K ? q : k.collapsedHeight
    })
  }, [K, q, eT, eR, k.collapsedHeight]);
  let {
    visibilitySpring: eC
  } = (0, l.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: H ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: b,
    onRest: () => {
      J(!0)
    },
    onStart: () => {
      J(!1)
    }
  });
  return (a.useLayoutEffect(() => {
    v && !Z && k.canCollapseOnBlur && et()
  }, [v, en, k.canCollapseOnBlur, et, Z]), x && (H || !X || G) && !j) ? (0, s.jsx)(p.A, {
    questOrQuests: T,
    questContent: k.trackingCtx.content,
    overrideVisibility: !O && H,
    children: () => {
      let e = k.component;
      return (0, s.jsx)(l.animated.div, {
        "aria-hidden": !H,
        className: i()(h.wrapper, {
          [h.wrapperInvisible]: !H,
          [h.wrapperVisible]: H && X
        }),
        style: {
          color: T.config.colors.secondary,
          height: eC.to({
            range: [0, 1],
            output: [0, !k.canCollapseOnBlur && K ? q : k.collapsedHeight]
          })
        },
        children: (0, s.jsx)(l.animated.div, {
          onMouseLeave: ed,
          onMouseEnter: ec,
          onFocus: el,
          onBlur: eo,
          className: i()(h.contentWrapper, {
            [h.contentWrapperExpanded]: K,
            [h.contentWrapperAccepted]: P
          }),
          style: {
            backgroundColor: k.preEnrollmentBackgroundColor,
            backgroundImage: P ? k.postEnrollmentBackgroundImage : void 0,
            height: eI,
            transform: eC.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, s.jsx)(N.t, {
            springConfig: eE,
            isExpanded: K,
            onHeightChange: e_,
            children: (0, s.jsx)(e, {
              expandedContentRef: ee,
              expansionSpring: eu,
              isExpanded: K,
              isExpansionAnimationComplete: z,
              onCtxMenuClosed: ea,
              onCtxMenuOpened: es,
              onCtxMenuSelection: er,
              quest: T,
              useReducedMotion: b
            })
          })
        })
      })
    }
  }) : (j ? M.log("Not rendered due to asset error") : !x && M.log("Not rendered due to ineligibility"), null)
}
t.Z = 12633 == n.j ? function(e) {
  let {
    overrideQuest: t
  } = e, n = (0, o.e7)([T.Z], () => {
    var e;
    return null !== (e = null != t ? t : T.Z.questDeliveryOverride) && void 0 !== e ? e : (0, R._)(T.Z.quests, I.jn.QUEST_BAR)
  });
  return null == n ? null : (0, s.jsx)(A.p, {
    sentrySource: S.dr.QUESTS_BAR,
    children: (0, s.jsx)(M, {
      quest: n
    })
  }, n.id)
} : null