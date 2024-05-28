"use strict";
s.r(t), s.d(t, {
  QuestBar: function() {
    return R
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("920906"),
  u = s("442837"),
  o = s("110924"),
  d = s("607070"),
  c = s("819640"),
  E = s("617136"),
  _ = s("113434"),
  f = s("569984"),
  h = s("497505"),
  m = s("918701"),
  T = s("988303"),
  C = s("977156"),
  g = s("5881"),
  A = s("874137"),
  N = s("78826"),
  p = s("448018"),
  S = s("46140"),
  I = s("981631"),
  v = s("837955");

function R(e) {
  var t, s, l;
  let {
    quest: f
  } = e, R = (0, g.getQuestLogger)({
    quest: f,
    location: S.QuestsExperimentLocations.QUESTS_BAR
  }), x = (0, C.useIsEligibleForQuests)({
    location: S.QuestsExperimentLocations.QUESTS_BAR
  }), M = (0, u.useStateFromStores)([d.default], () => d.default.useReducedMotion), O = (0, u.useStateFromStores)([c.default], () => c.default.hasLayers()), L = (null === (t = f.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, y = (0, o.default)(L), D = (null === (s = f.userStatus) || void 0 === s ? void 0 : s.completedAt) != null, j = (0, o.default)(D), b = (null === (l = f.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, U = null != f.userStatus && (0, m.isDismissed)(f.userStatus, h.QuestContent.QUEST_BAR), P = (0, _.useIsQuestExpired)(f), {
    hasError: G,
    isLoading: V
  } = (0, N.useQuestsAssetsLoadState)(), F = x && !U && !b && !P && !V, k = n.useRef(F), {
    primaryVariant: B,
    progressVariant: w
  } = T.QuestBarExperiment.useExperiment({
    location: S.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: F && !G
  }), H = n.useMemo(() => (0, p.getQuestBarVariantConfig)(f, B, w), [f, B, w]), Q = n.useRef(-1), Y = n.useRef(!1), [q, z] = n.useState(!1), [W, Z] = n.useState(!1), [K, X] = n.useState(!1), [J, $] = n.useState(!0), [ee, et] = n.useState(H.preEnrollmentExpandedHeight), es = n.useRef(null), ea = n.useCallback(() => {
    var e, t;
    et((null !== (t = null === (e = es.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * H.paddingVertical)
  }, [H.paddingVertical]), en = n.useCallback(() => {
    ea(), Z(!0)
  }, [ea]), el = n.useCallback(() => {
    z(!0)
  }, []), ei = n.useCallback(() => {
    z(!1), !Y.current && !D && Z(!1)
  }, [D]), er = n.useCallback(() => {
    z(!1), !D && Z(!1), Y.current = !1
  }, [D]), eu = n.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? Q.current = window.setTimeout(en, 75) : en()
  }, [en]), eo = n.useCallback(() => {
    if (window.clearTimeout(Q.current), !!H.canCollapseOnBlur && !q) !Y.current && Z(!1)
  }, [q, H]), ed = n.useCallback(() => {
    (0, E.trackQuestEvent)({
      questId: f.id,
      event: I.AnalyticEvents.QUEST_HOVER
    }), Y.current = !0, eu({
      withDelay: !0
    })
  }, [eu, f]), ec = n.useCallback(() => {
    Y.current = !1, eo()
  }, [eo]);
  n.useLayoutEffect(() => {
    D && H.shouldExpandOnQuestComplete && en()
  }, [en, D, H.shouldExpandOnQuestComplete]), n.useLayoutEffect(() => {
    L && !y && Y.current && en()
  }, [en, L, y]), n.useLayoutEffect(() => {
    !D && L && !y && !Y.current && Z(!1)
  }, [L, D, y]), n.useLayoutEffect(() => {
    F !== k.current && $(!1), k.current = F
  }, [F]);
  let {
    expansionSpring: eE
  } = (0, r.useSpring)({
    to: {
      expansionSpring: W ? 1 : 0
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
      visibilitySpring: F ? 1 : 0
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
    D && !j && H.canCollapseOnBlur && ea()
  }, [D, en, H.canCollapseOnBlur, ea, j]), x && (F || !J || V) && !G) ? (0, a.jsx)(A.QuestContentImpressionTracker, {
    questOrQuests: f,
    questContent: H.trackingCtx.content,
    overrideVisibility: !O && F,
    children: () => {
      let e = H.component;
      return (0, a.jsx)(r.animated.div, {
        "aria-hidden": !F,
        className: i()(v.wrapper, {
          [v.wrapperInvisible]: !F,
          [v.wrapperVisible]: F && J
        }),
        style: {
          color: f.config.colors.secondary,
          height: e_.to({
            range: [0, 1],
            output: [0, D && W ? ee : H.collapsedHeight]
          })
        },
        children: (0, a.jsx)(r.animated.div, {
          onMouseLeave: ec,
          onMouseEnter: ed,
          onFocus: () => eu(),
          onBlur: eo,
          className: i()(v.contentWrapper, {
            [v.contentWrapperExpanded]: W,
            [v.contentWrapperAccepted]: L
          }),
          style: {
            backgroundColor: H.preEnrollmentBackgroundColor,
            backgroundImage: L ? H.postEnrollmentBackgroundImage : void 0,
            height: eE.to({
              range: [0, 1],
              output: [H.collapsedHeight, L ? ee : H.preEnrollmentExpandedHeight]
            }),
            transform: e_.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, a.jsx)(e, {
            expandedContentRef: es,
            expansionSpring: eE,
            isExpanded: W,
            isExpansionAnimationComplete: K,
            onCtxMenuClosed: ei,
            onCtxMenuOpened: el,
            onCtxMenuSelection: er,
            quest: f,
            useReducedMotion: M
          })
        })
      })
    }
  }) : (G ? R.log("Not rendered due to asset error") : !x && R.log("Not rendered due to ineligibility"), null)
}
t.default = function(e) {
  let {
    overrideQuest: t
  } = e, s = (0, u.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = null != t ? t : f.default.questDeliveryOverride) && void 0 !== e ? e : (0, m.getQuestForTargetedContent)(f.default.quests, h.QuestContent.QUEST_BAR)
  });
  return null == s ? null : (0, a.jsx)(N.QuestsAssetContextProvider, {
    sentrySource: S.QuestsExperimentLocations.QUESTS_BAR,
    children: (0, a.jsx)(R, {
      quest: s
    })
  }, s.id)
}