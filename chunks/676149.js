"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250");
n("470079");
var a = n("120356"),
  r = n.n(a),
  s = n("911969"),
  u = n("70189");

function o(e) {
  let {
    divider: t,
    spacing: n
  } = e;
  return (0, l.jsx)("div", {
    className: r()({
      [u.spacingLarge]: n === s.SeparatorSpacingSize.LARGE,
      [u.divider]: t
    })
  })
}