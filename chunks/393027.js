"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("803182"),
  a = n("308503"),
  l = n("49111");

function r(e) {
  let t = (0, i.matchPath)(null != e ? e : "", {
    path: l.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
  });
  if (null != t) {
    let {
      guildId: e,
      channelId: n
    } = t.params;
    return {
      guildId: e === l.ME ? null : e,
      channelId: null != n ? n : null
    }
  }
  let n = (0, i.matchPath)(null != e ? e : "", {
    path: l.Routes.GUILD_BOOSTING_MARKETING(":guildId")
  });
  return null != n ? {
    guildId: n.params.guildId,
    channelId: null
  } : {
    guildId: null,
    channelId: null
  }
}
var u = (0, a.default)(e => ({
  path: null,
  basePath: "/",
  guildId: null,
  channelId: null,
  updatePath(t) {
    let {
      guildId: n,
      channelId: i
    } = r(t);
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
    } = r(t);
    e({
      path: null,
      guildId: n,
      channelId: i,
      basePath: t
    })
  }
}))