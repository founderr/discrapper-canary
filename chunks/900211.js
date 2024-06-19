n.d(t, {
  Z: function() {
    return r
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(347469),
  a = n(144734);

function r(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: r,
    minHeight: o,
    maxHeight: c
  } = e, [u, d] = i.useState(null);
  i.useEffect(() => {
    var e, n;
    d(null !== (n = null === (e = t.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : null)
  }, [t]);
  let h = (0, s.Z)({
    initialElementDimension: u,
    minDimension: o,
    maxDimension: c,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: r,
    orientation: s.y.VERTICAL_BOTTOM
  });
  return (0, l.jsx)("div", {
    onMouseDown: h,
    className: a.resizeHandle
  })
}