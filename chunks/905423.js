var i = n(512969),
    r = n(903797),
    u = n(731965),
    l = n(893607),
    o = n(981631);
function a(e) {
    let t = (0, i.LX)(null != e ? e : '', { path: o.Z5c.CHANNEL(l.Hw.guildId(), l.Hw.channelId({ optional: !0 }), ':messageId?') });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return {
            guildId: e === o.ME ? null : e,
            channelId: null != n ? n : null
        };
    }
    let n = (0, i.LX)(null != e ? e : '', { path: o.Z5c.GUILD_BOOSTING_MARKETING(l.Hw.guildId()) });
    return null != n
        ? {
              guildId: n.params.guildId,
              channelId: null
          }
        : {
              guildId: null,
              channelId: null
          };
}
t.Z = (0, r.Z)((e) => ({
    path: null,
    basePath: '/',
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: i } = a(t);
        (0, u.j)(() =>
            e({
                path: t,
                guildId: n,
                channelId: i
            })
        );
    },
    resetPath(t) {
        let { guildId: n, channelId: i } = a(t);
        (0, u.j)(() =>
            e({
                path: null,
                guildId: n,
                channelId: i,
                basePath: t
            })
        );
    }
}));
