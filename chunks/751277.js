n.d(t, {
  Z: function() {
    return g
  }
});
var l = n(735250);
n(470079);
var i = n(266067),
  s = n(442837),
  r = n(481060),
  a = n(601964),
  o = n(701190),
  u = n(836040),
  c = n(603592),
  d = n(981631),
  h = n(689938);

function g(e) {
  var t;
  let {
    isOnHubVerificationRoute: n
  } = e, g = (0, i.LX)(null !== (t = window.location.pathname) && void 0 !== t ? t : "", {
    path: d.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode")
  }), p = (0, s.e7)([o.Z], () => {
    if (null == g) return null;
    let {
      inviteCode: e
    } = g.params;
    return null != e ? o.Z.getInvite(e) : null
  }), m = (null == p ? void 0 : p.guild) != null ? new a.ZP(null == p ? void 0 : p.guild) : null;
  return n ? null != m && null != p ? (0, l.jsx)(u.Z, {
    guild: m,
    invite: p
  }) : (0, l.jsx)(c.Z, {
    tooltip: h.Z.Messages.HUB_DISCORD_HUBS,
    id: "guild-hub-button",
    icon: r.HubIcon
  }) : null
}