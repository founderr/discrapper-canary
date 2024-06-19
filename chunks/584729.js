n.d(t, {
  Z: function() {
    return r
  }
});
var l = n(271383),
  i = n(5192),
  s = n(354459),
  a = n(689938);

function r(e, t, n) {
  var r, o;
  if (t.type === s.fO.ACTIVITY) return null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : null;
  let c = l.ZP.isGuestOrLurker(e.guild_id, null === (r = t.user) || void 0 === r ? void 0 : r.id);
  return i.ZP.getName(e.getGuildId(), e.id, t.user) + (c ? " ".concat(a.Z.Messages.GUEST_NAME_SUFFIX) : "")
}