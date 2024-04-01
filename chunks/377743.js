"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250");
n("470079");
var s = n("100527"),
  l = n("906732"),
  i = n("82950"),
  r = n("26323"),
  o = n("267642"),
  u = n("981631"),
  d = n("921944"),
  c = n("30513"),
  f = n("689938"),
  E = n("420569");

function _(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e, _ = (0, o.getNumberOfAppliedBoostsNeededForTier)(t, u.BoostedGuildTiers.TIER_2), {
    analyticsLocations: h
  } = (0, l.default)(s.default.GUILD_BANNER_NOTICE);
  return (0, a.jsx)(i.default, {
    guild: t,
    onDismissed: () => n(d.ContentDismissActionType.UNKNOWN),
    cta: f.default.Messages.GUILD_BANNER_NOTICE_CTA,
    message: f.default.Messages.GUILD_BANNER_NOTICE.format({
      boostsNeeded: _
    }),
    type: u.ChannelNoticeTypes.GUILD_BANNER,
    image: E,
    onClick: () => (0, r.default)({
      analyticsLocations: h,
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