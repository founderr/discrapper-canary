n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(623633),
    a = n(199902),
    o = n(19780),
    s = n(979651);
function c(e) {
    var t;
    let n = (0, l.e7)([o.Z], () => o.Z.getGuildId()),
        c = e.children.map((e) => e.id),
        u = null != n && c.includes(n),
        d = !1,
        h = !1,
        p = !1,
        f = (0, l.e7)([o.Z], () => o.Z.getChannelId()),
        m = null === (t = (0, r.Z)()) || void 0 === t ? void 0 : t.guild_id,
        g = null != m && c.includes(m),
        C = (0, l.e7)([s.Z], () => null != f && s.Z.hasVideo(f), [f]),
        _ = (0, l.e7)([a.Z], () => a.Z.getCurrentUserActiveStream());
    return (
        u && ((d = !C), (h = C), (p = null != _ && null != _.guildId && c.includes(_.guildId))),
        i.useMemo(
            () => ({
                audio: d,
                video: h,
                screenshare: p,
                liveStage: g,
                isCurrentUserConnected: u
            }),
            [d, h, p, g, u]
        )
    );
}
