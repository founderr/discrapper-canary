"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("442837"),
  l = a("481060"),
  i = a("949389"),
  r = a("82950"),
  o = a("434404"),
  u = a("899667"),
  d = a("267642"),
  c = a("981631"),
  f = a("689938"),
  E = a("571472");
t.default = e => {
  let {
    guild: t
  } = e, a = t.id, h = (0, s.useStateFromStores)([u.default], () => u.default.getAppliedGuildBoostsForGuild(t.id));
  return null == h || 0 >= (0, d.appliedGuildBoostsRequiredForPerks)(h, a) ? null : (0, n.jsx)(r.default, {
    guild: t,
    onDismissed: () => {
      (0, i.hidePremiumGuildGracePeriodNotice)(a)
    },
    onClick: () => {
      o.default.open(a, c.GuildSettingsSections.GUILD_PREMIUM)
    },
    message: f.default.Messages.PREMIUM_GUILD_GRACE_PERIOD_NOTICE,
    trackingSource: c.ChannelNoticeCtaSources.GRACE_PERIOD_NOTICE,
    type: c.ChannelNoticeTypes.GUILD_BOOSTING_GRACE_PERIOD,
    image: E,
    cta: f.default.Messages.PREMIUM_GUILD_GRACE_PERIOD_NOTICE_BUTTON,
    ctaColor: l.ButtonColors.PRIMARY
  })
}