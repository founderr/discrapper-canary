"use strict";
a.r(t), a("47120");
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
t.default = function(e) {
  var t, a, l;
  let {
    overrideQuest: N
  } = e, v = (0, C.useIsEligibleForQuests)({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }), R = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), L = (0, o.useStateFromStores)([E.default], () => null != N ? N : (0, _.getQuestForTargetedContent)(E.default.quests, h.QuestContent.QUEST_BAR)), O = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()), M = s.useRef(-1), P = s.useRef(!1), [x, y] = s.useState(!1), [D, b] = s.useState(!1), [U, j] = s.useState(!1), [G, w] = s.useState(!0), [k, F] = s.useState(240), B = s.useRef(null), H = (null == L ? void 0 : null === (t = L.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, V = s.useRef(H), Y = (null == L ? void 0 : null === (a = L.userStatus) || void 0 === a ? void 0 : a.completedAt) != null, W = (null == L ? void 0 : null === (l = L.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, K = (null == L ? void 0 : L.userStatus) != null && (0, _.isDismissed)(null == L ? void 0 : L.userStatus, h.QuestContent.QUEST_BAR), z = (0, f.useIsQuestExpired)(L), {
    hasError: q,
    isLoading: Q
  } = (0, S.useQuestsAssetsLoadState)(), Z = s.useCallback(() => {
    var e, t;
    F((null !== (t = null === (e = B.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), b(!0)
  }, []), X = s.useCallback(() => {
    y(!0)
  }, []), J = s.useCallback(() => {
    y(!1), !P.current && !Y && b(!1)
  }, [Y]), $ = s.useCallback(() => {
    y(!1), !Y && b(!1), P.current = !1
  }, [Y]), ee = s.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? M.current = window.setTimeout(Z, 75) : Z()
  }, [Z]), et = s.useCallback(() => {
    if (window.clearTimeout(M.current), !Y && !x) !P.current && b(!1)
  }, [x, Y]), ea = s.useCallback(() => {
    null != L && (0, c.trackQuestEvent)({
      questId: L.id,
      event: g.AnalyticEvents.QUEST_HOVER
    }), P.current = !0, ee({
      withDelay: !0
    })
  }, [ee, L]), en = s.useCallback(() => {
    P.current = !1, et()
  }, [et]);
  s.useLayoutEffect(() => {
    Y && Z()
  }, [Y, Z]), s.useLayoutEffect(() => {
    H && !V.current && P.current && Z()
  }, [H, Z]), s.useLayoutEffect(() => {
    !Y && H && !V.current && !P.current && b(!1)
  }, [H, Y]);
  let es = v && !K && !W && null != L && !z && !Q,
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
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: es && !q
  });
  return v && null != L && (es || !G || Q) && !q ? (0, n.jsx)(m.QuestContentImpressionTracker, {
    questOrQuests: L,
    questContent: h.QuestContent.QUEST_BAR,
    overrideVisibility: !O && es,
    children: () => {
      let e = eo === C.QuestBarExperimentVariants.V2 ? I.default : p.default;
      return (0, n.jsx)(r.animated.div, {
        "aria-hidden": !es,
        className: i()(A.wrapper, {
          [A.wrapperInvisible]: !es,
          [A.wrapperVisible]: es && G
        }),
        style: {
          color: L.config.colors.secondary,
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
          className: i()(A.contentWrapper, {
            [A.contentWrapperExpanded]: D,
            [A.contentWrapperAccepted]: H
          }),
          style: {
            backgroundImage: H ? "linear-gradient(90deg, ".concat(L.config.colors.primary, ", ").concat(L.config.colors.secondary, ")") : void 0,
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
            expandedContentRef: B,
            expansionSpring: ei,
            isExpanded: D,
            isExpansionAnimationComplete: U,
            onCtxMenuClosed: J,
            onCtxMenuOpened: X,
            onCtxMenuSelection: $,
            quest: L,
            useReducedMotion: R
          })
        })
      })
    }
  }) : null
}