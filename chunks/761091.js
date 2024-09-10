n.d(t, {
    Z: function () {
        return m;
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
    _ = n(330791),
    f = n(443063),
    g = n(981631);
function m(e) {
    let t = (0, h.Z)(e.id),
        n = (0, r.W)(e.id),
        m = (0, d.j0)(e.id),
        C = (0, l.u)(e),
        I = (0, c.g)(e.id),
        E = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
        N = (0, u.Z)(e.id),
        x = (0, o.PE)(e.id),
        S = (0, a.n2)(e.id),
        v = [],
        Z = e.hasFeature(g.oNc.HUB),
        T = e.hasFeature(g.oNc.COMMUNITY),
        L = (0, _.lN)(!(0, p.r1)(e.id)),
        A = e.hasFeature(g.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
    return Z && v.push(f.z.GUILD_HUB_HEADER_OPTIONS), !x && I && N && null != E && E.length > 0 ? v.push(f.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && v.push(f.z.GUILD_PREMIUM_PROGRESS_BAR), !Z && I && v.push(f.z.GUILD_HOME), t && v.push(f.z.GUILD_SCHEDULED_EVENTS), !Z && T && L && v.push(f.z.CHANNELS_AND_ROLES), m && v.push(f.z.GUILD_ROLE_SUBSCRIPTIONS), C && v.push(f.z.GUILD_SHOP), n && v.push(f.z.GUILD_MEMBER_APPLICATIONS), S && (T || A) && v.push(f.z.GUILD_MOD_DASH_MEMBER_SAFETY), v;
}
