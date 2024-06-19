t.d(l, {
  Z: function() {
    return m
  }
}), t(47120);
var n = t(735250),
  s = t(470079),
  a = t(498607),
  o = t.n(a),
  i = t(920906),
  r = t(748780),
  C = t(692547),
  c = t(481060),
  d = t(110924);
let u = {
    duration: 100,
    easing: r.Z.Easing.inOut(r.Z.Easing.back()),
    clamp: !0
  },
  E = {
    duration: 2e3,
    easing: r.Z.Easing.quad,
    clamp: !0
  };

function m(e) {
  let {
    value: l,
    children: t,
    equalityFn: a = o(),
    style: r,
    ...m
  } = e, _ = (0, d.Z)(l), [{
    spring: M
  }, h] = (0, i.useSpring)(() => ({
    spring: 0
  })), x = (0, c.useToken)(C.Z.colors.BACKGROUND_PRIMARY).hex(), T = (0, c.useToken)(C.Z.colors.CONTROL_BRAND_FOREGROUND).hex(), L = s.useCallback(() => {
    h({
      spring: 1,
      config: u
    }), h({
      spring: 0,
      config: E,
      delay: 300
    })
  }, [h]);
  s.useEffect(() => {
    if (!(null == l || null == _ || a(l, _))) L()
  }, [L, l, _, a]);
  let H = null == M ? void 0 : M.to({
      range: [0, 1],
      output: ["".concat(x, "00"), "".concat(T, "27")]
    }),
    g = null != r ? {
      ...r,
      backgroundColor: H
    } : {
      backgroundColor: H
    };
  return (0, n.jsx)(i.animated.tr, {
    ...m,
    style: g,
    children: t
  })
}