n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(653041);
var i = n(399606),
    l = n(897345),
    r = n(697379),
    o = n(241559),
    a = n(563534),
    s = n(655359),
    c = n(931261),
    u = n(460347),
    d = n(994592),
    h = n(265418),
    p = n(398758),
    m = n(330791),
    f = n(443063),
    g = n(981631);
function C(e) {
    let t = (0, h.Z)(e.id),
        n = (0, r.W)(e.id),
        C = (0, d.j0)(e.id),
        v = (0, l.u)(e),
        _ = (0, c.g)(e.id),
        x = (0, i.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
        I = (0, u.Z)(e.id),
        b = (0, s.PE)(e.id),
        E = (0, o.n2)(e.id),
        S = [],
        Z = e.hasFeature(g.oNc.HUB),
        N = e.hasFeature(g.oNc.COMMUNITY),
        y = (0, m.lN)(!(0, p.r1)(e.id)),
        T = e.hasFeature(g.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
    return Z && S.push(f.z.GUILD_HUB_HEADER_OPTIONS), !b && _ && I && null != x && x.length > 0 ? S.push(f.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && S.push(f.z.GUILD_PREMIUM_PROGRESS_BAR), !Z && _ && S.push(f.z.GUILD_HOME), t && S.push(f.z.GUILD_SCHEDULED_EVENTS), !Z && N && y && S.push(f.z.CHANNELS_AND_ROLES), C && S.push(f.z.GUILD_ROLE_SUBSCRIPTIONS), v && S.push(f.z.GUILD_SHOP), n && S.push(f.z.GUILD_MEMBER_APPLICATIONS), E && (N || T) && S.push(f.z.GUILD_MOD_DASH_MEMBER_SAFETY), S;
}
