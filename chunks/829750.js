t.d(e, {
  Z: function() {
    return r
  },
  t: function() {
    return o
  }
});
var l = t(442837),
  i = t(430824),
  u = t(938475),
  a = t(981631);

function r(n) {
  return (0, l.cj)([u.ZP, i.Z], () => {
    let e = u.ZP.countVoiceStatesForChannel(n.id),
      t = i.Z.getGuild(n.getGuildId());
    return null == t ? {
      reachedLimit: !1,
      limit: -1
    } : n.type === a.d4z.GUILD_STAGE_VOICE ? {
      reachedLimit: e > t.maxStageVideoChannelUsers,
      limit: t.maxStageVideoChannelUsers
    } : {
      reachedLimit: t.maxVideoChannelUsers > 0 && e > t.maxVideoChannelUsers,
      limit: t.maxVideoChannelUsers
    }
  }, [n])
}

function o(n) {
  let e = u.ZP.countVoiceStatesForChannel(n.id),
    t = i.Z.getGuild(n.getGuildId());
  return null == t ? {
    reachedLimit: !1,
    limit: -1
  } : n.type === a.d4z.GUILD_STAGE_VOICE ? {
    reachedLimit: e > t.maxStageVideoChannelUsers,
    limit: t.maxStageVideoChannelUsers
  } : {
    reachedLimit: t.maxVideoChannelUsers > 0 && e > t.maxVideoChannelUsers,
    limit: t.maxVideoChannelUsers
  }
}