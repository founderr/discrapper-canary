"use strict";
l.r(t), l.d(t, {
  shouldDisableUserPresenceInChannel: function() {
    return a
  }
});
var r = l("42203");

function a(e, t) {
  let l = r.default.getChannel(t);
  return null != l && e.bot && l.isPrivate() && null == l.rawRecipients.find(t => t.id === e.id)
}