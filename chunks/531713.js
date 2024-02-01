var r = n("446288"),
  i = n("564414"),
  o = n("725502"),
  s = n("476540"),
  a = n("136047"),
  c = n("754076");
e.exports = function(e, t, n) {
  t = r(t, e);
  for (var u = -1, l = t.length, d = !1; ++u < l;) {
    var f = c(t[u]);
    if (!(d = null != e && n(e, f))) break;
    e = e[f]
  }
  return d || ++u != l ? d : !!(l = null == e ? 0 : e.length) && a(l) && s(f, l) && (o(e) || i(e))
}