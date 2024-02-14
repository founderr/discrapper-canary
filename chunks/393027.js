"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("803182"),
  i = n("308503"),
  a = n("49111");

function l(e) {
  let t = (0, s.matchPath)(null != e ? e : "", {
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
  let n = (0, s.matchPath)(null != e ? e : "", {
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
var r = (0, i.default)(e => ({
  path: null,
  basePath: "/",
  guildId: null,
  channelId: null,
  updatePath(t) {
    let {
      guildId: n,
      channelId: s
    } = l(t);
    e({
      path: t,
      guildId: n,
      channelId: s
    })
  },
  resetPath(t) {
    let {
      guildId: n,
      channelId: s
    } = l(t);
    e({
      path: null,
      guildId: n,
      channelId: s,
      basePath: t
    })
  }
}))