n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(305325),
    o = n(281956),
    s = n(922482),
    c = n(592125),
    d = n(271383),
    u = n(430824),
    m = n(594174),
    h = n(897285),
    f = n(924301),
    p = n(482241),
    _ = n(997321),
    g = n(231338);
function E(e) {
    let { code: t } = e,
        [n, E, C] = t.split('-'),
        {
            guildScheduledEvent: I,
            guild: x,
            channel: v,
            isMember: N
        } = (0, l.cj)(
            [f.ZP, u.Z, c.Z, d.ZP, m.default],
            () => {
                var e, t;
                let i = null !== (t = f.ZP.getGuildScheduledEvent(E)) && void 0 !== t ? t : void 0,
                    r = u.Z.getGuild(n),
                    l = c.Z.getChannel(null == i ? void 0 : i.channel_id);
                return {
                    guildScheduledEvent: i,
                    guild: r,
                    channel: l,
                    isMember: d.ZP.isMember(n, null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
                };
            },
            [n, E]
        );
    return (
        r.useEffect(() => {
            (null == I ? void 0 : I.id) == null && p.Z.fetchGuildEvent(n, E), h.Z.getGuildEventUserCounts(n, E, null != C ? [C] : []), h.Z.getGuildEventsForCurrentUser(n);
        }, [E, n, null == I ? void 0 : I.id, C]),
        (0, i.jsx)(_.ZP, {
            guild: x,
            channel: v,
            guildScheduledEvent: I,
            isMember: N,
            onAcceptInstantInvite: g.dG,
            onTransitionToInviteChannel: function () {
                if ((0, o.n)(n)) {
                    (0, a.hk)(n);
                    return;
                }
                (null == v ? void 0 : v.isGuildStageVoice()) ? (0, s.Cq)(v) : (null == v ? void 0 : v.isGuildVoice()) && p.Z.joinVoiceEvent(v.guild_id, v.id);
            },
            recurrenceId: C
        })
    );
}
