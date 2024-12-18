n.d(t, {
    $D: function () {
        return g;
    },
    H2: function () {
        return E;
    },
    MO: function () {
        return p;
    },
    X$: function () {
        return _;
    },
    d5: function () {
        return r;
    }
});
var i,
    r,
    o = n(442837),
    l = n(223892),
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
            let { guild: t, isOwner: n, canManageGuildRoleSubscriptions: i, isGuildEligibleForRoleSubscriptions: r, isExpeditedMonetizationOnboardingGuild: o, isUserInCreatorMonetizationEligibleCountry: l, shouldRestrictUpdatingRoleSubscriptionSettings: u } = e;
            return !!i && (!u || !!n) && (!!(t.hasFeature(d.oNc.CREATOR_MONETIZABLE) || t.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!t.hasFeature(d.oNc.COMMUNITY) && (!!r || !!o) && n && l));
        })(e)
    )
        return 3;
    let { guild: t, isOwner: n, isUserInCreatorMonetizationEligibleCountry: i, isMonetizationWaitlistEnabledForGuild: r, isGuildEligibleForRoleSubscriptions: o, isExpeditedMonetizationOnboardingGuild: l } = e;
    return n && !i && r ? 1 : n && r && (o || l) && !t.hasFeature(d.oNc.COMMUNITY) ? 2 : 0;
}
function _(e) {
    return 0 !== f(e);
}
function p(e) {
    let t = (0, c.Bt)(null == e ? void 0 : e.id),
        n = (0, l.Ob)(e),
        i = (0, l.gS)(null == e ? void 0 : e.id),
        r = g(e),
        a = (0, o.e7)([s.default], () => {
            let t = s.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        d = (0, l.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: _ } = (0, u.gX)(null == e ? void 0 : e.id);
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
              shouldRestrictUpdatingRoleSubscriptionSettings: _
          });
}
function g(e) {
    return (0, o.e7)([a.Z], () => E(e), [e]);
}
function E(e) {
    return null != e && a.Z.can(d.Plq.ADMINISTRATOR, e);
}
