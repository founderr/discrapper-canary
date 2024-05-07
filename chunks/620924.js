"use strict";
n.r(t), n.d(t, {
  useMessageRequestRelativeTimestampText: function() {
    return o
  }
}), n("913527");
var a = n("442837"),
  s = n("91159"),
  i = n("306680"),
  l = n("709054"),
  r = n("868807");

function o(e) {
  let t = (0, r.useMessageRequestPreview)(e),
    n = function(e) {
      let {
        lastMessageId: t,
        message: n,
        loaded: a
      } = e;
      return a && null != n ? l.default.extractTimestamp(n.id) : null != t ? l.default.extractTimestamp(t) : null
    }({
      lastMessageId: (0, a.useStateFromStores)([i.default], () => i.default.lastMessageId(e.id)),
      ...t
    });
  return null == n ? "" : (0, s.getTimestampString)(n)
}