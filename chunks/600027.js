"use strict";
a.r(t), a.d(t, {
  validateOpenInviteDialog: function() {
    return u
  }
});
var n = a("159300"),
  s = a("430824"),
  l = a("496675"),
  i = a("996106"),
  r = a("561205"),
  o = a("981631");

function u() {
  let e = (0, r.default)();
  if (null == e) throw new i.default({
    errorCode: o.RPCErrors.INVALID_CHANNEL
  }, "Invalid channel");
  let t = s.default.getGuild(e.getGuildId());
  if (null == t) throw new i.default({
    errorCode: o.RPCErrors.INVALID_CHANNEL
  }, "Invalid guild ".concat(e.getGuildId()));
  if (!(0, n.canViewInviteModal)(l.default, t, e)) throw new i.default({
    errorCode: o.RPCErrors.INVALID_PERMISSIONS
  }, "No invite permissions for ".concat(e.id));
  return {
    channel: e,
    guild: t
  }
}