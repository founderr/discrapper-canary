"use strict";
a.r(t), a.d(t, {
  shouldDisableUserPresenceInChannel: function() {
    return l
  }
});
var n = a("42203");

function l(e, t) {
  let a = n.default.getChannel(t);
  return null != a && e.bot && a.isPrivate() && null == a.rawRecipients.find(t => t.id === e.id)
}