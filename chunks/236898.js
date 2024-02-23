"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("446674"),
  a = n("990766"),
  s = n("373469"),
  i = n("271938");

function r(e, t) {
  let n = (0, l.useStateFromStores)([i.default], () => i.default.getId()),
    r = (0, l.useStateFromStores)([s.default], () => {
      let t = s.default.getCurrentUserActiveStream();
      return null != t && t.channelId === e
    }, [e]),
    u = (0, l.useStateFromStores)([s.default], () => s.default.isSelfStreamHidden(e), [e]);
  return [(null == t || t === n) && r, u, t => {
    (0, a.toggleSelfStreamHidden)(e, t)
  }]
}