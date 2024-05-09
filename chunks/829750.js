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
  a = n("430824"),
  l = n("938475"),
  r = n("981631");

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

function o(e) {
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