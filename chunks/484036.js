"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("347469"),
  s = r("451815");

function c(e) {
  let {
    resizableNode: t,
    minHeight: r,
    onResize: i
  } = e, l = (0, o.default)({
    minDimension: r,
    resizableDomNodeRef: t,
    onElementResize: i,
    orientation: o.ResizeOrientation.VERTICAL_TOP,
    usePointerEvents: !0
  });
  return (0, a.jsx)("div", {
    onPointerDown: l,
    className: s.resizeHandle
  })
}

function d(e) {
  let {
    children: t,
    className: r,
    initialHeight: l,
    minHeight: o
  } = e, d = i.useRef(null), [u, h] = i.useState(l);
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
      className: n()(s.subPanelContent, r),
      children: t
    })]
  })
}