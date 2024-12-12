r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(358085),
    a = r(782769),
    s = r(527805),
    o = r(620662),
    l = r(981631);
function u(e) {
    let { user: n, activity: r, application: u, channelId: c, currentUser: d, isEmbedded: f, ChannelStore: _, GuildStore: h, GuildMemberCountStore: p, RelationshipStore: m, SelectedChannelStore: g, VoiceStateStore: E, PermissionStore: v } = e,
        I = _.getChannel(c),
        T = (0, a.a)(I);
    if (null == n) return !1;
    if (f)
        return (
            (0, s.ZP)({
                userId: n.id,
                activity: r,
                channelId: c,
                currentUser: d,
                application: u,
                isActivitiesEnabledForCurrentPlatform: T,
                ChannelStore: _,
                VoiceStateStore: E,
                PermissionStore: v,
                GuildStore: h
            }) === s.Fw.CAN_JOIN
        );
    if (!(0, i.isDesktop)()) return !1;
    if ((0, o.Z)(r, l.xjy.PARTY_PRIVACY_FRIENDS) && m.isFriend(n.id)) return !0;
    if ((0, o.Z)(r, l.xjy.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = _.getChannel(g.getVoiceChannelId());
        if (null == e || !E.isInChannel(e.id, n.id)) return !1;
        switch (e.type) {
            case l.d4z.DM:
            case l.d4z.GROUP_DM:
                return !0;
        }
        let r = h.getGuild(e.getGuildId());
        if (null == r || r.hasFeature(l.oNc.COMMUNITY)) return !1;
        let i = p.getMemberCount(r.id);
        return null != i && i < 100;
    }
    return !1;
}
