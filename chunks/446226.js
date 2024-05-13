"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("442837"),
  a = n("314897"),
  u = n("979651"),
  i = n("258609");

function s() {
  let e = (0, l.useStateFromStores)([a.default], () => a.default.getId()),
    t = (0, l.useStateFromStores)([i.default], () => i.default.getRemoteSessionId());
  return (0, l.useStateFromStores)([u.default], () => {
    var n;
    return null !== (n = u.default.getVoiceStateForSession(e, t)) && void 0 !== n ? n : void 0
  })
}