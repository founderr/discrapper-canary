n.d(t, {
  c: function() {
    return o
  }
}), n(913527);
var i = n(442837),
  s = n(91159),
  l = n(306680),
  a = n(709054),
  r = n(868807);

function o(e) {
  let t = (0, r.a)(e),
    n = function(e) {
      let {
        lastMessageId: t,
        message: n,
        loaded: i
      } = e;
      return i && null != n ? a.default.extractTimestamp(n.id) : null != t ? a.default.extractTimestamp(t) : null
    }({
      lastMessageId: (0, i.e7)([l.ZP], () => l.ZP.lastMessageId(e.id)),
      ...t
    });
  return null == n ? "" : (0, s.Ye)(n)
}