n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(735250),
  s = n(470079),
  l = n(122611),
  a = n(480219);

function r(e) {
  let {
    guild: t,
    setHasSubheader: n
  } = e, r = s.useRef(null);
  return s.useLayoutEffect(() => {
    let e = r.current;
    null != e && n(e.childNodes.length > 0)
  }), (0, i.jsx)("div", {
    className: a.container,
    ref: r,
    children: (0, i.jsx)(l.Z, {
      guild: t
    })
  })
}