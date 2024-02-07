"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  },
  getChannelVideoLimit: function() {
    return s
  }
});
var i = n("446674"),
  a = n("305961"),
  l = n("316133"),
  r = n("49111");

function u(e) {
  return (0, i.useStateFromStoresObject)([l.default, a.default], () => {
    let t = l.default.countVoiceStatesForChannel(e.id),
      n = a.default.getGuild(e.getGuildId());
    return null == n ? {
      reachedLimit: !1,
      limit: -1
    } : e.type === r.ChannelTypes.GUILD_STAGE_VOICE ? {
      reachedLimit: t > n.maxStageVideoChannelUsers,
      limit: n.maxStageVideoChannelUsers
    } : {
      reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
      limit: n.maxVideoChannelUsers
    }
  }, [e])
}

function s(e) {
  let t = l.default.countVoiceStatesForChannel(e.id),
    n = a.default.getGuild(e.getGuildId());
  return null == n ? {
    reachedLimit: !1,
    limit: -1
  } : e.type === r.ChannelTypes.GUILD_STAGE_VOICE ? {
    reachedLimit: t > n.maxStageVideoChannelUsers,
    limit: n.maxStageVideoChannelUsers
  } : {
    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
    limit: n.maxVideoChannelUsers
  }
}