var i = n(512969),
    o = n(903797),
    r = n(731965),
    a = n(893607),
    c = n(981631);
function l(e) {
    let t = (0, i.LX)(null != e ? e : '', { path: c.Z5c.CHANNEL(a.Hw.guildId(), a.Hw.channelId({ optional: !0 }), ':messageId?') });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return {
            guildId: e === c.ME ? null : e,
            channelId: null != n ? n : null
        };
    }
    let n = (0, i.LX)(null != e ? e : '', { path: c.Z5c.GUILD_BOOSTING_MARKETING(a.Hw.guildId()) });
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
t.Z = (0, o.Z)((e) => ({
    path: null,
    basePath: '/',
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: i } = l(t);
        (0, r.j)(() =>
            e({
                path: t,
                guildId: n,
                channelId: i
            })
        );
    },
    resetPath(t) {
        let { guildId: n, channelId: i } = l(t);
        (0, r.j)(() =>
            e({
                path: null,
                guildId: n,
                channelId: i,
                basePath: t
            })
        );
    }
}));
