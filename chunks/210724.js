"use strict";
a.r(t), a.d(t, {
  QuestBar: function() {
    return v
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
  m = a("5881"),
  S = a("874137"),
  p = a("78826"),
  I = a("909389"),
  T = a("941348"),
  g = a("46140"),
  A = a("981631"),
  N = a("905277");

function v(e) {
  var t, a, l;
  let {
    quest: E
  } = e, v = (0, m.useQuestBarLogger)(E), L = (0, C.useIsEligibleForQuests)({
    location: g.QuestsExperimentLocations.QUESTS_BAR
  }), R = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), O = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()), M = s.useRef(-1), P = s.useRef(!1), [y, x] = s.useState(!1), [D, b] = s.useState(!1), [U, j] = s.useState(!1), [G, w] = s.useState(!0), [k, B] = s.useState(240), F = s.useRef(null), H = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, V = s.useRef(H), Y = (null === (a = E.userStatus) || void 0 === a ? void 0 : a.completedAt) != null, W = (null === (l = E.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, K = null != E.userStatus && (0, _.isDismissed)(E.userStatus, h.QuestContent.QUEST_BAR), z = (0, f.useIsQuestExpired)(E), {
    hasError: q,
    isLoading: Q
  } = (0, p.useQuestsAssetsLoadState)(), Z = s.useCallback(() => {
    var e, t;
    B((null !== (t = null === (e = F.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), b(!0)
  }, []), X = s.useCallback(() => {
    x(!0)
  }, []), J = s.useCallback(() => {
    x(!1), !P.current && !Y && b(!1)
  }, [Y]), $ = s.useCallback(() => {
    x(!1), !Y && b(!1), P.current = !1
  }, [Y]), ee = s.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? M.current = window.setTimeout(Z, 75) : Z()
  }, [Z]), et = s.useCallback(() => {
    if (window.clearTimeout(M.current), !Y && !y) !P.current && b(!1)
  }, [y, Y]), ea = s.useCallback(() => {
    (0, c.trackQuestEvent)({
      questId: E.id,
      event: A.AnalyticEvents.QUEST_HOVER
    }), P.current = !0, ee({
      withDelay: !0
    })
  }, [ee, E]), en = s.useCallback(() => {
    P.current = !1, et()
  }, [et]);
  s.useLayoutEffect(() => {
    Y && Z()
  }, [Y, Z]), s.useLayoutEffect(() => {
    H && !V.current && P.current && Z()
  }, [H, Z]), s.useLayoutEffect(() => {
    !Y && H && !V.current && !P.current && b(!1)
  }, [H, Y]);
  let es = L && !K && !W && !z && !Q,
    el = s.useRef(es);
  s.useLayoutEffect(() => {
    es !== el.current && w(!1), el.current = es
  }, [es]), s.useEffect(() => {
    V.current = H
  }, [H]);
  let {
    expansionSpring: ei
  } = (0, r.useSpring)({
    from: {
      expansionSpring: D ? 0 : 1
    },
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
    immediate: R,
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
    immediate: R,
    onRest: () => {
      w(!0)
    },
    onStart: () => {
      w(!1)
    }
  }), {
    primaryVariant: eo
  } = C.QuestBarExperiment.useExperiment({
    location: g.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: es && !q
  });
  return L && (es || !G || Q) && !q ? (0, n.jsx)(S.QuestContentImpressionTracker, {
    questOrQuests: E,
    questContent: h.QuestContent.QUEST_BAR,
    overrideVisibility: !O && es,
    children: () => {
      let e = eo === C.QuestBarExperimentVariants.V2 ? T.default : I.default;
      return (0, n.jsx)(r.animated.div, {
        "aria-hidden": !es,
        className: i()(N.wrapper, {
          [N.wrapperInvisible]: !es,
          [N.wrapperVisible]: es && G
        }),
        style: {
          color: E.config.colors.secondary,
          height: er.to({
            range: [0, 1],
            output: [0, Y && D ? k : 40]
          })
        },
        children: (0, n.jsx)(r.animated.div, {
          onMouseLeave: en,
          onMouseEnter: ea,
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
              output: [40, H ? k : 240]
            }),
            transform: er.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, n.jsx)(e, {
            expandedContentRef: F,
            expansionSpring: ei,
            isExpanded: D,
            isExpansionAnimationComplete: U,
            onCtxMenuClosed: J,
            onCtxMenuOpened: X,
            onCtxMenuSelection: $,
            quest: E,
            useReducedMotion: R
          })
        })
      })
    }
  }) : (q ? v.log("Not rendered due to asset error") : !L && v.log("Not rendered due to ineligibility"), null)
}
t.default = function(e) {
  let {
    overrideQuest: t
  } = e, a = (0, o.useStateFromStores)([E.default], () => null != t ? t : (0, _.getQuestForTargetedContent)(E.default.quests, h.QuestContent.QUEST_BAR));
  return null == a ? null : (0, n.jsx)(p.QuestsAssetContextProvider, {
    sentrySource: g.QuestsExperimentLocations.QUESTS_BAR,
    children: (0, n.jsx)(v, {
      quest: a
    })
  }, a.id)
}