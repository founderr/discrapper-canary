n.d(t, {
  Z: function() {
    return f
  }
}), n(47120), n(724458);
var o = n(735250),
  s = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(392711),
  l = n.n(i),
  c = n(442837),
  d = n(481060),
  u = n(451478),
  p = n(302221),
  m = n(261345);
let x = [0, .5, 1],
  g = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  };
async function C(e, t) {
  let o = (await n.e("30166").then(n.t.bind(n, 235630, 19))).default;
  return function(e, t, n) {
    for (let o in t) {
      let t = l().get(e, o);
      if (null == t) continue;
      let s = t.map((e, t) => {
        var o;
        return null !== (o = n[t]) && void 0 !== o ? o : e
      });
      l().set(e, o, s)
    }
  }(o, g, t), o
}

function f(e) {
  var t;
  let {
    animationClassName: n,
    className: r,
    quest: i,
    useReducedMotion: l
  } = e, g = (0, c.e7)([u.Z], () => u.Z.isFocused()), f = s.useRef(null), [h, _] = s.useState(!1), E = s.useMemo(() => {
    if (null == i) return null;
    let e = (0, p.oo)(i.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      },
      n = x.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
    return C(i.id, n)
  }, [i]), S = (null === (t = i.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, T = !l && g;
  s.useEffect(() => {
    var e, t, n, o;
    g ? T && (null === (o = f.current) || void 0 === o || null === (n = o.animation) || void 0 === n || n.play()) : null === (t = f.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0)
  }, [T, g]);
  let N = s.useCallback(() => {
    _(!0)
  }, []);
  return null == E || S ? (0, o.jsx)("div", {
    className: m.backgroundFallback,
    style: {
      backgroundImage: "linear-gradient(90deg, ".concat(i.config.colors.primary, ", ").concat(i.config.colors.secondary, ")")
    }
  }) : (0, o.jsx)("div", {
    className: a()(m.lottieAnimationBackgroundWrapper, r),
    children: (0, o.jsx)(d.LottieAnimation, {
      ref: f,
      onComplete: N,
      importData: () => E,
      shouldAnimate: !h && T,
      className: a()(m.lottieAnimation, m.lottieAnimationBackground, n),
      loop: 0,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    }, i.config.colors.primary)
  })
}