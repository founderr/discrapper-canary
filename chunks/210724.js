"use strict";
n.r(t), n.d(t, {
  QuestBar: function() {
    return N
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("718017"),
  o = n("442837"),
  u = n("607070"),
  d = n("819640"),
  c = n("617136"),
  f = n("113434"),
  E = n("569984"),
  h = n("497505"),
  _ = n("918701"),
  C = n("977156"),
  m = n("874137"),
  S = n("78826"),
  p = n("909389"),
  I = n("941348"),
  T = n("46140"),
  g = n("981631"),
  A = n("905277");

function N(e) {
  var t, n, l;
  let {
    quest: E
  } = e, N = (0, C.useIsEligibleForQuests)({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }), v = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), L = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()), R = s.useRef(-1), O = s.useRef(!1), [M, P] = s.useState(!1), [y, x] = s.useState(!1), [D, b] = s.useState(!1), [U, j] = s.useState(!0), [G, w] = s.useState(240), k = s.useRef(null), B = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, F = s.useRef(B), H = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, V = (null === (l = E.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, Y = null != E.userStatus && (0, _.isDismissed)(E.userStatus, h.QuestContent.QUEST_BAR), W = (0, f.useIsQuestExpired)(E), {
    hasError: K,
    isLoading: z
  } = (0, S.useQuestsAssetsLoadState)(), q = s.useCallback(() => {
    var e, t;
    w((null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), x(!0)
  }, []), Q = s.useCallback(() => {
    P(!0)
  }, []), Z = s.useCallback(() => {
    P(!1), !O.current && !H && x(!1)
  }, [H]), X = s.useCallback(() => {
    P(!1), !H && x(!1), O.current = !1
  }, [H]), J = s.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? R.current = window.setTimeout(q, 75) : q()
  }, [q]), $ = s.useCallback(() => {
    if (window.clearTimeout(R.current), !H && !M) !O.current && x(!1)
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
    B && !F.current && O.current && q()
  }, [B, q]), s.useLayoutEffect(() => {
    !H && B && !F.current && !O.current && x(!1)
  }, [B, H]);
  let en = N && !Y && !V && !W && !z,
    ea = s.useRef(en);
  s.useLayoutEffect(() => {
    en !== ea.current && j(!1), ea.current = en
  }, [en]), s.useEffect(() => {
    F.current = B
  }, [B]);
  let {
    expansionSpring: es
  } = (0, r.useSpring)({
    from: {
      expansionSpring: y ? 0 : 1
    },
    to: {
      expansionSpring: y ? 1 : 0
    },
    config: B ? {
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
      visibilitySpring: en ? 1 : 0
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
    autoTrackExposure: en && !K
  });
  return N && (en || !U || z) && !K ? (0, a.jsx)(m.QuestContentImpressionTracker, {
    questOrQuests: E,
    questContent: h.QuestContent.QUEST_BAR,
    overrideVisibility: !L && en,
    children: () => {
      let e = ei === C.QuestBarExperimentVariants.V2 ? I.default : p.default;
      return (0, a.jsx)(r.animated.div, {
        "aria-hidden": !en,
        className: i()(A.wrapper, {
          [A.wrapperInvisible]: !en,
          [A.wrapperVisible]: en && U
        }),
        style: {
          color: E.config.colors.secondary,
          height: el.to({
            range: [0, 1],
            output: [0, H && y ? G : 40]
          })
        },
        children: (0, a.jsx)(r.animated.div, {
          onMouseLeave: et,
          onMouseEnter: ee,
          onFocus: () => J(),
          onBlur: $,
          className: i()(A.contentWrapper, {
            [A.contentWrapperExpanded]: y,
            [A.contentWrapperAccepted]: B
          }),
          style: {
            backgroundImage: B ? "linear-gradient(90deg, ".concat(E.config.colors.primary, ", ").concat(E.config.colors.secondary, ")") : void 0,
            height: es.to({
              range: [0, 1],
              output: [40, B ? G : 240]
            }),
            transform: el.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, a.jsx)(e, {
            expandedContentRef: k,
            expansionSpring: es,
            isExpanded: y,
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
  } = e, n = (0, o.useStateFromStores)([E.default], () => null != t ? t : (0, _.getQuestForTargetedContent)(E.default.quests, h.QuestContent.QUEST_BAR));
  return null == n ? null : (0, a.jsx)(S.QuestsAssetContextProvider, {
    sentrySource: T.QuestsExperimentLocations.QUESTS_BAR,
    children: (0, a.jsx)(N, {
      quest: n
    })
  }, n.id)
}