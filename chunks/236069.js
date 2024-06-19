n.d(t, {
  Z: function() {
    return o
  }
}), n(47120);
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(295474),
  a = n(689938),
  r = n(596791);

function o(e) {
  let {
    guildId: t,
    analyticsLocations: n,
    analyticsLocation: o
  } = e, [c, u] = (0, l.ww)({
    guildId: t,
    analyticsLocations: n,
    analyticsLocation: o,
    openWithoutBackstack: !0
  }), d = u ? a.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE : a.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_NO_PERMS, E = u ? a.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_CTA : a.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_ACCOUNT_USERNAME_CTA;
  return (0, s.jsxs)(i.Notice, {
    color: i.NoticeColors.CUSTOM,
    className: r.quarantineNotice,
    children: [d, (0, s.jsx)(i.NoticeButton, {
      onClick: c,
      children: E
    })]
  })
}