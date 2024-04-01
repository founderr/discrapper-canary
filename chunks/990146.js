"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("718017"),
  o = n("442837"),
  u = n("607070"),
  d = n("819640"),
  c = n("617136"),
  f = n("57655"),
  E = n("113434"),
  h = n("569984"),
  _ = n("497505"),
  C = n("918701"),
  S = n("874137"),
  m = n("78826"),
  I = n("580168"),
  p = n("789563"),
  T = n("164164"),
  g = n("46140"),
  A = n("981631"),
  N = n("311676");
t.default = function() {
  var e, t, n;
  let l = (0, f.useIsEligibleForQuests)({
      location: g.QuestsExperimentLocations.QUESTS_BAR
    }),
    O = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    R = (0, o.useStateFromStores)([h.default], () => (0, C.getQuestForTargetedContent)(h.default.quests, _.QuestContent.QUEST_BAR)),
    v = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()),
    L = s.useRef(-1),
    P = s.useRef(!1),
    [M, y] = s.useState(!1),
    [D, x] = s.useState(!1),
    [b, U] = s.useState(!1),
    [j, G] = s.useState(!1),
    [w, k] = s.useState(240),
    F = s.useRef(null),
    B = (null == R ? void 0 : null === (e = R.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
    H = s.useRef(B),
    V = (null == R ? void 0 : null === (t = R.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    Y = (null == R ? void 0 : null === (n = R.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
    W = (null == R ? void 0 : R.userStatus) != null && (0, C.isDismissed)(null == R ? void 0 : R.userStatus, _.QuestContent.QUEST_BAR),
    K = (0, E.useIsQuestExpired)(R),
    {
      hasError: z,
      isLoading: q
    } = (0, m.useQuestsAssetsLoadState)(),
    Q = s.useCallback(() => {
      var e, t;
      k((null !== (t = null === (e = F.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), x(!0)
    }, []),
    Z = s.useCallback(() => {
      y(!0)
    }, []),
    X = s.useCallback(() => {
      y(!1), !P.current && !V && x(!1)
    }, [V]),
    J = s.useCallback(() => {
      y(!1), !V && x(!1), P.current = !1
    }, [V]),
    $ = s.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
          withDelay: t = !1
        } = e;
      t ? L.current = window.setTimeout(Q, 75) : Q()
    }, [Q]),
    ee = s.useCallback(() => {
      if (window.clearTimeout(L.current), !V && !M) !P.current && x(!1)
    }, [M, V]),
    et = s.useCallback(() => {
      null != R && (0, c.trackQuestEvent)({
        questId: R.id,
        event: A.AnalyticEvents.QUEST_HOVER
      }), P.current = !0, $({
        withDelay: !0
      })
    }, [$, R]),
    en = s.useCallback(() => {
      P.current = !1, ee()
    }, [ee]);
  s.useLayoutEffect(() => {
    V && Q()
  }, [V, Q]), s.useLayoutEffect(() => {
    B && !H.current && P.current && Q()
  }, [B, Q]), s.useLayoutEffect(() => {
    !V && B && !H.current && !P.current && x(!1)
  }, [B, V]);
  let ea = l && !W && !Y && null != R && !K && !q,
    es = s.useRef(ea);
  s.useLayoutEffect(() => {
    ea !== es.current && G(!1), es.current = ea
  }, [ea]), s.useEffect(() => {
    H.current = B
  }, [B]);
  let {
    expansionSpring: el
  } = (0, r.useSpring)({
    from: {
      expansionSpring: D ? 0 : 1
    },
    to: {
      expansionSpring: D ? 1 : 0
    },
    config: B ? {
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
      U(!0)
    },
    onStart: () => {
      U(!1)
    }
  }), {
    visibilitySpring: ei
  } = (0, r.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: ea ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: O,
    onRest: () => {
      G(!0)
    },
    onStart: () => {
      G(!1)
    }
  });
  return !l || null == R || !ea && j || z ? null : (0, a.jsx)(S.QuestContentImpressionTracker, {
    questId: R.id,
    questContent: _.QuestContent.QUEST_BAR,
    overrideVisibility: !v && ea,
    children: () => (0, a.jsxs)(r.animated.div, {
      "aria-hidden": !ea,
      className: i()(N.wrapper, {
        [N.wrapperVisible]: ea && j
      }),
      style: {
        color: R.config.colors.secondary,
        height: ei.to({
          range: [0, 1],
          output: [0, V && D ? w : 40]
        })
      },
      children: [(0, a.jsxs)(r.animated.div, {
        onMouseLeave: en,
        onMouseEnter: et,
        onFocus: () => $(),
        onBlur: ee,
        className: i()(N.contentWrapper, {
          [N.contentWrapperExpanded]: D,
          [N.contentWrapperAccepted]: B
        }),
        style: {
          backgroundImage: B ? "linear-gradient(90deg, ".concat(R.config.colors.primary, ", ").concat(R.config.colors.secondary, ")") : void 0,
          height: el.to({
            range: [0, 1],
            output: [40, B ? w : 240]
          }),
          transform: ei.to({
            range: [0, 1],
            output: [100, 0]
          }).to(e => "translateY(".concat(e, "%)"))
        },
        children: [(0, a.jsx)(p.default, {
          className: N.content,
          expansionSpring: el,
          isExpanded: D,
          isExpansionAnimationComplete: b,
          quest: R
        }), (0, a.jsx)(T.default, {
          className: N.content,
          onCtxMenuOpen: Z,
          onCtxMenuClose: X,
          onCtxMenuSelect: J,
          expansionSpring: el,
          isExpanded: D,
          isExpansionAnimationComplete: b,
          quest: R,
          useReducedMotion: O,
          ref: F
        })]
      }), (0, a.jsx)(I.QuestsBarBackgroundAnimation, {
        quest: R,
        isExpanded: D,
        isExpansionAnimationComplete: b,
        useReducedMotion: O
      }), !B && (0, a.jsx)("div", {
        className: N.backgroundFallback
      })]
    })
  })
}