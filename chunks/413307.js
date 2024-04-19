"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("949389"),
  i = a("82950"),
  r = a("434404"),
  o = a("981631"),
  u = a("689938"),
  d = a("438825");
t.default = e => {
  let {
    guild: t
  } = e, a = s.useCallback(() => {
    (0, l.hideEnablePublicGuildUpsellNotice)(t.id)
  }, [t.id]);
  return (0, n.jsx)(i.default, {
    guild: t,
    onDismissed: a,
    onClick: () => r.default.open(t.id, o.GuildSettingsSections.COMMUNITY),
    message: u.default.Messages.NOTICE_ENABLE_PUBLIC_GUILD_UPSELL_MESSAGE,
    trackingSource: o.ChannelNoticeCtaSources.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
    type: o.ChannelNoticeTypes.PUBLIC_UPSELL,
    image: d,
    cta: u.default.Messages.LEARN_MORE
  })
}