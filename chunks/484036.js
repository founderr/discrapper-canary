"use strict";
t.r(r), t.d(r, {
  default: function() {
    return d
  }
}), t("47120");
var a = t("735250"),
  n = t("470079"),
  i = t("120356"),
  l = t.n(i),
  o = t("347469"),
  s = t("923619");

function c(e) {
  let {
    resizableNode: r,
    minHeight: t,
    onResize: n
  } = e, i = (0, o.default)({
    minDimension: t,
    resizableDomNodeRef: r,
    onElementResize: n,
    orientation: o.ResizeOrientation.VERTICAL_TOP,
    usePointerEvents: !0
  });
  return (0, a.jsx)("div", {
    onPointerDown: i,
    className: s.resizeHandle
  })
}

function d(e) {
  let {
    children: r,
    className: t,
    initialHeight: i,
    minHeight: o
  } = e, d = n.useRef(null), [u, h] = n.useState(i);
  return (0, a.jsxs)("div", {
    ref: d,
    className: s.container,
    style: {
      minHeight: o,
      height: u
    },
    children: [(0, a.jsx)(c, {
      resizableNode: d,
      minHeight: o,
      onResize: h
    }), (0, a.jsx)("div", {
      className: l()(s.subPanelContent, t),
      children: r
    })]
  })
}