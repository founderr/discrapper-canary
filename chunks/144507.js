n.d(t, {
    $D: function () {
        return h;
    },
    H2: function () {
        return m;
    },
    MO: function () {
        return p;
    },
    X$: function () {
        return _;
    },
    d5: function () {
        return i;
    }
});
var r,
    i,
    a = n(442837),
    s = n(223892),
    o = n(674180),
    l = n(496675),
    u = n(594174),
    c = n(923726),
    d = n(981631);
((r = i || (i = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.WAITLIST_ONLY = 1)] = 'WAITLIST_ONLY'), (r[(r.NEEDS_COMMUNITY = 2)] = 'NEEDS_COMMUNITY'), (r[(r.VISIBLE = 3)] = 'VISIBLE');
function f(e) {
    if (e.guild.hasFeature(d.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (
        (function (e) {
            let { guild: t, isOwner: n, canManageGuildRoleSubscriptions: r, isGuildEligibleForRoleSubscriptions: i, isExpeditedMonetizationOnboardingGuild: a, isUserInCreatorMonetizationEligibleCountry: s, shouldRestrictUpdatingRoleSubscriptionSettings: o } = e;
            return !!r && (!o || !!n) && (!!(t.hasFeature(d.oNc.CREATOR_MONETIZABLE) || t.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!t.hasFeature(d.oNc.COMMUNITY) && (!!i || !!a) && n && s));
        })(e)
    )
        return 3;
    let { guild: t, isOwner: n, isUserInCreatorMonetizationEligibleCountry: r, isMonetizationWaitlistEnabledForGuild: i, isGuildEligibleForRoleSubscriptions: a, isExpeditedMonetizationOnboardingGuild: s } = e;
    return n && !r && i ? 1 : n && i && (a || s) && !t.hasFeature(d.oNc.COMMUNITY) ? 2 : 0;
}
function _(e) {
    return 0 !== f(e);
}
function p(e) {
    let t = (0, c.Bt)(null == e ? void 0 : e.id),
        n = (0, s.Ob)(e),
        r = (0, s.gS)(null == e ? void 0 : e.id),
        i = h(e),
        l = (0, a.e7)([u.default], () => {
            let t = u.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        d = (0, s.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: _ } = (0, o.gX)(null == e ? void 0 : e.id);
    return null == e
        ? 0
        : f({
              guild: e,
              isOwner: l,
              canManageGuildRoleSubscriptions: i,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: r,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: d,
              shouldRestrictUpdatingRoleSubscriptionSettings: _
          });
}
function h(e) {
    return (0, a.e7)([l.Z], () => m(e), [e]);
}
function m(e) {
    return null != e && l.Z.can(d.Plq.ADMINISTRATOR, e);
}
