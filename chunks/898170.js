"use strict";
s.r(t), s.d(t, {
  QuestBarBackgroundAnimation: function() {
    return m
  }
}), s("47120"), s("724458");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("392711"),
  o = s.n(r),
  u = s("442837"),
  d = s("481060"),
  c = s("451478"),
  E = s("302221"),
  _ = s("517740");
let f = [0, .5, 1],
  h = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  };
async function C(e, t) {
  let a = (await s.e("30166").then(s.t.bind(s, "235630", 19))).default;
  return function(e, t, s) {
    for (let a in t) {
      let t = o().get(e, a);
      if (null == t) continue;
      let n = t.map((e, t) => {
        var a;
        return null !== (a = s[t]) && void 0 !== a ? a : e
      });
      o().set(e, a, n)
    }
  }(a, h, t), a
}

function m(e) {
  var t;
  let {
    animationClassName: s,
    className: l,
    quest: r,
    useReducedMotion: o
  } = e, h = (0, u.useStateFromStores)([c.default], () => c.default.isFocused()), m = n.useRef(null), [T, g] = n.useState(!1), A = n.useMemo(() => {
    if (null == r) return null;
    let e = (0, E.hexToRgb)(r.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      },
      s = f.reduce((e, s) => [...e, s, t.r, t.g, t.b], []);
    return C(r.id, s)
  }, [r]), p = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, N = !o && h;
  n.useEffect(() => {
    var e, t, s, a;
    h ? N && (null === (a = m.current) || void 0 === a || null === (s = a.animation) || void 0 === s || s.play()) : null === (t = m.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0)
  }, [N, h]);
  let S = n.useCallback(() => {
    g(!0)
  }, []);
  return null == A || p ? (0, a.jsx)("div", {
    className: _.backgroundFallback,
    style: {
      backgroundImage: "linear-gradient(90deg, ".concat(r.config.colors.primary, ", ").concat(r.config.colors.secondary, ")")
    }
  }) : (0, a.jsx)("div", {
    className: i()(_.lottieAnimationBackgroundWrapper, l),
    children: (0, a.jsx)(d.LottieAnimation, {
      ref: m,
      onComplete: S,
      importData: () => A,
      shouldAnimate: !T && N,
      className: i()(_.lottieAnimation, _.lottieAnimationBackground, s),
      loop: 0,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    }, r.config.colors.primary)
  })
}