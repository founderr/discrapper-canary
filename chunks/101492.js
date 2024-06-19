var s = t(442837),
  n = t(674525),
  l = t(689938);
i.Z = {
  title: () => l.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
  description: () => l.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_FINISH_SETTING_UP_DESCRIPTION,
  canCreateGuild: !1,
  useIsGuildSupported: () => (0, s.e7)([n.Z], () => e => n.Z.getEligibleGuildsForNagActivate().includes(e.id), [])
}