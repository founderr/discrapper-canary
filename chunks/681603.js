var i = n(192379),
    l = n(149765),
    o = n(442837),
    r = n(367907),
    s = n(731429),
    a = n(188471),
    u = n(318885),
    c = n(592125),
    d = n(984933),
    h = n(271383),
    f = n(430824),
    p = n(496675),
    m = n(944486),
    v = n(914010),
    g = n(594174),
    E = n(237997),
    C = n(145597),
    x = n(981631);
class Z extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let { selectedGuild: t, selectedChannel: n, isMemberPending: i, hasPreviewEnabled: l, postableChannelCount: o } = this.props;
        if (
            (null != t &&
                (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
                ((0, u.Q)(x.rMx.GUILD_VIEWED, {
                    ...(i
                        ? {
                              is_pending: i,
                              preview_enabled: l
                          }
                        : {}),
                    postable_channels: o
                }),
                (0, a.a)(x.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
        ) {
            let e = (0, s.K)(c.Z.getChannel(n), !0);
            (0, u.Q)(x.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, r.$H)(n)
            }),
                (0, a.a)(x.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
t.Z = o.ZP.connectStores([v.Z, m.Z, f.Z, g.default, E.Z, d.ZP, p.Z, h.ZP], () => {
    var e, t, n;
    let i = v.Z.getGuildId(),
        o = m.Z.getChannelId(i),
        r = f.Z.getGuild(i),
        s = g.default.getCurrentUser(),
        a = null !== (t = d.ZP.getChannels(null == r ? void 0 : r.id)[d.sH]) && void 0 !== t ? t : [],
        u =
            a.length > 0
                ? a.filter((e) => {
                      let { channel: t } = e;
                      return p.Z.can(l.$e(x.Plq.SEND_MESSAGES, x.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        c = null != s && null != i && null !== (n = null === (e = h.ZP.getMember(i, s.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
    return {
        selectedGuild: i,
        selectedChannel: o,
        locked: E.Z.isLocked((0, C.QF)()),
        hasPreviewEnabled: null == r ? void 0 : r.features.has(x.oNc.PREVIEW_ENABLED),
        isMemberPending: c,
        postableChannelCount: u
    };
})(Z);
