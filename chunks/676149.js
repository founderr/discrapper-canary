"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250");
n("470079");
var a = n("120356"),
  u = n.n(a),
  i = n("911969"),
  s = n("382999");

function o(e) {
  let {
    divider: t,
    spacing: n
  } = e;
  return (0, l.jsx)("div", {
    className: u()({
      [s.spacingLarge]: n === i.SeparatorSpacingSize.LARGE,
      [s.divider]: t
    })
  })
}