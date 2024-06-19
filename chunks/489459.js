n.d(t, {
  m: function() {
    return r
  }
});
var s = n(735250),
  a = n(470079),
  i = n(393238),
  l = n(110924);
let r = e => {
  var t;
  let {
    onContentHeightChange: n,
    children: r
  } = e, {
    ref: o,
    height: c = 0
  } = (0, i.Z)(), d = null !== (t = (0, l.Z)(c)) && void 0 !== t ? t : 0;
  return a.useLayoutEffect(() => {
    if (0 === d) return;
    let e = c - d;
    0 !== e && n(e)
  }, [c, d, n]), (0, s.jsx)("div", {
    ref: o,
    children: r
  })
}