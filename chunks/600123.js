"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("37983");
n("884691");
var r = n("607391"),
  i = n("145131"),
  s = n("191933");

function l(e) {
  let {
    mainText: t,
    supportingText: n,
    children: l,
    size: u
  } = e;
  return (0, a.jsxs)(i.default, {
    className: s.root,
    justify: i.default.Justify.CENTER,
    align: i.default.Align.CENTER,
    direction: i.default.Direction.VERTICAL,
    children: [(0, a.jsx)(r.default, {
      header: t,
      description: n,
      size: u
    }), l]
  })
}