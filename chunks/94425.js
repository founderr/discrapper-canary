"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007"), n("808653");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("917351"),
  o = n.n(r),
  u = n("907002"),
  d = n("446674"),
  c = n("206230"),
  f = n("471671"),
  E = n("491605"),
  h = n("284679"),
  _ = n("374023"),
  C = n("879364"),
  I = n("2973"),
  S = n("588025"),
  m = n("227231"),
  p = n("919354"),
  T = n("705589"),
  g = n("166604"),
  A = n("335294");
let N = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  },
  R = [0, .5, 1],
  O = {
    "layers[1].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[2].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[3].shapes[0].it[1].c.k": [1, .466666668653, .972549021244]
  };

function v(e, t, n) {
  for (let a in t) {
    let s = t[a],
      l = o.get(e, a);
    if (null == l) continue;
    let i = l.map((e, t) => s[t] === e ? n[t] : e);
    o.set(e, a, i)
  }
}
let L = new Map;
async function M(e, t) {
  let a = L.get(e);
  if (null != a) return a;
  let s = (await n.el("723469").then(n.t.bind(n, "723469", 19))).default;
  return v(s, N, t), L.set(e, s), s
}
let P = new Map;
async function D(e, t) {
  let a = P.get(e);
  if (null != a) return a;
  let s = (await n.el("479580").then(n.t.bind(n, "479580", 19))).default;
  return v(s, O, t), P.set(e, s), s
}

function y(e) {
  return e + .5 * (255 - e)
}
var x = function() {
  var e, t, n;
  let l = (0, _.useIsEligibleForQuests)({
      location: g.QuestsExperimentLocations.ACTIVITY_PANEL,
      autoTrackExposure: !0
    }),
    r = (0, d.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    o = (0, d.useStateFromStores)([I.default], () => (0, m.getQuestForTargetedContent)(I.default.quests, S.QuestContent.QUEST_BAR)),
    N = (0, d.useStateFromStores)([f.default], () => f.default.isFocused()),
    O = !r && N,
    v = s.useRef(-1),
    L = s.useRef(!1),
    [P, x] = s.useState(!1),
    [b, U] = s.useState(!1),
    [G, j] = s.useState(!1),
    [w, k] = s.useState(!0),
    [F, B] = s.useState(!0),
    [H, V] = s.useState(240),
    Y = s.useRef(!1),
    W = s.useRef(null),
    K = (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
    z = (null == o ? void 0 : null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    q = (null == o ? void 0 : null === (n = o.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
    Q = (null == o ? void 0 : o.userStatus) != null && (0, m.isDismissed)(null == o ? void 0 : o.userStatus, S.QuestContent.QUEST_BAR),
    Z = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, h.hexToRgb)(o.config.colors.primary);
      return [y(e.r) / 255, y(e.g) / 255, y(e.b) / 255]
    }, [o]),
    X = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, h.hexToRgb)(o.config.colors.primary),
        t = {
          r: e.r / 255,
          g: e.g / 255,
          b: e.b / 255
        };
      return R.reduce((e, n) => [...e, n, t.r, t.g, t.b], [])
    }, [o]),
    J = (0, C.useIsQuestExpired)(o),
    $ = s.useCallback(() => {
      var e, t;
      V((null !== (t = null === (e = W.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), j(!0)
    }, []),
    ee = s.useCallback(() => {
      x(!0)
    }, []),
    et = s.useCallback(() => {
      x(!1), !L.current && !z && j(!1)
    }, [z]),
    en = s.useCallback(() => {
      x(!1), j(!1), L.current = !1
    }, []),
    ea = s.useCallback(() => {
      window.clearTimeout(v.current), Y.current = !0, U(!1), $()
    }, [$]),
    es = s.useCallback(() => {
      if (!z) !P && (v.current = window.setTimeout(() => {
        !L.current && j(!1)
      }, 200))
    }, [P, z]),
    el = s.useCallback(() => {
      L.current = !0, ea()
    }, [ea]),
    ei = s.useCallback(() => {
      L.current = !1, es()
    }, [es]),
    er = s.useCallback(() => {
      Y.current = !0
    }, []);
  s.useEffect(() => {
    if (Y.current) return;
    let e = window.setTimeout(() => {
      U(f.default.isFocused())
    }, 500);
    return () => {
      window.clearTimeout(e)
    }
  }, []), s.useEffect(() => {
    z && $()
  }, [z, $]);
  let eo = l && !Q && !q && null != o && !J,
    eu = s.useRef(eo);
  s.useLayoutEffect(() => {
    eo !== eu.current && B(!1), eu.current = eo
  }, [eo]);
  let {
    expansionFactor: ed
  } = (0, u.useSpring)({
    from: {
      expansionFactor: 0
    },
    to: {
      expansionFactor: G ? 1 : 0
    },
    config: {
      tension: 300,
      friction: 30,
      clamp: !0
    },
    immediate: r,
    onRest: () => {
      k(!0)
    },
    onStart: () => {
      k(!1)
    }
  }), {
    visibilityFactor: ec
  } = (0, u.useSpring)({
    from: {
      visibilityFactor: 0
    },
    to: {
      visibilityFactor: eo ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: r,
    onRest: () => {
      B(!0)
    },
    onStart: () => {
      B(!1)
    }
  });
  return l && null != o && (eo || !F) ? (0, a.jsxs)(u.animated.div, {
    className: i(A.wrapper, {
      [A.wrapperVisible]: eo && F
    }),
    style: {
      color: o.config.colors.secondary,
      height: ec.to({
        range: [0, 1],
        output: [0, z && G ? H : 40]
      })
    },
    children: [(0, a.jsxs)(u.animated.div, {
      onMouseLeave: ei,
      onMouseEnter: el,
      onFocus: ea,
      onBlur: es,
      className: i(A.contentWrapper, {
        [A.contentWrapperExpanded]: G,
        [A.contentWrapperAccepted]: K
      }),
      style: {
        backgroundImage: K ? "linear-gradient(90deg, ".concat(o.config.colors.primary, ", ").concat(o.config.colors.secondary, ")") : void 0,
        height: ed.to({
          range: [0, 1],
          output: [40, K ? H : 240]
        }),
        transform: ec.to({
          range: [0, 1],
          output: [100, 0]
        }).to(e => "translateY(".concat(e, "%)"))
      },
      children: [(0, a.jsx)(p.default, {
        className: A.content,
        expansionFactor: ed,
        isExpanded: G,
        isExpansionAnimationComplete: w,
        quest: o
      }), (0, a.jsx)(T.default, {
        className: A.content,
        onCtxMenuOpen: ee,
        onCtxMenuClose: et,
        onCtxMenuSelect: en,
        expansionFactor: ed,
        isExpanded: G,
        isExpansionAnimationComplete: w,
        quest: o,
        useReducedMotion: r,
        ref: W
      })]
    }), null != X && !K && (!G || G && !w) && (0, a.jsx)("div", {
      className: A.lottieAnimationBackgroundWrapper,
      children: (0, a.jsx)(E.default, {
        importData: () => M(o.id, X),
        shouldAnimate: O,
        className: i(A.lottieAnimation, A.lottieAnimationBackground),
        loop: !0
      })
    }), !K && null != Z && (0, a.jsx)(E.default, {
      importData: () => D(o.id, Z),
      shouldAnimate: b,
      className: i(A.lottieAnimation, A.lottieAnimationForeground, {
        [A.lottieAnimationForegroundHidden]: !b
      }),
      loop: !1,
      onComplete: er,
      autoplay: b
    }), (0, a.jsx)("div", {
      className: A.backgroundFallback
    })]
  }) : null
}