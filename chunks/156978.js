n.d(t, {
  Z: function() {
    return r
  }
});
var s = n(735250),
  i = n(470079),
  l = n(122611),
  a = n(480219);

function r(e) {
  let {
    guild: t,
    setHasSubheader: n
  } = e, r = i.useRef(null);
  return i.useLayoutEffect(() => {
    let e = r.current;
    null != e && n(e.childNodes.length > 0)
  }), (0, s.jsx)("div", {
    className: a.container,
    ref: r,
    children: (0, s.jsx)(l.Z, {
      guild: t
    })
  })
}