"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
}), r("47120");
var a = r("735250"),
  n = r("470079"),
  i = r("803997"),
  o = r.n(i),
  l = r("347469"),
  s = r("923619");

function c(e) {
  let {
    resizableNode: t,
    minHeight: r,
    onResize: n
  } = e, i = (0, l.default)({
    minDimension: r,
    resizableDomNodeRef: t,
    onElementResize: n,
    orientation: l.ResizeOrientation.VERTICAL_TOP,
    usePointerEvents: !0
  });
  return (0, a.jsx)("div", {
    onPointerDown: i,
    className: s.resizeHandle
  })
}

function d(e) {
  let {
    children: t,
    className: r,
    initialHeight: i,
    minHeight: l
  } = e, d = n.useRef(null), [u, h] = n.useState(i);
  return (0, a.jsxs)("div", {
    ref: d,
    className: s.container,
    style: {
      minHeight: l,
      height: u
    },
    children: [(0, a.jsx)(c, {
      resizableNode: d,
      minHeight: l,
      onResize: h
    }), (0, a.jsx)("div", {
      className: o()(s.subPanelContent, r),
      children: t
    })]
  })
}