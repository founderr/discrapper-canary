"use strict";
s.r(t), s.d(t, {
  QuestBarBackgroundAnimation: function() {
    return m
  }
}), s("47120"), s("724458");
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("392711"),
  o = s.n(r),
  u = s("442837"),
  d = s("481060"),
  c = s("451478"),
  E = s("302221"),
  f = s("517740");
let _ = [0, .5, 1],
  h = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  };
async function C(e, t) {
  let n = (await s.e("30166").then(s.t.bind(s, "235630", 19))).default;
  return function(e, t, s) {
    for (let n in t) {
      let t = o().get(e, n);
      if (null == t) continue;
      let a = t.map((e, t) => {
        var n;
        return null !== (n = s[t]) && void 0 !== n ? n : e
      });
      o().set(e, n, a)
    }
  }(n, h, t), n
}

function m(e) {
  var t;
  let {
    animationClassName: s,
    className: l,
    quest: r,
    useReducedMotion: o
  } = e, h = (0, u.useStateFromStores)([c.default], () => c.default.isFocused()), m = a.useRef(null), [T, g] = a.useState(!1), A = a.useMemo(() => {
    if (null == r) return null;
    let e = (0, E.hexToRgb)(r.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      },
      s = _.reduce((e, s) => [...e, s, t.r, t.g, t.b], []);
    return C(r.id, s)
  }, [r]), p = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, N = !o && h;
  a.useEffect(() => {
    var e, t, s, n;
    h ? N && (null === (n = m.current) || void 0 === n || null === (s = n.animation) || void 0 === s || s.play()) : null === (t = m.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0)
  }, [N, h]);
  let S = a.useCallback(() => {
    g(!0)
  }, []);
  return null == A || p ? (0, n.jsx)("div", {
    className: f.backgroundFallback,
    style: {
      backgroundImage: "linear-gradient(90deg, ".concat(r.config.colors.primary, ", ").concat(r.config.colors.secondary, ")")
    }
  }) : (0, n.jsx)("div", {
    className: i()(f.lottieAnimationBackgroundWrapper, l),
    children: (0, n.jsx)(d.LottieAnimation, {
      ref: m,
      onComplete: S,
      importData: () => A,
      shouldAnimate: !T && N,
      className: i()(f.lottieAnimation, f.lottieAnimationBackground, s),
      loop: 0,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    }, r.config.colors.primary)
  })
}