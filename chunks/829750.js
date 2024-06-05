"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  },
  getChannelVideoLimit: function() {
    return o
  }
});
var i = n("442837"),
  l = n("430824"),
  a = n("938475"),
  r = n("981631");

function u(e) {
  return (0, i.useStateFromStoresObject)([a.default, l.default], () => {
    let t = a.default.countVoiceStatesForChannel(e.id),
      n = l.default.getGuild(e.getGuildId());
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

function o(e) {
  let t = a.default.countVoiceStatesForChannel(e.id),
    n = l.default.getGuild(e.getGuildId());
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