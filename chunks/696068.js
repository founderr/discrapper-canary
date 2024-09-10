n.d(t, {
    F: function () {
        return x;
    },
    d: function () {
        return p;
    }
}),
    n(653041),
    n(47120);
var a = n(442837),
    i = n(592125),
    l = n(324067),
    s = n(430824),
    o = n(496675),
    r = n(944486),
    c = n(979651),
    d = n(938475),
    u = n(823379),
    g = n(374065),
    m = n(981631);
function v(e, t, n, a, i) {
    let l = (0, g.e4)({
        channelId: e.id,
        ChannelStore: t,
        GuildStore: n,
        PermissionStore: a,
        VoiceStateStore: i
    });
    return (e.type === m.d4z.GUILD_VOICE && l === g.jy.CAN_LAUNCH) || !1;
}
function p(e) {
    var t, n, a;
    let { guildId: g, allowGdmActivityChannelSuggestion: m = !1 } = e;
    if (null == g && !m) return null;
    let p = r.Z.getVoiceChannelId(),
        I = i.Z.getChannel(p);
    if (null != I && (null != I.guild_id || m)) return I.id;
    let x = [];
    for (let e of Object.values(l.Z.getCategories(g)))
        for (let t of e)
            v(t.channel, i.Z, s.Z, o.Z, c.Z) &&
                x.push({
                    channel: t.channel,
                    users: d.ZP.getVoiceStatesForChannel(t.channel).filter(u.lm)
                });
    return null !== (a = null === (n = x.sort((e, t) => (e.users.length > t.users.length ? -1 : 1))[0]) || void 0 === n ? void 0 : null === (t = n.channel) || void 0 === t ? void 0 : t.id) && void 0 !== a ? a : null;
}
function I(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].value.channel.id !== t[n].value.channel.id) return !1;
    return !0;
}
function x(e) {
    return (0, a.e7)(
        [l.Z, i.Z, s.Z, o.Z, c.Z, d.ZP],
        () => {
            if (null == e) return [];
            let t = [];
            return (
                Object.values(l.Z.getCategories(e)).forEach((e) => {
                    e.forEach((e) => {
                        let { channel: n } = e;
                        v(n, i.Z, s.Z, o.Z, c.Z) && t.push(n);
                    });
                }),
                t
                    .map((e) => {
                        let t = d.ZP.getVoiceStatesForChannel(e).filter(u.lm);
                        return {
                            value: {
                                channel: e,
                                users: t
                            },
                            label: e.name
                        };
                    })
                    .sort((e, t) => (e.value.users.length > t.value.users.length ? -1 : 1))
            );
        },
        [e],
        I
    );
}
