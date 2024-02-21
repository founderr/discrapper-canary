"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
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
  C = n("2973"),
  I = n("588025"),
  S = n("227231"),
  m = n("919354"),
  p = n("705589"),
  T = n("166604"),
  g = n("335294");
let A = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  },
  N = [0, .5, 1],
  R = {
    "layers[1].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[2].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[3].shapes[0].it[1].c.k": [1, .466666668653, .972549021244]
  };

function O(e, t, n) {
  for (let a in t) {
    let s = t[a],
      l = o.get(e, a);
    if (null == l) continue;
    let i = l.map((e, t) => s[t] === e ? n[t] : e);
    o.set(e, a, i)
  }
}
let v = new Map;
async function L(e, t) {
  let a = v.get(e);
  if (null != a) return a;
  let s = (await n.el("723469").then(n.t.bind(n, "723469", 19))).default;
  return O(s, A, t), v.set(e, s), s
}
let M = new Map;
async function P(e, t) {
  let a = M.get(e);
  if (null != a) return a;
  let s = (await n.el("479580").then(n.t.bind(n, "479580", 19))).default;
  return O(s, R, t), M.set(e, s), s
}

function D(e) {
  return e + .5 * (255 - e)
}
var y = function() {
  var e, t, n;
  let l = (0, _.useIsEligibleForQuests)({
      location: T.QuestsExperimentLocations.ACTIVITY_PANEL,
      autoTrackExposure: !0
    }),
    r = (0, d.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    o = (0, d.useStateFromStores)([C.default], () => (0, S.getQuestForTargetedContent)(C.default.quests, I.QuestContent.QUEST_BAR)),
    A = (0, d.useStateFromStores)([f.default], () => f.default.isFocused()),
    R = !r && A,
    O = s.useRef(-1),
    v = s.useRef(!1),
    [M, y] = s.useState(!1),
    [x, b] = s.useState(!1),
    [U, G] = s.useState(!1),
    [j, w] = s.useState(!0),
    [k, F] = s.useState(!0),
    [B, H] = s.useState(240),
    V = s.useRef(!1),
    Y = s.useRef(null),
    W = (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
    K = (null == o ? void 0 : null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    z = (null == o ? void 0 : null === (n = o.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
    q = (null == o ? void 0 : o.userStatus) != null && (0, S.isDismissed)(null == o ? void 0 : o.userStatus, I.QuestContent.QUEST_BAR),
    Q = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, h.hexToRgb)(o.config.colors.primary);
      return [D(e.r) / 255, D(e.g) / 255, D(e.b) / 255]
    }, [o]),
    Z = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, h.hexToRgb)(o.config.colors.primary),
        t = {
          r: e.r / 255,
          g: e.g / 255,
          b: e.b / 255
        };
      return N.reduce((e, n) => [...e, n, t.r, t.g, t.b], [])
    }, [o]),
    X = s.useCallback(() => {
      var e, t;
      H((null !== (t = null === (e = Y.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), G(!0)
    }, []),
    J = s.useCallback(() => {
      y(!0)
    }, []),
    $ = s.useCallback(() => {
      y(!1), !v.current && !K && G(!1)
    }, [K]),
    ee = s.useCallback(() => {
      y(!1), G(!1), v.current = !1
    }, []),
    et = s.useCallback(() => {
      window.clearTimeout(O.current), V.current = !0, b(!1), X()
    }, [X]),
    en = s.useCallback(() => {
      if (!K) !M && (O.current = window.setTimeout(() => {
        !v.current && G(!1)
      }, 200))
    }, [M, K]),
    ea = s.useCallback(() => {
      v.current = !0, et()
    }, [et]),
    es = s.useCallback(() => {
      v.current = !1, en()
    }, [en]),
    el = s.useCallback(() => {
      V.current = !0
    }, []);
  s.useEffect(() => {
    if (V.current) return;
    let e = window.setTimeout(() => {
      b(f.default.isFocused())
    }, 500);
    return () => {
      window.clearTimeout(e)
    }
  }, []), s.useEffect(() => {
    K && X()
  }, [K, X]);
  let ei = l && !q && !z && null != o,
    er = s.useRef(ei);
  s.useLayoutEffect(() => {
    ei !== er.current && F(!1), er.current = ei
  }, [ei]);
  let {
    expansionFactor: eo
  } = (0, u.useSpring)({
    from: {
      expansionFactor: 0
    },
    to: {
      expansionFactor: U ? 1 : 0
    },
    config: {
      tension: 300,
      friction: 30,
      clamp: !0
    },
    immediate: r,
    onRest: () => {
      w(!0)
    },
    onStart: () => {
      w(!1)
    }
  }), {
    visibilityFactor: eu
  } = (0, u.useSpring)({
    from: {
      visibilityFactor: 0
    },
    to: {
      visibilityFactor: ei ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: r,
    onRest: () => {
      F(!0)
    },
    onStart: () => {
      F(!1)
    }
  });
  return l && null != o && (ei || !k) ? (0, a.jsxs)(u.animated.div, {
    className: i(g.wrapper, {
      [g.wrapperVisible]: ei && k
    }),
    style: {
      color: o.config.colors.secondary,
      height: eu.to({
        range: [0, 1],
        output: [0, K && U ? B : 40]
      })
    },
    children: [(0, a.jsxs)(u.animated.div, {
      onMouseLeave: es,
      onMouseEnter: ea,
      onFocus: et,
      onBlur: en,
      className: i(g.contentWrapper, {
        [g.contentWrapperExpanded]: U,
        [g.contentWrapperAccepted]: W
      }),
      style: {
        backgroundImage: W ? "linear-gradient(90deg, ".concat(o.config.colors.primary, ", ").concat(o.config.colors.secondary, ")") : void 0,
        height: eo.to({
          range: [0, 1],
          output: [40, W ? B : 240]
        }),
        transform: eu.to({
          range: [0, 1],
          output: [100, 0]
        }).to(e => "translateY(".concat(e, "%)"))
      },
      children: [(0, a.jsx)(m.default, {
        className: g.content,
        expansionFactor: eo,
        isExpanded: U,
        isExpansionAnimationComplete: j,
        quest: o
      }), (0, a.jsx)(p.default, {
        className: g.content,
        onCtxMenuOpen: J,
        onCtxMenuClose: $,
        onCtxMenuSelect: ee,
        expansionFactor: eo,
        isExpanded: U,
        isExpansionAnimationComplete: j,
        quest: o,
        useReducedMotion: r,
        ref: Y
      })]
    }), null != Z && !W && (!U || U && !j) && (0, a.jsx)("div", {
      className: g.lottieAnimationBackgroundWrapper,
      children: (0, a.jsx)(E.default, {
        importData: () => L(o.id, Z),
        shouldAnimate: R,
        className: i(g.lottieAnimation, g.lottieAnimationBackground),
        loop: !0
      })
    }), !W && null != Q && (0, a.jsx)(E.default, {
      importData: () => P(o.id, Q),
      shouldAnimate: x,
      className: i(g.lottieAnimation, g.lottieAnimationForeground, {
        [g.lottieAnimationForegroundHidden]: !x
      }),
      loop: !1,
      onComplete: el,
      autoplay: x
    }), (0, a.jsx)("div", {
      className: g.backgroundFallback
    })]
  }) : null
}