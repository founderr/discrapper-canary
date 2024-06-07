"use strict";
s.r(t), s.d(t, {
  QuestBar: function() {
    return v
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("920906"),
  o = s("442837"),
  u = s("110924"),
  d = s("607070"),
  c = s("819640"),
  E = s("617136"),
  _ = s("113434"),
  f = s("569984"),
  h = s("497505"),
  m = s("918701"),
  C = s("988303"),
  T = s("977156"),
  g = s("5881"),
  A = s("602667"),
  p = s("78826"),
  N = s("448018"),
  S = s("46140"),
  I = s("981631"),
  R = s("837955");

function v(e) {
  var t, s, l;
  let {
    quest: f
  } = e, v = (0, g.getQuestLogger)({
    quest: f,
    location: S.QuestsExperimentLocations.QUESTS_BAR
  }), x = (0, T.useIsEligibleForQuests)({
    location: S.QuestsExperimentLocations.QUESTS_BAR
  }), M = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), L = (0, o.useStateFromStores)([c.default], () => c.default.hasLayers()), O = (null === (t = f.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, y = (0, u.default)(O), D = (null === (s = f.userStatus) || void 0 === s ? void 0 : s.completedAt) != null, b = (0, u.default)(D), j = (null === (l = f.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, P = null != f.userStatus && (0, m.isDismissed)(f.userStatus, h.QuestContent.QUEST_BAR), U = (0, _.useIsQuestExpired)(f), {
    hasError: G,
    isLoading: V
  } = (0, p.useQuestsAssetsLoadState)(), B = x && !P && !j && !U && !V, H = n.useRef(B), {
    primaryVariant: F,
    progressVariant: k
  } = C.QuestBarExperiment.useExperiment({
    location: S.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: B && !G
  }), w = n.useMemo(() => (0, N.getQuestBarVariantConfig)(f, F, k), [f, F, k]), Q = n.useRef(-1), Y = n.useRef(!1), [q, W] = n.useState(!1), [z, Z] = n.useState(!1), [K, X] = n.useState(!1), [J, $] = n.useState(!0), [ee, et] = n.useState(w.preEnrollmentExpandedHeight), es = n.useRef(null), ea = n.useCallback(() => {
    var e, t;
    et((null !== (t = null === (e = es.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * w.paddingVertical)
  }, [w.paddingVertical]), en = n.useCallback(() => {
    ea(), Z(!0)
  }, [ea]), el = n.useCallback(() => {
    W(!0)
  }, []), ei = n.useCallback(() => {
    W(!1), !Y.current && !D && Z(!1)
  }, [D]), er = n.useCallback(() => {
    W(!1), !D && Z(!1), Y.current = !1
  }, [D]), eo = n.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? Q.current = window.setTimeout(en, 75) : en()
  }, [en]), eu = n.useCallback(() => {
    if (window.clearTimeout(Q.current), !!w.canCollapseOnBlur && !q) !Y.current && Z(!1)
  }, [q, w]), ed = n.useCallback(() => {
    (0, E.trackQuestEvent)({
      questId: f.id,
      event: I.AnalyticEvents.QUEST_HOVER
    }), Y.current = !0, eo({
      withDelay: !0
    })
  }, [eo, f]), ec = n.useCallback(() => {
    Y.current = !1, eu()
  }, [eu]), eE = n.useCallback(e => {
    et(t => t + e)
  }, []);
  n.useLayoutEffect(() => {
    D && w.shouldExpandOnQuestComplete && en()
  }, [en, D, w.shouldExpandOnQuestComplete]), n.useLayoutEffect(() => {
    O && !y && Y.current && en()
  }, [en, O, y]), n.useLayoutEffect(() => {
    !D && O && !y && !Y.current && Z(!1)
  }, [O, D, y]), n.useLayoutEffect(() => {
    B !== H.current && $(!1), H.current = B
  }, [B]);
  let {
    expansionSpring: e_
  } = (0, r.useSpring)({
    to: {
      expansionSpring: z ? 1 : 0
    },
    config: O ? {
      tension: 900,
      friction: 45,
      clamp: !0
    } : {
      tension: 360,
      friction: 30,
      clamp: !0
    },
    immediate: M,
    onRest: () => {
      X(!0)
    },
    onStart: () => {
      X(!1)
    }
  }), {
    visibilitySpring: ef
  } = (0, r.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: B ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: M,
    onRest: () => {
      $(!0)
    },
    onStart: () => {
      $(!1)
    }
  });
  return (n.useLayoutEffect(() => {
    D && !b && w.canCollapseOnBlur && ea()
  }, [D, en, w.canCollapseOnBlur, ea, b]), x && (B || !J || V) && !G) ? (0, a.jsx)(A.QuestContentImpressionTrackerWeb, {
    questOrQuests: f,
    questContent: w.trackingCtx.content,
    overrideVisibility: !L && B,
    children: () => {
      let e = w.component;
      return (0, a.jsx)(r.animated.div, {
        "aria-hidden": !B,
        className: i()(R.wrapper, {
          [R.wrapperInvisible]: !B,
          [R.wrapperVisible]: B && J
        }),
        style: {
          color: f.config.colors.secondary,
          height: ef.to({
            range: [0, 1],
            output: [0, !w.canCollapseOnBlur && z ? ee : w.collapsedHeight]
          })
        },
        children: (0, a.jsx)(r.animated.div, {
          onMouseLeave: ec,
          onMouseEnter: ed,
          onFocus: () => eo(),
          onBlur: eu,
          className: i()(R.contentWrapper, {
            [R.contentWrapperExpanded]: z,
            [R.contentWrapperAccepted]: O
          }),
          style: {
            backgroundColor: w.preEnrollmentBackgroundColor,
            backgroundImage: O ? w.postEnrollmentBackgroundImage : void 0,
            height: e_.to({
              range: [0, 1],
              output: [w.collapsedHeight, ee]
            }),
            transform: ef.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, a.jsx)(e, {
            expandedContentRef: es,
            expansionSpring: e_,
            isExpanded: z,
            isExpansionAnimationComplete: K,
            onCtxMenuClosed: ei,
            onCtxMenuOpened: el,
            onCtxMenuSelection: er,
            onContentHeightChange: eE,
            quest: f,
            useReducedMotion: M
          })
        })
      })
    }
  }) : (G ? v.log("Not rendered due to asset error") : !x && v.log("Not rendered due to ineligibility"), null)
}
t.default = function(e) {
  let {
    overrideQuest: t
  } = e, s = (0, o.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = null != t ? t : f.default.questDeliveryOverride) && void 0 !== e ? e : (0, m.getQuestForTargetedContent)(f.default.quests, h.QuestContent.QUEST_BAR)
  });
  return null == s ? null : (0, a.jsx)(p.QuestsAssetContextProvider, {
    sentrySource: S.QuestsExperimentLocations.QUESTS_BAR,
    children: (0, a.jsx)(v, {
      quest: s
    })
  }, s.id)
}