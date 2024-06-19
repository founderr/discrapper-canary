a.d(s, {
  Z: function() {
    return m
  }
});
var t = a(544891),
  r = a(933557),
  n = a(430824),
  l = a(131951),
  i = a(699516),
  o = a(594174),
  d = a(927923),
  c = a(981631),
  u = a(689938);

function m(e, s) {
  var a;
  let {
    nonce: m,
    forQRCode: f
  } = s, x = e.getGuildId(), h = n.Z.getGuild(x), N = (0, d.Lc)({
    guildId: null != x ? x : c.aIL,
    channelId: e.id,
    channelName: (0, r.F6)(e, o.default, i.Z),
    guildName: null !== (a = null == h ? void 0 : h.name) && void 0 !== a ? a : u.Z.Messages.UNNAMED,
    muted: l.Z.isSelfMute(),
    deafened: l.Z.isSelfDeaf(),
    nonce: m
  });
  return f ? "".concat((0, t.K0)()).concat(c.ANM.XBOX_HANDOFF, "?").concat(N.toString()) : "".concat(d.bJ, "?").concat(N.toString())
}