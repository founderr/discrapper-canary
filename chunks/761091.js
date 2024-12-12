n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(653041);
var i = n(399606),
    l = n(897345),
    r = n(63568),
    o = n(697379),
    a = n(241559),
    s = n(563534),
    c = n(655359),
    d = n(931261),
    u = n(460347),
    h = n(994592),
    p = n(265418),
    m = n(398758),
    f = n(330791),
    g = n(443063),
    C = n(981631);
function v(e) {
    let t = (0, p.Z)(e.id),
        n = (0, o.W)(e.id),
        v = (0, h.j0)(e.id),
        _ = (0, l.u)(e),
        x = (0, d.g)(e.id),
        I = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
        b = (0, u.Z)(e.id),
        E = (0, c.PE)(e.id),
        S = (0, a.n2)(e.id),
        Z = [],
        N = e.hasFeature(C.oNc.HUB),
        y = e.hasFeature(C.oNc.COMMUNITY),
        T = (0, f.lN)(!(0, m.r1)(e.id)),
        j = e.hasFeature(C.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        A = (0, r.jS)(e.id, 'Guild Sidebar');
    return N && Z.push(g.z.GUILD_HUB_HEADER_OPTIONS), !E && x && b && null != I && I.length > 0 ? Z.push(g.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && Z.push(g.z.GUILD_PREMIUM_PROGRESS_BAR), !N && x && Z.push(g.z.GUILD_HOME), t && Z.push(g.z.GUILD_SCHEDULED_EVENTS), !N && y && T && Z.push(g.z.CHANNELS_AND_ROLES), v && Z.push(g.z.GUILD_ROLE_SUBSCRIPTIONS), _ && Z.push(g.z.GUILD_SHOP), !A && n && Z.push(g.z.GUILD_MEMBER_APPLICATIONS), S && (y || j || (A && e.hasFeature(C.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL))) && Z.push(g.z.GUILD_MOD_DASH_MEMBER_SAFETY), Z;
}
