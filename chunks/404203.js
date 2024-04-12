"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var n = s("735250"),
  l = s("470079");
let a = e => t => {
  null == t || t.stopPropagation(), e()
};

function i(e) {
  let {
    onClick: t,
    className: s,
    children: i
  } = e, o = l.useRef(null);
  return (0, n.jsx)("div", {
    onClick: t,
    ref: o,
    className: s,
    children: i({
      areaRef: o,
      handleStopPropagation: a
    })
  })
}