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
  _ = n("569984"),
  h = n("497505"),
  C = n("918701"),
  m = n("874137"),
  S = n("78826"),
  I = n("789563"),
  T = n("164164"),
  p = n("46140"),
  g = n("981631"),
  N = n("311676");
t.default = function() {
  var e, t, n;
  let l = (0, f.useIsEligibleForQuests)({
      location: p.QuestsExperimentLocations.QUESTS_BAR
    }),
    A = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    R = (0, o.useStateFromStores)([_.default], () => (0, C.getQuestForTargetedContent)(_.default.quests, h.QuestContent.QUEST_BAR)),
    O = (0, o.useStateFromStores)([d.default], () => d.default.hasLayers()),
    v = s.useRef(-1),
    L = s.useRef(!1),
    [P, M] = s.useState(!1),
    [y, D] = s.useState(!1),
    [x, b] = s.useState(!1),
    [U, j] = s.useState(!0),
    [G, w] = s.useState(240),
    k = s.useRef(null),
    F = (null == R ? void 0 : null === (e = R.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
    B = s.useRef(F),
    H = (null == R ? void 0 : null === (t = R.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    V = (null == R ? void 0 : null === (n = R.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
    Y = (null == R ? void 0 : R.userStatus) != null && (0, C.isDismissed)(null == R ? void 0 : R.userStatus, h.QuestContent.QUEST_BAR),
    W = (0, E.useIsQuestExpired)(R),
    {
      hasError: K,
      isLoading: z
    } = (0, S.useQuestsAssetsLoadState)(),
    q = s.useCallback(() => {
      var e, t;
      w((null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), D(!0)
    }, []),
    Q = s.useCallback(() => {
      M(!0)
    }, []),
    Z = s.useCallback(() => {
      M(!1), !L.current && !H && D(!1)
    }, [H]),
    X = s.useCallback(() => {
      M(!1), !H && D(!1), L.current = !1
    }, [H]),
    J = s.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
          withDelay: t = !1
        } = e;
      t ? v.current = window.setTimeout(q, 75) : q()
    }, [q]),
    $ = s.useCallback(() => {
      if (window.clearTimeout(v.current), !H && !P) !L.current && D(!1)
    }, [P, H]),
    ee = s.useCallback(() => {
      null != R && (0, c.trackQuestEvent)({
        questId: R.id,
        event: g.AnalyticEvents.QUEST_HOVER
      }), L.current = !0, J({
        withDelay: !0
      })
    }, [J, R]),
    et = s.useCallback(() => {
      L.current = !1, $()
    }, [$]);
  s.useLayoutEffect(() => {
    H && q()
  }, [H, q]), s.useLayoutEffect(() => {
    F && !B.current && L.current && q()
  }, [F, q]), s.useLayoutEffect(() => {
    !H && F && !B.current && !L.current && D(!1)
  }, [F, H]);
  let en = l && !Y && !V && null != R && !W && !z,
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
    immediate: A,
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
    immediate: A,
    onRest: () => {
      j(!0)
    },
    onStart: () => {
      j(!1)
    }
  });
  return l && null != R && (en || !U || z) && !K ? (0, a.jsx)(m.QuestContentImpressionTracker, {
    questId: R.id,
    questContent: h.QuestContent.QUEST_BAR,
    overrideVisibility: !O && en,
    children: () => (0, a.jsx)(r.animated.div, {
      "aria-hidden": !en,
      className: i()(N.wrapper, {
        [N.wrapperInvisible]: !en,
        [N.wrapperVisible]: en && U
      }),
      style: {
        color: R.config.colors.secondary,
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
        className: i()(N.contentWrapper, {
          [N.contentWrapperExpanded]: y,
          [N.contentWrapperAccepted]: F
        }),
        style: {
          backgroundImage: F ? "linear-gradient(90deg, ".concat(R.config.colors.primary, ", ").concat(R.config.colors.secondary, ")") : void 0,
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
          className: N.content,
          expansionSpring: es,
          isExpanded: y,
          isExpansionAnimationComplete: x,
          quest: R,
          useReducedMotion: A
        }), (0, a.jsx)(T.default, {
          className: N.content,
          onCtxMenuOpen: Q,
          onCtxMenuClose: Z,
          onCtxMenuSelect: X,
          isExpanded: y,
          isExpansionAnimationComplete: x,
          quest: R,
          useReducedMotion: A,
          ref: k
        })]
      })
    })
  }) : null
}