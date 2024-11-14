var i = n(192379),
    r = n(149765),
    l = n(442837),
    o = n(367907),
    a = n(731429),
    s = n(188471),
    u = n(318885),
    c = n(592125),
    d = n(984933),
    h = n(271383),
    f = n(430824),
    p = n(496675),
    m = n(944486),
    E = n(914010),
    v = n(594174),
    g = n(237997),
    _ = n(145597),
    C = n(981631);
class S extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let { selectedGuild: t, selectedChannel: n, isMemberPending: i, hasPreviewEnabled: r, postableChannelCount: l } = this.props;
        if (
            (null != t &&
                (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
                ((0, u.Q)(C.rMx.GUILD_VIEWED, {
                    ...(i
                        ? {
                              is_pending: i,
                              preview_enabled: r
                          }
                        : {}),
                    postable_channels: l
                }),
                (0, s.a)(C.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
        ) {
            let e = (0, a.K)(c.Z.getChannel(n), !0);
            (0, u.Q)(C.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, o.$H)(n)
            }),
                (0, s.a)(C.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
        }
    }
    render() {
        return null;
    }
}
t.Z = l.ZP.connectStores([E.Z, m.Z, f.Z, v.default, g.Z, d.ZP, p.Z, h.ZP], () => {
    var e, t, n;
    let i = E.Z.getGuildId(),
        l = m.Z.getChannelId(i),
        o = f.Z.getGuild(i),
        a = v.default.getCurrentUser(),
        s = null !== (t = d.ZP.getChannels(null == o ? void 0 : o.id)[d.sH]) && void 0 !== t ? t : [],
        u =
            s.length > 0
                ? s.filter((e) => {
                      let { channel: t } = e;
                      return p.Z.can(r.$e(C.Plq.SEND_MESSAGES, C.Plq.VIEW_CHANNEL), t);
                  }).length
                : 0,
        c = null != a && null != i && null !== (n = null === (e = h.ZP.getMember(i, a.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
    return {
        selectedGuild: i,
        selectedChannel: l,
        locked: g.Z.isLocked((0, _.QF)()),
        hasPreviewEnabled: null == o ? void 0 : o.features.has(C.oNc.PREVIEW_ENABLED),
        isMemberPending: c,
        postableChannelCount: u
    };
})(S);
