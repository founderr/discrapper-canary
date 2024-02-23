"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("803182"),
  r = n("308503"),
  a = n("49111");

function s(e) {
  let t = (0, i.matchPath)(null != e ? e : "", {
    path: a.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
  });
  if (null != t) {
    let {
      guildId: e,
      channelId: n
    } = t.params;
    return {
      guildId: e === a.ME ? null : e,
      channelId: null != n ? n : null
    }
  }
  let n = (0, i.matchPath)(null != e ? e : "", {
    path: a.Routes.GUILD_BOOSTING_MARKETING(":guildId")
  });
  return null != n ? {
    guildId: n.params.guildId,
    channelId: null
  } : {
    guildId: null,
    channelId: null
  }
}
var l = (0, r.default)(e => ({
  path: null,
  basePath: "/",
  guildId: null,
  channelId: null,
  updatePath(t) {
    let {
      guildId: n,
      channelId: i
    } = s(t);
    e({
      path: t,
      guildId: n,
      channelId: i
    })
  },
  resetPath(t) {
    let {
      guildId: n,
      channelId: i
    } = s(t);
    e({
      path: null,
      guildId: n,
      channelId: i,
      basePath: t
    })
  }
}))