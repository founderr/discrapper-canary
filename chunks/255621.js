n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(358085),
    i = n(782769),
    a = n(527805),
    s = n(620662),
    o = n(981631);
function l(e) {
    let { user: t, activity: n, application: l, channelId: u, currentUser: c, isEmbedded: d, ChannelStore: f, GuildStore: _, GuildMemberCountStore: p, RelationshipStore: h, SelectedChannelStore: m, VoiceStateStore: g, PermissionStore: E } = e,
        v = f.getChannel(u),
        I = (0, i.a)(v);
    if (null == t) return !1;
    if (d)
        return (
            (0, a.ZP)({
                userId: t.id,
                activity: n,
                channelId: u,
                currentUser: c,
                application: l,
                isActivitiesEnabledForCurrentPlatform: I,
                ChannelStore: f,
                VoiceStateStore: g,
                PermissionStore: E,
                GuildStore: _
            }) === a.Fw.CAN_JOIN
        );
    if (!(0, r.isDesktop)()) return !1;
    if ((0, s.Z)(n, o.xjy.PARTY_PRIVACY_FRIENDS) && h.isFriend(t.id)) return !0;
    if ((0, s.Z)(n, o.xjy.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = f.getChannel(m.getVoiceChannelId());
        if (null == e || !g.isInChannel(e.id, t.id)) return !1;
        switch (e.type) {
            case o.d4z.DM:
            case o.d4z.GROUP_DM:
                return !0;
        }
        let n = _.getGuild(e.getGuildId());
        if (null == n || n.hasFeature(o.oNc.COMMUNITY)) return !1;
        let r = p.getMemberCount(n.id);
        return null != r && r < 100;
    }
    return !1;
}
