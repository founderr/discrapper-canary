r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(442837),
    a = r(661869),
    s = r(387343),
    o = r(543882),
    l = r(199902),
    u = r(592125),
    c = r(496675),
    d = r(158776),
    f = r(979651),
    _ = r(561308),
    h = r(231338);
function p(e) {
    let n = (0, i.e7)(
            [f.Z, u.Z, c.Z],
            () => {
                if (!(0, _.kr)(e) || e.author_type !== a.i.USER) return null;
                let n = f.Z.getVoiceStateForUser(e.author_id),
                    r = u.Z.getChannel(null == n ? void 0 : n.channelId),
                    i = 'channel_id' in e ? e.channel_id : null;
                return (null == i || i === (null == n ? void 0 : n.channelId)) && (null == r || (0, s.Z)(r, c.Z)) ? r : null;
            },
            [e]
        ),
        r = (0, i.e7)([d.Z], () => d.Z.getPrimaryActivity(e.author_id, null == n ? void 0 : n.guild_id), [n, e]),
        { streamPreviewUrl: p, stream: m } = (0, i.cj)(
            [l.Z, c.Z, o.Z],
            () => {
                let r;
                if (null == n) return {};
                let i = l.Z.getAnyStreamForUser(e.author_id);
                return null == i
                    ? {}
                    : (c.Z.canBasicChannel(h.S7.CONNECT, n) && (null == i ? void 0 : i.channelId) === n.id && (r = o.Z.getPreviewURL(i.guildId, i.channelId, i.ownerId)),
                      {
                          stream: i,
                          streamPreviewUrl: r
                      });
            },
            [n, e]
        );
    return {
        channel: n,
        activity: r,
        streamPreviewUrl: p,
        stream: m
    };
}
