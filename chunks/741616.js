n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(733860);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(215569),
    o = n(592125),
    s = n(358652),
    c = n(19780),
    u = n(919436);
function d() {
    (0, r.e7)([o.Z], () => o.Z.getPrivateChannelsVersion());
    let e = o.Z.getMutablePrivateChannels(),
        t = (0, r.Wu)([s.Z], () => s.Z.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: d } = (0, r.cj)([c.Z], () => ({
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
        (0, i.jsx)(a.W, {
            component: l.Fragment,
            children: h
        })
    );
}
