n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(305325),
    r = n(281956),
    o = n(922482),
    c = n(592125),
    d = n(271383),
    u = n(430824),
    _ = n(594174),
    E = n(897285),
    I = n(924301),
    m = n(482241),
    T = n(11868),
    N = n(231338);
function h(e) {
    let { code: t } = e,
        [n, h, C] = t.split('-'),
        {
            guildScheduledEvent: f,
            guild: p,
            channel: g,
            isMember: A
        } = (0, s.cj)(
            [I.ZP, u.Z, c.Z, d.ZP, _.default],
            () => {
                var e, t;
                let i = null !== (t = I.ZP.getGuildScheduledEvent(h)) && void 0 !== t ? t : void 0,
                    a = u.Z.getGuild(n),
                    s = c.Z.getChannel(null == i ? void 0 : i.channel_id);
                return {
                    guildScheduledEvent: i,
                    guild: a,
                    channel: s,
                    isMember: d.ZP.isMember(n, null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
                };
            },
            [n, h]
        );
    return (
        a.useEffect(() => {
            (null == f ? void 0 : f.id) == null && m.Z.fetchGuildEvent(n, h), E.Z.getGuildEventUserCounts(n, h, null != C ? [C] : []), E.Z.getGuildEventsForCurrentUser(n);
        }, [h, n, null == f ? void 0 : f.id, C]),
        (0, i.jsx)(T.ZP, {
            guild: p,
            channel: g,
            guildScheduledEvent: f,
            isMember: A,
            onAcceptInstantInvite: N.dG,
            onTransitionToInviteChannel: function () {
                if ((0, r.n)(n)) {
                    (0, l.hk)(n);
                    return;
                }
                (null == g ? void 0 : g.isGuildStageVoice()) ? (0, o.Cq)(g) : (null == g ? void 0 : g.isGuildVoice()) && m.Z.joinVoiceEvent(g.guild_id, g.id);
            },
            recurrenceId: C
        })
    );
}
