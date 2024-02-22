"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("26989"),
  a = n("387111"),
  s = n("99795"),
  i = n("782340");

function r(e, t, n) {
  var r, u;
  if (t.type === s.ParticipantTypes.ACTIVITY) return null !== (u = null == n ? void 0 : n.name) && void 0 !== u ? u : null;
  let o = l.default.isGuestOrLurker(e.guild_id, null === (r = t.user) || void 0 === r ? void 0 : r.id);
  return a.default.getName(e.getGuildId(), e.id, t.user) + (o ? " ".concat(i.default.Messages.GUEST_NAME_SUFFIX) : "")
}