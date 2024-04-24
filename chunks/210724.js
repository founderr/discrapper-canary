"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("718017"),
  i = a("442837"),
  r = a("607070"),
  o = a("819640"),
  u = a("617136"),
  d = a("57655"),
  c = a("113434"),
  f = a("569984"),
  E = a("497505"),
  h = a("918701"),
  _ = a("874137"),
  C = a("78826"),
  m = a("909389"),
  S = a("941348"),
  I = a("46140"),
  p = a("981631");
t.default = function(e) {
  var t, a, T;
  let {
    overrideQuest: g
  } = e, A = (0, d.useIsEligibleForQuests)({
    location: I.QuestsExperimentLocations.QUESTS_BAR
  }), N = (0, i.useStateFromStores)([r.default], () => r.default.useReducedMotion), v = (0, i.useStateFromStores)([f.default], () => null != g ? g : (0, h.getQuestForTargetedContent)(f.default.quests, E.QuestContent.QUEST_BAR)), R = (0, i.useStateFromStores)([o.default], () => o.default.hasLayers()), O = s.useRef(-1), L = s.useRef(!1), [M, P] = s.useState(!1), [x, y] = s.useState(!1), [D, b] = s.useState(!1), [U, j] = s.useState(!0), [G, w] = s.useState(240), k = s.useRef(null), F = (null == v ? void 0 : null === (t = v.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, B = s.useRef(F), H = (null == v ? void 0 : null === (a = v.userStatus) || void 0 === a ? void 0 : a.completedAt) != null, V = (null == v ? void 0 : null === (T = v.userStatus) || void 0 === T ? void 0 : T.claimedAt) != null, Y = (null == v ? void 0 : v.userStatus) != null && (0, h.isDismissed)(null == v ? void 0 : v.userStatus, E.QuestContent.QUEST_BAR), W = (0, c.useIsQuestExpired)(v), {
    hasError: K,
    isLoading: z
  } = (0, C.useQuestsAssetsLoadState)(), q = s.useCallback(() => {
    var e, t;
    w((null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), y(!0)
  }, []), Q = s.useCallback(() => {
    P(!0)
  }, []), Z = s.useCallback(() => {
    P(!1), !L.current && !H && y(!1)
  }, [H]), X = s.useCallback(() => {
    P(!1), !H && y(!1), L.current = !1
  }, [H]), J = s.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? O.current = window.setTimeout(q, 75) : q()
  }, [q]), $ = s.useCallback(() => {
    if (window.clearTimeout(O.current), !H && !M) !L.current && y(!1)
  }, [M, H]), ee = s.useCallback(() => {
    null != v && (0, u.trackQuestEvent)({
      questId: v.id,
      event: p.AnalyticEvents.QUEST_HOVER
    }), L.current = !0, J({
      withDelay: !0
    })
  }, [J, v]), et = s.useCallback(() => {
    L.current = !1, $()
  }, [$]);
  s.useLayoutEffect(() => {
    H && q()
  }, [H, q]), s.useLayoutEffect(() => {
    F && !B.current && L.current && q()
  }, [F, q]), s.useLayoutEffect(() => {
    !H && F && !B.current && !L.current && y(!1)
  }, [F, H]);
  let ea = A && !Y && !V && null != v && !W && !z,
    en = s.useRef(ea);
  s.useLayoutEffect(() => {
    ea !== en.current && j(!1), en.current = ea
  }, [ea]), s.useEffect(() => {
    B.current = F
  }, [F]);
  let {
    expansionSpring: es
  } = (0, l.useSpring)({
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
    immediate: N,
    onRest: () => {
      b(!0)
    },
    onStart: () => {
      b(!1)
    }
  }), {
    visibilitySpring: el
  } = (0, l.useSpring)({
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
    immediate: N,
    onRest: () => {
      j(!0)
    },
    onStart: () => {
      j(!1)
    }
  }), {
    primaryVariant: ei
  } = d.QuestBarExperiment.useExperiment({
    location: I.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: ea && !K
  });
  return A && null != v && (ea || !U || z) && !K ? (0, n.jsx)(_.QuestContentImpressionTracker, {
    questOrQuests: v,
    questContent: E.QuestContent.QUEST_BAR,
    overrideVisibility: !R && ea,
    children: () => ei === d.QuestBarExperimentVariants.V2 ? (0, n.jsx)(S.default, {
      onBlur: $,
      onCtxMenuClosed: Z,
      onCtxMenuOpened: Q,
      onCtxMenuSelection: X,
      onFocus: J,
      onMouseEnter: ee,
      onMouseLeave: et,
      expandedContentHeight: G,
      expandedContentRef: k,
      expansionSpring: es,
      isExpanded: x,
      isExpansionAnimationComplete: D,
      isQuestAccepted: F,
      isQuestBarVisible: ea,
      isQuestCompleted: H,
      isVisibilityAnimationAtRest: U,
      quest: v,
      useReducedMotion: N,
      visibilitySpring: el
    }) : (0, n.jsx)(m.default, {
      onBlur: $,
      onCtxMenuClosed: Z,
      onCtxMenuOpened: Q,
      onCtxMenuSelection: X,
      onFocus: J,
      onMouseEnter: ee,
      onMouseLeave: et,
      expandedContentHeight: G,
      expandedContentRef: k,
      expansionSpring: es,
      isExpanded: x,
      isExpansionAnimationComplete: D,
      isQuestAccepted: F,
      isQuestBarVisible: ea,
      isQuestCompleted: H,
      isVisibilityAnimationAtRest: U,
      quest: v,
      useReducedMotion: N,
      visibilitySpring: el
    })
  }) : null
}