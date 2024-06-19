n.d(t, {
  h: function() {
    return h
  }
}), n(47120);
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(100527),
  a = n(906732),
  r = n(545594),
  o = n(295474),
  c = n(981631),
  u = n(689938),
  d = n(959417);

function h(e) {
  var t, n;
  let {
    guild: h
  } = e, {
    analyticsLocations: m
  } = (0, a.ZP)(s.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT), [p, E] = (0, o.ww)({
    guildId: null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : c.lds,
    analyticsLocations: m,
    openWithoutBackstack: !0
  }), g = E ? u.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_DESCRIPTION : u.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_NO_PERMS_DESCRIPTION, f = E ? u.Z.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : u.Z.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
  return (0, l.jsx)("div", {
    children: (0, l.jsx)(r.i, {
      bannerIcon: (0, l.jsx)(i.ChatXIcon, {
        size: "lg",
        color: "currentColor",
        className: d.bannerIcon
      }),
      bannerHeader: u.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
        guildName: null !== (n = null == h ? void 0 : h.name) && void 0 !== n ? n : ""
      }),
      bannerSubtext: g,
      containerStyles: d.bannerContainer,
      headerStyles: d.bannerHeader,
      children: (0, l.jsx)(i.Button, {
        onClick: () => {
          p()
        },
        size: i.Button.Sizes.SMALL,
        children: f
      })
    })
  })
}