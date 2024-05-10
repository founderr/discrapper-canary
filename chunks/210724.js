"use strict";
n.r(t), n.d(t, {
  QuestBar: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
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
  var t, n, l;
  let {
    quest: E
  } = e, v = (0, m.getQuestLogger)({
    quest: E,
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }), R = (0, C.useIsEligibleForQuests)({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }), L = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), O = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()), y = s.useRef(-1), M = s.useRef(!1), [P, x] = s.useState(!1), [D, b] = s.useState(!1), [U, j] = s.useState(!1), [G, k] = s.useState(!0), [w, F] = s.useState(240), B = s.useRef(null), H = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, V = s.useRef(H), Y = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, W = (null === (l = E.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, K = null != E.userStatus && (0, _.isDismissed)(E.userStatus, h.QuestContent.QUEST_BAR), z = (0, f.useIsQuestExpired)(E), {
    hasError: q,
    isLoading: Q
  } = (0, p.useQuestsAssetsLoadState)(), Z = s.useCallback(() => {
    var e, t;
    F((null !== (t = null === (e = B.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), b(!0)
  }, []), X = s.useCallback(() => {
    x(!0)
  }, []), J = s.useCallback(() => {
    x(!1), !M.current && !Y && b(!1)
  }, [Y]), $ = s.useCallback(() => {
    x(!1), !Y && b(!1), M.current = !1
  }, [Y]), ee = s.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? y.current = window.setTimeout(Z, 75) : Z()
  }, [Z]), et = s.useCallback(() => {
    if (window.clearTimeout(y.current), !Y && !P) !M.current && b(!1)
  }, [P, Y]), en = s.useCallback(() => {
    (0, c.trackQuestEvent)({
      questId: E.id,
      event: A.AnalyticEvents.QUEST_HOVER
    }), M.current = !0, ee({
      withDelay: !0
    })
  }, [ee, E]), ea = s.useCallback(() => {
    M.current = !1, et()
  }, [et]);
  s.useLayoutEffect(() => {
    Y && Z()
  }, [Y, Z]), s.useLayoutEffect(() => {
    H && !V.current && M.current && Z()
  }, [H, Z]), s.useLayoutEffect(() => {
    !Y && H && !V.current && !M.current && b(!1)
  }, [H, Y]);
  let es = R && !K && !W && !z && !Q,
    el = s.useRef(es);
  s.useLayoutEffect(() => {
    es !== el.current && k(!1), el.current = es
  }, [es]), s.useEffect(() => {
    V.current = H
  }, [H]);
  let {
    expansionSpring: ei
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
    immediate: L,
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
    immediate: L,
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
    overrideVisibility: !O && es,
    children: () => {
      let e = eo === C.QuestBarExperimentVariants.V2 ? g.default : I.default;
      return (0, a.jsx)(r.animated.div, {
        "aria-hidden": !es,
        className: i()(N.wrapper, {
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
          className: i()(N.contentWrapper, {
            [N.contentWrapperExpanded]: D,
            [N.contentWrapperAccepted]: H
          }),
          style: {
            backgroundImage: H ? "linear-gradient(90deg, ".concat(E.config.colors.primary, ", ").concat(E.config.colors.secondary, ")") : void 0,
            height: ei.to({
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
            expansionSpring: ei,
            isExpanded: D,
            isExpansionAnimationComplete: U,
            onCtxMenuClosed: J,
            onCtxMenuOpened: X,
            onCtxMenuSelection: $,
            quest: E,
            useReducedMotion: L
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