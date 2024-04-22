"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var u = n("120356"),
  i = n.n(u),
  l = n("481060"),
  s = n("335178");

function r(e) {
  let {
    className: t,
    color: n,
    ...u
  } = e;
  return (0, a.jsx)(l.Text, {
    className: i()({
      [s.gradientText]: null == n
    }, t),
    color: n,
    ...u
  })
}