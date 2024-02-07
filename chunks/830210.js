"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  },
  getChannelVideoLimit: function() {
    return r
  }
});
var a = n("446674"),
  i = n("305961"),
  l = n("316133"),
  u = n("49111");

function s(e) {
  return (0, a.useStateFromStoresObject)([l.default, i.default], () => {
    let t = l.default.countVoiceStatesForChannel(e.id),
      n = i.default.getGuild(e.getGuildId());
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

function r(e) {
  let t = l.default.countVoiceStatesForChannel(e.id),
    n = i.default.getGuild(e.getGuildId());
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