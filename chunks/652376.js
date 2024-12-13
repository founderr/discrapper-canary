n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(623633),
    o = n(199902),
    a = n(19780),
    s = n(979651);
function c(e) {
    var t;
    let n = (0, l.e7)([a.Z], () => a.Z.getGuildId()),
        c = e.children.map((e) => e.id),
        d = null != n && c.includes(n),
        u = !1,
        h = !1,
        p = !1,
        m = (0, l.e7)([a.Z], () => a.Z.getChannelId()),
        f = null === (t = (0, r.Z)()) || void 0 === t ? void 0 : t.guild_id,
        g = null != f && c.includes(f),
        C = (0, l.e7)([s.Z], () => null != m && s.Z.hasVideo(m), [m]),
        v = (0, l.e7)([o.Z], () => o.Z.getCurrentUserActiveStream());
    return (
        d && ((u = !C), (h = C), (p = null != v && null != v.guildId && c.includes(v.guildId))),
        i.useMemo(
            () => ({
                audio: u,
                video: h,
                screenshare: p,
                liveStage: g,
                isCurrentUserConnected: d
            }),
            [u, h, p, g, d]
        )
    );
}
