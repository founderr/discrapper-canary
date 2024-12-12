var l = t(512969),
    i = t(65400),
    a = t(731965),
    u = t(893607),
    r = t(981631);
function o(e) {
    let n = (0, l.LX)(null != e ? e : '', { path: r.Z5c.CHANNEL(u.Hw.guildId(), u.Hw.channelId({ optional: !0 }), ':messageId?') });
    if (null != n) {
        let { guildId: e, channelId: t } = n.params;
        return {
            guildId: e === r.ME ? null : e,
            channelId: null != t ? t : null
        };
    }
    let t = (0, l.LX)(null != e ? e : '', { path: r.Z5c.GUILD_BOOSTING_MARKETING(u.Hw.guildId()) });
    return null != t
        ? {
              guildId: t.params.guildId,
              channelId: null
          }
        : {
              guildId: null,
              channelId: null
          };
}
n.Z = (0, i.F)((e) => ({
    path: null,
    basePath: '/',
    guildId: null,
    channelId: null,
    updatePath(n) {
        let { guildId: t, channelId: l } = o(n);
        (0, a.j)(() =>
            e({
                path: n,
                guildId: t,
                channelId: l
            })
        );
    },
    resetPath(n) {
        let { guildId: t, channelId: l } = o(n);
        (0, a.j)(() =>
            e({
                path: null,
                guildId: t,
                channelId: l,
                basePath: n
            })
        );
    }
}));
