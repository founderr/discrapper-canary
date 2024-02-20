"use strict";
t.r(r), t.d(r, {
  default: function() {
    return d
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  l = t.n(i),
  o = t("594203"),
  s = t("779274");

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
      className: l(s.subPanelContent, t),
      children: r
    })]
  })
}