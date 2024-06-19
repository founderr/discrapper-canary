t.d(r, {
  Z: function() {
    return d
  }
}), t(47120);
var a = t(735250),
  i = t(470079),
  n = t(120356),
  o = t.n(n),
  l = t(347469),
  c = t(977372);

function s(e) {
  let {
    resizableNode: r,
    minHeight: t,
    onResize: i
  } = e, n = (0, l.Z)({
    minDimension: t,
    resizableDomNodeRef: r,
    onElementResize: i,
    orientation: l.y.VERTICAL_TOP,
    usePointerEvents: !0
  });
  return (0, a.jsx)("div", {
    onPointerDown: n,
    className: c.resizeHandle
  })
}

function d(e) {
  let {
    children: r,
    className: t,
    initialHeight: n,
    minHeight: l
  } = e, d = i.useRef(null), [u, h] = i.useState(n);
  return (0, a.jsxs)("div", {
    ref: d,
    className: c.container,
    style: {
      minHeight: l,
      height: u
    },
    children: [(0, a.jsx)(s, {
      resizableNode: d,
      minHeight: l,
      onResize: h
    }), (0, a.jsx)("div", {
      className: o()(c.subPanelContent, t),
      children: r
    })]
  })
}