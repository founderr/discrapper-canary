"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("685626"),
  o = n("442837"),
  u = n("607070"),
  d = n("819640"),
  c = n("617136"),
  f = n("113434"),
  E = n("569984"),
  h = n("497505"),
  _ = n("918701"),
  C = n("977156"),
  m = n("5881"),
  S = n("874137"),
  p = n("78826"),
  I = n("909389"),
  g = n("941348"),
  T = n("46140"),
  A = n("981631"),
  N = n("837955");
t.default = function(e) {
  var t, n, i;
  let {
    overrideQuest: v
  } = e, R = (0, m.getQuestLogger)({
    quest: v,
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }), O = (0, C.useIsEligibleForQuests)({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }), L = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), M = (0, o.useStateFromStores)([E.default], () => null != v ? v : (0, _.getQuestForTargetedContent)(E.default.quests, h.QuestContent.QUEST_BAR)), y = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()), P = s.useRef(-1), x = s.useRef(!1), [D, b] = s.useState(!1), [U, j] = s.useState(!1), [G, k] = s.useState(!1), [w, F] = s.useState(!0), [B, H] = s.useState(240), V = s.useRef(null), Y = (null == M ? void 0 : null === (t = M.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, W = s.useRef(Y), K = (null == M ? void 0 : null === (n = M.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, z = (null == M ? void 0 : null === (i = M.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, q = (null == M ? void 0 : M.userStatus) != null && (0, _.isDismissed)(null == M ? void 0 : M.userStatus, h.QuestContent.QUEST_BAR), Q = (0, f.useIsQuestExpired)(M), {
    hasError: Z,
    isLoading: X
  } = (0, p.useQuestsAssetsLoadState)(), J = s.useCallback(() => {
    var e, t;
    H((null !== (t = null === (e = V.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), j(!0)
  }, []), $ = s.useCallback(() => {
    b(!0)
  }, []), ee = s.useCallback(() => {
    b(!1), !x.current && !K && j(!1)
  }, [K]), et = s.useCallback(() => {
    b(!1), !K && j(!1), x.current = !1
  }, [K]), en = s.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? P.current = window.setTimeout(J, 75) : J()
  }, [J]), ea = s.useCallback(() => {
    if (window.clearTimeout(P.current), !K && !D) !x.current && j(!1)
  }, [D, K]), es = s.useCallback(() => {
    null != M && (0, c.trackQuestEvent)({
      questId: M.id,
      event: A.AnalyticEvents.QUEST_HOVER
    }), x.current = !0, en({
      withDelay: !0
    })
  }, [en, M]), ei = s.useCallback(() => {
    x.current = !1, ea()
  }, [ea]);
  s.useLayoutEffect(() => {
    K && J()
  }, [K, J]), s.useLayoutEffect(() => {
    Y && !W.current && x.current && J()
  }, [Y, J]), s.useLayoutEffect(() => {
    !K && Y && !W.current && !x.current && j(!1)
  }, [Y, K]);
  let el = O && !q && !z && null != M && !Q && !X,
    er = s.useRef(el);
  s.useLayoutEffect(() => {
    el !== er.current && F(!1), er.current = el
  }, [el]), s.useEffect(() => {
    W.current = Y
  }, [Y]);
  let {
    expansionSpring: eo
  } = (0, r.useSpring)({
    from: {
      expansionSpring: U ? 0 : 1
    },
    to: {
      expansionSpring: U ? 1 : 0
    },
    config: Y ? {
      tension: 900,
      friction: 45,
      clamp: !0
    } : {
      tension: 360,
      friction: 30,
      clamp: !0
    },
    immediate: L,
    onRest: () => {
      k(!0)
    },
    onStart: () => {
      k(!1)
    }
  }), {
    visibilitySpring: eu
  } = (0, r.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: el ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: L,
    onRest: () => {
      F(!0)
    },
    onStart: () => {
      F(!1)
    }
  }), {
    primaryVariant: ed
  } = C.QuestBarExperiment.useExperiment({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: el && !Z
  });
  return O && null != M && (el || !w || X) && !Z ? (0, a.jsx)(S.QuestContentImpressionTracker, {
    questOrQuests: M,
    questContent: h.QuestContent.QUEST_BAR,
    overrideVisibility: !y && el,
    children: () => {
      let e = ed === C.QuestBarExperimentVariants.V2 ? g.default : I.default;
      return (0, a.jsx)(r.animated.div, {
        "aria-hidden": !el,
        className: l()(N.wrapper, {
          [N.wrapperInvisible]: !el,
          [N.wrapperVisible]: el && w
        }),
        style: {
          color: M.config.colors.secondary,
          height: eu.to({
            range: [0, 1],
            output: [0, K && U ? B : 40]
          })
        },
        children: (0, a.jsx)(r.animated.div, {
          onMouseLeave: ei,
          onMouseEnter: es,
          onFocus: () => en(),
          onBlur: ea,
          className: l()(N.contentWrapper, {
            [N.contentWrapperExpanded]: U,
            [N.contentWrapperAccepted]: Y
          }),
          style: {
            backgroundImage: Y ? "linear-gradient(90deg, ".concat(M.config.colors.primary, ", ").concat(M.config.colors.secondary, ")") : void 0,
            height: eo.to({
              range: [0, 1],
              output: [40, Y ? B : ed === C.QuestBarExperimentVariants.V2 ? 270 : 240]
            }),
            transform: eu.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, a.jsx)(e, {
            expandedContentRef: V,
            expansionSpring: eo,
            isExpanded: U,
            isExpansionAnimationComplete: G,
            onCtxMenuClosed: ee,
            onCtxMenuOpened: $,
            onCtxMenuSelection: et,
            quest: M,
            useReducedMotion: L
          })
        })
      })
    }
  }) : (Z ? R.log("Not rendered due to asset error") : !O && R.log("Not rendered due to ineligibility"), null)
}