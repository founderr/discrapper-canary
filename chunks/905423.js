var o = n(512969),
    i = n(454000),
    a = n(731965),
    r = n(893607),
    c = n(981631);
function l(e) {
    let t = (0, o.LX)(null != e ? e : '', { path: c.Z5c.CHANNEL(r.Hw.guildId(), r.Hw.channelId({ optional: !0 }), ':messageId?') });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return {
            guildId: e === c.ME ? null : e,
            channelId: null != n ? n : null
        };
    }
    let n = (0, o.LX)(null != e ? e : '', { path: c.Z5c.GUILD_BOOSTING_MARKETING(r.Hw.guildId()) });
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
t.Z = (0, i.F)((e) => ({
    path: null,
    basePath: '/',
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: o } = l(t);
        (0, a.j)(() =>
            e({
                path: t,
                guildId: n,
                channelId: o
            })
        );
    },
    resetPath(t) {
        let { guildId: n, channelId: o } = l(t);
        (0, a.j)(() =>
            e({
                path: null,
                guildId: n,
                channelId: o,
                basePath: t
            })
        );
    }
}));
