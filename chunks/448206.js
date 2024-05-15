"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("442837"),
  s = n("314897"),
  i = n("944486"),
  l = n("88751");

function r(e) {
  return (0, a.useStateFromStores)([s.default, i.default, l.default], () => {
    let t = s.default.getId();
    return i.default.getVoiceChannelId() === e ? l.default.getPermissionsForUser(t, e) : null
  }, [e])
}