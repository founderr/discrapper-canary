"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
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
  I = a("789563"),
  p = a("164164"),
  T = a("46140"),
  g = a("981631"),
  A = a("311676");
t.default = function() {
  var e, t, a;
  let l = (0, f.useIsEligibleForQuests)({
      location: T.QuestsExperimentLocations.QUESTS_BAR
    }),
    N = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    v = (0, o.useStateFromStores)([h.default], () => (0, C.getQuestForTargetedContent)(h.default.quests, _.QuestContent.QUEST_BAR)),
    R = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()),
    O = s.useRef(-1),
    L = s.useRef(!1),
    [M, P] = s.useState(!1),
    [x, y] = s.useState(!1),
    [D, b] = s.useState(!1),
    [U, j] = s.useState(!0),
    [G, w] = s.useState(240),
    k = s.useRef(null),
    F = (null == v ? void 0 : null === (e = v.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
    H = s.useRef(F),
    B = (null == v ? void 0 : null === (t = v.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    V = (null == v ? void 0 : null === (a = v.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null,
    Y = (null == v ? void 0 : v.userStatus) != null && (0, C.isDismissed)(null == v ? void 0 : v.userStatus, _.QuestContent.QUEST_BAR),
    W = (0, E.useIsQuestExpired)(v),
    {
      hasError: K,
      isLoading: z
    } = (0, S.useQuestsAssetsLoadState)(),
    q = s.useCallback(() => {
      var e, t;
      w((null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), y(!0)
    }, []),
    Q = s.useCallback(() => {
      P(!0)
    }, []),
    Z = s.useCallback(() => {
      P(!1), !L.current && !B && y(!1)
    }, [B]),
    X = s.useCallback(() => {
      P(!1), !B && y(!1), L.current = !1
    }, [B]),
    J = s.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
          withDelay: t = !1
        } = e;
      t ? O.current = window.setTimeout(q, 75) : q()
    }, [q]),
    $ = s.useCallback(() => {
      if (window.clearTimeout(O.current), !B && !M) !L.current && y(!1)
    }, [M, B]),
    ee = s.useCallback(() => {
      null != v && (0, c.trackQuestEvent)({
        questId: v.id,
        event: g.AnalyticEvents.QUEST_HOVER
      }), L.current = !0, J({
        withDelay: !0
      })
    }, [J, v]),
    et = s.useCallback(() => {
      L.current = !1, $()
    }, [$]);
  s.useLayoutEffect(() => {
    B && q()
  }, [B, q]), s.useLayoutEffect(() => {
    F && !H.current && L.current && q()
  }, [F, q]), s.useLayoutEffect(() => {
    !B && F && !H.current && !L.current && y(!1)
  }, [F, B]);
  let ea = l && !Y && !V && null != v && !W && !z,
    en = s.useRef(ea);
  s.useLayoutEffect(() => {
    ea !== en.current && j(!1), en.current = ea
  }, [ea]), s.useEffect(() => {
    H.current = F
  }, [F]);
  let {
    expansionSpring: es
  } = (0, r.useSpring)({
    from: {
      expansionSpring: x ? 0 : 1
    },
    to: {
      expansionSpring: x ? 1 : 0
    },
    config: F ? {
      tension: 900,
      friction: 45,
      clamp: !0
    } : {
      tension: 360,
      friction: 30,
      clamp: !0
    },
    immediate: N,
    onRest: () => {
      b(!0)
    },
    onStart: () => {
      b(!1)
    }
  }), {
    visibilitySpring: el
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
    immediate: N,
    onRest: () => {
      j(!0)
    },
    onStart: () => {
      j(!1)
    }
  });
  return l && null != v && (ea || !U || z) && !K ? (0, n.jsx)(m.QuestContentImpressionTracker, {
    questId: v.id,
    questContent: _.QuestContent.QUEST_BAR,
    overrideVisibility: !R && ea,
    children: () => (0, n.jsx)(r.animated.div, {
      "aria-hidden": !ea,
      className: i()(A.wrapper, {
        [A.wrapperInvisible]: !ea,
        [A.wrapperVisible]: ea && U
      }),
      style: {
        color: v.config.colors.secondary,
        height: el.to({
          range: [0, 1],
          output: [0, B && x ? G : 40]
        })
      },
      children: (0, n.jsxs)(r.animated.div, {
        onMouseLeave: et,
        onMouseEnter: ee,
        onFocus: () => J(),
        onBlur: $,
        className: i()(A.contentWrapper, {
          [A.contentWrapperExpanded]: x,
          [A.contentWrapperAccepted]: F
        }),
        style: {
          backgroundImage: F ? "linear-gradient(90deg, ".concat(v.config.colors.primary, ", ").concat(v.config.colors.secondary, ")") : void 0,
          height: es.to({
            range: [0, 1],
            output: [40, F ? G : 240]
          }),
          transform: el.to({
            range: [0, 1],
            output: [100, 0]
          }).to(e => "translateY(".concat(e, "%)"))
        },
        children: [(0, n.jsx)(I.default, {
          className: A.content,
          expansionSpring: es,
          isExpanded: x,
          isExpansionAnimationComplete: D,
          quest: v,
          useReducedMotion: N
        }), (0, n.jsx)(p.default, {
          className: A.content,
          onCtxMenuOpen: Q,
          onCtxMenuClose: Z,
          onCtxMenuSelect: X,
          isExpanded: x,
          isExpansionAnimationComplete: D,
          quest: v,
          useReducedMotion: N,
          ref: k
        })]
      })
    })
  }) : null
}