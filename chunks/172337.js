var n = i(442837),
    l = i(353926),
    d = i(496675),
    r = i(923726),
    s = i(981631),
    a = i(388032);
t.Z = {
    title: () => a.intl.string(a.t.aTFQKi),
    description: () => a.intl.string(a.t.oTbFQk),
    canCreateGuild: !1,
    useIsGuildSupported: () => (0, n.e7)([l.Z, d.Z], () => (e) => e.hasFeature(s.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && !e.hasFeature(s.oNc.CREATOR_MONETIZABLE_RESTRICTED) && d.Z.can(s.Plq.ADMINISTRATOR, e) && (0, r.$F)() && (0, r.hQ)(e.id), [])
};
