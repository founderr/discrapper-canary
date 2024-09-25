n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(470079),
    i = n(106351),
    a = n(442837),
    o = n(434650),
    s = n(430824),
    l = n(63205),
    u = n(529726),
    c = n(981631);
let d = 0;
function _(e) {
    var t, n;
    let { message: _, channel: E, enabled: f = !0 } = e,
        h = (0, a.e7)(
            [s.Z],
            () => {
                var e;
                let t = s.Z.getGuild(E.guild_id);
                return null !== (e = null == t ? void 0 : t.hasFeature(c.oNc.COMMUNITY)) && void 0 !== e && e;
            },
            [E.guild_id]
        ),
        p = (null === (t = _.messageReference) || void 0 === t ? void 0 : t.guild_id) != null && null != _.webhookId && _.hasFlag(c.iLy.IS_CROSSPOST) && null != E.guild_id,
        m = E.type === i.d.GUILD_ANNOUNCEMENT && h,
        I = !_.hasFlag(c.iLy.EPHEMERAL) && (p || m),
        T = p && null != _.messageReference ? _.messageReference.message_id : _.id,
        g = p && null != _.messageReference ? _.messageReference.channel_id : E.id,
        S = p && (null === (n = _.messageReference) || void 0 === n ? void 0 : n.guild_id) != null ? _.messageReference.guild_id : E.guild_id,
        A = r.useCallback(
            (e) => {
                e
                    ? u.Z.handleMessageBecameVisible({
                          messageId: T,
                          channelId: E.id,
                          guildId: E.guild_id,
                          sourceChannelId: g,
                          sourceGuildId: S
                      })
                    : u.Z.handleMessageLostVisibility(T);
            },
            [T, E.id, E.guild_id, g, S]
        ),
        v = l.Z.useExperiment(
            { location: '836a4b_1' },
            {
                disable: !I || !f,
                autoTrackExposure: !0
            }
        ).enabled,
        N = (0, o.O)(A, d, v);
    return (
        r.useEffect(
            () => () => {
                u.Z.handleMessageLostVisibility(T);
            },
            [T]
        ),
        N
    );
}
