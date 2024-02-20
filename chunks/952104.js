"use strict";
n.r(t), n.d(t, {
  AutomodUserProfileQuarantineChatInputNotice: function() {
    return h
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("812204"),
  i = n("685665"),
  r = n("594864"),
  o = n("533930"),
  u = n("956967"),
  d = n("49111"),
  c = n("782340"),
  f = n("743221");

function h(e) {
  var t, n;
  let {
    guild: h
  } = e, {
    analyticsLocations: C
  } = (0, i.default)(l.default.AUTOMOD_PROFILE_QUARANTINE_ALERT), [p, E] = (0, u.useOpenFixQuarantinedProfileModal)({
    guildId: null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : d.EMPTY_STRING_GUILD_ID,
    analyticsLocations: C,
    openWithoutBackstack: !0
  }), m = E ? c.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_DESCRIPTION : c.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_NO_PERMS_DESCRIPTION, g = E ? c.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : c.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
  return (0, a.jsx)("div", {
    children: (0, a.jsx)(r.MessageNoticeBanner, {
      bannerIcon: (0, a.jsx)(o.default, {
        className: f.bannerIcon,
        width: 32,
        height: 32
      }),
      bannerHeader: c.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
        guildName: null !== (n = null == h ? void 0 : h.name) && void 0 !== n ? n : ""
      }),
      bannerSubtext: m,
      containerStyles: f.bannerContainer,
      headerStyles: f.bannerHeader,
      children: (0, a.jsx)(s.Button, {
        onClick: () => {
          p()
        },
        size: s.Button.Sizes.SMALL,
        children: g
      })
    })
  })
}