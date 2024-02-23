"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var a = n("65597"),
  s = n("77078"),
  i = n("880731"),
  r = n("300586");

function o(e) {
  let {
    isShaking: t,
    shakeLocation: n,
    children: o,
    className: u
  } = e, d = (0, r.default)(n), c = (0, a.default)([i.default], () => i.default.isEnabled({
    shakeLocation: n
  }));
  return c ? (0, l.jsx)(s.Shaker, {
    isShaking: t,
    intensity: d,
    className: u,
    children: o
  }) : (0, l.jsx)(l.Fragment, {
    children: o
  })
}