i.d(t, {
    K: function () {
        return p;
    }
}),
    i(47120);
var n = i(192379),
    l = i(442837),
    d = i(172337),
    r = i(101492),
    s = i(710091),
    a = i(496675),
    u = i(388032);
let o = {
        'server-subscriptions-onboarding': s.Z,
        'server-subscriptions-finish-setting-up': r.Z,
        'server-subscriptions-create-tier-from-template': d.Z
    },
    c = {
        title: () => u.intl.string(u.t.V42OaG),
        description: () => u.intl.string(u.t['7dJ16e']),
        selectGuildCta: () => u.intl.string(u.t.LhlgY2),
        createGuildDescription: () => u.intl.string(u.t.anOis7),
        createGuildCta: () => u.intl.string(u.t.B44MTk),
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, l.e7)([a.Z], () => (e) => a.Z.canAccessGuildSettings(e), [], l.pF)
    };
function p(e) {
    var t;
    let [i] = n.useState(null == e ? void 0 : o[e]),
        l = c.useIsGuildSupported(),
        d = null == i ? void 0 : null === (t = i.useIsGuildSupported) || void 0 === t ? void 0 : t.call(i),
        r = {
            ...c,
            ...(null != i ? i : {})
        };
    return {
        title: r.title(),
        description: r.description(),
        selectGuildCta: r.selectGuildCta(),
        createGuildDescription: r.createGuildDescription(),
        createGuildCta: r.createGuildCta(),
        canCreateGuild: r.canCreateGuild,
        isGuildSupported: (e, t) => l(e, t) && (null == d ? void 0 : d(e, t)) !== !1
    };
}
