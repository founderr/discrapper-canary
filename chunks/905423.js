var i = t(266067),
  l = t(652874),
  a = t(981631);

function u(n) {
  let e = (0, i.LX)(null != n ? n : "", {
    path: a.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")
  });
  if (null != e) {
    let {
      guildId: n,
      channelId: t
    } = e.params;
    return {
      guildId: n === a.ME ? null : n,
      channelId: null != t ? t : null
    }
  }
  let t = (0, i.LX)(null != n ? n : "", {
    path: a.Z5c.GUILD_BOOSTING_MARKETING(":guildId")
  });
  return null != t ? {
    guildId: t.params.guildId,
    channelId: null
  } : {
    guildId: null,
    channelId: null
  }
}
e.Z = (0, l.Z)(n => ({
  path: null,
  basePath: "/",
  guildId: null,
  channelId: null,
  updatePath(e) {
    let {
      guildId: t,
      channelId: i
    } = u(e);
    n({
      path: e,
      guildId: t,
      channelId: i
    })
  },
  resetPath(e) {
    let {
      guildId: t,
      channelId: i
    } = u(e);
    n({
      path: null,
      guildId: t,
      channelId: i,
      basePath: e
    })
  }
}))