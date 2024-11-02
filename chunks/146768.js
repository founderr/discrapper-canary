t.d(e, {
    Z: function () {
        return s;
    }
});
var i = t(442837),
    l = t(431328),
    r = t(501655),
    a = t(427679),
    o = t(592125),
    c = t(430824);
function s(n) {
    let {
            id: e,
            data: { guild: t, instance: s, speakers: u, participantCount: d },
            context: g
        } = n,
        h = (0, i.e7)(
            [c.Z, o.Z],
            () => {
                var n;
                return c.Z.getGuild(null === (n = o.Z.getChannel(e)) || void 0 === n ? void 0 : n.getGuildId());
            },
            [e]
        ),
        v = (0, i.e7)([a.Z], () => a.Z.getStageInstanceByChannel(e), [e]),
        m = (0, l.w8)(e, r.pV.SPEAKER),
        x = (0, l.Rk)(e),
        Z = null != v ? m : u,
        f = (null != v ? x : d) - Z.length;
    return {
        channelId: e,
        guild: null != h ? h : t,
        stage: null != v ? v : s,
        speakers: Z,
        audienceCount: f,
        context: g
    };
}
