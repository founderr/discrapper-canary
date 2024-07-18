
function n(e, t) {
  var r = null == e ? null : 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
  if (null != r) {
var n, a, o, s, i = [],
  c = !0,
  u = !1;
try {
  if (o = (r = r.call(e)).next, 0 === t) {
    if (Object(r) !== r)
      return;
    c = !1;
  } else
    for (; !(c = (n = o.call(r)).done) && (i.push(n.value), i.length !== t); c = !0);
} catch (e) {
  u = !0, a = e;
} finally {
  try {
    if (!c && null != r.return && (s = r.return(), Object(s) !== s))
      return;
  } finally {
    if (u)
      throw a;
  }
}
return i;
  }
}
r.d(t, {
  Z: function() {
return n;
  }
});