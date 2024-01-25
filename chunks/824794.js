"use strict";
n.r(t), n.d(t, {
  shouldDisableUserPresenceInChannel: function() {
    return a
  }
});
var l = n("42203");

function a(e, t) {
  let n = l.default.getChannel(t);
  return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find(t => t.id === e.id)
}