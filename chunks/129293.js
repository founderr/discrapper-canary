t.d(s, {
  Z: function() {
    return n
  }
});
var r = t(593473);

function n(e) {
  let s = null != e.hash && "" !== e.hash ? (0, r.parse)(e.hash) : null;
  if ((null == s ? void 0 : s.token) != null) return s.token;
  let t = null != e.search && "" !== e.search ? (0, r.parse)(e.search) : null;
  return (null == t ? void 0 : t.token) != null ? t.token : null
}