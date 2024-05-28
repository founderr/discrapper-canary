"use strict";
s.r(t), s.d(t, {
  QuestBarBackgroundAnimation: function() {
    return T
  }
}), s("47120"), s("724458");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("392711"),
  u = s.n(r),
  o = s("442837"),
  d = s("451478"),
  c = s("301822"),
  E = s("302221"),
  _ = s("517740");
let f = [0, .5, 1],
  h = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  };
async function m(e, t) {
  let a = (await s.e("30166").then(s.t.bind(s, "235630", 19))).default;
  return function(e, t, s) {
    for (let a in t) {
      let t = u().get(e, a);
      if (null == t) continue;
      let n = t.map((e, t) => {
        var a;
        return null !== (a = s[t]) && void 0 !== a ? a : e
      });
      u().set(e, a, n)
    }
  }(a, h, t), a
}

function T(e) {
  var t;
  let {
    animationClassName: s,
    className: l,
    quest: r,
    useReducedMotion: u
  } = e, h = (0, o.useStateFromStores)([d.default], () => d.default.isFocused()), T = n.useRef(null), [C, g] = n.useState(!1), A = n.useMemo(() => {
    if (null == r) return null;
    let e = (0, E.hexToRgb)(r.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      },
      s = f.reduce((e, s) => [...e, s, t.r, t.g, t.b], []);
    return m(r.id, s)
  }, [r]), N = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, p = !u && h;
  n.useEffect(() => {
    var e, t, s, a;
    h ? p && (null === (a = T.current) || void 0 === a || null === (s = a.animation) || void 0 === s || s.play()) : null === (t = T.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0)
  }, [p, h]);
  let S = n.useCallback(() => {
    g(!0)
  }, []);
  return null == A || N ? (0, a.jsx)("div", {
    className: _.backgroundFallback,
    style: {
      backgroundImage: "linear-gradient(90deg, ".concat(r.config.colors.primary, ", ").concat(r.config.colors.secondary, ")")
    }
  }) : (0, a.jsx)("div", {
    className: i()(_.lottieAnimationBackgroundWrapper, l),
    children: (0, a.jsx)(c.default, {
      ref: T,
      onComplete: S,
      importData: () => A,
      shouldAnimate: !C && p,
      className: i()(_.lottieAnimation, _.lottieAnimationBackground, s),
      loop: 0,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    }, r.config.colors.primary)
  })
}