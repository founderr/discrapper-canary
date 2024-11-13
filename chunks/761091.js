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
        v = (0, c.g)(e.id),
        x = (0, i.e7)([o.Z], () => o.Z.getNewMemberActions(e.id), [e.id]),
        I = (0, u.Z)(e.id),
        b = (0, s.PE)(e.id),
        S = (0, a.n2)(e.id),
        E = [],
        Z = e.hasFeature(g.oNc.HUB),
        N = e.hasFeature(g.oNc.COMMUNITY),
        y = (0, f.lN)(!(0, p.r1)(e.id)),
        T = e.hasFeature(g.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
    return Z && E.push(m.z.GUILD_HUB_HEADER_OPTIONS), !b && v && I && null != x && x.length > 0 ? E.push(m.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && E.push(m.z.GUILD_PREMIUM_PROGRESS_BAR), !Z && v && E.push(m.z.GUILD_HOME), t && E.push(m.z.GUILD_SCHEDULED_EVENTS), !Z && N && y && E.push(m.z.CHANNELS_AND_ROLES), C && E.push(m.z.GUILD_ROLE_SUBSCRIPTIONS), _ && E.push(m.z.GUILD_SHOP), n && E.push(m.z.GUILD_MEMBER_APPLICATIONS), S && (N || T) && E.push(m.z.GUILD_MOD_DASH_MEMBER_SAFETY), E;
}
