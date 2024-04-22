"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("524437"),
  i = a("605236"),
  r = a("150340"),
  o = a("434404"),
  u = a("626135"),
  d = a("428695"),
  c = a("981631"),
  f = a("921944"),
  E = a("689938");
t.default = e => {
  let {
    guild: t,
    markAsDismissed: a
  } = e;
  s.useEffect(() => {
    (0, i.requestMarkDismissibleContentAsShown)(l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
  }, []);
  let h = s.useCallback(() => {
      o.default.open(t.id, c.GuildSettingsSections.ONBOARDING), u.default.track(c.AnalyticEvents.UPSELL_CLICKED, {
        type: l.DismissibleContent[l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE],
        action: "primary"
      }), (0, i.markDismissibleContentAsDismissed)(l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, {
        dismissAction: f.ContentDismissActionType.PRIMARY
      }), (0, r.dismissedGuildOnboardingUpsell)(t.id, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
    }, [t.id]),
    _ = s.useCallback(() => {
      u.default.track(c.AnalyticEvents.UPSELL_CLICKED, {
        type: l.DismissibleContent[l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE],
        action: "dismiss"
      }), a(f.ContentDismissActionType.UNKNOWN), (0, r.dismissedGuildOnboardingUpsell)(t.id, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
    }, [t.id, a]);
  return (0, n.jsx)(d.default, {
    guild: t,
    onDismissed: _,
    onClick: h,
    title: E.default.Messages.GUILD_ONBOARDING_CHANNEL_NOTICE_TITLE,
    message: E.default.Messages.GUILD_ONBOARDING_CHANNEL_NOTICE_MESSAGE,
    cta: E.default.Messages.CHECK_IT_OUT,
    trackingSource: c.ChannelNoticeCtaSources.GUILD_ONBOARDING_UPSELL_NOTICE,
    type: c.ChannelNoticeTypes.GUILD_ONBOARDING_UPSELL
  })
}