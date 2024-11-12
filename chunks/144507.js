n.d(t, {
    $D: function () {
        return E;
    },
    H2: function () {
        return g;
    },
    MO: function () {
        return _;
    },
    X$: function () {
        return p;
    },
    d5: function () {
        return r;
    }
});
var i,
    r,
    l = n(442837),
    o = n(223892),
    u = n(674180),
    a = n(496675),
    s = n(594174),
    c = n(923726),
    d = n(981631);
((i = r || (r = {}))[(i.NONE = 0)] = 'NONE'), (i[(i.WAITLIST_ONLY = 1)] = 'WAITLIST_ONLY'), (i[(i.NEEDS_COMMUNITY = 2)] = 'NEEDS_COMMUNITY'), (i[(i.VISIBLE = 3)] = 'VISIBLE');
function f(e) {
    if (e.guild.hasFeature(d.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (
        (function (e) {
            let { guild: t, isOwner: n, canManageGuildRoleSubscriptions: i, isGuildEligibleForRoleSubscriptions: r, isExpeditedMonetizationOnboardingGuild: l, isUserInCreatorMonetizationEligibleCountry: o, shouldRestrictUpdatingRoleSubscriptionSettings: u } = e;
            return !!i && (!u || !!n) && (!!(t.hasFeature(d.oNc.CREATOR_MONETIZABLE) || t.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!t.hasFeature(d.oNc.COMMUNITY) && (!!r || !!l) && n && o));
        })(e)
    )
        return 3;
    let { guild: t, isOwner: n, isUserInCreatorMonetizationEligibleCountry: i, isMonetizationWaitlistEnabledForGuild: r, isGuildEligibleForRoleSubscriptions: l, isExpeditedMonetizationOnboardingGuild: o } = e;
    return n && !i && r ? 1 : n && r && (l || o) && !t.hasFeature(d.oNc.COMMUNITY) ? 2 : 0;
}
function p(e) {
    return 0 !== f(e);
}
function _(e) {
    let t = (0, c.Bt)(null == e ? void 0 : e.id),
        n = (0, o.Ob)(e),
        i = (0, o.gS)(null == e ? void 0 : e.id),
        r = E(e),
        a = (0, l.e7)([s.default], () => {
            let t = s.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        d = (0, o.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: p } = (0, u.gX)(null == e ? void 0 : e.id);
    return null == e
        ? 0
        : f({
              guild: e,
              isOwner: a,
              canManageGuildRoleSubscriptions: r,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: i,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: d,
              shouldRestrictUpdatingRoleSubscriptionSettings: p
          });
}
function E(e) {
    return (0, l.e7)([a.Z], () => g(e), [e]);
}
function g(e) {
    return null != e && a.Z.can(d.Plq.ADMINISTRATOR, e);
}
