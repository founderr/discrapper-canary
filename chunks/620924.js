n.d(t, {
  c: function() {
    return o
  }
}), n(913527);
var s = n(442837),
  i = n(91159),
  l = n(306680),
  a = n(709054),
  r = n(868807);

function o(e) {
  let t = (0, r.a)(e),
    n = function(e) {
      let {
        lastMessageId: t,
        message: n,
        loaded: s
      } = e;
      return s && null != n ? a.default.extractTimestamp(n.id) : null != t ? a.default.extractTimestamp(t) : null
    }({
      lastMessageId: (0, s.e7)([l.ZP], () => l.ZP.lastMessageId(e.id)),
      ...t
    });
  return null == n ? "" : (0, i.Ye)(n)
}