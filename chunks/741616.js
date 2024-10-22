n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(733860);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(215569),
    s = n(592125),
    o = n(358652),
    c = n(19780),
    u = n(919436);
function d() {
    (0, a.e7)([s.Z], () => s.Z.getPrivateChannelsVersion());
    let e = s.Z.getMutablePrivateChannels(),
        t = (0, a.Wu)([o.Z], () => o.Z.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: d } = (0, a.cj)([c.Z], () => ({
            selectedVoiceGuildId: c.Z.getGuildId(),
            selectedVoiceChannelId: c.Z.getChannelId()
        })),
        h = t.map((t) => {
            let n = e[t];
            return null == n || n.id === d ? null : (0, i.jsx)(u.Z, { channel: n }, n.id);
        }),
        p = null == n && null != d ? e[d] : null;
    return (
        null != p && h.unshift((0, i.jsx)(u.Z, { channel: p }, p.id)),
        (0, i.jsx)(r.W, {
            component: l.Fragment,
            children: h
        })
    );
}
