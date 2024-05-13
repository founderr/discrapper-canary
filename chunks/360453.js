"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("442837"),
  i = n("481060"),
  l = n("949389"),
  r = n("82950"),
  o = n("434404"),
  u = n("899667"),
  d = n("267642"),
  c = n("981631"),
  f = n("689938"),
  E = n("571472");
t.default = e => {
  let {
    guild: t
  } = e, n = t.id, h = (0, s.useStateFromStores)([u.default], () => u.default.getAppliedGuildBoostsForGuild(t.id));
  return null == h || 0 >= (0, d.appliedGuildBoostsRequiredForPerks)(h, n) ? null : (0, a.jsx)(r.default, {
    guild: t,
    onDismissed: () => {
      (0, l.hidePremiumGuildGracePeriodNotice)(n)
    },
    onClick: () => {
      o.default.open(n, c.GuildSettingsSections.GUILD_PREMIUM)
    },
    message: f.default.Messages.PREMIUM_GUILD_GRACE_PERIOD_NOTICE,
    trackingSource: c.ChannelNoticeCtaSources.GRACE_PERIOD_NOTICE,
    type: c.ChannelNoticeTypes.GUILD_BOOSTING_GRACE_PERIOD,
    image: E,
    cta: f.default.Messages.PREMIUM_GUILD_GRACE_PERIOD_NOTICE_BUTTON,
    ctaColor: i.ButtonColors.PRIMARY
  })
}