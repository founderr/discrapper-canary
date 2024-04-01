"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var s = n("735250");
n("470079");
var l = n("644766"),
  a = n("295474"),
  i = n("689938"),
  r = n("502786");

function o(e) {
  let {
    guildId: t,
    analyticsLocations: n,
    analyticsLocation: o
  } = e, [u, d] = (0, a.useOpenFixQuarantinedProfileModal)({
    guildId: t,
    analyticsLocations: n,
    analyticsLocation: o,
    openWithoutBackstack: !0
  }), c = d ? i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE : i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_NO_PERMS, E = d ? i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_CTA : i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_ACCOUNT_USERNAME_CTA;
  return (0, s.jsxs)(l.default, {
    color: l.NoticeColors.CUSTOM,
    className: r.quarantineNotice,
    children: [c, (0, s.jsx)(l.NoticeButton, {
      onClick: u,
      children: E
    })]
  })
}