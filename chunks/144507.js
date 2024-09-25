n.d(t, {
    $D: function () {
        return h;
    },
    H2: function () {
        return p;
    },
    MO: function () {
        return f;
    },
    X$: function () {
        return E;
    },
    d5: function () {
        return r;
    }
});
var r,
    i = n(442837),
    a = n(223892),
    o = n(674180),
    s = n(496675),
    l = n(594174),
    u = n(923726),
    c = n(981631);
function d(e) {
    let { guild: t, isOwner: n, canManageGuildRoleSubscriptions: r, isGuildEligibleForRoleSubscriptions: i, isExpeditedMonetizationOnboardingGuild: a, isUserInCreatorMonetizationEligibleCountry: o, shouldRestrictUpdatingRoleSubscriptionSettings: s } = e;
    return !!r && (!s || !!n) && (!!(t.hasFeature(c.oNc.CREATOR_MONETIZABLE) || t.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!t.hasFeature(c.oNc.COMMUNITY) && (!!i || !!a) && n && o));
}
function _(e) {
    if (e.guild.hasFeature(c.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (d(e)) return 3;
    let { guild: t, isOwner: n, isUserInCreatorMonetizationEligibleCountry: r, isMonetizationWaitlistEnabledForGuild: i, isGuildEligibleForRoleSubscriptions: a, isExpeditedMonetizationOnboardingGuild: o } = e;
    return n && !r && i ? 1 : n && i && (a || o) && !t.hasFeature(c.oNc.COMMUNITY) ? 2 : 0;
}
function E(e) {
    return 0 !== _(e);
}
function f(e) {
    let t = (0, u.Bt)(null == e ? void 0 : e.id),
        n = (0, a.Ob)(e),
        r = (0, a.gS)(null == e ? void 0 : e.id),
        s = h(e),
        c = (0, i.e7)([l.default], () => {
            let t = l.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        d = (0, a.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: E } = (0, o.gX)(null == e ? void 0 : e.id);
    return null == e
        ? 0
        : _({
              guild: e,
              isOwner: c,
              canManageGuildRoleSubscriptions: s,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: r,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: d,
              shouldRestrictUpdatingRoleSubscriptionSettings: E
          });
}
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.WAITLIST_ONLY = 1)] = 'WAITLIST_ONLY'), (e[(e.NEEDS_COMMUNITY = 2)] = 'NEEDS_COMMUNITY'), (e[(e.VISIBLE = 3)] = 'VISIBLE');
})(r || (r = {}));
function h(e) {
    return (0, i.e7)([s.Z], () => p(e), [e]);
}
function p(e) {
    return null != e && s.Z.can(c.Plq.ADMINISTRATOR, e);
}
