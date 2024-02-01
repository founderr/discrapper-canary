"use strict";
a.r(t), a.d(t, {
  shouldDisableUserPresenceInChannel: function() {
    return n
  }
});
var l = a("42203");

function n(e, t) {
  let a = l.default.getChannel(t);
  return null != a && e.bot && a.isPrivate() && null == a.rawRecipients.find(t => t.id === e.id)
}