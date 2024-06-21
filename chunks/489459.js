n.d(t, {
  m: function() {
    return l
  }
});
var s = n(735250),
  o = n(470079),
  a = n(393238),
  r = n(110924);
let l = e => {
  var t;
  let {
    onContentHeightChange: n,
    children: l
  } = e, {
    ref: i,
    height: c = 0
  } = (0, a.Z)(), u = null !== (t = (0, r.Z)(c)) && void 0 !== t ? t : 0;
  return o.useLayoutEffect(() => {
    if (0 === u) return;
    let e = c - u;
    0 !== e && n(e)
  }, [c, u, n]), (0, s.jsx)("div", {
    ref: i,
    children: l
  })
}