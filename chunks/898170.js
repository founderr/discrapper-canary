n.d(t, {
  Z: function() {
    return C
  }
}), n(47120), n(724458);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(392711),
  o = n.n(r),
  c = n(442837),
  d = n(481060),
  u = n(451478),
  E = n(302221),
  _ = n(261345);
let h = [0, .5, 1],
  m = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  };
async function T(e, t) {
  let s = (await n.e("30166").then(n.t.bind(n, 235630, 19))).default;
  return function(e, t, n) {
    for (let s in t) {
      let t = o().get(e, s);
      if (null == t) continue;
      let a = t.map((e, t) => {
        var s;
        return null !== (s = n[t]) && void 0 !== s ? s : e
      });
      o().set(e, s, a)
    }
  }(s, m, t), s
}

function C(e) {
  var t;
  let {
    animationClassName: n,
    className: i,
    quest: r,
    useReducedMotion: o
  } = e, m = (0, c.e7)([u.Z], () => u.Z.isFocused()), C = a.useRef(null), [g, p] = a.useState(!1), N = a.useMemo(() => {
    if (null == r) return null;
    let e = (0, E.oo)(r.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      },
      n = h.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
    return T(r.id, n)
  }, [r]), I = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, A = !o && m;
  a.useEffect(() => {
    var e, t, n, s;
    m ? A && (null === (s = C.current) || void 0 === s || null === (n = s.animation) || void 0 === n || n.play()) : null === (t = C.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0)
  }, [A, m]);
  let f = a.useCallback(() => {
    p(!0)
  }, []);
  return null == N || I ? (0, s.jsx)("div", {
    className: _.backgroundFallback,
    style: {
      backgroundImage: "linear-gradient(90deg, ".concat(r.config.colors.primary, ", ").concat(r.config.colors.secondary, ")")
    }
  }) : (0, s.jsx)("div", {
    className: l()(_.lottieAnimationBackgroundWrapper, i),
    children: (0, s.jsx)(d.LottieAnimation, {
      ref: C,
      onComplete: f,
      importData: () => N,
      shouldAnimate: !g && A,
      className: l()(_.lottieAnimation, _.lottieAnimationBackground, n),
      loop: 0,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    }, r.config.colors.primary)
  })
}