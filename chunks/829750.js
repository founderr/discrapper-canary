t.d(n, {
    Z: function () {
        return s;
    },
    t: function () {
        return o;
    }
});
var l = t(442837),
    i = t(430824),
    r = t(938475),
    a = t(981631);
function s(e) {
    return (0, l.cj)(
        [r.ZP, i.Z],
        () => {
            let n = r.ZP.countVoiceStatesForChannel(e.id),
                t = i.Z.getGuild(e.getGuildId());
            return null == t
                ? {
                      reachedLimit: !1,
                      limit: -1
                  }
                : e.type === a.d4z.GUILD_STAGE_VOICE
                  ? {
                        reachedLimit: n > t.maxStageVideoChannelUsers,
                        limit: t.maxStageVideoChannelUsers
                    }
                  : {
                        reachedLimit: t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                        limit: t.maxVideoChannelUsers
                    };
        },
        [e]
    );
}
function o(e) {
    let n = r.ZP.countVoiceStatesForChannel(e.id),
        t = i.Z.getGuild(e.getGuildId());
    return null == t
        ? {
              reachedLimit: !1,
              limit: -1
          }
        : e.type === a.d4z.GUILD_STAGE_VOICE
          ? {
                reachedLimit: n > t.maxStageVideoChannelUsers,
                limit: t.maxStageVideoChannelUsers
            }
          : {
                reachedLimit: t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                limit: t.maxVideoChannelUsers
            };
}
