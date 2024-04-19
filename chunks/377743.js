"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var s = a("100527"),
  l = a("906732"),
  i = a("82950"),
  r = a("26323"),
  o = a("267642"),
  u = a("981631"),
  d = a("921944"),
  c = a("30513"),
  f = a("689938"),
  E = a("420569");

function h(e) {
  let {
    guild: t,
    markAsDismissed: a
  } = e, h = (0, o.getNumberOfAppliedBoostsNeededForTier)(t, u.BoostedGuildTiers.TIER_2), {
    analyticsLocations: _
  } = (0, l.default)(s.default.GUILD_BANNER_NOTICE);
  return (0, n.jsx)(i.default, {
    guild: t,
    onDismissed: () => a(d.ContentDismissActionType.UNKNOWN),
    cta: f.default.Messages.GUILD_BANNER_NOTICE_CTA,
    message: f.default.Messages.GUILD_BANNER_NOTICE.format({
      boostsNeeded: h
    }),
    type: u.ChannelNoticeTypes.GUILD_BANNER,
    image: E,
    onClick: () => (0, r.default)({
      analyticsLocations: _,
      analyticsSourceLocation: {
        section: u.AnalyticsSections.CHANNEL_NOTICE,
        object: u.AnalyticsObjects.SERVER_BANNER_TOOLTIP
      },
      guild: t,
      perks: (0, c.guildBannerUpsellPerks)()
    }),
    imageMarginTop: 15,
    imageMarginX: 22
  })
}