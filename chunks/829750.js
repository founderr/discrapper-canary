t.d(e, {
  Z: function() {
    return r
  },
  t: function() {
    return o
  }
});
var i = t(442837),
  l = t(430824),
  a = t(938475),
  u = t(981631);

function r(n) {
  return (0, i.cj)([a.ZP, l.Z], () => {
    let e = a.ZP.countVoiceStatesForChannel(n.id),
      t = l.Z.getGuild(n.getGuildId());
    return null == t ? {
      reachedLimit: !1,
      limit: -1
    } : n.type === u.d4z.GUILD_STAGE_VOICE ? {
      reachedLimit: e > t.maxStageVideoChannelUsers,
      limit: t.maxStageVideoChannelUsers
    } : {
      reachedLimit: t.maxVideoChannelUsers > 0 && e > t.maxVideoChannelUsers,
      limit: t.maxVideoChannelUsers
    }
  }, [n])
}

function o(n) {
  let e = a.ZP.countVoiceStatesForChannel(n.id),
    t = l.Z.getGuild(n.getGuildId());
  return null == t ? {
    reachedLimit: !1,
    limit: -1
  } : n.type === u.d4z.GUILD_STAGE_VOICE ? {
    reachedLimit: e > t.maxStageVideoChannelUsers,
    limit: t.maxStageVideoChannelUsers
  } : {
    reachedLimit: t.maxVideoChannelUsers > 0 && e > t.maxVideoChannelUsers,
    limit: t.maxVideoChannelUsers
  }
}