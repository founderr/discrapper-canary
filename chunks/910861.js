"use strict";
n.r(e), n.d(e, {
  default: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  r = n("77078"),
  u = n("396671");

function s(t) {
  let {
    children: e,
    className: n,
    size: l = r.Button.Sizes.SMALL,
    ...s
  } = t;
  return (0, i.jsx)(r.Button, {
    ...s,
    size: l,
    className: a(u.button, n),
    children: e
  })
}