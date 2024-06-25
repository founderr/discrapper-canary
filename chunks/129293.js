n.d(t, {
  Z: function() {
    return i
  }
});
var s = n(593473);

function i(e) {
  let t = null != e.hash && "" !== e.hash ? (0, s.parse)(e.hash) : null;
  if ((null == t ? void 0 : t.token) != null) return t.token;
  let n = null != e.search && "" !== e.search ? (0, s.parse)(e.search) : null;
  return (null == n ? void 0 : n.token) != null ? n.token : null
}