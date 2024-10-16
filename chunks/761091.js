n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(653041);
var i = n(399606),
    l = n(897345),
    r = n(697379),
    a = n(241559),
    s = n(563534),
    o = n(655359),
    c = n(931261),
    u = n(460347),
    d = n(994592),
    h = n(265418),
    p = n(398758),
    f = n(330791),
    _ = n(443063),
    m = n(981631);
function g(e) {
    let t = (0, h.Z)(e.id),
        n = (0, r.W)(e.id),
        g = (0, d.j0)(e.id),
        C = (0, l.u)(e),
        I = (0, c.g)(e.id),
        E = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
        N = (0, u.Z)(e.id),
        S = (0, o.PE)(e.id),
        v = (0, a.n2)(e.id),
        x = [],
        T = e.hasFeature(m.oNc.HUB),
        Z = e.hasFeature(m.oNc.COMMUNITY),
        b = (0, f.lN)(!(0, p.r1)(e.id)),
        A = e.hasFeature(m.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
    return T && x.push(_.z.GUILD_HUB_HEADER_OPTIONS), !S && I && N && null != E && E.length > 0 ? x.push(_.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && x.push(_.z.GUILD_PREMIUM_PROGRESS_BAR), !T && I && x.push(_.z.GUILD_HOME), t && x.push(_.z.GUILD_SCHEDULED_EVENTS), !T && Z && b && x.push(_.z.CHANNELS_AND_ROLES), g && x.push(_.z.GUILD_ROLE_SUBSCRIPTIONS), C && x.push(_.z.GUILD_SHOP), n && x.push(_.z.GUILD_MEMBER_APPLICATIONS), v && (Z || A) && x.push(_.z.GUILD_MOD_DASH_MEMBER_SAFETY), x;
}
