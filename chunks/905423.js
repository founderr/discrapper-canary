var r = n(266067),
    i = n(652874),
    a = n(731965),
    s = n(981631);
function o(e) {
    let t = (0, r.LX)(null != e ? e : '', { path: s.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?') });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return {
            guildId: e === s.ME ? null : e,
            channelId: null != n ? n : null
        };
    }
    let n = (0, r.LX)(null != e ? e : '', { path: s.Z5c.GUILD_BOOSTING_MARKETING(':guildId') });
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
t.Z = (0, i.Z)((e) => ({
    path: null,
    basePath: '/',
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: r } = o(t);
        (0, a.j)(() =>
            e({
                path: t,
                guildId: n,
                channelId: r
            })
        );
    },
    resetPath(t) {
        let { guildId: n, channelId: r } = o(t);
        (0, a.j)(() =>
            e({
                path: null,
                guildId: n,
                channelId: r,
                basePath: t
            })
        );
    }
}));
