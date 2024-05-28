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
  r = n("920906"),
  o = n("442837"),
  u = n("607070"),
  d = n("819640"),
  c = n("617136"),
  f = n("113434"),
  E = n("569984"),
  h = n("497505"),
  _ = n("918701"),
  C = n("988303"),
  m = n("977156"),
  S = n("5881"),
  p = n("874137"),
  I = n("78826"),
  g = n("448018"),
  T = n("46140"),
  A = n("981631"),
  N = n("837955");

function v(e) {
  var t, n, l;
  let {
    quest: E
  } = e, v = (0, S.getQuestLogger)({
    quest: E,
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }), R = (0, m.useIsEligibleForQuests)({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }), O = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), L = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()), M = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, P = s.useRef(M), x = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, y = (null === (l = E.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, D = null != E.userStatus && (0, _.isDismissed)(E.userStatus, h.QuestContent.QUEST_BAR), b = (0, f.useIsQuestExpired)(E), {
    hasError: U,
    isLoading: j
  } = (0, I.useQuestsAssetsLoadState)(), G = R && !D && !y && !b && !j, w = s.useRef(G), {
    primaryVariant: k,
    progressVariant: B
  } = C.QuestBarExperiment.useExperiment({
    location: T.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: G && !U
  }), F = s.useMemo(() => (0, g.getQuestBarVariantConfig)(E, k, B), [E, k, B]), H = s.useRef(-1), V = s.useRef(!1), [Y, W] = s.useState(!1), [K, z] = s.useState(!1), [q, Q] = s.useState(!1), [Z, X] = s.useState(!0), [J, $] = s.useState(F.preEnrollmentExpandedHeight), ee = s.useRef(null), et = s.useCallback(() => {
    var e, t;
    $((null !== (t = null === (e = ee.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), z(!0)
  }, []), en = s.useCallback(() => {
    W(!0)
  }, []), ea = s.useCallback(() => {
    W(!1), !V.current && !x && z(!1)
  }, [x]), es = s.useCallback(() => {
    W(!1), !x && z(!1), V.current = !1
  }, [x]), el = s.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? H.current = window.setTimeout(et, 75) : et()
  }, [et]), ei = s.useCallback(() => {
    if (window.clearTimeout(H.current), !!F.canCollapseOnBlur && !Y) !V.current && z(!1)
  }, [Y, F]), er = s.useCallback(() => {
    (0, c.trackQuestEvent)({
      questId: E.id,
      event: A.AnalyticEvents.QUEST_HOVER
    }), V.current = !0, el({
      withDelay: !0
    })
  }, [el, E]), eo = s.useCallback(() => {
    V.current = !1, ei()
  }, [ei]);
  s.useLayoutEffect(() => {
    x && F.shouldExpandOnQuestComplete && et()
  }, [et, x, F]), s.useLayoutEffect(() => {
    M && !P.current && V.current && et()
  }, [M, et]), s.useLayoutEffect(() => {
    !x && M && !P.current && !V.current && z(!1)
  }, [M, x]), s.useLayoutEffect(() => {
    G !== w.current && X(!1), w.current = G
  }, [G]), s.useEffect(() => {
    P.current = M
  }, [M]);
  let {
    expansionSpring: eu
  } = (0, r.useSpring)({
    to: {
      expansionSpring: K ? 1 : 0
    },
    config: M ? {
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
      Q(!0)
    },
    onStart: () => {
      Q(!1)
    }
  }), {
    visibilitySpring: ed
  } = (0, r.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: G ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: O,
    onRest: () => {
      X(!0)
    },
    onStart: () => {
      X(!1)
    }
  });
  return R && (G || !Z || j) && !U ? (0, a.jsx)(p.QuestContentImpressionTracker, {
    questOrQuests: E,
    questContent: F.trackingCtx.content,
    overrideVisibility: !L && G,
    children: () => {
      let e = F.component;
      return (0, a.jsx)(r.animated.div, {
        "aria-hidden": !G,
        className: i()(N.wrapper, {
          [N.wrapperInvisible]: !G,
          [N.wrapperVisible]: G && Z
        }),
        style: {
          color: E.config.colors.secondary,
          height: ed.to({
            range: [0, 1],
            output: [0, x && K ? J : F.collapsedHeight]
          })
        },
        children: (0, a.jsx)(r.animated.div, {
          onMouseLeave: eo,
          onMouseEnter: er,
          onFocus: () => el(),
          onBlur: ei,
          className: i()(N.contentWrapper, {
            [N.contentWrapperExpanded]: K,
            [N.contentWrapperAccepted]: M
          }),
          style: {
            backgroundColor: F.preEnrollmentBackgroundColor,
            backgroundImage: M ? F.postEnrollmentBackgroundImage : void 0,
            height: eu.to({
              range: [0, 1],
              output: [F.collapsedHeight, M ? J : F.preEnrollmentExpandedHeight]
            }),
            transform: ed.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, a.jsx)(e, {
            expandedContentRef: ee,
            expansionSpring: eu,
            isExpanded: K,
            isExpansionAnimationComplete: q,
            onCtxMenuClosed: ea,
            onCtxMenuOpened: en,
            onCtxMenuSelection: es,
            quest: E,
            useReducedMotion: O
          })
        })
      })
    }
  }) : (U ? v.log("Not rendered due to asset error") : !R && v.log("Not rendered due to ineligibility"), null)
}
t.default = function(e) {
  let {
    overrideQuest: t
  } = e, n = (0, o.useStateFromStores)([E.default], () => {
    var e;
    return null !== (e = null != t ? t : E.default.questDeliveryOverride) && void 0 !== e ? e : (0, _.getQuestForTargetedContent)(E.default.quests, h.QuestContent.QUEST_BAR)
  });
  return null == n ? null : (0, a.jsx)(I.QuestsAssetContextProvider, {
    sentrySource: T.QuestsExperimentLocations.QUESTS_BAR,
    children: (0, a.jsx)(v, {
      quest: n
    })
  }, n.id)
}