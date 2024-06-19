n.d(t, {
  Z: function() {
    return a
  }
});
var s = n(70956),
  i = n(709054);
let l = 2 * s.Z.Millis.HOUR;

function a(e, t, n) {
  if (null == e) return !1;
  let s = null != t.activity ? t.activity.party_id : null,
    a = null != s && (null == e.party || e.party.id !== s),
    r = i.default.extractTimestamp(t.id) + l < Date.now(),
    o = null != e.application_id && e.application_id !== n;
  return !a && !r && !o
}