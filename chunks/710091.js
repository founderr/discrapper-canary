var s = t(442837),
  n = t(223892),
  l = t(738774),
  a = t(353926),
  u = t(923726),
  d = t(144507),
  r = t(689938);
i.Z = {
  title: () => r.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
  description: () => r.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_ONBOARDING_DESCRIPTION,
  canCreateGuild: !1,
  useIsGuildSupported: () => (0, s.e7)([a.Z], () => (e, i) => e.isOwner(i) && (0, d.X$)({
    guild: e,
    isOwner: !0,
    canManageGuildRoleSubscriptions: !0,
    isMonetizationWaitlistEnabledForGuild: (0, n.mG)(e.id),
    isGuildEligibleForRoleSubscriptions: (0, u.kT)(e.id),
    isExpeditedMonetizationOnboardingGuild: (0, n.Rw)(e),
    isUserInCreatorMonetizationEligibleCountry: (0, n.DB)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, l.cu)(e.id)
  }), [], s.pF)
}