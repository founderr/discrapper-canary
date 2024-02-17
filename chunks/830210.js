"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  },
  getChannelVideoLimit: function() {
    return s
  }
});
var a = n("446674"),
  l = n("305961"),
  i = n("316133"),
  u = n("49111");

function d(e) {
  return (0, a.useStateFromStoresObject)([i.default, l.default], () => {
    let t = i.default.countVoiceStatesForChannel(e.id),
      n = l.default.getGuild(e.getGuildId());
    return null == n ? {
      reachedLimit: !1,
      limit: -1
    } : e.type === u.ChannelTypes.GUILD_STAGE_VOICE ? {
      reachedLimit: t > n.maxStageVideoChannelUsers,
      limit: n.maxStageVideoChannelUsers
    } : {
      reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
      limit: n.maxVideoChannelUsers
    }
  }, [e])
}

function s(e) {
  let t = i.default.countVoiceStatesForChannel(e.id),
    n = l.default.getGuild(e.getGuildId());
  return null == n ? {
    reachedLimit: !1,
    limit: -1
  } : e.type === u.ChannelTypes.GUILD_STAGE_VOICE ? {
    reachedLimit: t > n.maxStageVideoChannelUsers,
    limit: n.maxStageVideoChannelUsers
  } : {
    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
    limit: n.maxVideoChannelUsers
  }
}