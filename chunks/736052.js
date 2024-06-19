n.d(t, {
  Z: function() {
    return u
  }
}), n(789020);
var l = n(399606),
  i = n(592125),
  s = n(630388),
  a = n(637271),
  r = n(931261),
  o = n(981631),
  c = n(176505);

function u(e) {
  var t;
  let n = (0, l.e7)([i.Z], () => i.Z.getChannel(e)),
    u = null != n && (0, s.yE)(n.flags, c.zZ.IS_GUILD_RESOURCE_CHANNEL),
    d = (0, l.e7)([a.Z], () => a.Z.getSelectedResourceChannelId(null == n ? void 0 : n.guild_id)),
    h = (0, r.g)(null !== (t = null == n ? void 0 : n.guild_id) && void 0 !== t ? t : o.lds);
  return null != n && h && u && d === n.id
}