var s = t(442837),
  n = t(353926),
  l = t(496675),
  a = t(923726),
  u = t(981631),
  d = t(689938);
i.Z = {
  title: () => d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_TITLE,
  description: () => d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_DEEPLINK_MODAL_DESCRIPTION,
  canCreateGuild: !1,
  useIsGuildSupported: () => (0, s.e7)([n.Z, l.Z], () => e => e.hasFeature(u.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && !e.hasFeature(u.oNc.CREATOR_MONETIZABLE_RESTRICTED) && l.Z.can(u.Plq.ADMINISTRATOR, e) && (0, a.$F)() && (0, a.hQ)(e.id), [])
}