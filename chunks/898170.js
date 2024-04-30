"use strict";
a.r(t), a.d(t, {
  QuestBarBackgroundAnimation: function() {
    return m
  }
}), a("47120"), a("724458");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("392711"),
  o = a.n(r),
  u = a("442837"),
  d = a("451478"),
  c = a("301822"),
  f = a("302221"),
  E = a("651596");
let h = [0, .5, 1],
  _ = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  };
async function C(e, t) {
  let n = (await a.e("30166").then(a.t.bind(a, "235630", 19))).default;
  return function(e, t, a) {
    for (let n in t) {
      let t = o().get(e, n);
      if (null == t) continue;
      let s = t.map((e, t) => {
        var n;
        return null !== (n = a[t]) && void 0 !== n ? n : e
      });
      o().set(e, n, s)
    }
  }(n, _, t), n
}

function m(e) {
  var t;
  let {
    animationClassName: a,
    className: l,
    quest: r,
    useReducedMotion: o
  } = e, _ = (0, u.useStateFromStores)([d.default], () => d.default.isFocused()), m = s.useRef(null), [S, p] = s.useState(!1), I = s.useMemo(() => {
    if (null == r) return null;
    let e = (0, f.hexToRgb)(r.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      },
      a = h.reduce((e, a) => [...e, a, t.r, t.g, t.b], []);
    return C(r.id, a)
  }, [r]), T = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, g = !o && _;
  s.useEffect(() => {
    var e, t, a, n;
    _ ? g && (null === (n = m.current) || void 0 === n || null === (a = n.animation) || void 0 === a || a.play()) : null === (t = m.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0)
  }, [g, _]);
  let A = s.useCallback(() => {
    p(!0)
  }, []);
  return null == I || T ? (0, n.jsx)("div", {
    className: E.backgroundFallback,
    style: {
      backgroundImage: "linear-gradient(90deg, ".concat(r.config.colors.primary, ", ").concat(r.config.colors.secondary, ")")
    }
  }) : (0, n.jsx)("div", {
    className: i()(E.lottieAnimationBackgroundWrapper, l),
    children: (0, n.jsx)(c.default, {
      ref: m,
      onComplete: A,
      importData: () => I,
      shouldAnimate: !S && g,
      className: i()(E.lottieAnimation, E.lottieAnimationBackground, a),
      loop: 0,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    }, r.config.colors.primary)
  })
}