"use strict";
l.r(t), l.d(t, {
  shouldDisableUserPresenceInChannel: function() {
    return n
  }
});
var a = l("42203");

function n(e, t) {
  let l = a.default.getChannel(t);
  return null != l && e.bot && l.isPrivate() && null == l.rawRecipients.find(t => t.id === e.id)
}