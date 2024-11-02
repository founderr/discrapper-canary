var n = i(442837),
    l = i(223892),
    d = i(738774),
    r = i(353926),
    s = i(923726),
    a = i(144507),
    u = i(388032);
t.Z = {
    title: () => u.intl.string(u.t['KzCF//']),
    description: () => u.intl.string(u.t.xMW8FB),
    canCreateGuild: !1,
    useIsGuildSupported: () =>
        (0, n.e7)(
            [r.Z],
            () => (e, t) =>
                e.isOwner(t) &&
                (0, a.X$)({
                    guild: e,
                    isOwner: !0,
                    canManageGuildRoleSubscriptions: !0,
                    isMonetizationWaitlistEnabledForGuild: (0, l.mG)(e.id),
                    isGuildEligibleForRoleSubscriptions: (0, s.kT)(e.id),
                    isExpeditedMonetizationOnboardingGuild: (0, l.Rw)(e),
                    isUserInCreatorMonetizationEligibleCountry: (0, l.DB)(),
                    shouldRestrictUpdatingRoleSubscriptionSettings: (0, d.cu)(e.id)
                }),
            [],
            n.pF
        )
};
