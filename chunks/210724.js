"use strict";
a.r(t), a.d(t, {
  QuestBar: function() {
    return N
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("718017"),
  o = a("442837"),
  u = a("607070"),
  d = a("819640"),
  c = a("617136"),
  f = a("113434"),
  E = a("569984"),
  h = a("497505"),
  _ = a("918701"),
  C = a("977156"),
  m = a("874137"),
  S = a("78826"),
  p = a("909389"),
  I = a("941348"),
  T = a("46140"),
  g = a("981631"),
  A = a("905277");

function N(e) {
  var t, a, l;
  let {
    quest: E
  } = e, N = (0, C.useIsEligibleForQuests)({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }), v = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), R = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()), L = s.useRef(-1), O = s.useRef(!1), [M, P] = s.useState(!1), [x, y] = s.useState(!1), [D, b] = s.useState(!1), [U, j] = s.useState(!0), [G, w] = s.useState(240), k = s.useRef(null), F = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, B = s.useRef(F), H = (null === (a = E.userStatus) || void 0 === a ? void 0 : a.completedAt) != null, V = (null === (l = E.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, Y = null != E.userStatus && (0, _.isDismissed)(E.userStatus, h.QuestContent.QUEST_BAR), W = (0, f.useIsQuestExpired)(E), {
    hasError: K,
    isLoading: z
  } = (0, S.useQuestsAssetsLoadState)(), q = s.useCallback(() => {
    var e, t;
    w((null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), y(!0)
  }, []), Q = s.useCallback(() => {
    P(!0)
  }, []), Z = s.useCallback(() => {
    P(!1), !O.current && !H && y(!1)
  }, [H]), X = s.useCallback(() => {
    P(!1), !H && y(!1), O.current = !1
  }, [H]), J = s.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? L.current = window.setTimeout(q, 75) : q()
  }, [q]), $ = s.useCallback(() => {
    if (window.clearTimeout(L.current), !H && !M) !O.current && y(!1)
  }, [M, H]), ee = s.useCallback(() => {
    (0, c.trackQuestEvent)({
      questId: E.id,
      event: g.AnalyticEvents.QUEST_HOVER
    }), O.current = !0, J({
      withDelay: !0
    })
  }, [J, E]), et = s.useCallback(() => {
    O.current = !1, $()
  }, [$]);
  s.useLayoutEffect(() => {
    H && q()
  }, [H, q]), s.useLayoutEffect(() => {
    F && !B.current && O.current && q()
  }, [F, q]), s.useLayoutEffect(() => {
    !H && F && !B.current && !O.current && y(!1)
  }, [F, H]);
  let ea = N && !Y && !V && !W && !z,
    en = s.useRef(ea);
  s.useLayoutEffect(() => {
    ea !== en.current && j(!1), en.current = ea
  }, [ea]), s.useEffect(() => {
    B.current = F
  }, [F]);
  let {
    expansionSpring: es
  } = (0, r.useSpring)({
    from: {
      expansionSpring: x ? 0 : 1
    },
    to: {
      expansionSpring: x ? 1 : 0
    },
    config: F ? {
      tension: 900,
      friction: 45,
      clamp: !0
    } : {
      tension: 360,
      friction: 30,
      clamp: !0
    },
    immediate: v,
    onRest: () => {
      b(!0)
    },
    onStart: () => {
      b(!1)
    }
  }), {
    visibilitySpring: el
  } = (0, r.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: ea ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: v,
    onRest: () => {
      j(!0)
    },
    onStart: () => {
      j(!1)
    }
  }), {
    primaryVariant: ei
  } = C.QuestBarExperiment.useExperiment({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: ea && !K
  });
  return N && (ea || !U || z) && !K ? (0, n.jsx)(m.QuestContentImpressionTracker, {
    questOrQuests: E,
    questContent: h.QuestContent.QUEST_BAR,
    overrideVisibility: !R && ea,
    children: () => {
      let e = ei === C.QuestBarExperimentVariants.V2 ? I.default : p.default;
      return (0, n.jsx)(r.animated.div, {
        "aria-hidden": !ea,
        className: i()(A.wrapper, {
          [A.wrapperInvisible]: !ea,
          [A.wrapperVisible]: ea && U
        }),
        style: {
          color: E.config.colors.secondary,
          height: el.to({
            range: [0, 1],
            output: [0, H && x ? G : 40]
          })
        },
        children: (0, n.jsx)(r.animated.div, {
          onMouseLeave: et,
          onMouseEnter: ee,
          onFocus: () => J(),
          onBlur: $,
          className: i()(A.contentWrapper, {
            [A.contentWrapperExpanded]: x,
            [A.contentWrapperAccepted]: F
          }),
          style: {
            backgroundImage: F ? "linear-gradient(90deg, ".concat(E.config.colors.primary, ", ").concat(E.config.colors.secondary, ")") : void 0,
            height: es.to({
              range: [0, 1],
              output: [40, F ? G : 240]
            }),
            transform: el.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, n.jsx)(e, {
            expandedContentRef: k,
            expansionSpring: es,
            isExpanded: x,
            isExpansionAnimationComplete: D,
            onCtxMenuClosed: Z,
            onCtxMenuOpened: Q,
            onCtxMenuSelection: X,
            quest: E,
            useReducedMotion: v
          })
        })
      })
    }
  }) : null
}
t.default = function(e) {
  let {
    overrideQuest: t
  } = e, a = (0, o.useStateFromStores)([E.default], () => null != t ? t : (0, _.getQuestForTargetedContent)(E.default.quests, h.QuestContent.QUEST_BAR));
  return null == a ? null : (0, n.jsx)(S.QuestsAssetContextProvider, {
    sentrySource: T.QuestsExperimentLocations.QUESTS_BAR,
    children: (0, n.jsx)(N, {
      quest: a
    })
  }, a.id)
}