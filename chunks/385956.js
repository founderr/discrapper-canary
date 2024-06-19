n.d(t, {
  T: function() {
    return r
  },
  v: function() {
    return a
  }
});
var l = n(442837),
  i = n(355298),
  s = n(333984);

function a(e) {
  return (0, l.e7)([i.Z], () => i.Z.isMessageRequest(e), [e])
}

function r(e) {
  return (0, l.e7)([i.Z, s.Z], () => null != e && (i.Z.isMessageRequest(e) || s.Z.isSpam(e)))
}