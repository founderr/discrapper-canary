"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var n = s("37983"),
  l = s("884691");
let o = e => t => {
  null == t || t.stopPropagation(), e()
};

function r(e) {
  let {
    onClick: t,
    className: s,
    children: r
  } = e, i = l.useRef(null);
  return (0, n.jsx)("div", {
    onClick: t,
    ref: i,
    className: s,
    children: r({
      areaRef: i,
      handleStopPropagation: o
    })
  })
}