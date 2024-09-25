n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(305325),
    l = n(281956),
    u = n(922482),
    c = n(592125),
    d = n(271383),
    _ = n(430824),
    E = n(594174),
    f = n(897285),
    h = n(924301),
    p = n(482241),
    m = n(11868),
    I = n(231338);
function T(e) {
    let { code: t } = e,
        [n, r, T] = t.split('-'),
        {
            guildScheduledEvent: g,
            guild: S,
            channel: A,
            isMember: v
        } = (0, o.cj)(
            [h.ZP, _.Z, c.Z, d.ZP, E.default],
            () => {
                var e, t;
                let i = null !== (t = h.ZP.getGuildScheduledEvent(r)) && void 0 !== t ? t : void 0,
                    a = _.Z.getGuild(n),
                    o = c.Z.getChannel(null == i ? void 0 : i.channel_id);
                return {
                    guildScheduledEvent: i,
                    guild: a,
                    channel: o,
                    isMember: d.ZP.isMember(n, null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
                };
            },
            [n, r]
        );
    function N() {
        if ((0, l.n)(n)) {
            (0, s.hk)(n);
            return;
        }
        (null == A ? void 0 : A.isGuildStageVoice()) ? (0, u.Cq)(A) : (null == A ? void 0 : A.isGuildVoice()) && p.Z.joinVoiceEvent(A.guild_id, A.id);
    }
    return (
        a.useEffect(() => {
            (null == g ? void 0 : g.id) == null && p.Z.fetchGuildEvent(n, r), f.Z.getGuildEventUserCounts(n, r, null != T ? [T] : []), f.Z.getGuildEventsForCurrentUser(n);
        }, [r, n, null == g ? void 0 : g.id, T]),
        (0, i.jsx)(m.ZP, {
            guild: S,
            channel: A,
            guildScheduledEvent: g,
            isMember: v,
            onAcceptInstantInvite: I.dG,
            onTransitionToInviteChannel: N,
            recurrenceId: T
        })
    );
}
