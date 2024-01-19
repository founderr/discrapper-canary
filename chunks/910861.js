"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  a = n("77078"),
  s = n("396671");

function o(e) {
  let {
    children: t,
    className: n,
    size: r = a.Button.Sizes.SMALL,
    ...o
  } = e;
  return (0, i.jsx)(a.Button, {
    ...o,
    size: r,
    className: l(s.button, n),
    children: t
  })
}