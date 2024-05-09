"use strict";
n.r(t), n.d(t, {
  QuestBar: function() {
    return v
  }
}), n("47120");
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

function v(e) {
  var t, n, i;
  let {
    quest: E
  } = e, v = (0, m.getQuestLogger)({
    quest: E,
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }), R = (0, C.useIsEligibleForQuests)({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }), O = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), L = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()), M = s.useRef(-1), y = s.useRef(!1), [P, x] = s.useState(!1), [D, b] = s.useState(!1), [U, j] = s.useState(!1), [G, k] = s.useState(!0), [w, F] = s.useState(240), B = s.useRef(null), H = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, V = s.useRef(H), Y = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, W = (null === (i = E.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, K = null != E.userStatus && (0, _.isDismissed)(E.userStatus, h.QuestContent.QUEST_BAR), z = (0, f.useIsQuestExpired)(E), {
    hasError: q,
    isLoading: Q
  } = (0, p.useQuestsAssetsLoadState)(), Z = s.useCallback(() => {
    var e, t;
    F((null !== (t = null === (e = B.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), b(!0)
  }, []), X = s.useCallback(() => {
    x(!0)
  }, []), J = s.useCallback(() => {
    x(!1), !y.current && !Y && b(!1)
  }, [Y]), $ = s.useCallback(() => {
    x(!1), !Y && b(!1), y.current = !1
  }, [Y]), ee = s.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? M.current = window.setTimeout(Z, 75) : Z()
  }, [Z]), et = s.useCallback(() => {
    if (window.clearTimeout(M.current), !Y && !P) !y.current && b(!1)
  }, [P, Y]), en = s.useCallback(() => {
    (0, c.trackQuestEvent)({
      questId: E.id,
      event: A.AnalyticEvents.QUEST_HOVER
    }), y.current = !0, ee({
      withDelay: !0
    })
  }, [ee, E]), ea = s.useCallback(() => {
    y.current = !1, et()
  }, [et]);
  s.useLayoutEffect(() => {
    Y && Z()
  }, [Y, Z]), s.useLayoutEffect(() => {
    H && !V.current && y.current && Z()
  }, [H, Z]), s.useLayoutEffect(() => {
    !Y && H && !V.current && !y.current && b(!1)
  }, [H, Y]);
  let es = R && !K && !W && !z && !Q,
    ei = s.useRef(es);
  s.useLayoutEffect(() => {
    es !== ei.current && k(!1), ei.current = es
  }, [es]), s.useEffect(() => {
    V.current = H
  }, [H]);
  let {
    expansionSpring: el
  } = (0, r.useSpring)({
    to: {
      expansionSpring: D ? 1 : 0
    },
    config: H ? {
      tension: 900,
      friction: 45,
      clamp: !0
    } : {
      tension: 360,
      friction: 30,
      clamp: !0
    },
    immediate: O,
    onRest: () => {
      j(!0)
    },
    onStart: () => {
      j(!1)
    }
  }), {
    visibilitySpring: er
  } = (0, r.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: es ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: O,
    onRest: () => {
      k(!0)
    },
    onStart: () => {
      k(!1)
    }
  }), {
    primaryVariant: eo
  } = C.QuestBarExperiment.useExperiment({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: es && !q
  });
  return R && (es || !G || Q) && !q ? (0, a.jsx)(S.QuestContentImpressionTracker, {
    questOrQuests: E,
    questContent: h.QuestContent.QUEST_BAR,
    overrideVisibility: !L && es,
    children: () => {
      let e = eo === C.QuestBarExperimentVariants.V2 ? g.default : I.default;
      return (0, a.jsx)(r.animated.div, {
        "aria-hidden": !es,
        className: l()(N.wrapper, {
          [N.wrapperInvisible]: !es,
          [N.wrapperVisible]: es && G
        }),
        style: {
          color: E.config.colors.secondary,
          height: er.to({
            range: [0, 1],
            output: [0, Y && D ? w : 40]
          })
        },
        children: (0, a.jsx)(r.animated.div, {
          onMouseLeave: ea,
          onMouseEnter: en,
          onFocus: () => ee(),
          onBlur: et,
          className: l()(N.contentWrapper, {
            [N.contentWrapperExpanded]: D,
            [N.contentWrapperAccepted]: H
          }),
          style: {
            backgroundImage: H ? "linear-gradient(90deg, ".concat(E.config.colors.primary, ", ").concat(E.config.colors.secondary, ")") : void 0,
            height: el.to({
              range: [0, 1],
              output: [40, H ? w : eo === C.QuestBarExperimentVariants.V2 ? 270 : 240]
            }),
            transform: er.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, a.jsx)(e, {
            expandedContentRef: B,
            expansionSpring: el,
            isExpanded: D,
            isExpansionAnimationComplete: U,
            onCtxMenuClosed: J,
            onCtxMenuOpened: X,
            onCtxMenuSelection: $,
            quest: E,
            useReducedMotion: O
          })
        })
      })
    }
  }) : (q ? v.log("Not rendered due to asset error") : !R && v.log("Not rendered due to ineligibility"), null)
}
t.default = function(e) {
  let {
    overrideQuest: t
  } = e, n = (0, o.useStateFromStores)([E.default], () => null != t ? t : (0, _.getQuestForTargetedContent)(E.default.quests, h.QuestContent.QUEST_BAR));
  return null == n ? null : (0, a.jsx)(p.QuestsAssetContextProvider, {
    sentrySource: T.QuestsExperimentLocations.QUESTS_BAR,
    children: (0, a.jsx)(v, {
      quest: n
    })
  }, n.id)
}