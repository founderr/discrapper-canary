"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  r = n("77078"),
  s = n("396671");

function u(e) {
  let {
    children: t,
    className: n,
    size: l = r.Button.Sizes.SMALL,
    ...u
  } = e;
  return (0, i.jsx)(r.Button, {
    ...u,
    size: l,
    className: a(s.button, n),
    children: t
  })
}