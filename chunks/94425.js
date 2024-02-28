"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
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
  _ = n("815496"),
  C = n("374023"),
  I = n("879364"),
  S = n("2973"),
  m = n("588025"),
  p = n("227231"),
  T = n("919354"),
  g = n("705589"),
  A = n("166604"),
  N = n("49111"),
  R = n("335294");
let O = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  },
  v = [0, .5, 1],
  L = {
    "layers[1].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[2].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[3].shapes[0].it[1].c.k": [1, .466666668653, .972549021244]
  };

function M(e, t, n) {
  for (let a in t) {
    let s = t[a],
      l = o.get(e, a);
    if (null == l) continue;
    let i = l.map((e, t) => s[t] === e ? n[t] : e);
    o.set(e, a, i)
  }
}
let P = new Map;
async function D(e, t) {
  let a = P.get(e);
  if (null != a) return a;
  let s = (await n.el("723469").then(n.t.bind(n, "723469", 19))).default;
  return M(s, O, t), P.set(e, s), s
}
let y = new Map;
async function x(e, t) {
  let a = y.get(e);
  if (null != a) return a;
  let s = (await n.el("479580").then(n.t.bind(n, "479580", 19))).default;
  return M(s, L, t), y.set(e, s), s
}

function b(e) {
  return e + .5 * (255 - e)
}
var U = function() {
  var e, t, n;
  let l = (0, C.useIsEligibleForQuests)({
      location: A.QuestsExperimentLocations.ACTIVITY_PANEL,
      autoTrackExposure: !0
    }),
    r = (0, d.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    o = (0, d.useStateFromStores)([S.default], () => (0, p.getQuestForTargetedContent)(S.default.quests, m.QuestContent.QUEST_BAR)),
    O = (0, d.useStateFromStores)([f.default], () => f.default.isFocused()),
    L = !r && O,
    M = s.useRef(-1),
    P = s.useRef(!1),
    [y, U] = s.useState(!1),
    [G, j] = s.useState(!1),
    [w, k] = s.useState(!1),
    [F, B] = s.useState(!0),
    [H, V] = s.useState(!0),
    [Y, W] = s.useState(240),
    K = s.useRef(!1),
    z = s.useRef(null),
    q = (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
    Q = (null == o ? void 0 : null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    Z = (null == o ? void 0 : null === (n = o.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
    X = (null == o ? void 0 : o.userStatus) != null && (0, p.isDismissed)(null == o ? void 0 : o.userStatus, m.QuestContent.QUEST_BAR),
    J = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, h.hexToRgb)(o.config.colors.primary);
      return [b(e.r) / 255, b(e.g) / 255, b(e.b) / 255]
    }, [o]),
    $ = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, h.hexToRgb)(o.config.colors.primary),
        t = {
          r: e.r / 255,
          g: e.g / 255,
          b: e.b / 255
        };
      return v.reduce((e, n) => [...e, n, t.r, t.g, t.b], [])
    }, [o]),
    ee = (0, I.useIsQuestExpired)(o),
    et = s.useCallback(() => {
      var e, t;
      W((null !== (t = null === (e = z.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), k(!0)
    }, []),
    en = s.useCallback(() => {
      U(!0)
    }, []),
    ea = s.useCallback(() => {
      U(!1), !P.current && !Q && k(!1)
    }, [Q]),
    es = s.useCallback(() => {
      U(!1), k(!1), P.current = !1
    }, []),
    el = s.useCallback(() => {
      window.clearTimeout(M.current), K.current = !0, j(!1), et()
    }, [et]),
    ei = s.useCallback(() => {
      if (!Q) !y && (M.current = window.setTimeout(() => {
        !P.current && k(!1)
      }, 200))
    }, [y, Q]),
    er = s.useCallback(() => {
      null != o && (0, _.trackQuestEvent)(o.id, N.AnalyticEvents.QUEST_HOVER), P.current = !0, el()
    }, [el, o]),
    eo = s.useCallback(() => {
      P.current = !1, ei()
    }, [ei]),
    eu = s.useCallback(() => {
      K.current = !0
    }, []);
  s.useEffect(() => {
    if (K.current) return;
    let e = window.setTimeout(() => {
      j(f.default.isFocused())
    }, 500);
    return () => {
      window.clearTimeout(e)
    }
  }, []), s.useEffect(() => {
    Q && et()
  }, [Q, et]);
  let ed = l && !X && !Z && null != o && !ee,
    ec = s.useRef(ed);
  s.useLayoutEffect(() => {
    ed !== ec.current && V(!1), ec.current = ed
  }, [ed]);
  let {
    expansionFactor: ef
  } = (0, u.useSpring)({
    from: {
      expansionFactor: 0
    },
    to: {
      expansionFactor: w ? 1 : 0
    },
    config: {
      tension: 300,
      friction: 30,
      clamp: !0
    },
    immediate: r,
    onRest: () => {
      B(!0)
    },
    onStart: () => {
      B(!1)
    }
  }), {
    visibilityFactor: eE
  } = (0, u.useSpring)({
    from: {
      visibilityFactor: 0
    },
    to: {
      visibilityFactor: ed ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: r,
    onRest: () => {
      V(!0)
    },
    onStart: () => {
      V(!1)
    }
  });
  return l && null != o && (ed || !H) ? (0, a.jsxs)(u.animated.div, {
    className: i(R.wrapper, {
      [R.wrapperVisible]: ed && H
    }),
    style: {
      color: o.config.colors.secondary,
      height: eE.to({
        range: [0, 1],
        output: [0, Q && w ? Y : 40]
      })
    },
    children: [(0, a.jsxs)(u.animated.div, {
      onMouseLeave: eo,
      onMouseEnter: er,
      onFocus: el,
      onBlur: ei,
      className: i(R.contentWrapper, {
        [R.contentWrapperExpanded]: w,
        [R.contentWrapperAccepted]: q
      }),
      style: {
        backgroundImage: q ? "linear-gradient(90deg, ".concat(o.config.colors.primary, ", ").concat(o.config.colors.secondary, ")") : void 0,
        height: ef.to({
          range: [0, 1],
          output: [40, q ? Y : 240]
        }),
        transform: eE.to({
          range: [0, 1],
          output: [100, 0]
        }).to(e => "translateY(".concat(e, "%)"))
      },
      children: [(0, a.jsx)(T.default, {
        className: R.content,
        expansionFactor: ef,
        isExpanded: w,
        isExpansionAnimationComplete: F,
        quest: o
      }), (0, a.jsx)(g.default, {
        className: R.content,
        onCtxMenuOpen: en,
        onCtxMenuClose: ea,
        onCtxMenuSelect: es,
        expansionFactor: ef,
        isExpanded: w,
        isExpansionAnimationComplete: F,
        quest: o,
        useReducedMotion: r,
        ref: z
      })]
    }), null != $ && !q && (!w || w && !F) && (0, a.jsx)("div", {
      className: R.lottieAnimationBackgroundWrapper,
      children: (0, a.jsx)(E.default, {
        importData: () => D(o.id, $),
        shouldAnimate: L,
        className: i(R.lottieAnimation, R.lottieAnimationBackground),
        loop: !0
      })
    }), !q && null != J && (0, a.jsx)(E.default, {
      importData: () => x(o.id, J),
      shouldAnimate: G,
      className: i(R.lottieAnimation, R.lottieAnimationForeground, {
        [R.lottieAnimationForegroundHidden]: !G
      }),
      loop: !1,
      onComplete: eu,
      autoplay: G
    }), (0, a.jsx)("div", {
      className: R.backgroundFallback
    })]
  }) : null
}