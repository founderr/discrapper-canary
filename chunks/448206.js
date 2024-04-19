"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("442837"),
  s = a("314897"),
  l = a("944486"),
  i = a("88751");

function r(e) {
  return (0, n.useStateFromStores)([s.default, l.default, i.default], () => {
    let t = s.default.getId();
    return l.default.getVoiceChannelId() === e ? i.default.getPermissionsForUser(t, e) : null
  }, [e])
}