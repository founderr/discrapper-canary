n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(305325),
    l = n(281956),
    o = n(922482),
    c = n(592125),
    u = n(271383),
    d = n(430824),
    _ = n(594174),
    E = n(897285),
    I = n(924301),
    m = n(482241),
    f = n(11868),
    h = n(231338);
function T(e) {
    let { code: t } = e,
        [n, T, N] = t.split('-'),
        {
            guildScheduledEvent: p,
            guild: C,
            channel: g,
            isMember: S
        } = (0, s.cj)(
            [I.ZP, d.Z, c.Z, u.ZP, _.default],
            () => {
                var e, t;
                let i = null !== (t = I.ZP.getGuildScheduledEvent(T)) && void 0 !== t ? t : void 0,
                    a = d.Z.getGuild(n),
                    s = c.Z.getChannel(null == i ? void 0 : i.channel_id);
                return {
                    guildScheduledEvent: i,
                    guild: a,
                    channel: s,
                    isMember: u.ZP.isMember(n, null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
                };
            },
            [n, T]
        );
    return (
        a.useEffect(() => {
            (null == p ? void 0 : p.id) == null && m.Z.fetchGuildEvent(n, T), E.Z.getGuildEventUserCounts(n, T, null != N ? [N] : []), E.Z.getGuildEventsForCurrentUser(n);
        }, [T, n, null == p ? void 0 : p.id, N]),
        (0, i.jsx)(f.ZP, {
            guild: C,
            channel: g,
            guildScheduledEvent: p,
            isMember: S,
            onAcceptInstantInvite: h.dG,
            onTransitionToInviteChannel: function () {
                if ((0, l.n)(n)) {
                    (0, r.hk)(n);
                    return;
                }
                (null == g ? void 0 : g.isGuildStageVoice()) ? (0, o.Cq)(g) : (null == g ? void 0 : g.isGuildVoice()) && m.Z.joinVoiceEvent(g.guild_id, g.id);
            },
            recurrenceId: N
        })
    );
}
