n.d(t, {
  Z: function() {
    return C
  }
}), n(47120), n(724458);
var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(392711),
  i = n.n(l),
  c = n(442837),
  u = n(481060),
  d = n(451478),
  p = n(302221),
  x = n(261345);
let m = [0, .5, 1],
  g = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  };
async function h(e, t) {
  let s = (await n.e("30166").then(n.t.bind(n, 235630, 19))).default;
  return function(e, t, n) {
    for (let s in t) {
      let t = i().get(e, s);
      if (null == t) continue;
      let o = t.map((e, t) => {
        var s;
        return null !== (s = n[t]) && void 0 !== s ? s : e
      });
      i().set(e, s, o)
    }
  }(s, g, t), s
}

function C(e) {
  var t;
  let {
    animationClassName: n,
    className: r,
    quest: l,
    useReducedMotion: i
  } = e, g = (0, c.e7)([d.Z], () => d.Z.isFocused()), C = o.useRef(null), [f, E] = o.useState(!1), S = o.useMemo(() => {
    if (null == l) return null;
    let e = (0, p.oo)(l.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      },
      n = m.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
    return h(l.id, n)
  }, [l]), v = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, T = !i && g;
  o.useEffect(() => {
    var e, t, n, s;
    g ? T && (null === (s = C.current) || void 0 === s || null === (n = s.animation) || void 0 === n || n.play()) : null === (t = C.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0)
  }, [T, g]);
  let j = o.useCallback(() => {
    E(!0)
  }, []);
  return null == S || v ? (0, s.jsx)("div", {
    className: x.backgroundFallback,
    style: {
      backgroundImage: "linear-gradient(90deg, ".concat(l.config.colors.primary, ", ").concat(l.config.colors.secondary, ")")
    }
  }) : (0, s.jsx)("div", {
    className: a()(x.lottieAnimationBackgroundWrapper, r),
    children: (0, s.jsx)(u.LottieAnimation, {
      ref: C,
      onComplete: j,
      importData: () => S,
      shouldAnimate: !f && T,
      className: a()(x.lottieAnimation, x.lottieAnimationBackground, n),
      loop: 0,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    }, l.config.colors.primary)
  })
}