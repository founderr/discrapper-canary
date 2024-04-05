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
  m = n("874137"),
  S = n("78826"),
  I = n("789563"),
  p = n("164164"),
  T = n("46140"),
  g = n("981631"),
  A = n("311676");
t.default = function() {
  var e, t, n;
  let l = (0, f.useIsEligibleForQuests)({
      location: T.QuestsExperimentLocations.QUESTS_BAR
    }),
    N = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    v = (0, o.useStateFromStores)([h.default], () => (0, C.getQuestForTargetedContent)(h.default.quests, _.QuestContent.QUEST_BAR)),
    R = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()),
    O = s.useRef(-1),
    L = s.useRef(!1),
    [P, M] = s.useState(!1),
    [y, x] = s.useState(!1),
    [D, b] = s.useState(!1),
    [U, j] = s.useState(!0),
    [G, w] = s.useState(240),
    k = s.useRef(null),
    F = (null == v ? void 0 : null === (e = v.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
    B = s.useRef(F),
    H = (null == v ? void 0 : null === (t = v.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    V = (null == v ? void 0 : null === (n = v.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
    Y = (null == v ? void 0 : v.userStatus) != null && (0, C.isDismissed)(null == v ? void 0 : v.userStatus, _.QuestContent.QUEST_BAR),
    W = (0, E.useIsQuestExpired)(v),
    {
      hasError: K,
      isLoading: z
    } = (0, S.useQuestsAssetsLoadState)(),
    q = s.useCallback(() => {
      var e, t;
      w((null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), x(!0)
    }, []),
    Q = s.useCallback(() => {
      M(!0)
    }, []),
    Z = s.useCallback(() => {
      M(!1), !L.current && !H && x(!1)
    }, [H]),
    X = s.useCallback(() => {
      M(!1), !H && x(!1), L.current = !1
    }, [H]),
    J = s.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
          withDelay: t = !1
        } = e;
      t ? O.current = window.setTimeout(q, 75) : q()
    }, [q]),
    $ = s.useCallback(() => {
      if (window.clearTimeout(O.current), !H && !P) !L.current && x(!1)
    }, [P, H]),
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
    H && q()
  }, [H, q]), s.useLayoutEffect(() => {
    F && !B.current && L.current && q()
  }, [F, q]), s.useLayoutEffect(() => {
    !H && F && !B.current && !L.current && x(!1)
  }, [F, H]);
  let en = l && !Y && !V && null != v && !W && !z,
    ea = s.useRef(en);
  s.useLayoutEffect(() => {
    en !== ea.current && j(!1), ea.current = en
  }, [en]), s.useEffect(() => {
    B.current = F
  }, [F]);
  let {
    expansionSpring: es
  } = (0, r.useSpring)({
    from: {
      expansionSpring: y ? 0 : 1
    },
    to: {
      expansionSpring: y ? 1 : 0
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
      visibilitySpring: en ? 1 : 0
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
  return l && null != v && (en || !U || z) && !K ? (0, a.jsx)(m.QuestContentImpressionTracker, {
    questId: v.id,
    questContent: _.QuestContent.QUEST_BAR,
    overrideVisibility: !R && en,
    children: () => (0, a.jsx)(r.animated.div, {
      "aria-hidden": !en,
      className: i()(A.wrapper, {
        [A.wrapperInvisible]: !en,
        [A.wrapperVisible]: en && U
      }),
      style: {
        color: v.config.colors.secondary,
        height: el.to({
          range: [0, 1],
          output: [0, H && y ? G : 40]
        })
      },
      children: (0, a.jsxs)(r.animated.div, {
        onMouseLeave: et,
        onMouseEnter: ee,
        onFocus: () => J(),
        onBlur: $,
        className: i()(A.contentWrapper, {
          [A.contentWrapperExpanded]: y,
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
        children: [(0, a.jsx)(I.default, {
          className: A.content,
          expansionSpring: es,
          isExpanded: y,
          isExpansionAnimationComplete: D,
          quest: v,
          useReducedMotion: N
        }), (0, a.jsx)(p.default, {
          className: A.content,
          onCtxMenuOpen: Q,
          onCtxMenuClose: Z,
          onCtxMenuSelect: X,
          isExpanded: y,
          isExpansionAnimationComplete: D,
          quest: v,
          useReducedMotion: N,
          ref: k
        })]
      })
    })
  }) : null
}