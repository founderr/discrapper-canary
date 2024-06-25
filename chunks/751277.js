n.d(t, {
  Z: function() {
    return p
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

function p(e) {
  var t;
  let {
    isOnHubVerificationRoute: n
  } = e, p = (0, i.LX)(null !== (t = window.location.pathname) && void 0 !== t ? t : "", {
    path: d.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode")
  }), g = (0, s.e7)([o.Z], () => {
    if (null == p) return null;
    let {
      inviteCode: e
    } = p.params;
    return null != e ? o.Z.getInvite(e) : null
  }), m = (null == g ? void 0 : g.guild) != null ? new a.ZP(null == g ? void 0 : g.guild) : null;
  return n ? null != m && null != g ? (0, l.jsx)(u.Z, {
    guild: m,
    invite: g
  }) : (0, l.jsx)(c.Z, {
    tooltip: h.Z.Messages.HUB_DISCORD_HUBS,
    id: "guild-hub-button",
    icon: r.HubIcon
  }) : null
}