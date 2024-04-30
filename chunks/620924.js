"use strict";
a.r(t), a.d(t, {
  useMessageRequestRelativeTimestampText: function() {
    return o
  }
}), a("913527");
var n = a("442837"),
  s = a("91159"),
  l = a("306680"),
  i = a("709054"),
  r = a("868807");

function o(e) {
  let t = (0, r.useMessageRequestPreview)(e),
    a = function(e) {
      let {
        lastMessageId: t,
        message: a,
        loaded: n
      } = e;
      return n && null != a ? i.default.extractTimestamp(a.id) : null != t ? i.default.extractTimestamp(t) : null
    }({
      lastMessageId: (0, n.useStateFromStores)([l.default], () => l.default.lastMessageId(e.id)),
      ...t
    });
  return null == a ? "" : (0, s.getTimestampString)(a)
}