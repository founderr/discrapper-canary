"use strict";
n.r(t), n.d(t, {
  QuestBar: function() {
    return R
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("920906"),
  o = n("442837"),
  u = n("110924"),
  d = n("607070"),
  c = n("819640"),
  f = n("617136"),
  E = n("113434"),
  h = n("569984"),
  _ = n("497505"),
  C = n("918701"),
  m = n("988303"),
  S = n("977156"),
  p = n("5881"),
  I = n("874137"),
  g = n("78826"),
  T = n("448018"),
  A = n("46140"),
  N = n("981631"),
  v = n("837955");

function R(e) {
  var t, n, l;
  let {
    quest: h
  } = e, R = (0, p.getQuestLogger)({
    quest: h,
    location: A.QuestsExperimentLocations.QUESTS_BAR
  }), O = (0, S.useIsEligibleForQuests)({
    location: A.QuestsExperimentLocations.QUESTS_BAR
  }), L = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), M = (0, o.useStateFromStores)([c.default], () => c.default.hasLayers()), x = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, P = (0, u.default)(x), y = (null === (n = h.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, D = (0, u.default)(y), b = (null === (l = h.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, U = null != h.userStatus && (0, C.isDismissed)(h.userStatus, _.QuestContent.QUEST_BAR), j = (0, E.useIsQuestExpired)(h), {
    hasError: G,
    isLoading: w
  } = (0, g.useQuestsAssetsLoadState)(), k = O && !U && !b && !j && !w, B = s.useRef(k), {
    primaryVariant: F,
    progressVariant: H
  } = m.QuestBarExperiment.useExperiment({
    location: A.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: k && !G
  }), V = s.useMemo(() => (0, T.getQuestBarVariantConfig)(h, F, H), [h, F, H]), Y = s.useRef(-1), W = s.useRef(!1), [K, z] = s.useState(!1), [Q, q] = s.useState(!1), [Z, X] = s.useState(!1), [J, $] = s.useState(!0), [ee, et] = s.useState(V.preEnrollmentExpandedHeight), en = s.useRef(null), ea = s.useCallback(() => {
    var e, t;
    et((null !== (t = null === (e = en.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * V.paddingVertical)
  }, [V.paddingVertical]), es = s.useCallback(() => {
    ea(), q(!0)
  }, [ea]), el = s.useCallback(() => {
    z(!0)
  }, []), ei = s.useCallback(() => {
    z(!1), !W.current && !y && q(!1)
  }, [y]), er = s.useCallback(() => {
    z(!1), !y && q(!1), W.current = !1
  }, [y]), eo = s.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? Y.current = window.setTimeout(es, 75) : es()
  }, [es]), eu = s.useCallback(() => {
    if (window.clearTimeout(Y.current), !!V.canCollapseOnBlur && !K) !W.current && q(!1)
  }, [K, V]), ed = s.useCallback(() => {
    (0, f.trackQuestEvent)({
      questId: h.id,
      event: N.AnalyticEvents.QUEST_HOVER
    }), W.current = !0, eo({
      withDelay: !0
    })
  }, [eo, h]), ec = s.useCallback(() => {
    W.current = !1, eu()
  }, [eu]);
  s.useLayoutEffect(() => {
    y && V.shouldExpandOnQuestComplete && es()
  }, [es, y, V.shouldExpandOnQuestComplete]), s.useLayoutEffect(() => {
    x && !P && W.current && es()
  }, [es, x, P]), s.useLayoutEffect(() => {
    !y && x && !P && !W.current && q(!1)
  }, [x, y, P]), s.useLayoutEffect(() => {
    k !== B.current && $(!1), B.current = k
  }, [k]);
  let {
    expansionSpring: ef
  } = (0, r.useSpring)({
    to: {
      expansionSpring: Q ? 1 : 0
    },
    config: x ? {
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
      X(!0)
    },
    onStart: () => {
      X(!1)
    }
  }), {
    visibilitySpring: eE
  } = (0, r.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: k ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: L,
    onRest: () => {
      $(!0)
    },
    onStart: () => {
      $(!1)
    }
  });
  return (s.useLayoutEffect(() => {
    y && !D && V.canCollapseOnBlur && ea()
  }, [y, es, V.canCollapseOnBlur, ea, D]), O && (k || !J || w) && !G) ? (0, a.jsx)(I.QuestContentImpressionTracker, {
    questOrQuests: h,
    questContent: V.trackingCtx.content,
    overrideVisibility: !M && k,
    children: () => {
      let e = V.component;
      return (0, a.jsx)(r.animated.div, {
        "aria-hidden": !k,
        className: i()(v.wrapper, {
          [v.wrapperInvisible]: !k,
          [v.wrapperVisible]: k && J
        }),
        style: {
          color: h.config.colors.secondary,
          height: eE.to({
            range: [0, 1],
            output: [0, !V.canCollapseOnBlur && Q ? ee : V.collapsedHeight]
          })
        },
        children: (0, a.jsx)(r.animated.div, {
          onMouseLeave: ec,
          onMouseEnter: ed,
          onFocus: () => eo(),
          onBlur: eu,
          className: i()(v.contentWrapper, {
            [v.contentWrapperExpanded]: Q,
            [v.contentWrapperAccepted]: x
          }),
          style: {
            backgroundColor: V.preEnrollmentBackgroundColor,
            backgroundImage: x ? V.postEnrollmentBackgroundImage : void 0,
            height: ef.to({
              range: [0, 1],
              output: [V.collapsedHeight, x ? ee : V.preEnrollmentExpandedHeight]
            }),
            transform: eE.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, a.jsx)(e, {
            expandedContentRef: en,
            expansionSpring: ef,
            isExpanded: Q,
            isExpansionAnimationComplete: Z,
            onCtxMenuClosed: ei,
            onCtxMenuOpened: el,
            onCtxMenuSelection: er,
            quest: h,
            useReducedMotion: L
          })
        })
      })
    }
  }) : (G ? R.log("Not rendered due to asset error") : !O && R.log("Not rendered due to ineligibility"), null)
}
t.default = function(e) {
  let {
    overrideQuest: t
  } = e, n = (0, o.useStateFromStores)([h.default], () => {
    var e;
    return null !== (e = null != t ? t : h.default.questDeliveryOverride) && void 0 !== e ? e : (0, C.getQuestForTargetedContent)(h.default.quests, _.QuestContent.QUEST_BAR)
  });
  return null == n ? null : (0, a.jsx)(g.QuestsAssetContextProvider, {
    sentrySource: A.QuestsExperimentLocations.QUESTS_BAR,
    children: (0, a.jsx)(R, {
      quest: n
    })
  }, n.id)
}