"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("969176"),
  i = l.n(s),
  o = l("907002"),
  d = l("458960"),
  r = l("669491"),
  u = l("77078"),
  C = l("84339");
let c = {
    duration: 100,
    easing: d.default.Easing.inOut(d.default.Easing.back()),
    clamp: !0
  },
  f = {
    duration: 2e3,
    easing: d.default.Easing.quad,
    clamp: !0
  };

function E(e) {
  let {
    value: t,
    children: l,
    equalityFn: s = i,
    style: d,
    ...E
  } = e, m = (0, C.default)(t), [{
    spring: M
  }, h] = (0, o.useSpring)(() => ({
    spring: 0
  })), _ = (0, u.useToken)(r.default.colors.BACKGROUND_PRIMARY).hex(), T = (0, u.useToken)(r.default.colors.CONTROL_BRAND_FOREGROUND).hex(), x = n.useCallback(() => {
    h({
      spring: 1,
      config: c
    }), h({
      spring: 0,
      config: f,
      delay: 300
    })
  }, [h]);
  n.useEffect(() => {
    if (null != t && null != m) !s(t, m) && x()
  }, [x, t, m, s]);
  let A = null == M ? void 0 : M.to({
      range: [0, 1],
      output: ["".concat(_, "00"), "".concat(T, "27")]
    }),
    S = null != d ? {
      ...d,
      backgroundColor: A
    } : {
      backgroundColor: A
    };
  return (0, a.jsx)(o.animated.tr, {
    ...E,
    style: S,
    children: l
  })
}