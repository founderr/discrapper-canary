var i = n(192379),
    r = n(149765),
    s = n(442837),
    a = n(367907),
    o = n(731429),
    l = n(188471),
    c = n(318885),
    d = n(592125),
    u = n(984933),
    h = n(271383),
    p = n(430824),
    f = n(496675),
    g = n(944486),
    m = n(914010),
    v = n(594174),
    _ = n(237997),
    E = n(145597),
    x = n(981631);
class Z extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let { selectedGuild: t, selectedChannel: n, isMemberPending: i, hasPreviewEnabled: r, postableChannelCount: s } = this.props;
        if (
            (null != t &&
                (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
                ((0, c.Q)(x.rMx.GUILD_VIEWED, {
                    ...(i
                        ? {
                              is_pending: i,
                              preview_enabled: r
                          }
                        : {}),
                    postable_channels: s
                }),
                (0, l.a)(x.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
        ) {
            let e = (0, o.K)(d.Z.getChannel(n), !0);
            (0, c.Q)(x.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, a.$H)(n)
            }),
                (0, l.a)(x.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
t.Z = s.ZP.connectStores([m.Z, g.Z, p.Z, v.default, _.Z, u.ZP, f.Z, h.ZP], () => {
    var e, t, n;
    let i = m.Z.getGuildId(),
        s = g.Z.getChannelId(i),
        a = p.Z.getGuild(i),
        o = v.default.getCurrentUser(),
        l = null !== (t = u.ZP.getChannels(null == a ? void 0 : a.id)[u.sH]) && void 0 !== t ? t : [],
        c =
            l.length > 0
                ? l.filter((e) => {
                      let { channel: t } = e;
                      return f.Z.can(r.$e(x.Plq.SEND_MESSAGES, x.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        d = null != o && null != i && null !== (n = null === (e = h.ZP.getMember(i, o.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
    return {
        selectedGuild: i,
        selectedChannel: s,
        locked: _.Z.isLocked((0, E.QF)()),
        hasPreviewEnabled: null == a ? void 0 : a.features.has(x.oNc.PREVIEW_ENABLED),
        isMemberPending: d,
        postableChannelCount: c
    };
})(Z);
