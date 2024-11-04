n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(653041);
var i = n(399606),
    l = n(897345),
    r = n(697379),
    a = n(241559),
    o = n(563534),
    s = n(655359),
    c = n(931261),
    u = n(460347),
    d = n(994592),
    h = n(265418),
    p = n(398758),
    f = n(330791),
    m = n(443063),
    g = n(981631);
function C(e) {
    let t = (0, h.Z)(e.id),
        n = (0, r.W)(e.id),
        C = (0, d.j0)(e.id),
        _ = (0, l.u)(e),
        x = (0, c.g)(e.id),
        v = (0, i.e7)([o.Z], () => o.Z.getNewMemberActions(e.id), [e.id]),
        I = (0, u.Z)(e.id),
        b = (0, s.PE)(e.id),
        S = (0, a.n2)(e.id),
        Z = [],
        N = e.hasFeature(g.oNc.HUB),
        E = e.hasFeature(g.oNc.COMMUNITY),
        y = (0, f.lN)(!(0, p.r1)(e.id)),
        j = e.hasFeature(g.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
    return N && Z.push(m.z.GUILD_HUB_HEADER_OPTIONS), !b && x && I && null != v && v.length > 0 ? Z.push(m.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && Z.push(m.z.GUILD_PREMIUM_PROGRESS_BAR), !N && x && Z.push(m.z.GUILD_HOME), t && Z.push(m.z.GUILD_SCHEDULED_EVENTS), !N && E && y && Z.push(m.z.CHANNELS_AND_ROLES), C && Z.push(m.z.GUILD_ROLE_SUBSCRIPTIONS), _ && Z.push(m.z.GUILD_SHOP), n && Z.push(m.z.GUILD_MEMBER_APPLICATIONS), S && (E || j) && Z.push(m.z.GUILD_MOD_DASH_MEMBER_SAFETY), Z;
}
