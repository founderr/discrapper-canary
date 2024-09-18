t.d(n, {
    F: function () {
        return Z;
    },
    d: function () {
        return g;
    }
}),
    t(653041),
    t(47120);
var a = t(442837),
    c = t(592125),
    s = t(324067),
    d = t(430824),
    i = t(496675),
    o = t(944486),
    l = t(979651),
    f = t(938475),
    r = t(823379),
    u = t(374065),
    p = t(981631);
function b(e, n, t, a, c) {
    let s = (0, u.e4)({
        channelId: e.id,
        ChannelStore: n,
        GuildStore: t,
        PermissionStore: a,
        VoiceStateStore: c
    });
    return (e.type === p.d4z.GUILD_VOICE && s === u.jy.CAN_LAUNCH) || !1;
}
function g(e) {
    var n, t, a;
    let { guildId: u, allowGdmActivityChannelSuggestion: p = !1 } = e;
    if (null == u && !p) return null;
    let g = o.Z.getVoiceChannelId(),
        m = c.Z.getChannel(g);
    if (null != m && (null != m.guild_id || p)) return m.id;
    let Z = [];
    for (let e of Object.values(s.Z.getCategories(u)))
        for (let n of e)
            b(n.channel, c.Z, d.Z, i.Z, l.Z) &&
                Z.push({
                    channel: n.channel,
                    users: f.ZP.getVoiceStatesForChannel(n.channel).filter(r.lm)
                });
    return null !== (a = null === (t = Z.sort((e, n) => (e.users.length > n.users.length ? -1 : 1))[0]) || void 0 === t ? void 0 : null === (n = t.channel) || void 0 === n ? void 0 : n.id) && void 0 !== a ? a : null;
}
function m(e, n) {
    if (e.length !== n.length) return !1;
    for (let t = 0; t < e.length; t++) if (e[t].value.channel.id !== n[t].value.channel.id) return !1;
    return !0;
}
function Z(e) {
    return (0, a.e7)(
        [s.Z, c.Z, d.Z, i.Z, l.Z, f.ZP],
        () => {
            if (null == e) return [];
            let n = [];
            return (
                Object.values(s.Z.getCategories(e)).forEach((e) => {
                    e.forEach((e) => {
                        let { channel: t } = e;
                        b(t, c.Z, d.Z, i.Z, l.Z) && n.push(t);
                    });
                }),
                n
                    .map((e) => {
                        let n = f.ZP.getVoiceStatesForChannel(e).filter(r.lm);
                        return {
                            value: {
                                channel: e,
                                users: n
                            },
                            label: e.name
                        };
                    })
                    .sort((e, n) => (e.value.users.length > n.value.users.length ? -1 : 1))
            );
        },
        [e],
        m
    );
}
