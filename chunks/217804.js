l.d(n, {
  u: function() {
    return a
  }
});
var s = l(481060),
  t = l(471445),
  i = l(230900);

function a(e, n) {
  let l, a;
  if (null == e) return null;
  let o = (0, i.cS)(e);
  if (null != o) l = s.LocationIcon, a = o;
  else {
    if (null == n) return null;
    l = (0, t.Th)(n.type), a = n.name
  }
  return {
    IconComponent: l,
    locationName: a
  }
}