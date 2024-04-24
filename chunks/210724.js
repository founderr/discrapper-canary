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
  f = a("57655"),
  E = a("113434"),
  h = a("569984"),
  _ = a("497505"),
  C = a("918701"),
  m = a("874137"),
  S = a("78826"),
  I = a("909389"),
  p = a("941348"),
  T = a("46140"),
  g = a("981631"),
  A = a("177630");
t.default = function(e) {
  var t, a, l;
  let {
    overrideQuest: N
  } = e, v = (0, f.useIsEligibleForQuests)({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }), R = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), O = (0, o.useStateFromStores)([h.default], () => null != N ? N : (0, C.getQuestForTargetedContent)(h.default.quests, _.QuestContent.QUEST_BAR)), L = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()), P = s.useRef(-1), M = s.useRef(!1), [x, y] = s.useState(!1), [D, b] = s.useState(!1), [U, j] = s.useState(!1), [G, w] = s.useState(!0), [k, F] = s.useState(240), B = s.useRef(null), H = (null == O ? void 0 : null === (t = O.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, V = s.useRef(H), Y = (null == O ? void 0 : null === (a = O.userStatus) || void 0 === a ? void 0 : a.completedAt) != null, W = (null == O ? void 0 : null === (l = O.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, K = (null == O ? void 0 : O.userStatus) != null && (0, C.isDismissed)(null == O ? void 0 : O.userStatus, _.QuestContent.QUEST_BAR), z = (0, E.useIsQuestExpired)(O), {
    hasError: q,
    isLoading: Q
  } = (0, S.useQuestsAssetsLoadState)(), Z = s.useCallback(() => {
    var e, t;
    F((null !== (t = null === (e = B.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), b(!0)
  }, []), X = s.useCallback(() => {
    y(!0)
  }, []), J = s.useCallback(() => {
    y(!1), !M.current && !Y && b(!1)
  }, [Y]), $ = s.useCallback(() => {
    y(!1), !Y && b(!1), M.current = !1
  }, [Y]), ee = s.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? P.current = window.setTimeout(Z, 75) : Z()
  }, [Z]), et = s.useCallback(() => {
    if (window.clearTimeout(P.current), !Y && !x) !M.current && b(!1)
  }, [x, Y]), ea = s.useCallback(() => {
    null != O && (0, c.trackQuestEvent)({
      questId: O.id,
      event: g.AnalyticEvents.QUEST_HOVER
    }), M.current = !0, ee({
      withDelay: !0
    })
  }, [ee, O]), en = s.useCallback(() => {
    M.current = !1, et()
  }, [et]);
  s.useLayoutEffect(() => {
    Y && Z()
  }, [Y, Z]), s.useLayoutEffect(() => {
    H && !V.current && M.current && Z()
  }, [H, Z]), s.useLayoutEffect(() => {
    !Y && H && !V.current && !M.current && b(!1)
  }, [H, Y]);
  let es = v && !K && !W && null != O && !z && !Q,
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
  } = f.QuestBarExperiment.useExperiment({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: es && !q
  });
  return v && null != O && (es || !G || Q) && !q ? (0, n.jsx)(m.QuestContentImpressionTracker, {
    questOrQuests: O,
    questContent: _.QuestContent.QUEST_BAR,
    overrideVisibility: !L && es,
    children: () => {
      let e = eo === f.QuestBarExperimentVariants.V2 ? p.default : I.default;
      return (0, n.jsx)(r.animated.div, {
        "aria-hidden": !es,
        className: i()(A.wrapper, {
          [A.wrapperInvisible]: !es,
          [A.wrapperVisible]: es && G
        }),
        style: {
          color: O.config.colors.secondary,
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
            backgroundImage: H ? "linear-gradient(90deg, ".concat(O.config.colors.primary, ", ").concat(O.config.colors.secondary, ")") : void 0,
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
            quest: O,
            useReducedMotion: R
          })
        })
      })
    }
  }) : null
}