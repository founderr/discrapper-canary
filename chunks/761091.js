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
    m = n(443063),
    _ = n(981631);
function g(e) {
    let t = (0, h.Z)(e.id),
        n = (0, r.W)(e.id),
        g = (0, d.j0)(e.id),
        C = (0, l.u)(e),
        I = (0, c.g)(e.id),
        E = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
        N = (0, u.Z)(e.id),
        S = (0, o.PE)(e.id),
        x = (0, a.n2)(e.id),
        v = [],
        T = e.hasFeature(_.oNc.HUB),
        Z = e.hasFeature(_.oNc.COMMUNITY),
        A = (0, f.lN)(!(0, p.r1)(e.id)),
        b = e.hasFeature(_.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
    return T && v.push(m.z.GUILD_HUB_HEADER_OPTIONS), !S && I && N && null != E && E.length > 0 ? v.push(m.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && v.push(m.z.GUILD_PREMIUM_PROGRESS_BAR), !T && I && v.push(m.z.GUILD_HOME), t && v.push(m.z.GUILD_SCHEDULED_EVENTS), !T && Z && A && v.push(m.z.CHANNELS_AND_ROLES), g && v.push(m.z.GUILD_ROLE_SUBSCRIPTIONS), C && v.push(m.z.GUILD_SHOP), n && v.push(m.z.GUILD_MEMBER_APPLICATIONS), x && (Z || b) && v.push(m.z.GUILD_MOD_DASH_MEMBER_SAFETY), v;
}
