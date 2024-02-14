"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var n = l("446674"),
  a = l("271938"),
  s = l("800762"),
  u = l("76393");

function r() {
  let e = (0, n.useStateFromStores)([a.default], () => a.default.getId()),
    t = (0, n.useStateFromStores)([u.default], () => u.default.getRemoteSessionId());
  return (0, n.useStateFromStores)([s.default], () => {
    var l;
    return null !== (l = s.default.getVoiceStateForSession(e, t)) && void 0 !== l ? l : void 0
  })
}