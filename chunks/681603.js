var i = n(470079),
    s = n(149765),
    r = n(442837),
    a = n(367907),
    o = n(731429),
    l = n(188471),
    c = n(318885),
    d = n(592125),
    u = n(984933),
    h = n(271383),
    p = n(430824),
    f = n(496675),
    _ = n(944486),
    E = n(914010),
    g = n(594174),
    m = n(237997),
    I = n(145597),
    Z = n(981631);
class v extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let { selectedGuild: t, selectedChannel: n, isMemberPending: i, hasPreviewEnabled: s, postableChannelCount: r } = this.props;
        if (
            (null != t &&
                (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
                ((0, c.Q)(Z.rMx.GUILD_VIEWED, {
                    ...(i
                        ? {
                              is_pending: i,
                              preview_enabled: s
                          }
                        : {}),
                    postable_channels: r
                }),
                (0, l.a)(Z.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
        ) {
            let e = (0, o.K)(d.Z.getChannel(n), !0);
            (0, c.Q)(Z.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, a.$H)(n)
            }),
                (0, l.a)(Z.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
t.Z = r.ZP.connectStores([E.Z, _.Z, p.Z, g.default, m.Z, u.ZP, f.Z, h.ZP], () => {
    var e, t, n;
    let i = E.Z.getGuildId(),
        r = _.Z.getChannelId(i),
        a = p.Z.getGuild(i),
        o = g.default.getCurrentUser(),
        l = null !== (t = u.ZP.getChannels(null == a ? void 0 : a.id)[u.sH]) && void 0 !== t ? t : [],
        c =
            l.length > 0
                ? l.filter((e) => {
                      let { channel: t } = e;
                      return f.Z.can(s.$e(Z.Plq.SEND_MESSAGES, Z.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        d = null != o && null != i && null !== (n = null === (e = h.ZP.getMember(i, o.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
    return {
        selectedGuild: i,
        selectedChannel: r,
        locked: m.Z.isUILocked((0, I.QF)()),
        hasPreviewEnabled: null == a ? void 0 : a.features.has(Z.oNc.PREVIEW_ENABLED),
        isMemberPending: d,
        postableChannelCount: c
    };
})(v);
