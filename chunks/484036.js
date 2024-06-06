"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  n = r("120356"),
  l = r.n(n),
  o = r("347469"),
  c = r("870904");

function s(e) {
  let {
    resizableNode: t,
    minHeight: r,
    onResize: i
  } = e, n = (0, o.default)({
    minDimension: r,
    resizableDomNodeRef: t,
    onElementResize: i,
    orientation: o.ResizeOrientation.VERTICAL_TOP,
    usePointerEvents: !0
  });
  return (0, a.jsx)("div", {
    onPointerDown: n,
    className: c.resizeHandle
  })
}

function d(e) {
  let {
    children: t,
    className: r,
    initialHeight: n,
    minHeight: o
  } = e, d = i.useRef(null), [u, h] = i.useState(n);
  return (0, a.jsxs)("div", {
    ref: d,
    className: c.container,
    style: {
      minHeight: o,
      height: u
    },
    children: [(0, a.jsx)(s, {
      resizableNode: d,
      minHeight: o,
      onResize: h
    }), (0, a.jsx)("div", {
      className: l()(c.subPanelContent, r),
      children: t
    })]
  })
}