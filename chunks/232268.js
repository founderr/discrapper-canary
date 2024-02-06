"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var l = n("65597"),
  r = n("880731");

function o(e) {
  let {
    children: t,
    confettiLocation: n
  } = e, o = (0, l.default)([r.default], () => r.default.isEnabled({
    confettiLocation: n
  }));
  return o ? (0, i.jsx)(i.Fragment, {
    children: t
  }) : null
}