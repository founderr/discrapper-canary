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
  E = a("328877");
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
    quest: a,
    useReducedMotion: l
  } = e, r = (0, u.useStateFromStores)([d.default], () => d.default.isFocused()), o = s.useRef(null), [_, m] = s.useState(!1), S = s.useMemo(() => {
    if (null == a) return null;
    let e = (0, f.hexToRgb)(a.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      },
      n = h.reduce((e, a) => [...e, a, t.r, t.g, t.b], []);
    return C(a.id, n)
  }, [a]), I = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, p = !l && r;
  s.useEffect(() => {
    var e, t, a, n;
    r ? p && (null === (n = o.current) || void 0 === n || null === (a = n.animation) || void 0 === a || a.play()) : null === (t = o.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0)
  }, [p, r]);
  let T = s.useCallback(() => {
    m(!0)
  }, []);
  return null == S || I ? (0, n.jsx)("div", {
    className: E.backgroundFallback,
    style: {
      backgroundImage: "linear-gradient(90deg, ".concat(a.config.colors.primary, ", ").concat(a.config.colors.secondary, ")")
    }
  }) : (0, n.jsx)("div", {
    className: E.lottieAnimationBackgroundWrapper,
    children: (0, n.jsx)(c.default, {
      ref: o,
      onComplete: T,
      importData: () => S,
      shouldAnimate: !_ && p,
      className: i()(E.lottieAnimation, E.lottieAnimationBackground),
      loop: 0,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    }, a.config.colors.primary)
  })
}