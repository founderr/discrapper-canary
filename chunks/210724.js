"use strict";
s.r(t), s.d(t, {
  QuestBar: function() {
    return R
  }
}), s("47120");
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("920906"),
  o = s("442837"),
  u = s("110924"),
  d = s("607070"),
  c = s("819640"),
  E = s("617136"),
  f = s("113434"),
  _ = s("569984"),
  h = s("497505"),
  m = s("918701"),
  C = s("988303"),
  T = s("977156"),
  g = s("5881"),
  p = s("602667"),
  A = s("78826"),
  N = s("448018"),
  S = s("46140"),
  I = s("981631"),
  x = s("837955");

function R(e) {
  var t, s, l;
  let {
    quest: _
  } = e, R = (0, g.getQuestLogger)({
    quest: _,
    location: S.QuestsExperimentLocations.QUESTS_BAR
  }), v = (0, T.useIsEligibleForQuests)({
    location: S.QuestsExperimentLocations.QUESTS_BAR
  }), M = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), O = (0, o.useStateFromStores)([c.default], () => c.default.hasLayers()), L = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, y = (0, u.default)(L), b = (null === (s = _.userStatus) || void 0 === s ? void 0 : s.completedAt) != null, D = (0, u.default)(b), j = (null === (l = _.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, U = null != _.userStatus && (0, m.isDismissed)(_.userStatus, h.QuestContent.QUEST_BAR), P = (0, f.useIsQuestExpired)(_), {
    hasError: B,
    isLoading: G
  } = (0, A.useQuestsAssetsLoadState)(), V = v && !U && !j && !P && !G, H = a.useRef(V), {
    primaryVariant: F,
    progressVariant: k
  } = C.QuestBarExperiment.useExperiment({
    location: S.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: V && !B
  }), w = a.useMemo(() => (0, N.getQuestBarVariantConfig)(_, F, k), [_, F, k]), Q = a.useRef(-1), Y = a.useRef(!1), [q, W] = a.useState(!1), [z, Z] = a.useState(!1), [K, X] = a.useState(!1), [J, $] = a.useState(!0), [ee, et] = a.useState(w.preEnrollmentExpandedHeight), es = a.useRef(null), en = a.useCallback(() => {
    var e, t;
    et((null !== (t = null === (e = es.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * w.paddingVertical)
  }, [w.paddingVertical]), ea = a.useCallback(() => {
    en(), Z(!0)
  }, [en]), el = a.useCallback(() => {
    W(!0)
  }, []), ei = a.useCallback(() => {
    W(!1), !Y.current && !b && Z(!1)
  }, [b]), er = a.useCallback(() => {
    W(!1), !b && Z(!1), Y.current = !1
  }, [b]), eo = a.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? Q.current = window.setTimeout(ea, 75) : ea()
  }, [ea]), eu = a.useCallback(() => {
    if (window.clearTimeout(Q.current), !!w.canCollapseOnBlur && !q) !Y.current && Z(!1)
  }, [q, w]), ed = a.useCallback(() => {
    (0, E.trackQuestEvent)({
      questId: _.id,
      event: I.AnalyticEvents.QUEST_HOVER
    }), Y.current = !0, eo({
      withDelay: !0
    })
  }, [eo, _]), ec = a.useCallback(() => {
    Y.current = !1, eu()
  }, [eu]), eE = a.useCallback(e => {
    et(t => t + e)
  }, []);
  a.useLayoutEffect(() => {
    b && w.shouldExpandOnQuestComplete && ea()
  }, [ea, b, w.shouldExpandOnQuestComplete]), a.useLayoutEffect(() => {
    L && !y && Y.current && ea()
  }, [ea, L, y]), a.useLayoutEffect(() => {
    !b && L && !y && !Y.current && Z(!1)
  }, [L, b, y]), a.useLayoutEffect(() => {
    V !== H.current && $(!1), H.current = V
  }, [V]);
  let {
    expansionSpring: ef
  } = (0, r.useSpring)({
    to: {
      expansionSpring: z ? 1 : 0
    },
    config: L ? {
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
    visibilitySpring: e_
  } = (0, r.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: V ? 1 : 0
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
  return (a.useLayoutEffect(() => {
    b && !D && w.canCollapseOnBlur && en()
  }, [b, ea, w.canCollapseOnBlur, en, D]), v && (V || !J || G) && !B) ? (0, n.jsx)(p.QuestContentImpressionTrackerWeb, {
    questOrQuests: _,
    questContent: w.trackingCtx.content,
    overrideVisibility: !O && V,
    children: () => {
      let e = w.component;
      return (0, n.jsx)(r.animated.div, {
        "aria-hidden": !V,
        className: i()(x.wrapper, {
          [x.wrapperInvisible]: !V,
          [x.wrapperVisible]: V && J
        }),
        style: {
          color: _.config.colors.secondary,
          height: e_.to({
            range: [0, 1],
            output: [0, !w.canCollapseOnBlur && z ? ee : w.collapsedHeight]
          })
        },
        children: (0, n.jsx)(r.animated.div, {
          onMouseLeave: ec,
          onMouseEnter: ed,
          onFocus: () => eo(),
          onBlur: eu,
          className: i()(x.contentWrapper, {
            [x.contentWrapperExpanded]: z,
            [x.contentWrapperAccepted]: L
          }),
          style: {
            backgroundColor: w.preEnrollmentBackgroundColor,
            backgroundImage: L ? w.postEnrollmentBackgroundImage : void 0,
            height: ef.to({
              range: [0, 1],
              output: [w.collapsedHeight, ee]
            }),
            transform: e_.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, n.jsx)(e, {
            expandedContentRef: es,
            expansionSpring: ef,
            isExpanded: z,
            isExpansionAnimationComplete: K,
            onCtxMenuClosed: ei,
            onCtxMenuOpened: el,
            onCtxMenuSelection: er,
            onContentHeightChange: eE,
            quest: _,
            useReducedMotion: M
          })
        })
      })
    }
  }) : (B ? R.log("Not rendered due to asset error") : !v && R.log("Not rendered due to ineligibility"), null)
}
t.default = function(e) {
  let {
    overrideQuest: t
  } = e, s = (0, o.useStateFromStores)([_.default], () => {
    var e;
    return null !== (e = null != t ? t : _.default.questDeliveryOverride) && void 0 !== e ? e : (0, m.getQuestForTargetedContent)(_.default.quests, h.QuestContent.QUEST_BAR)
  });
  return null == s ? null : (0, n.jsx)(A.QuestsAssetContextProvider, {
    sentrySource: S.QuestsExperimentLocations.QUESTS_BAR,
    children: (0, n.jsx)(R, {
      quest: s
    })
  }, s.id)
}