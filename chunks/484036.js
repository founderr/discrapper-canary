"use strict";
t.r(r), t.d(r, {
  default: function() {
    return d
  }
}), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  o = t("347469"),
  c = t("451815");

function s(e) {
  let {
    resizableNode: r,
    minHeight: t,
    onResize: i
  } = e, l = (0, o.default)({
    minDimension: t,
    resizableDomNodeRef: r,
    onElementResize: i,
    orientation: o.ResizeOrientation.VERTICAL_TOP,
    usePointerEvents: !0
  });
  return (0, a.jsx)("div", {
    onPointerDown: l,
    className: c.resizeHandle
  })
}

function d(e) {
  let {
    children: r,
    className: t,
    initialHeight: l,
    minHeight: o
  } = e, d = i.useRef(null), [u, h] = i.useState(l);
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
      className: n()(c.subPanelContent, t),
      children: r
    })]
  })
}